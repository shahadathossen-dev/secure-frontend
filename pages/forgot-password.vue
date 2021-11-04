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
              @submit.prevent="sendEmail"
              @keydown.enter="login"
            >
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">
                    <p>Please, Give your email to reset</p>
                  </div>
                </div>
                <div class="card-body">
                  <p v-if="message" class="text-success">{{ message }}</p>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      class="form-control"
                      type="text"
                      v-model="form.email"
                      required
                    />
                    <div class="invalid-feedback">
                      {{ validationErrors.email && validationErrors.email[0] }}
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <input
                    class="btn btn-primary float-right"
                    type="submit"
                    :value="$t('buttons.sendResetLInk')"
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
        email: 'shobuj@bansberrysg.com',
        recaptcha: '',
      },
      message: '',
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
    async sendEmail() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.form.recaptcha = token
        await this.$axios({
          url: '/sanctum/csrf-cookie',
          baseURL: this.$config.apiBaseUrl,
        })
        const response = await this.$axios({
          url: '/forgot-password',
          baseURL: this.$config.apiBaseUrl,
          method: 'post',
          data: this.form,
        })
        this.message = response.data.message
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
