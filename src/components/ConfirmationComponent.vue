<template>
  <section id="GuestDetails" class="pt-5">
    <h1 class="font-bold text-2xl">
      {{ computedData.invitation.display_name }}
    </h1>
  </section>
  <section id="GuestForm" class="my-2">
    <form
      class="md:text-lg flex flex-col justify-center items-center gap-y-2 pb-8"
      @submit.prevent="submitGuestResponse"
    >
      <DropdownChoices
        :type="computedData.invitation.type"
        v-model="state.invitation.confirmation"
        :error="v$.invitation.confirmation.$error ? true : false"
      />
      <template
        v-if="
          computedData.invitation.type === 'single' &&
          state.invitation.confirmation === 'yes'
        "
      >
        <RadioChoices @update-plus-one="updatePlusOne" />
      </template>
      <div v-if="error" class="text-red-500 mb-3">
        <span v-if="polish">Bląd! - Coś poszło nie tak :( </span>
        <span v-else>Error! - Something went wrong :(</span>
      </div>
      <BaseButton v-if="!isLoading">
        <span v-if="polish"> Wyślij </span>
        <span v-else> Submit </span>
      </BaseButton>
      <LoadingButton v-if="isLoading" />
    </form>
  </section>
  <WeddingDetails />
</template>

<script>
import { ref, reactive, computed, inject, onBeforeMount } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onBeforeRouteLeave } from "vue-router";
import WeddingDetails from "@/components/Sections/WeddingDetails.vue";
import RadioChoices from "@/components/Form/RadioChoices.vue";
import BaseButton from "@/components/Form/BaseButton.vue";
import LoadingButton from "@/components/Form/LoadingButton.vue";
import DropdownChoices from "@/components/Form/DropdownChoices.vue";
export default {
  components: {
    WeddingDetails,
    RadioChoices,
    BaseButton,
    LoadingButton,
    DropdownChoices,
  },

  setup() {
    const polish = inject("language");
    let error = ref("");
    let isLoading = ref(false);
    const store = useStore();
    const router = useRouter();
    const computedData = computed(function () {
      return store.getters["invitation/getInvitation"];
    });
    const updateSuccessComputed = computed(function () {
      return store.getters["invitation/getUpdateSuccess"];
    });
    const state = reactive({
      invitation: {
        invitation: computedData.value.invitation.id,
        confirmation: "",
        plus_one: "no",
        guests: parseInt(computedData.value.invitation.guests),
      },
    });
    const rules = {
      invitation: {
        confirmation: { required },
      },
    };
    function updatePlusOne(data) {
      state.invitation.plus_one = data;
    }
    const v$ = useVuelidate(rules, state);
    // Used to setup beforeUnload (stops reloading page)
    async function submitGuestResponse() {
      v$.value.$touch();
      if (v$.value.$error) {
        return;
      } else {
        try {
          if (state.invitation.plus_one === "yes") {
            state.invitation.guests += 1;
          }
          isLoading.value = true;
          await store.dispatch("invitation/updateInvitation", state.invitation);
          // store.commit("invitation/setInvitation", null);
          router.push({
            name: "home",
            query: { success: "true" },
          });
        } catch (e) {
          error.value = e.message;
          isLoading.value = false;
        }
      }
    }
    onBeforeMount(function () {
      window.addEventListener("beforeunload", preventNav);
    });
    function preventNav(event) {
      console.log("Inside");
      if (!computedData.value) return;
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = "";
    }
    onBeforeRouteLeave(() => {
      if (updateSuccessComputed.value) return;
      let message =
        "Czy na pewno chcesz opuścić tę stronę? Twoja odpowiedź nie została zapisana";
      if (computedData.value) {
        if (!polish.value) {
          message = "Do you really want to leave? you have unsaved changes!";
        }
        const answer = window.confirm(message);
        // cancel the navigation and stay on the same page
        if (!answer) return false;
      }
    });

    return {
      isLoading,
      computedData,
      polish,
      submitGuestResponse,
      v$,
      state,
      updatePlusOne,
      error,
    };
  },
};
</script>
