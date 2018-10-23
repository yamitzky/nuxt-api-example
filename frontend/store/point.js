export const state = () => ({
  point: 0
})

export const mutations = {
  set (state, { point }) {
    state.point = point
  }
}

export const actions = {
  async load ({ commit }) {
    const { point } = await this.$axios.$get('/point')
    commit('set', { point })
  }
}
