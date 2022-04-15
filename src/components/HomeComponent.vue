<template>
  <HomeLogo />
  <section id="Titles" class="mx-auto max-w-sm">
    <h1 v-if="polish">Wpisz nazwisko oraz kod pin z zaproszenia</h1>
    <h1 v-else>
      Please intput your surname and pin as they appear on the invitation
    </h1>
    <h2 class="text-green-500 font-bold mt-1 text-xl" v-if="invitationUpdated">
      <span v-if="polish">Dziękujemy! - Odpowiedź została zarejestrowana </span>
      <span v-else>Thank you! - Your answer was registered </span>
    </h2>
  </section>
  <form
    class="w-1/2 mx-auto flex flex-col gap-y-5 md:text-lg"
    @submit.prevent="submitForm"
  >
    <div>
      <div class="text-red-500 mb-3" v-if="error && error === 'DetailsIssue'">
        <span v-if="polish">Bląd! - Sprawdz Nazwisko lub Pin</span>
        <span v-else>Error! - Check surname or pin</span>
      </div>
      <div class="text-red-500 mb-3" v-if="error && error !== 'DetailsIssue'">
        <span v-if="polish"
          >Bląd! - Coś poszło nie tak :( <br />
          Sprawdz Nazwisko lub Pin</span
        >
        <span v-else>Error! - Something went wrong :(</span>
      </div>
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
        typeProp="number"
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
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import IconInput from "@/components/Form/IconInput.vue";
import LoadingButton from "./Form/LoadingButton.vue";
import BaseButton from "./Form/BaseButton.vue";
import { ref, reactive, inject, computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
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
    onBeforeMount(function () {
      if (route.query.success) {
        invitationUpdated.value = true;
      }
    });
    let isLoading = ref(false);
    let error = ref("");
    let invitationUpdated = ref(false);
    const polish = inject("language");
    const router = useRouter();
    const route = useRoute();
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

    async function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        return;
      } else {
        try {
          isLoading.value = true;
          await store.dispatch("invitation/getInvitation", state.user);
          router.push({
            name: "confirmation",
          });
        } catch (e) {
          error.value = e.message;
          isLoading.value = false;
        }
      }
    }
    const placeholderLogic = computed(function () {
      if (polish.value) {
        return "Nazwisko";
      } else {
        return "Surname";
      }
    });
    return {
      isLoading,
      state,
      v$,
      submitForm,
      polish,
      placeholderLogic,
      error,
      invitationUpdated,
    };
  },
};
</script>
