import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import 'amfe-flexible/index.js'
import './utils/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
