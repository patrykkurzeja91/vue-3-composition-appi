<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MessageContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import MessageContainer from '@/components/MessageContainer.vue'

export default {
  name: 'MessageContainerView',
  components: {
    MessageContainer
  }
}
</script>
