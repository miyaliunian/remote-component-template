/*
 * @Author: 米亚流年 miyaliunian@gmail.com
 * @Date: 2024-01-12 13:10:39
 * @LastEditors: 米亚流年 miyaliunian@gmail.com
 * @LastEditTime: 2024-01-17 10:56:45
 * @FilePath: /remote-component-template/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const externals = {
  vue: 'Vue'
};
const cdn = {
  // 生产环境
  build: {
    css: [],
    js: ['https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.12/vue.min.js']
  }
};
module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy:{
      '/api': {
        target: 'http://120.46.149.139:9091/',
        changOrigin: true, //开启代理
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100, // 换算的基数(设计图750的根字体为32)
            propList: ['*'], //可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      externals: externals
    });
  },
  chainWebpack: config => {
    // 对vue-cli内部的 webpack 配置进行更细粒度的修改
    config.plugin('html').tap(args => {
      args[0].cdn = cdn.build;
      args[0].title = require('./src/package.json').data.title
      if (process.env.NODE_ENV === 'production') {
        args[0].minify.removeComments = false;
      }
      return args;
    });
  }
};
