<template lang="html">
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category"
      />
      <!-- <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select> -->

      <h3>Name & describe your event</h3>

      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />

      <BaseInput
        v-model="event.description"
        label="Descriptioon"
        type="text"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
      >

      {{ event }}
      <h3>Are pets allowed?</h3>
      <div>
        <input
          v-model="event.pets"
          type="radio"
          :value="1"
          name="pets"
        >
        <label>Yes</label>
      </div>

      <div>
        <input
          v-model="event.pets"
          type="radio"
          :value="0"
          name="pets"
        >
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <!-- <input
          v-model="event.extras.catering"
          type="checkbox"
          class="field"
        >
        <label>Catering</label> -->
        <BaseCheckbox
          v-model="event.extras.catering"
          label="Catering"
        />
      </div>

      <div>
        <!-- <input
          v-model="event.extras.music"
          type="checkbox"
          class="field"
        >
        <label>Live music</label> -->
        <BaseCheckbox
          v-model="event.extras.music"
          label="Live music"
        />
      </div>

      <button
        class="button -fill-gradient"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/atoms/BaseInput'
import BaseSelect from '@/components/atoms/BaseSelect'
import BaseCheckbox from '@/components/atoms/BaseCheckbox'

export default {
  components: { BaseCheckbox, BaseInput, BaseSelect },
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}
</script>
