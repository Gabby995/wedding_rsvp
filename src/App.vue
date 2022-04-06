<template>
  <nav>
    <router-link to="/"
      ><span v-if="polish">Strona Główna</span> <span v-else>Home</span>
    </router-link>
    |
    <router-link to="/about"
      ><span v-if="polish">O Nas</span> <span v-else>About</span></router-link
    >
  </nav>
  <router-view />
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
import { ref, provide } from "vue";
export default {
  setup() {
    const polish = ref(true);
    function changeLanguage() {
      console.log("inside", polish.value);
      polish.value = !polish.value;
    }
    provide("language", polish);
    return { polish, changeLanguage };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
body::after {
  content: "";
  background-image: url(./assets/rsvp_image_large.png);
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15%;
  opacity: 0.3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
