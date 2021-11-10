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
          <div class="col-md-6">
            <div class="container">
              <template v-if="verified">
                <div class="card">
                  <div class="card-header">
                    <div class="card-subtitle">
                      <p>Verify email</p>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="text-center text-success">Your email is already verified</p>
                  </div>
                  <div class="card-footer">
                    <nuxt-link :to="localePath('/')" class="card-link">
                      {{ $t('buttons.home') }}
                    </nuxt-link>
                  </div>
                </div>
              </template>
              <template v-else>
                <form
                  class="needs-validation"
                  @submit.prevent="sendEmail"
                  @keydown.enter="sendEmail"
                >
                  <div class="card">
                    <div class="card-header">
                      <div class="card-subtitle">
                        <p>Verify email</p>
                      </div>
                    </div>
                    <div class="card-body">
                      <p>
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                      </p>
                      <p class="text-success" v-if="message">{{ message }}</p>
                    </div>
                    <div class="card-footer d-flex justify-between">
                      <button @click.prevent="$auth.logout()">
                        {{ $t('buttons.logout') }}
                      </button>

                      <button class="btn btn-primary" type="submit">
                        {{ $t('buttons.verify') }}
                      </button>
                    </div>
                  </div>
                </form>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  middleware: ['auth', 'unverified'],
  async asyncData({ $auth }) {
    return {
      verified: $auth?.user.emailVerifiedAt,
    }
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    async sendEmail() {
      try {
        const response = await this.$axios({
          url: '/email/verification-notification',
          baseURL: this.$config.apiBaseUrl,
          method: 'POST',
        })
        this.message = 'A new verification link has been sent to the email address you provided during registration.'
      } catch (error) {
        this.$toast.error(
          `${error.response.status} ${error.response.data.message}`
        )
      }
    },
  },
}
</script>
