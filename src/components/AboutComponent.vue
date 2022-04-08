<template>
  <div
    class="md:flex flex-col justify-center items-center m-auto gap-y-5 max-w-xl rounded-xl bg-white bg-opacity-40 px-2 md:pt-16"
  >
    <slot></slot>
    <AboutUsNames />
    <WeddingDetails />
    <section id="Icons" class="mx-auto my-5">
      <div class="flex justify-center gap-x-10 mx-auto">
        <Icon icon="emojione-monotone:wrapped-gift" class="text-4xl" />
        <span class="material-icons text-3xl"> east </span>
        <Icon
          icon="fa6-solid:money-bill-1-wave"
          color="black"
          class="text-3xl"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";
import { Icon } from "@iconify/vue";
import WeddingDetails from "./Sections/WeddingDetails.vue";
import AboutUsNames from "./Sections/AboutUsNames.vue";
export default {
  components: { Icon, WeddingDetails, AboutUsNames },
  setup() {
    const polish = inject("language");

    return { polish };
  },
};
</script>
<style>
h4:before,
h4:after {
  content: "";
  color: #999;
  display: inline-block;
  width: 25%;
  margin: 0 0.5em 0 -55%;
  vertical-align: middle;
  border-bottom: 1px solid;
}
h4:after {
  margin: 0 -55% 0 0.5em;
}
</style>
