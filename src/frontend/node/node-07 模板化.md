# node-07 模板化
## 一、CommonJS规范
1. commonjs主要是为了实现代码重用，commonjs是同步加载的；

2. 在commonjs规范中：
	* 一个js文件就是一个模块，拥有单独的作用域；
	* 普通方式定义的变量、函数、对象都属于该模块内；
	* 通过require来加载模块；
	* 通过exports和module.exports来暴露模块中的内容；



单个暴露：`exports.fn = function(){}`

一起暴露：`module.exports = {}`

3. 所有代码都运行在模块作用域中，避免全局变量污染，模块加载一次就在缓存里面了，多次加载都是读取缓存的，模块是按顺序同步加载的；

4. require（同步加载）的功能：读取并执行一个js文件，然后返回该模块的exprots对象，如果没有该模块就会报错；


模块化的好处：模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。模块化是一种处理复杂系统分解为更好的可管理模块的方式。


## 二、es6中的模块化：
如果只暴露一个就使用export default，import时不需要花括号；

1. export暴露（模块）：
（1）单个暴露：
```js
export let m = 1;
export function fn(){
    console.log(111);
}
```
（2）整体暴露
```js
let m = 1;
function fn(){
    console.log(111);
}
export {m,fn}
```
（3）默认暴露
```js
export default x = 1;
```
一般适用于一个参数时；

2. import（入口文件）：

普通暴露语法： import { 属性名... } from 'filePath'

默认暴露语法：import 属性名 from 'filePath'；

有暴露的地方才能写入；



## 三、浏览器使用nodejs的模块
1. browserify官网：browserify.org
2. 安装：npm install -g browserify
3. 用法：browserify 源文件 -o 目标文件

     实例：browserify ./src/app.js -o ./dist/bundle.js
4. browserify打包成功以后没有提示，如果没有文件夹会自动创建文件夹，如果重复则自动覆盖；




## 四、ES6转ES5
1. 介绍：

主要是用来兼容低版本浏览器的；

babel官网：www.babeljs.cn

babel的功能：将es6语法转成es5语法、还能操作jsx语法(react)等
2. 安装

安装babel-cli, babel-preset-es2015和browserify:

(1)、npm install babel-cli browserify -g
(2)、npm install babel-preset-es2015 --save-dev

参数说明：

--save 项目依赖（真正上线，也需要）

--save-dev 开发依赖（开发阶段需要，上线不需要[因为已转换好了]）

presets 预设(将es6转换成es5的所有插件打包)

３、在项目中定义babel配置文件：.babelrc文件，内容如下：
{
    "presets": ["es2015"]
}

４、编译


使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel ./src -d ./dist

前端使用的话就使用Browserify编译js : browserify ./dist/app.js -o ./dest/bundle.js


５、npm run [package.json文件中的scripts:参数]

npm run start | npm start  除了start可以省略run，其它都不能省略

"start": "babel ./src -d ./dist",

"build": "babel ./src -d ./dist",

"dev":"browserify ./dist/app.js -o ./dest/bundle.js"   ；



## 五、amd、cmd；

1. amd:规范

   requirejs  实现的amd规范；


2. cmd:规范

   seajs 实现的cmd规范；

