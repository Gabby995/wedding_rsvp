<template>
  <div
    class="flex flex-col justify-center m-auto gap-y-5 max-w-xl rounded-xl bg-white bg-opacity-40 px-2 pt-16"
  >
    <slot></slot>
    <section id="Names">
      <div>
        <h2 class="text-3xl font-semibold text-green">Marta</h2>
        <h3 class="text-lg">Gęborys</h3>
      </div>
      <div class="my-2">
        <h4
          class="w-4/5 mt-3 mx-auto overflow-hidden text-center font-bold text-2xl"
        >
          &
        </h4>
      </div>
      <div>
        <h2 class="text-3xl font-semibold text-green">Gabriel</h2>
        <h3 class="text-lg">Kołodziej</h3>
      </div>
    </section>
    <section id="Details" class="flex flex-col gap-y-6">
      <p class="mb-5 max-w-sm mx-auto" v-if="polish">
        Ślub odbędzie się o godzinie 16:00 w Kościele Zwiastowania NMP w
        Tomaszowie Lubelskim
      </p>
      <p class="mb-5 max-w-sm mx-auto" v-else>
        The ceremony will take place at 16:00 in the Kościół Zwiastowania NMP in
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
        reception taking place at Restauracji Staropolskiej on the Lwowskiej 126
        street.
      </p>
    </section>
    <section id="Icons" class="mx-auto my-5">
      <div class="flex items-center gap-x-10 mx-auto">
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
export default {
  components: { Icon },
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
