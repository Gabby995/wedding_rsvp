import store from "./store/index.js";

const rules = {
  guestSet(to, from, next) {
    if (!store.getters["guest/getGuest"]) {
      return next("/");
    }
    next();
  },
};

export default rules;
