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
            <!-- Login form -->
            <form
              class="needs-validation"
              @submit.prevent="login"
              @keydown.enter="login"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">Please, login...</div>
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
                    <label for="password">Password</label>
                    <input
                      id="password"
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
                </div>
                <div class="card-footer d-flex justify-between">
                  <nuxt-link
                    :to="localePath('/forgot-password')"
                    class="card-link"
                  >
                    {{ $t('buttons.forgotPassword') }}
                  </nuxt-link>
                  <button class="btn btn-primary" type="submit">
                    {{ $t('buttons.login') }}
                  </button>
                </div>
              </div>
            </form>
            <!-- End Login form -->
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
        email: 'shobuj@bansberrysg.com',
        password: 'sdkShobuj91',
        recaptcha: '',
      },
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async login() {
      try {
        const recaptcha = await this.$recaptcha.execute('login')
        this.form.recaptcha = recaptcha
        await this.$auth.loginWith('laravelSanctum', {
          data: this.form,
        })
      } catch (error) {
        this.$toast.error(
          `${error.response.status} ${error.response.data.message}`
        )
      }
    },
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
}
</script>
