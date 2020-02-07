import Vue from "vue";
import VueRouter from "vue-router";
import list from "./routes";

Vue.use(VueRouter);

const routes = [...list];
const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
    Vue.prototype.title = to.meta.title;
  }
  next();
});
export default router;
