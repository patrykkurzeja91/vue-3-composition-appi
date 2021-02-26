<template>
  <label v-if="label">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
    >
    <span>
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
