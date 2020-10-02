<template>
  <div class="hello">
    <div>
      Search for <input v-model="searchInput" />
      <div>
        <p>Number of events: {{ results }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import eventApi from "@/api/event.js";

export default {
  setup() {
    const searchInput = ref("");
    const results = ref(0);
    watchEffect(() => {
      results.value = eventApi.getEventCount(searchInput.value);
    });

    return { searchInput, results };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
