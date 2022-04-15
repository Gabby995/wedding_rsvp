import { createStore } from "vuex";

import invitationModule from "./Invitation/index.js";

// Creates store modules
const store = createStore({
  modules: {
    invitation: invitationModule,
  },
});

export default store;
