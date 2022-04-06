<template>
  <div>
    <HomeComponent :polish="polish" :placeholder="placeholder">
      <FallingLeaves
    /></HomeComponent>
  </div>
  <div id="footer" class="flex justify-center gap-x-2 absolute bottom-0 w-full">
    <div class="relative inline-block w-10 mr-2 align-middle select-none">
      <span class="text-green font-semibold">
        <span v-if="polish">English</span>
        <span v-else>Polski</span>
      </span>
      <input
        @click="changeLanguage"
        type="checkbox"
        name="toggle"
        id="Blue"
        class="checked:bg-green outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        for="Blue"
        class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      >
      </label>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import FallingLeaves from "@/components/FallingLeaves.vue";

import { ref } from "vue";
export default {
  name: "HomeView",
  components: {
    HomeComponent,
    FallingLeaves,
  },
  setup() {
    const polish = ref(true);
    const placeholder = ref("Nazwisko");
    function changeLanguage() {
      polish.value = !polish.value;
      if (placeholder.value === "Nazwisko") {
        placeholder.value = "Surname";
      } else {
        placeholder.value = "Nazwisko";
      }
    }
    return { polish, placeholder, changeLanguage };
  },
};
</script>
