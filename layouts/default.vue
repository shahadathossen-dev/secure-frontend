<template>
  <div>
    <!-- Preloader -->
    <!-- <pre-loader></pre-loader> -->
    <!-- End Preloader -->
    <!-- OffCanvas Menu -->
    <off-canvas></off-canvas>
    <!-- End OffCanvas Menu -->

    <!-- Header -->
    <the-header></the-header>
    <!-- End Header -->

    <!-- Main -->
    <Nuxt />
    <!-- End Main -->

    <!-- Footer -->
    <the-footer></the-footer>
    <!-- End Footer -->

    <!-- Back to Top Button -->
    <back-to-top></back-to-top>
    <!-- End Back to Top Button -->
  </div>
</template>

<script>
export default {
  mounted() {
    const theme = document.createElement('script')
    theme.src = '/assets/js/main.js'
    document.body.appendChild(theme)
  }
}
</script>
