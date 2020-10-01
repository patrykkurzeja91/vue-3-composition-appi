import { ref, computed } from "vue";
export default function useEventSpace () {
  const capacity = ref(3);
  const attending = ref(["Tim", "Bob", "John"]);

  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });

  function increaseCapacity() {
    capacity.value++;
  }

  return { capacity, attending, increaseCapacity, spacesLeft };
}
