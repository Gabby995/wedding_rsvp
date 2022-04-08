<template>
  <div class="relative overflow-hidden">
    <div class="inset-0 absolute"></div>
    <div
      class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40"
    >
      <div class="w-full font-mono flex flex-col items-center relative z-10">
        <h1
          class="font-extrabold text-5xl text-center text-gray-700 leading-tight mt-4"
        >
          Upps...
        </h1>

        <p
          class="font-extrabold text-8xl my-44 text-gray-700 animate-bounce cursor-pointer"
          @click="takeBack"
        >
          404
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function takeBack() {
      router.push({
        name: "home",
      });
    }
    return { takeBack };
  },
};
</script>
