<template>
  <label class="mt-2" for="confirmation">
    <span v-if="polish">Prosimy o potwierdzenie obecności</span>
    <span v-else>Please confirm your attendance</span>
  </label>

  <select
    id="confirmation"
    class="w-52 mb-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
    name="confirmation"
  >
    <option value="">Select an option</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const polish = inject("language");
    return { polish };
  },
};
</script>
