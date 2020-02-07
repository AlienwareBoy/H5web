# 移动端 cli

**简介**

**核心使用 vue 全家桶,vue,vuex,vue-router 等常见轮子.使用 vantUI 作为移动端的 UI 框架,如果想使用 mint-ui 请 uninstall 后再自行更改**

**目前这个脚手架采用业界比较新的适配方案和比较热门的 UI 框架去构建整个移动端项目，有问题可以随时 diss 我,微信为 Alienwareboy**

1. 随着 viewport 各大浏览器的兼容,弃用了之前 lib-flexble 的适配方案,专用 amfe-flexible+postcss-pxtorem 的主流适配方案
2. 采用了 mint-ui 这种非常适用于传统商城类开发的 UI 框架,如果需要修改 UI 细节请 独立一个 reset 文件重置符合当前 UI 风格的样式表
3. 对于整个项目的 UI 规范，请开始之前让 UI 确定好之后，修改 scss 文件里的 UI 规范参数,项目已经定义了常用的浏览器 reset.css
4. 常用 utils 类都放在了 utils 文件内
5. 静态资源分为 images 和 iconfont 放在 assets 文件内 可自行去阿里巴巴矢量图库下载使用

## 关于移动端调试

1. 使用 vConsole 的 CDN 进行调试,文件在 public 下的 index.html 开启

## 关于页面缓存

2. 使用 keep-alive 记得需要缓存的页面加上 name 与 router.js 相同

## 关于权限判断

1. 绝大部分项目需要对进入角色进行权限判断，初始化获取 code 之后应在 routes.js 的文件中进行配置 meta,如 userType:[1,2],用后端返回的 userType 进行匹配，然后进行成功后和失败的操作

## 关于环境的切换，请参考 vue-cli 文档

1. 关于 env.local 文件或者 env.prod 文件,如需 debug 则在不同环境下设置变量即可，建议以大写开头
2. 关于 git

## 关于 git 的忽略的问题

1. 参考.gitignore 文件

## 关于 vue-cli

**[详情请查阅 vue-cli 文档,点击跳转](https://cli.vuejs.org/config/)**

1. 关于 webpack,我都是自学的。。基本自己能看懂和配置，教人还是太弱鸡了，就算了 哈哈哈哈哈 可以开始写代码了

## 关于微信 JSAPI,H5 支付,小程序支付,对接 H5 嵌套等等

1.微信类方法都放在 wechat, 以前封装过，懒得再写 2.原生对接方法写了一个放在 native 文件中

###

```
npm run  install
```

### Compiles and hot-reloads for development

```
npm run dev:local
```

### Compiles and minifies for production

```
npm run dev:prod
```

**最后总结，自己已经也写过 H5，公众号，微信小程序，PC 管理后台基本已经涉猎到日常前端的方方面面,框架的学习告一段落,开始加紧修炼内功**
