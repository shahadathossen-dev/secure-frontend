<template>
  <loading-card :loading="$fetchState.pending">
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
            <div class="col-md-8">
              <form class="neee-validation" @submit.prevent="register">
                <div class="card">
                  <div class="card-header">
                    <div class="card-subtitle">Please, register...</div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <input-control
                          label="Name"
                          type="text"
                          v-model="form.name"
                          :error="validationErrors.name"
                          required
                          autofocus
                        >
                        </input-control>
                      </div>
                      <div class="col-md-6">
                        <input-control
                          label="Email"
                          type="email"
                          v-model="form.email"
                          :error="validationErrors.email"
                          required
                        >
                        </input-control>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <select-country
                          label="Name"
                          v-model="form.country"
                          :error="validationErrors.name"
                          placeholder="Select your country"
                          label-prop="name"
                          track="id"
                          @input="handleInput"
                          :value="form.country"
                          :options="countries"
                          :option-height="80"
                        >
                        </select-country>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <input-control
                          label="Password"
                          type="password"
                          v-model="form.password"
                          :error="validationErrors.password"
                          required
                        >
                        </input-control>
                      </div>
                      <div class="col-md-6">
                        <input-control
                          label="Confirm Password"
                          type="password"
                          v-model="form.password_confirmation"
                          :error="validationErrors.password_confirmation"
                          required
                        >
                        </input-control>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group pl-4">
                          <input
                            class="form-check-input"
                            :class="validationErrors.terms ? 'is-invalid' : ''"
                            type="checkbox"
                            v-model="form.terms"
                            id="terms"
                            required
                          />
                          <label for="terms">I accept terms & condions</label>
                          <div
                            v-if="validationErrors.terms"
                            class="invalid-feedback"
                          >
                            {{ validationErrors.terms[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer d-flex justify-between">
                    <p>
                      Already have an account?
                      <nuxt-link :to="localePath('/login')" class="card-link">
                        {{ $t('buttons.login') }}
                      </nuxt-link>
                    </p>
                    <input
                      class="btn btn-primary"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </loading-card>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      form: {
        name: 'Shahadat Hossen',
        country: 3,
        email: 'shobuj@bansberrysg.com',
        password: 'sdkShobuj91',
        password_confirmation: 'sdkShobuj91',
        terms: true,
        recaptcha: '',
      },
      countries: [],
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e)
    }
  },
  async fetch() {
    const { data } = await this.$axios('countries')
    this.countries = data
  },
  methods: {
    handleInput($event) {
      console.log($event)
    },
    async register() {
      try {
        // Get recaptcha token
        const recaptcha = await this.$recaptcha.execute('register')
        this.form.recaptcha = recaptcha

        // Get CSRF token
        await this.$axios({
          url: 'sanctum/csrf-cookie',
          baseURL: this.$config.apiBaseUrl,
        })

        // Registers user
        await this.$axios({
          url: '/register',
          baseURL: this.$config.apiBaseUrl,
          method: 'post',
          data: this.form,
        })

        // Logs in user
        await this.$auth.setUserToken(recaptcha)
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
