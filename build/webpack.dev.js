/**
 * webpack开发环境配置文件
 */

'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

// webpack基础配置
let webpackConfig = require('./webpack.config');

/**
  设置静态资源服务器地址
**/

const __PROTOCOL__ = 'http://'; 
const __HOST__ = process.env.host;
const __PORT__ = process.env.port;

let staticPath = __PROTOCOL__ + __HOST__ + ':' + __PORT__;

// 静态资源路径
webpackConfig.output.publicPath = staticPath;

// 设置资源服务器地址
webpackConfig.entry.app.unshift('webpack-dev-server/client?' + staticPath);

/**
  loader
**/

// 
webpackConfig.module.push({
  test: /\.js$/,
  
  exclude: /node_modules/
});






