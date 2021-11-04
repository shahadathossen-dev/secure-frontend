export default function ({ app, store, redirect }) {
  if (app.$auth.loggedIn && app.$auth?.user.email_verified_at) {
    return app.$auth.redirect('home')
  }
}
