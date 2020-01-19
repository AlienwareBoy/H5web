const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      }
    }
  },
  chainWebpack: (config) => {
    //命名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('IMAGES', resolve('src/assets/images'))
      .set('VIEW', resolve('src/views'))
      .set('COMPONENT', resolve('src/components'))
      .set('UTIL', resolve('src/utils'))
    //打包文件带hash
    config.output.filename('[name].[hash].js').end()

    //为了补删除换行而加的配置
    config.module.rule('vue').use('vue-loader').loader('vue-loader').tap((options) => {
      // modify the options...
      options.compilerOptions.preserveWhitespace = true
      return options
    })
  }
}
