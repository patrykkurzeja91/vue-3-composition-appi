<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase capacity</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const capacity = ref(3)

    function increaseCapacity() {
      capacity.value++
    }

    return { capacity, increaseCapacity };
  },
};
</script>

<style lang="css" scoped></style>
