# ts-01 开发环境搭建

## 为什么要使用TS
1. 维护项目时，你会发现ts非常的方便
比如：后端修改了一个字段，此时前端也需要更改，但是由于不知道哪些地方用到了该字段，这时就会出问题了；
如果你的项目是使用了ts，那么你只需要修改interface定义的类型字段，此时所有取该值的地方都会报错了，此时再去修改即可；

## TS大纲

![image-20200602223954793](https://notecdn.hrhe.cn/images/image-20200602223954793.png)



## Typescript与Javascript的区别

|                   TypeScript                   |                 JavaScript                 |
| :--------------------------------------------: | :----------------------------------------: |
| JavaScript 的超集用于解决大型项目的代码复杂性  |      一种脚本语言，用于创建动态网页。      |
|          可以在编译期间发现并纠正错误          |  作为一种解释型语言，只能在运行时发现错误  |
|           强类型，支持静态和动态类型           |          弱类型，没有静态类型选项          |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 |           可以直接在浏览器中使用           |
|              支持模块、泛型和接口              |           不支持模块，泛型或接口           |
|          支持 ES3，ES4，ES5 和 ES6 等          |  不支持编译其他 ES3，ES4，ES5 或 ES6 功能  |
|       社区的支持仍在增长，而且还不是很大       | 大量的社区支持以及大量文档和解决问题的支持 |



## 开发环境搭建

ts在线编辑器：[https://www.typescriptlang.org/play/](https://www.typescriptlang.org/play/)

TS不能直接运行在浏览器环境，需要先编译成js（依赖node环境）

安装：npm i typescript -g；

运行ts：tsc xxx.ts 即可编译为js

## 搭建环境

* 初始化项目：`npm init -y`

* vscode安装插件：`tslint、tslint(deprecated)`



###  全局安装typescript

`npm i typescript tslint -g`

安装全局typescript之后，在项目根目录执行`tsc --init`生成`tsconfig.json`文件



### 安装webpack打包

- `npm install webpack webpack-cli webpack-dev-server -D`

- `npm install ts-loader cross-env html-webpack-plugin clean-webpack-plugin -D`

  - `cross-env` 传输环境

    

### 配置webpack

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: 'dist'
    },
    module: {
        roles: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_module/
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        contentBase: './dist',
        compress: false,
        host: 'localhost',
        stats: 'errors-only',
        port: 8089
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'] // 打包时清除dist目录
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html' // 放入模板文件
        })
    ]
}
```

### 配置package.json

```json
"scripts": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpac.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"
}
```


