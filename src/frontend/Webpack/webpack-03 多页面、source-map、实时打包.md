# Webpack-03 多页面、source-map、实时打包
## 一、打包多页面应用
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    // 多入口
    entry: {
        home: './src/index.js',
        other: './src/other.js'
    },
    output: {
        // [name]就是一个变量,代表home或ohter 代表多出口
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks: ['home']  //代码块,放home js文件
        }),
        // 当多页面应用时需要new两个,不能使用变量[name]
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            chunks: ['other']
        })
    ]
}
```


## 二、配置source-map
1. 当为production生产模式时，代码会被压缩成一行，我们无法进行调试，因此可以对source-map进行配置
```js
module.exports = {
    ...
    // 1) 源码映射, 会单独生成一个sourcemap文件, 文件较大, 出错了会标识当前报错的列和行
    // devtool: 'source-map' //增加映射文件, 可以进行调试源代码

    // 2) 不会产生单独的文件, 但会显示报错的列和行, 会集成到js文件中
    // devtool: 'eval-source-map'

    // 3) 不会产生列, 但是会生成一个单独的映射文件
    // devtool: 'cheap-module-source-map',  // 产生后可以保留起来, 用来调试

    // 4) 不会产生文件, 集成在打包文件中, 不会产生列
    devtool: 'cheap-module-eval-source-map'
}
```

## 三、实时打包
当每次修改文件之后，就会自动进行代码打包npm run build， 只需要运行一篇npm run build，就会一直在终端等待代码更改，并实时进行打包
```js
module.exports = {
    watch: true,
    watchOptions: { // 监控选项
        poll: 1000, // 每秒问我1000次
        aggregateTimeout: 500, // 防抖功能, 500毫秒只打包一次
        ignored: /node_modules/,  // 忽略文件不监控
    }
}
```

## 四、webpack小插件
1. 每次打包删除dist目录

安装：yarn add clean-webpack-plugin -D
```js
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    plugins: [
        new CleanWebpackPlugin('./dist')  // 当清空一个文件夹时传入字符串, 当多个文件夹时, 传入一个数组
    ]
}
```
2. 将js代码之外的文件也打包到dist目录下

安装：yarn add copy-webpack-plugin -D
```js
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    plugins: [
        new CopyWebpackPlugin([
            {from: './doc', to: './'}  // 拷贝多个就写多个对象
        ])
    ]
}
```
3. 打包版权声明，webpack内置的插件

打包之后会将写入的话添加到每个js文件开头
```js
const webpack = require('webpack')
module.exports = {
    plugins: [
        new webpack.BannerPlugin('make hny 2019/12/05')
    ]
}
```


## 五、webpack跨域问题
webpack由于内置启动了一个服务，因此默认安装了express，可以直接使用express
```js
module.exports = {
    devServer: {
        // 1) 重写请求地址
        // '/api': 'http: //localhost:3000' // 访问api开头的都去3000端口查找,
        // 由于后端接口不一样全是api开头,因此需要重写路径
        '/api': {
            target: 'http://localhost:3000',
            pathRewrite: {
                '/api': ''
            }
        }

        // 2) 当只想单纯模拟数据时
        before(app){  // 相当于一个钩子
            app.get('/user',(req,res)=>{
                res.json({name: 'hny'})
            })
        }

        // 3) 自己写的服务端, 不想用代理处理, 在服务端启动webpack, 端口用服务端的端口
    }
}
```
2. 在服务端启动webpack，不需要npm run dev了，直接运行server.js文件自动启动webpack，将前后端开发到一起，请求数据不存在跨域问题

安装：yarn add webpack-dev-middleware -D
```js
// server.js

const express = require('express')
const app = express()
const webpack = require('webpack')

const middle = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const compiler = webpack(config)
app.use(middle(compiler)) // 使用中间件

app.get('/user', (req,res)=>{
    res.json({name: 'hny'})
})

app.listen(3000)
```
当启动node server.js会同时启动webpack



## 六、resolve

```js
module.exports = {
    resolve: { // 解析第三方模块
        modules: [path.resolve('node_modules')], //模块首先到node_modules查找, 不要到上一层目录查找了,如果有其他模块可以继续在数组里面添加
        alias: { // 别名, 解决引入地址太长
            
        },
        mainFields: ['style', 'main'] // 先查找style字段, 再查找main
        // mainFiles: [], // 入口文件的名字 index.js   当引入的直接是文件名时, 首先查找index.js文件
        extensions: ['.js', '.css', '.json']  // 当省略扩展名时, 自动从左至右顺序查找文件
    }
}

```


## 七、定义环境变量

1. 通过`webpack.DefinePlugin`添加全局变量，写好之后在项目里面可以直接通过DEV进行判断，是什么环境了；
```js
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production'), // 因为直接写字符串production会是一个变量, 因此需要转字符串
            FLAG: 'true' // 布尔值不需要转字符串
        })
    ]
}

// demo.js
let url = ''
if(DEV){
    url = 'http://localhost:3000'
} else {
    url = 'http://heny.vip'
}
console.log(url)
```
2. 添加两个配置文件

生产配置文件：webpack.prod.js

开发配置文件：webpack.dev.js

基础配置文件：webpack.base.js       通过基础引入prod或dev；

安装：yarn add webpack-merge -D

（1）webpack.prod.js
```js
const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = smart(base, {
    mode: 'production'
})
```
（2）webpack.dev.js
```js
const {smart} = require('webpack-merge')
const base = require('./webpack.base.js')
module.exports = smart(base, {
    mode: 'development'
})
```
当开发时需要指定config文件： npm run start -- --config webpack.dev.js 中间两个杠指传参



## 八、指定运行时的环境变量

1. 安装插件：`npm install cross-env`

2. 在`package.json`文件配置

   ```json
   "start": "cross-env NODE_ENV=development webpack"
   ```

3. 之后在文件中取：`process.env.NODE_ENV`