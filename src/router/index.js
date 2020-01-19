import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './routes'

Vue.use(VueRouter)

const routes = [
  ...list
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
