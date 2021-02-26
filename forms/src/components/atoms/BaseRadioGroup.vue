<template>
  <component
    :is="vertical ? 'div' : 'span'"
    v-for="option in options"
    :key="option.value"
    :class="{
      horizontal: !vertical
    }"
  >
    <BaseRadio
      :vertical="vertical"
      :value="option.value"
      :label="option.label"
      :name="name"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from './BaseRadio.vue'
export default {
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.horizontal {
  margin-right: 20px;
}
</style>
