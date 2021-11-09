// export default function ({ app, store, redirect }) {
//   if (store.$auth.loggedIn && !store.$auth.user.verified) {
//     redirect(app.localePath("/verify/email"));
//   }
// }

export default function ({ app, store, redirect }) {
  if (app.$auth.loggedIn && app.$auth.user) {
    if (!app.$auth.user.emailVerifiedAt) {
      return app.$auth.redirect('unverified')
    }
  }
}
