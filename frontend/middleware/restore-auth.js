export default function ({ store, app, req, isServer }) {
  if (isServer && !req) return

  console.log(req)
  if (!req && typeof document !== 'undefined') console.log(document.cookie)
  const username = app.$cookies.get('username')
  if (username) {
    store.commit('auth/setUserName', { username })
  }
}
