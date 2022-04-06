<template>
  <div
    class="homeCard flex flex-col justify-center m-auto gap-y-5 max-w-xl h-96 rounded-xl"
  >
    <slot></slot>
    <h1 v-if="polish">Witam</h1>
    <h1 v-else>Welcome</h1>
    <form
      class="w-1/2 mx-auto flex flex-col gap-y-10 md:text-lg"
      @submit.prevent="submitForm"
    >
      <div>
        <label for="Guest-Name" class="text-green font-semibold">
          <span v-if="polish">Nazwisko z zaprosznia</span>
          <span v-else>Surname on invitation</span>
        </label>
        <IconInput
          forLabel="Guest-Name"
          icon="person"
          :placeholder="placeholder"
          v-model="state.user.surname"
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
          v-model="state.user.pin"
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
import { required } from "@vuelidate/validators";
import IconInput from "@/components/Form/IconInput.vue";
import LoadingButton from "./Form/LoadingButton.vue";
import BaseButton from "./Form/BaseButton.vue";
import { ref, reactive } from "vue";
export default {
  props: {
    polish: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Nazwisko",
    },
  },
  components: {
    IconInput,
    LoadingButton,
    BaseButton,
  },
  setup() {
    let isLoading = ref(false);
    const state = reactive({
      user: {
        surname: "",
        pin: "",
      },
    });
    // const rules = computed(() => {
    //   return {
    //     user: {
    //       surname: { required },
    //       pin: { required },
    //     },
    //   };
    // });
    const rules = {
      user: {
        surname: { required },
        pin: { required },
      },
    };
    const v$ = useVuelidate(rules, state);

    function submitForm() {
      v$.value.$touch();
      if (v$.value.$error) {
        return;
      } else {
        isLoading.value = true;
      }
    }
    return { isLoading, state, v$, submitForm };
  },
  // methods: {
  //   submitForm() {
  //     this.v$.$validate();
  //     if (this.v$.$error) {
  //       console.log("errpr", this.v$);
  //       this.isLoading = true;
  //       console.log("Submited");
  //     }
  //   },
  // },
};
</script>

<style>
.homeCard::after {
  content: "";
  background-image: url(../assets/rsvp_image_large.png);
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: cover; */
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
