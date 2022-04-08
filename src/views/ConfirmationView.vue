<template>
  <div
    class="md:flex flex-col justify-center items-center m-auto gap-y-5 max-w-xl rounded-xl bg-white bg-opacity-40 px-2 md:pt-16"
  >
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
            computedData.invitation.type === 'Single' &&
            state.invitation.confirmation === 'Yes'
          "
        >
          <RadioChoices @update-plus-one="updatePlusOne" />
        </template>

        {{ state }}
        <BaseButton v-if="!isLoading">
          <span v-if="polish"> Wyślij </span>
          <span v-else> Submit </span>
        </BaseButton>
        <LoadingButton v-if="isLoading" />
      </form>
    </section>
    <WeddingDetails />
  </div>
</template>

<script>
import { ref, reactive, computed, inject, onBeforeMount } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useStore } from "vuex";
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
    let isLoading = ref(false);
    const store = useStore();
    const computedData = computed(function () {
      return store.getters["guest/getGuest"];
    });
    const state = reactive({
      invitation: {
        id: computedData.value.invitation.id,
        confirmation: "",
        plus_one: "No",
      },
    });
    const rules = {
      invitation: {
        confirmation: { required },
      },
    };
    function updatePlusOne(data) {
      console.log("IPDATED", data);
      state.invitation.plus_one = data;
    }
    const v$ = useVuelidate(rules, state);
    // Used to setup beforeUnload (stops reloading page)
    onBeforeMount(function () {
      window.addEventListener("beforeunload", preventNav);
    });
    function preventNav(event) {
      if (!computedData.value) return;
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = "";
    }
    onBeforeRouteLeave(() => {
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

    function submitGuestResponse() {
      v$.value.$touch();
      console.log("RESPNSE SIBMIT");
    }

    return {
      isLoading,
      computedData,
      polish,
      submitGuestResponse,
      v$,
      state,
      updatePlusOne,
    };
  },
};
</script>
