# 移动端cli

**简介**

**核心使用vue全家桶,vue,vuex,vue-router等常见轮子.使用vantUI作为移动端的UI框架,如果想使用mint-ui请uninstall后再自行更改**

**目前这个脚手架采用业界比较新的适配方案和比较热门的UI框架去构建整个移动端项目，有问题可以随时diss我,微信为Alienwareboy**

1. 随着viewport各大浏览器的兼容,弃用了之前lib-flexble的适配方案,专用amfe-flexible+postcss-pxtorem的主流适配方案
2. 采用了mint-ui这种非常适用于传统商城类开发的UI框架,如果需要修改UI细节请 独立一个reset文件重置符合当前UI风格的样式表
3. 对于整个项目的UI规范，请开始之前让UI确定好之后，修改scss文件里的UI规范参数,项目已经定义了常用的浏览器reset.css
4. 常用utils类都放在了utils文件内
5. 静态资源分为images 和iconfont 放在assets文件内 可自行去阿里巴巴矢量图库下载使用

## 关于正式环境和开发环境的切换，请参考vue-cli文档

1. 在src同级目录下自行创建 配置env.local 文件或者env.prod文件,如需debug 则在不同环境下设置变量即可，建议以大写开头

**[详情请查阅vue-cli文档,点击跳转](https://cli.vuejs.org/config/)**

2. 关于webpack,我都是自学的。。基本自己能看懂和配置，教人还是太弱鸡了，就算了  哈哈哈哈哈  可以开始写代码了 
  
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
