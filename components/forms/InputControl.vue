<template>
  <div class="form-group">
    <label :for="getName">
      {{ label }}
    </label>
    <input
      :id="getName"
      :ref="getName"
      class="form-control"
      :type="type"
      v-bind="$attrs"
      v-on:input="$emit('input', $event.target.value)"
      :class="error.length ? 'is-invalid' : ''"
    />
    <div v-if="error" class="invalid-feedback">
      {{ error[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'input-control',
  inheritAttrs: false,
  props: {
    error: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: 'text',
      validator: (val) =>
        val == 'text' ||
        val == 'number' ||
        val == 'password' ||
        val == 'tel' ||
        val == 'email',
    },
  },
  computed: {
    getName() {
      return this.$attrs.name
        ? this.$attrs.name
        : this.label
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .toLowerCase()
    },
  },
  mounted() {},
  methods: {},
}
</script>
