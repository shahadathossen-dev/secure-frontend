export default function ({ app, store, redirect }) {
  console.log(app.$auth?.user.emailVerifiedAt);
  if (app.$auth.loggedIn && app.$auth?.user.emailVerifiedAt) {
    return app.$auth.redirect('home')
  }
}
