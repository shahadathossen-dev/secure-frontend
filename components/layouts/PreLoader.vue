<template>
  <transition name="preloader">
    <div class="preloader" v-if="loading">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  // data() {
  //   return {
  //     loading: true,
  //   }
  // },
  // /*
  //  ** programmatically start the loader so we force the page to take x2seconds to load
  //  */
  // mounted() {
  //   setTimeout(() => (this.loading = false), 2000)
  // },
}
</script>
