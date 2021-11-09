<template>
  <div class="form-group">
    <label class="typo__label" :for="getName">{{ label }}</label>
    <multiselect
      :id="getName"
      class="form-control"
      :class="error.length ? 'is-invalid' : ''"
      :placeholder="placeholder"
      :label="labelProp"
      :track-by="track"
      :options="options"
      :option-height="optionHeight"
      :value="value"
      v-model="selectedValue"
      @input="handleInput"
      @select="$emit('select', selectedValue)"
    >
      <template slot="singleLabel" slot-scope="props">
        <div class="option__image text-5xl">
          {{ props.option.emoji }}
        </div>
        <div class="option__desc">
          <div class="option__title">
            {{ props.option.name }}
          </div>
          <div class="option__small">
            {{ props.option.zoneName }}
          </div>
        </div>
      </template>
      <template slot="option" slot-scope="props">
        <div class="option__image text-5xl" :alt="props.option.code">
          {{ props.option.emoji }}
        </div>
        <div class="option__desc">
          <div class="option__title">
            {{ props.option.name }}
          </div>
          <div class="option__small">
            {{ props.option.zoneName }}
          </div>
        </div>
      </template>
    </multiselect>
    <div v-if="error" class="invalid-feedback">
      {{ error[0] }}
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'select-country',
  components: {
    Multiselect,
  },
  props: {
    // Select op
    options: {
      type: [Array, Object],
      required: true,
    },

    name: {
      type: String,
      require: true,
    },

    // Input Label
    label: {
      type: String,
      required: false,
    },

    // Label Prop
    labelProp: {
      type: String,
      required: false,
    },

    // Return value for v-model
    track: {
      type: String,
      default: 'id',
    },

    // Select placeholder
    placeholder: {
      type: String,
      default: 'Select One',
    },

    // Default selected value
    value: {
      default: '',
    },

    // Disabled
    disabled: {
      type: Boolean,
      default: false,
    },
    loader: { type: Boolean, default: false },

    optionHeight: {
      type: Number,
    },

    // Validation error
    error: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedValue: '',
    }
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
  methods: {
    handleInput(value) {
      if (this.track === "self") {
        return this.$emit("input", value);
      }
      if (value[this.track]) {
        this.$emit("input", value[this.track]);
      }
    },
    setSelectedValue() {
      if (this.track == "self") {
        this.selectedValue = this.options.find((opt) => opt.id == this.value.id);
      } else {
        this.selectedValue = this.options.find(
          (opt) => opt[this.track] == this.value
        );
      }
    },
  },
  mounted() {
    this.setSelectedValue();
  },
  watch: {
    options() {
      this.setSelectedValue();
    },
    value() {
      this.setSelectedValue();
    },
  },
}
</script>

<style src="../../static/assets/css/multiselect.css"></style>
