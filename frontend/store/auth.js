export const state = () => ({
  username: '',
  redirectTo: '/'
})

export const mutations = {
  setRedirectTo (state, { redirectTo }) {
    state.redirectTo = redirectTo
  },
  setUserName (state, { username }) {
    state.username = username
  }
}

export const actions = {
  async login ({ commit }, { username, password }) {
    await this.$axios.$post('/login', { username, password })
    commit('setUserName', { username })
  },
  async logout ({ commit }) {
    await this.$axios.$post('/logout')
    commit('setUserName', { username: '' })
  }
}
