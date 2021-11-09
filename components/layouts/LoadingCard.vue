<template>
  <div class="relative" :class="{ 'overflow-hidden': loading }">
    <pre-loader :loading="loading"></pre-loader>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
