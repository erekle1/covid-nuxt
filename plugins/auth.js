export default ({$auth, app}) => {
  $auth.onRedirect((to, from) => {
    return app.localePath(to)
  })
}
