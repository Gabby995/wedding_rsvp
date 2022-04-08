<template>
  <div>
    <ConfirmationComponent> <FallingLeaves /></ConfirmationComponent>
  </div>
</template>

<script>
import ConfirmationComponent from "@/components/ConfirmationComponent.vue";
import FallingLeaves from "@/components/FallingLeaves.vue";

export default {
  name: "ConfirmationView",
  components: {
    ConfirmationComponent,
    FallingLeaves,
  },
};
</script>
