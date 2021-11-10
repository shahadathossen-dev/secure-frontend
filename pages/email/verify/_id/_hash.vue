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
            <div class="card">
              <div class="card-header">
                <div class="card-subtitle">
                  <p>Verify email</p>
                </div>
              </div>
              <div class="card-body">
                <p class="text-center text-success">{{ message }}</p>
              </div>
              <div class="card-footer d-flex justify-between">
                <nuxt-link :to="localePath('/')">
                  {{ $t('buttons.home') }}
                </nuxt-link>
                <nuxt-link :to="localePath('/dashboard')">
                  {{ $t('general.dashboard') }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  middleware: ['auth'],
  async fetch() {
    try {
      const { status } = await this.$axios({
        url: this.$route.fullPath,
        baseURL: this.$config.apiBaseUrl,
      })
      this.message =
        status === 202
          ? 'Success! Your email is verified.'
          : status === 204
          ? 'Your email is already verified.'
          : ''
    } catch (error) {
      this.message = 'Oops! Something went wrong.'
      // this.$toast.error(
      //   `${error.response.status} ${error.response.data.message}`
      // )
    }
  },
  fetchOnServer: false,
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    // this.verify()
  },
  methods: {
    async verify() {
      try {
        const { status } = await this.$axios({
          url: this.$route.fullPath,
          baseURL: this.$config.apiBaseUrl,
        })
        this.message =
          status === 202
            ? 'Success! Your email is verified.'
            : status === 204
            ? 'Your email is already verified.'
            : ''
      } catch (error) {
        this.message = 'Oops! Something went wrong.'
        this.$toast.error(
          `${error.response.status} ${error.response.data.message}`
        )
      }
    },
  },
}
</script>
