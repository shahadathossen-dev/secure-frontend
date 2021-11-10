<template>
  <loading-card :loading="$fetchState.pending || cardLoading">
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
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">
                    <p>{{ $t('general.dashboard') }}</p>
                  </div>
                </div>
                <div class="card-body">
                  <div id="stripe-element"></div>
                </div>
                <div class="card-footer">
                  <button @click="checkout">
                    {{ 'Checkout' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </loading-card>
</template>

<script>
export default {
  middleware: ['auth', 'verified'],
  transitions: 'fade',
  data() {
    return {
      stripe: '',
      elements: '',
      clientSecret: '',
      cardLoading: true
    }
  },
  methods: {
    async checkout() {
      const self = this
      try {
        await this.$stripe.confirmPayment({
          elements: this.elements,
          description: 'Package subscription',
          confirmParams: {
            return_url: self.localePath({path: `/dashboard?payment_status=success`}),
          },
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  // fetchOnServer: false,
  async fetch() {
    const { data } = await this.$axios.post('stripe/checkout')
    this.clientSecret = data.clientSecret
    if (this.$stripe) {
      const elements = await this.$stripe.elements({
        clientSecret: data.clientSecret,
      })
      this.elements = elements
      const card = await elements.create('payment')
      // Add an instance of the card Element into the `card-element` <div>
      card.mount('#stripe-element')
      card.on('ready', event => this.cardLoading = false)
    }
  },
  beforeDestroy() {
    this.elements?.getElement('payment').destroy()
  }
}
</script>
