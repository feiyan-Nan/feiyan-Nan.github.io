# Webpack-02 处理js、暴露全局变量
## 一、处理js
1. 安装`babel`、`babel-loader`

`@babel/core`    // babel核心模块，

`@babel/preset-env`   // 转化模块,转化成标准、js语法

```bash
yarn add babel-loader @babel/core @babel/preset-env -D
```

2. 配置

```js
rules: [
    {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                // 映射
                presets: ['@babel/preset-env']
            }
        }
    }
]
```
3. es6类写法打包，babel官网搜索decorators可以查看在线教程

yarn add @babel/plugin-proposal-class-properties -D

```js
rules: [
    {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                // 映射
                presets: ['@babel/preset-env'],
                // 配置小插件
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        },
        include: path.resolve(__dirname, 'src'),  // 仅查找src
        exclude: /node_modules/  // 排除node_modules
    }
]
```
4. 类的装饰器

安装：yarn add @babel/plugin-proposal-decorators -D
```js
{ "plugins": [ 
    ["@babel/plugin-proposal-decorators", { "legacy": true }], 
    ["@babel/plugin-proposal-class-properties", { "loose" : true }] 
] }
```
5. 节省代码大小，抽离公共的代码，使用generator语法

（1）`yarn add @babel/plugin-transform-runtime -D`， transform-runtime可以抽离webpack打包公共的代码；

yarn add @babel/runtime -S，runtime针对运行时的，需要装在生产依赖
```json
{ "plugins": ["@babel/plugin-transform-runtime"] }
```
（2）yarn add @babel/polyfill , 解析es7语法，includes在打包之后会自动添加一个Array的原型上；
```js
require('@babel/polyfill);
'aaa'.includes('aa');
```



## 二、安装eslint

（1）yarn add eslint eslint-loader -D

（2）修改rules
```js
rules: [
    {
        // loader规则可以写多少, 与babel得分开一个对象
        test: /\.js$/,
        use: {
            loader: 'eslint-loader'
        },
        enforce: 'pre', // 强制在其他的loader之前执行
        exclude: /node_modules/   // 所有解析js都会找node_modules
    }
]
```
（3）到eslint官网下载`.eslintrc.json`文件放到项目根目录；



## 三、暴露全局变量


loader类型：

    pre 前面执行的loader，
    
    normal 普通loader ，
    
    内联loader，
    
    后置postloader

yarn add jquery

yarn add expose-loader -D
```js
rules: [{
    test: require.resolve('jquery'),
    use: 'expose-loader?$' //将jquery作为$符挂载到全局
}]
```
（2）在每个模块都注入jquery，在webpack.config.js下面的plugins写入
```js
let webpack = require('webpack')
module.exports = {
    ...
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery' //将jquery作为$符暴露出去, 之后就可以在项目中使用$符了
        })
    ],
    externals: {
        jquery: '$' // 加上之后在项目中即使引入import jquery都不会继续被打包了
    }
}
```
（3）除了上述方法，当然也可以使用cdn放在html文件里面



## 四、打包图片

1. 解析js的img

安装yarn add file-loader -D

默认会保存图片到build目录下，图片必须使用require或import导入才会被打包，否则会默认为一个字符串，当使用background-img不需要require，因为css-loader会自己转化require；
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    }
}
```
2. 解析html标签的img

安装：yarn add html-withimg-loader -D
```js
rules: [{
    test: /\.html$/,
    use: 'html-withimg-loader'
}]
```
3. 将图片转化base64引入

安装 yarn add url-loader -D

当转换base64之后就不会加载http的请求了，但文件会比原文件大三分之一
```js
rules: [{
    test: /\.(png|jpg|gif)$/,
    // 做限制：当小于多少k时使用base64
    use: {
        loader: 'url-loader',
        options: {
            limit: 200*1024,    //字节单位 当小于200k则转化base64,
            outputPath: '/img/',  // 在打包后将图片输出到img目录下;
            fallback: 'file-loader' // 当超过200k则使用file-loader处理
        }
    }
}]
```
4. 图片优化

使用imagemin-webpack-plugin可以压缩图片

使用webpack-spritesmith 插件制作雪碧图



## 五、打包文件分类

1. 在loader里面配置，在输出的文件名可以直接加一个路径，如：'css/1.css'，
2. 给所有的css或img添加统一的引入地址
```js
output: {
    filename: 'bundle.js',
    publicPath: 'http://baidu.com'
}
```
3. 给单独的文件添加统一的引入地址，

在单独的loader里面添加publicPath即可；

