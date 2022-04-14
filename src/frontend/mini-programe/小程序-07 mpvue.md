# 小程序-07 mpvue
## 一、介绍
1. 是一个美团开发的使用Vue.js开发小程序的前端框架，可以直接在微信小程序、百度、支付宝、头条都可以使用；

2. 安装：在基于安装了vue cli脚手架的前提下，使用以下命令

vue init mpvue/mpvue-quickstart demo；

3. 安装好之后需要npm install生成node_modules文件，之后npm start启动；

4. 启动好的脚手架不在浏览器打开，需要在微信开发工具导入，直接在微信开发工具中预览；

## 二、创建页面
1. 之后在pages下面创建一个目录，创建页面需要重新npm start一下，在app.json里面修改，
2. 在目录下创建一个main.js文件9
```js
import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()
```
3. 创建一个index.vue，在里面写代码；
4. 也可以创建一个main.json，来配置当前页面；如微信小程序中的json文件；

mpvue注意事项：

1. 新建页面后，需要重新npm run dev；
2. 在mpvue中可以直接使用微信中的标签，也可以使用html中的标签，会正确解析；
3. 在mpvue中即可以使用mpvue的生命周期，也可以使用vue的生命周期；
