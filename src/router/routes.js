const list = [{
  path: "/",
  name: "home",
  component: resolve => require(["VIEW/Home"], resolve),
  meta: {
    name: "home",
    title: "首页",
    keepAlive: true,
    showLeft: false
  }
}, {
  path: "/index",
  name: "index",
  component: resolve => require(["VIEW/index"], resolve),
  meta: {
    name: "home",
    title: "签到页面",
    keepAlive: true,
    showLeft: false
  }
}];

export default list;
