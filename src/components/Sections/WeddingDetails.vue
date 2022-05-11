<template>
  <section id="Details" class="flex flex-col gap-y-6">
    <p class="mb-5 max-w-sm mx-auto" v-if="polish">
      Ślub odbędzie się o godzinie 16:00 w Kościele Zwiastowania NMP w
      Tomaszowie Lubelskim
    </p>
    <p class="mb-5 max-w-sm mx-auto" v-else>
      The ceremony will take place at 16:00 in Kościół Zwiastowania NMP in
      Tomaszow Lubelski
    </p>
    <div class="grid grid-cols-3 gap-0 mb-2">
      <p class="border-r border-gray-400 text-xl" v-if="polish">Lipiec</p>
      <p class="border-r border-gray-400 text-xl" v-else>July</p>
      <p class="text-xl">23</p>
      <p class="border-l border-gray-400 text-xl">2022</p>
    </div>
    <p class="max-w-sm mx-auto" v-if="polish">
      Po ceremonii ślubnej miło nam będzie gościć Was na przyjęciu weselnym w
      Restauracji Staropolskiej przy ulicy Lwowskiej 126.
    </p>
    <p class="max-w-sm mx-auto" v-else>
      After the ceremony it will be our honor to host you for a wedding
      reception taking place at Restauracji Staropolskiej located on Lwowskiej
      126 street.
    </p>
  </section>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const polish = inject("language");
    return { polish };
  },
};
</script>
