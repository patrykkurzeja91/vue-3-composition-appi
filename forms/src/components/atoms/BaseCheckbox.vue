<template lang="html">
  <label
    v-if="label"
    class="checkbox-label"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      class="field checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <span class="checkbox-square" />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
/* :root {
  --checkbox-color: grey;
  --checkbox-square-color: white;
}
.checkbox-label {
  position: relative;
}
.checkbox-square {
  width: 16px;
  height: 16px;
  border: 1px solid var(--checkbox-color);
  display: inline-block;
  border-radius: 50%;
  transition: all linear 0.3s;
}
.checkbox-square::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 6px;
  border-bottom: 2px solid var(--checkbox-square-color);
  border-right: 2px solid var(--checkbox-square-color);
  height: 9px;
  width: 4px;
  transform: rotate(45deg);
  visibility: hidden;
}

input {
  display: none;
}
input:checked ~ .checkbox-square {
  background: var(--checkbox-color);
}
input:checked ~ .checkbox-square::after {
  visibility: visible;
} */

.checkbox-label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}
/* Hide the browser's default checkbox */
.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom checkbox */
.checkbox-square {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: #eee;
  border: 1px solid #ccc;
   transition: all .2s ease;
}
/* On mouse-over, add a grey background color */
.checkbox-label:hover input ~ .checkbox-square {
  background-color: #ccc;
}
/* When the checkbox is checked, add a blue background */
.checkbox-label input:checked ~ .checkbox-square {
  background-color: #1CD4A7;
}
/* Create the checkbox-square/indicator (hidden when not checked) */
.checkbox-square:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkbox-square when checked */
.checkbox-label input:checked ~ .checkbox-square:after {
  display: block;
}
/* Style the checkbox-square/indicator */
.checkbox-label .checkbox-square:after {
  left: 50%;
  top: 50%;
  width: 3px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg) translate(-50%, -50%);
  transform-origin: 50% 0;
}

</style>
