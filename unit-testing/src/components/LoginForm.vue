<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-input" type="text" v-model="name" />
    <br />
    <button data-testid="submit-button" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
}
</script>
