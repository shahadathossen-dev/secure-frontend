<template>
  <main>
    <div
      class="page-title-wrap"
      data-bg-img="assets/img/media/page-title-bg.png"
    >
      <!-- Grid Animation -->
      <grid-animation></grid-animation>
      <!-- End Grid Animation -->

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <form
              class="needs-validation"
              @submit.prevent="resetPassword"
              @keydown.enter="resetPassword"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">
                    <p>Please, reset your password</p>
                  </div>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      class="form-control"
                      :class="
                        validationErrors.email ? 'is-invalid' : 'is-valid'
                      "
                      type="email"
                      v-model="form.email"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ validationErrors.email && validationErrors.email[0] }}
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="passowrd">New Password</label>
                    <input
                      id="passowrd"
                      class="form-control"
                      :class="
                        validationErrors.password ? 'is-invalid' : 'is-valid'
                      "
                      type="password"
                      v-model="form.password"
                      required
                    />
                    <div class="invalid-feedback">
                      {{
                        validationErrors.password &&
                        validationErrors.password[0]
                      }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password_confirmation">Confir Password</label>
                    <input
                      id="password_confirmation"
                      class="form-control"
                      :class="
                        validationErrors.password_confirmation
                          ? 'is-invalid'
                          : 'is-valid'
                      "
                      type="password"
                      v-model="form.password_confirmation"
                      required
                    />
                    <div class="invalid-feedback">
                      {{
                        validationErrors.password_confirmation &&
                        validationErrors.password_confirmation[0]
                      }}
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <input
                    class="btn btn-primary float-right"
                    type="submit"
                    :value="$t('buttons.reset')"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        token: '',
      },
      message: '',
    }
  },
  async mounted() {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },
  methods: {
    async resetPassword() {
      try {
        await this.$axios({
          url: '/sanctum/csrf-cookie',
          baseURL: this.$config.apiBaseUrl,
        })
        const response = await this.$axios({
          url: '/reset-password',
          baseURL: this.$config.apiBaseUrl,
          method: 'POST',
          data: this.form,
        })
        this.$toast.success(response.data.message)
        // this.message = response.data.message
        this.$auth.redirect('login')
      } catch (error) {
        this.$toast.error(
          `${error.response.status} ${error.response.data.message}`
        )
      }
    },
  },
}
</script>
