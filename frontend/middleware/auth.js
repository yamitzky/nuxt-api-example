export default function ({ store, route, redirect, app }) {
  // ユーザーが認証されていないとき
  if (!store.state.auth.username) {
    app.$cookies.set('redirectTo', route.fullPath)
    return redirect('/login')
  }
}
