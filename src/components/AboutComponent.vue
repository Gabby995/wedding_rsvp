<template>
  <slot></slot>
  <div
    class="flex flex-col justify-center m-auto gap-y-5 max-w-xl rounded-xl bg-white bg-opacity-40 px-2 pt-10"
  >
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
    <section id="Details"></section>
    <p class="mb-5 max-w-sm mx-auto">
      Ślub odbędzie się o godzinie 16:00 w Kościele Zwiastowania NMP w
      Tomaszowie Lubelskim
    </p>
    <div class="grid grid-cols-3 gap-0 my-3">
      <p class="border-r border-gray-400 text-xl">Lipiec</p>
      <p class="text-xl">23</p>
      <p class="border-l border-gray-400 text-xl">2022</p>
    </div>
    <p class="max-w-sm mx-auto">
      Po ceremonii ślubnej miło nam będzie gościć Was na przyjęciu weselnym w
      Restauracji Staropolskiej przy ulicy Lwowskiej 126.
    </p>
    <p class="max-w-sm mx-auto">
      Po ceremonii ślubnej miło nam będzie gościć Was na przyjęciu weselnym w
      Restauracji Staropolskiej przy ulicy Lwowskiej 126.
    </p>
    <div class="flex items-center gap-x-10 mx-auto">
      <Icon icon="emojione-monotone:wrapped-gift" class="text-4xl" />
      <span class="material-icons text-3xl"> east </span>
      <Icon icon="fa6-solid:money-bill-1-wave" color="black" class="text-3xl" />
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
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
