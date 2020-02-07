import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "amfe-flexible/index.js";
import "./utils/rem.js";
Vue.config.productionTip = false;

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
