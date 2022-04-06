<template>
  <div>
    <AboutComponent>
      <FallingLeaves />
    </AboutComponent>
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";
import FallingLeaves from "@/components/FallingLeaves.vue";

export default {
  name: "HomeView",
  components: {
    AboutComponent,
    FallingLeaves,
  },
};
</script>
