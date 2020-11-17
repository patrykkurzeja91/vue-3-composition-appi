<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RandomNumber />
    <RandomNumber :min="parseInt(200)" :max="parseInt(300)" />
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
