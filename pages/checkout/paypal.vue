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
            <div class="col-6">
              <div class="card">
                <div class="card-header">
                  <div class="card-subtitle">
                    <p>{{ $t('general.dashboard') }}</p>
                  </div>
                </div>
                <div class="card-body">
                  <div id="paypal-element"></div>
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
      cardLoading: true,
    }
  },
  methods: {
    async checkout() {
      try {
        await this.$stripe.confirmPayment({
          elements: this.elements,
          description: 'Package subscription',
          confirmParams: {
            return_url: `${this.$config.appUrl}/dashboard?payent_status=success`,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
  fetchOnServer: false,
  async fetch() {
    const { data } = await this.$axios.post('paypal/checkout')
    this.amount = data.amount
    const that = this
    if (this.$paypal) {
      this.$paypal
        .Buttons({
          onInit: (event) => (this.cardLoading = false),

          createOrder: async function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.

            return await actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: that.amount,
                  },
                },
              ],
            })
          },

          onApprove: async function (data, actions) {
            // This function captures the funds from the transaction.

            return await actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              // console.log(details)
              that.$router.push(that.localePath({path: `/dashboard?payment_status=success`}))
              // that.$toast.success(
              //   `Transaction completed by ${details.payer.name.given_name} ${details.payer.name.surname}`
              // )
            })
          },

          onCancel: function (data) {
            // Show a cancel page, or return to cart
          },

          onError: function (error) {
            console.log(error)
            // this.$toast.success(
            //   `Transaction completed by ${error.response.data.message}`
            // )
          },
        })
        .render('#paypal-element')
    }
  },
}
</script>
