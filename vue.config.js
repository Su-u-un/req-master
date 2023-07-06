const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //指定项目的基础URL路径
  publicPath: "./",
  //关闭生产环境下生成source map，减少构建产物的体积
  productionSourceMap: false,
  //设置路径别名
  chainWebpack: (config) => {
    config.resolve.alias.set('@/', resolve('src'))
    // config.plugins.delete('prefetch')
  },
  
  css: {
    //配置less
    loaderOptions: {
      less: {
        //自定义主题变量
        modifyVars: {},
        //启动js支持
        javascriptEnabled: true,
      }
    }
  },
  // 入口设置
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    index: '/index.html', // 运行时，默认打开index页面
    port: 9000,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/file': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/file': '/file'
        }
      }
    }
  },
  
  //关闭编译时的eslint格式检查
  lintOnSave: false
}
