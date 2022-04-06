import { createStore } from "vuex";

import guestsModule from "./Guests/index.js";
import adminModule from "./Admin/index.js";

// Creates store modules
const store = createStore({
  modules: {
    guest: guestsModule,
    admin: adminModule,
  },
});

export default store;
