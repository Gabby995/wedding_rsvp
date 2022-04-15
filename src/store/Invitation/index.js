import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      invitations: null,
      invitation: null,
      updateSuccess: null,
    };
  },
  mutations,
  actions,
  getters,
};
