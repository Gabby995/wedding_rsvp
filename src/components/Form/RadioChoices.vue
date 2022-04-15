<template>
  <p v-if="polish">Osoba Towarzysząca?</p>
  <p v-else>Plus One?</p>
  <div class="flex justify-center gap-8 pb-5">
    <label class="inline-flex items-center">
      <input
        type="radio"
        name="AdditionalGuest"
        value="yes"
        class="h-5 w-5"
        v-model="plus_one"
        @change="updateValue"
      />
      <span class="ml-2" v-if="polish"> Tak </span>
      <span class="ml-2" v-else> Yes </span>
    </label>
    <label class="inline-flex items-center">
      <input
        type="radio"
        name="AdditionalGuest"
        value="no"
        class="h-5 w-5"
        v-model="plus_one"
        @change="updateValue"
      />
      <span class="ml-2" v-if="polish"> Nie </span>
      <span class="ml-2" v-else> No </span>
    </label>
  </div>
</template>

<script>
import { ref, inject } from "vue";
export default {
  emits: ["update-plus-one"],
  setup(props, context) {
    let plus_one = ref("no");
    const polish = inject("language");
    const updateValue = () => {
      context.emit("update-plus-one", plus_one.value);
    };
    return { polish, updateValue, plus_one };
  },
};
</script>
