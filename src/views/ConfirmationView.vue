<template>
  <div>Confirmation</div>
  <p>{{ computedData }}</p>
</template>

<script>
import { computed, inject } from "vue";
import { useStore } from "vuex";
import { onBeforeRouteLeave } from "vue-router";

export default {
  setup() {
    const polish = inject("language");
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
    const store = useStore();

    const computedData = computed(function () {
      return store.getters["guest/getGuest"];
    });
    return { computedData };
  },
};
</script>
