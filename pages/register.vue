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
              class="neee-validation"
              @submit.prevent="register"
              @keydown.enter="register"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">Please, register...</div>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      class="form-control"
                      :class="validationErrors.name ? 'is-invalid' : 'is-valid'"
                      type="text"
                      v-model="form.name"
                      id="name"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ validationErrors.name && validationErrors.name[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="country">Country</label>
                    <select
                      id="country"
                      class="form-control"
                      :class="
                        validationErrors.country ? 'is-invalid' : 'is-valid'
                      "
                      v-model="form.country"
                      required
                    >
                      <option v-for="country in countries" :value="country.name" :key="country.code">
                        {{ country.name }}
                      </option>
                    </select>
                    <div class="invalid-feedback">
                      {{
                        validationErrors.country && validationErrors.country[0]
                      }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      class="form-control"
                      :class="
                        validationErrors.email ? 'is-invalid' : 'is-valid'
                      "
                      type="text"
                      v-model="form.email"
                      id="email"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ validationErrors.email && validationErrors.email[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      class="form-control"
                      :class="
                        validationErrors.password ? 'is-invalid' : 'is-valid'
                      "
                      type="password"
                      v-model="form.password"
                      id="password"
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
                    <label for="password_confirmation">Confirm Password</label>
                    <input
                      class="form-control"
                      :class="
                        validationErrors.password_confirmation
                          ? 'is-invalid'
                          : 'is-valid'
                      "
                      type="password"
                      v-model="form.password_confirmation"
                      id="password_confirmation"
                      required
                    />
                    <div class="invalid-feedback">
                      {{
                        validationErrors.password_confirmation &&
                        validationErrors.password_confirmation[0]
                      }}
                    </div>
                  </div>
                  <div class="form-group pl-4">
                    <input
                      class="form-check-input"
                      :class="
                        validationErrors.terms ? 'is-invalid' : 'is-valid'
                      "
                      type="checkbox"
                      v-model="form.terms"
                      id="terms"
                      required
                    />
                    <label for="terms">I accept terms & condions</label>
                    <div class="invalid-feedback">
                      {{ validationErrors.terms && validationErrors.terms[0] }}
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
                  <input class="btn btn-primary" type="submit" value="Submit" />
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
import countries from '~/countries'
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      form: {
        name: 'Shahadat Hossen',
        country: '',
        email: 'shobuj@bansberrysg.com',
        password: 'sdkShobuj91',
        password_confirmation: 'sdkShobuj91',
        terms: true,
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
  computed: {
    countries() {
      return countries
    }
  },
  methods: {
    async register() {
      try {
        const token = await this.$recaptcha.execute('register')
        this.form.recaptcha = token
        await this.$axios({
          url: 'sanctum/csrf-cookie',
          baseURL: this.$config.apiBaseUrl,
        })
        await this.$axios({
          url: '/register',
          baseURL: this.$config.apiBaseUrl,
          method: 'post',
          data: this.form,
        })
        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
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
