import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import rules from "@/rules";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: () =>
      import(
        /* webpackChunkName: "confirmation" */ "../views/ConfirmationView.vue"
      ),
    beforeEnter: rules.guestSet,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
  },
  //Catch other links
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "catchAll" */ "../views/CatchAll.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.afterEach((to, from) => {
  if (
    from.name === "confirmation" &&
    router.currentRoute._rawValue.name !== "confirmation"
  ) {
    store.commit("guest/setGuest", null);
  }
});
export default router;
