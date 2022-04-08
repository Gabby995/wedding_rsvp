<template>
  <div
    class="md:flex flex-col justify-center m-auto gap-y-5 max-w-xl rounded-xl px-2 md:pt-16"
  >
    <slot></slot>
    <HomeLogo />
    <section id="Titles" class="mx-auto max-w-sm">
      <h1 v-if="polish">Wpisz nazwisko oraz kod pin z zaproszenia</h1>
      <h1 v-else>
        Please intput your surname and pin as they appear on the invitation
      </h1>
    </section>
    <form
      class="w-1/2 mx-auto flex flex-col gap-y-5 md:text-lg"
      @submit.prevent="submitForm"
    >
      <div>
        <label for="Guest-Name" class="text-green font-semibold">
          <span v-if="polish">Nazwisko z zaproszenia</span>
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
          <span v-if="polish">Kod pin z zaproszenia</span>
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
      <BaseButton v-if="!isLoading">
        <span v-if="polish"> Dalej </span>
        <span v-else> Submit </span>
      </BaseButton>
      <LoadingButton v-if="isLoading" />
      <h2 class="font-semibold text-sm" v-if="polish">
        Prosimy o potwierdzenie obecności do 30 maja 2022 r.
      </h2>
      <h2 v-else class="font-semibold text-sm">
        Please RSVP before 30th may 2022
      </h2>
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import HomeLogo from "./Sections/HomeLogo.vue";
export default {
  components: {
    IconInput,
    LoadingButton,
    BaseButton,
    HomeLogo,
  },
  setup() {
    let isLoading = ref(false);
    const polish = inject("language");
    const router = useRouter();
    const store = useStore();
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
    const v$ = useVuelidate(rules, state);

    function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        return;
      } else {
        isLoading.value = true;
        store.commit("guest/setGuest", {
          invitation: {
            id: 1,
            surname: "Stark",
            display_name: "Tony & Pepper Stark",
            type: "Single",
            plus_one: "No",
            guests: 20,
            notes: "'I am Iron-Man'",
            pin: "3VcY",
            confirmation: "Yes",
          },
        });
        router.push({
          name: "confirmation",
        });
      }
    }
    const placeholderLogic = computed(function () {
      if (polish.value) {
        return "Nazwisko";
      } else {
        return "Surname";
      }
    });
    return { isLoading, state, v$, submitForm, polish, placeholderLogic };
  },
};
</script>
