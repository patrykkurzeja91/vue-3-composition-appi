<template>
  <div>
    <p>Spaces left {{ spacesLeft }} out of apacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase capacity</button>

    <h2>ATTENDING</h2>
    <ul>
      <li v-for="(name, i) in attending" :key="i">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "John"]);

    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    function increaseCapacity() {
      capacity.value++;
    }

    return { capacity, attending, increaseCapacity, spacesLeft };
  },
};
</script>

<style lang="css" scoped></style>
