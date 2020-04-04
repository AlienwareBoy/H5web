import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "amfe-flexible/index.js";
import "./utils/rem.js";
import Mint from 'mint-ui';
import './scss/index.scss';
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false;

Vue.use(Mint);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
