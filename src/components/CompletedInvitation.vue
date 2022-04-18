<template>
  <section class="mb-3">
    <h2 class="text-3xl font-semibold text-green">
      {{ computedInvitationData.invitation.display_name }}
    </h2>
    <div class="my-2">
      <h4 class="w-4/5 mt-3 mx-auto overflow-hidden text-center text-xl">~</h4>
    </div>
    <p>
      <span v-if="polish">Osoba Towarzysząca: </span>
      <span v-else>Plus One: </span>
      <br />
      <span class="font-semibold">{{
        translateData("Plus_one", computedInvitationData.invitation.plus_one)
      }}</span>
    </p>
    <p>
      <span v-if="polish">Liczba Gości: </span>
      <span v-else>Number of guests: </span>
      <br />
      <span class="font-semibold">
        {{ computedInvitationData.invitation.guests }}</span
      >
    </p>
    <p>
      <span v-if="polish">Obecność: </span>
      <span v-else>Attendance: </span>
      <br />
      <span class="font-semibold text-2xl text-green">{{
        translateData(
          "Confirmation",
          computedInvitationData.invitation.confirmation
        )
      }}</span>
    </p>
  </section>

  <WeddingDetails />
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "vuex";
import WeddingDetails from "./Sections/WeddingDetails.vue";
export default {
  components: { WeddingDetails },
  setup() {
    const store = useStore();
    const polish = inject("language");

    const computedInvitationData = computed(function () {
      return store.getters["invitation/getInvitation"];
    });
    function translateData(type, data) {
      switch (type) {
        case "Plus_one":
          if (polish.value && data === "yes") {
            return "Tak";
          } else if (polish.value && data === "no") {
            return "Nie";
          } else if (!polish.value && data === "yes") {
            return "Yes";
          } else if (!polish.value && data === "no") {
            return "No";
          }
          break;
        case "Confirmation":
          if (polish.value && data === "yes") {
            return "Tak";
          } else if (polish.value && data === "no") {
            return "Nie";
          } else if (!polish.value && data === "yes") {
            return "Attending";
          } else if (!polish.value && data === "no") {
            return "Not Attending";
          }
          break;
      }
    }

    return { computedInvitationData, translateData, polish };
  },
};
</script>
