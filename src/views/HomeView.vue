<template>
  <div>
    <HomeComponent> <FallingLeaves /></HomeComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import FallingLeaves from "@/components/FallingLeaves.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    FallingLeaves,
  },
};
</script>
