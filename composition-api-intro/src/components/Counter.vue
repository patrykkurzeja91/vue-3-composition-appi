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
import { reactive, computed, toRefs } from "vue";
export default {
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ["Tim", "Bob", "John"],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      })

    })

    function increaseCapacity() {
      event.capacity++;
    }

    return { ...toRefs(event), increaseCapacity };
  },
};
</script>

<style lang="css" scoped></style>
