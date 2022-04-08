<template>
  <p v-if="polish">Osoba Towarzysząca?</p>
  <p v-else>Plus One?</p>
  <div class="flex justify-center gap-8 pb-5">
    <label class="inline-flex items-center">
      <input type="radio" name="AdditionalGuest" value="Yes" class="h-5 w-5" />
      <span class="ml-2" v-if="polish"> Tak </span>
      <span class="ml-2" v-else> Yes </span>
    </label>
    <label class="inline-flex items-center">
      <input type="radio" name="AdditionalGuest" value="No" class="h-5 w-5" />
      <span class="ml-2" v-if="polish"> Nie </span>
      <span class="ml-2" v-else> No </span>
    </label>
  </div>
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
