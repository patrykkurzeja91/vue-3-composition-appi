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
import useEventSpace from "@/use/event-space.js";
export default {
  async setup() {
    // return useEventSpace();
    // OR
    // thi is best practice because You don't hide arguments You are passing
    const { capacity, attending, increaseCapacity, spacesLeft } = await useEventSpace()

    return { capacity, attending, increaseCapacity, spacesLeft }
  },
};
</script>

<style lang="css" scoped></style>
