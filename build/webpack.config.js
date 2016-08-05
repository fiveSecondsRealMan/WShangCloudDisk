/**
  webpack基础配置文件
**/

'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

/**
  定义源码、发布环境路径
**/

const __ROOTPATH__ = path.resolve(__dirname, '..');
const __SRCPATH__ = path.join(__ROOTPATH__, 'web');
const __PROPATH__ = path.join(__ROOTPATH__, 'dist');
const __ISDEV__ = process.env.NODE_ENV;

/**
  资源路径别名
**/

let resourceAlias = {};

// css
Object.assign(resourceAlias, {
  css: path.join(__SRCPATH__, 'css')
});

// js
Object.assign(resourceAlias, {
  js: path.join(__SRCPATH__, 'js')
});

// img
Object.assign(resourceAlias, {
  imgs: path.join(__SRCPATH__, 'imgs')
});

// page
Object.assign(resourceAlias, {
  pages: path.join(__SRCPATH__, 'pages')
});

// 组件路径
Object.assign(resourceAlias, {
  components: path.join(__SRCPATH__, 'components')        
});

// redux.actions路径
Object.assign(resourceAlias, {
  actions: path.join(__SRCPATH__, 'js', 'actions')
});

// redux.reducer路径
Object.assign(resourceAlias, {
  reducers: path.join(__SRCPATH__, 'js', 'reducers')
});

module.exports = {

  // 入口文件目录
  context: __SRCPATH__,

  // 入口文件路径
  entry: {
    app: ['app.js']
  },

  // 输出文件信息(目录、文件名)
  output: {
    path: __PROPATH__,
    filename: 'bundle.js'
  },

  module: [
    
  ],

  resolve: {
    alias: resourceAlias,
    extensions: ['', '.js', '.css']        
  },

  plugins: [
    // 自动生成依赖打包后js文件的html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(resourceAlias.pages, 'index.html')
    })
  ]
};