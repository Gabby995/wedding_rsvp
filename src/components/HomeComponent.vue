<template>
  <div
    class="flex flex-col justify-center m-auto gap-y-5 max-w-xl rounded-xl px-2 pt-10"
  >
    <slot></slot>
    <h1 v-if="language">Witam</h1>
    <h1 v-else>Welcome</h1>
    <form
      class="w-1/2 mx-auto flex flex-col gap-y-5 md:text-lg"
      @submit.prevent="submitForm"
    >
      <div>
        <label for="Guest-Name" class="text-green font-semibold">
          <span v-if="language">Nazwisko z zaprosznia</span>
          <span v-else>Surname on invitation</span>
        </label>
        <IconInput
          forLabel="Guest-Name"
          icon="person"
          :placeholder="placeholderLogic"
          v-model.trim="state.user.surname"
          :error="v$.user.surname.$error ? true : false"
        />
      </div>
      <div>
        <label for="Guest-Pin" class="text-green font-semibold">
          <span v-if="language">Kod pin z zaproszenia</span>
          <span v-else>Code pin from your invitation</span>
        </label>
        <IconInput
          forLabel="Guest-Pin"
          icon="pin"
          placeholder="Pin"
          v-model.number="state.user.pin"
          :error="v$.user.pin.$error ? true : false"
        />
      </div>
      <BaseButton v-if="!isLoading" />
      <LoadingButton v-if="isLoading" />
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import IconInput from "@/components/Form/IconInput.vue";
import LoadingButton from "./Form/LoadingButton.vue";
import BaseButton from "./Form/BaseButton.vue";
import { ref, reactive, inject, computed } from "vue";
export default {
  components: {
    IconInput,
    LoadingButton,
    BaseButton,
  },
  setup() {
    let isLoading = ref(false);
    const language = inject("language");
    const state = reactive({
      user: {
        surname: "",
        pin: "",
      },
    });
    const rules = {
      user: {
        surname: { required },
        pin: { required, minLength: minLength(4) },
      },
    };
    const v$ = useVuelidate(rules, state, language);

    function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        return;
      } else {
        isLoading.value = true;
      }
    }
    const placeholderLogic = computed(function () {
      if (language.value) {
        return "Nazwisko";
      } else {
        return "Surname";
      }
    });
    return { isLoading, state, v$, submitForm, language, placeholderLogic };
  },
};
</script>
