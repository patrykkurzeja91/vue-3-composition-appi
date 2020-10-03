<template>
  <!-- <HelloWorld /> -->
  <teleport to="#end-of-body" :disabled="!showComponent" v-if="showComponent">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    IS VISIBLE
  </teleport>
  <teleport to="#end-of-body" :disabled="!showComponent2" v-if="showComponent2">
    IS VISIBLE second component
  </teleport>
  <div v-if="error">uh no.. {{ error }}</div>
  <!-- it is noot working as supposed -->
  <Suspense v-else>
    <template #default>
      <div>
        <Counter />
        <Counter />
      </div>
    </template>
    <template #fallback>
      <div>LOADING...</div>
    </template>
  </Suspense>
  <button @click="isComponentShown()">
    Toggle component disability
  </button>
  <button @click="isComponentShown2()">
    Toggle component disability
  </button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onErrorCaptured } from "vue";

import Counter from "./components/Counter.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Counter,
  },
  setup() {
    const error = ref(null);
    const showComponent = ref(false);
    const showComponent2 = ref(false);

    function isComponentShown() {
      return showComponent.value = !showComponent.value;
    }

    function isComponentShown2() {
      return showComponent2.value = !showComponent2.value;
    }

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return { showComponent, showComponent2, isComponentShown, isComponentShown2 };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
