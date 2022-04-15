import store from "./store/index.js";

const rules = {
  guestSet(to, from, next) {
    if (!store.getters["invitation/getInvitation"]) {
      return next("/");
    }
    next();
  },
};

export default rules;
