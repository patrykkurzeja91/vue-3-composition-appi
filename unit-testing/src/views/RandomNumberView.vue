<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RandomNumber />
    <RandomNumber :min="200" :max="300" />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomNumber from '@/components/RandomNumber.vue'

export default {
  name: 'RandomNumberView',
  components: {
    RandomNumber
  }
}
</script>
