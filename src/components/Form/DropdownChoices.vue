<template>
  <label class="mt-2" for="confirmation">
    <span v-if="polish">Prosimy o potwierdzenie obecności</span>
    <span v-else>Please confirm your attendance</span>
  </label>

  <select
    v-if="polish"
    id="confirmation"
    class="w-52 mb-2 py-2 px-3 border bg-white rounded-md shadow-sm"
    :class="error ? 'border-red-500' : 'border-gray-300'"
    name="confirmation"
    :value="modelValue"
    @input="updateValue"
  >
    <option disabled selected value="">Wybierz opcje</option>
    <option value="Yes">Będę / Będziemy! :)</option>
    <option value="No">
      Nie <span v-if="type === 'Single'">dam</span>
      <span v-else>damy</span> rady :(
    </option>
  </select>
  <select
    v-else
    id="confirmation"
    class="w-52 mb-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm"
    name="confirmation"
    :value="modelValue"
    @input="updateValue"
  >
    <option disabled selected value="">Select an option</option>
    <option value="Yes">Will be there! :)</option>
    <option value="No">Can't make it :(</option>
  </select>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    modelValue: {},
    error: {
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const polish = inject("language");
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };
    return { polish, updateValue };
  },
};
</script>
