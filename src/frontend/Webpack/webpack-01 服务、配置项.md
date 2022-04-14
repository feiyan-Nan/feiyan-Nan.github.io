# Webpack-01 服务、配置项
## 一、安装
1. `yarn init -y` 安装依赖
2. `yarn add webpack webpack-cli -D`    需要安装开发依赖，上线不需要；
   `webpack`可以进行0配置，配置很弱；
3. 打包命令：`npx webpack`

`webpack`是一个打包工具，打包输出后的结果；

默认直接js模块化；




## 二、手动配置webpack
1. 默认配置文件的名字：`webpack.config.js`

```js
const path = require('path')
module.exports = {
    mode: 'development', 
        /* 默认两个环境 
         * development  打包之后不会压缩一行
         * production 打包之后会将文件代码压缩一行
         */
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.[hash:8].js', // 打包的同时添加hash戳,解决缓存,:8只显示8位
        path: path.resolve(__dirname,'dist')  // 必须使用绝对路径
    }
}
```
2. 指定配置文件的名字：`npx webpack --config <名字>`
   
   如果执行的代码太长，可以在`package.json`里面的scripts来添加；

```json
// package.json
"scripts": {
    "build": "webpack --config"
}
```
3. `npm run build`，默认运行的script脚本里面的代码，如果需要传入参数，需要带--两个横杠；



### 取命令行的参数
`process.argv`：返回一个数组，第一个元素是`process.execPath`（`node`的位置），第二个元素是正在执行的`javascript`文件，其余元素是其他命令行的参数；

1. `process.argv`，数组最后一位可以取到 -- 后面的参数，如：`node scripts/build.js --dev`   取`dev`（`package/scripts`脚本下的命令，不是cmd终端下的命令）；
2. `process.env.npm_lifecycle_event`，取`script`脚本里面的命令，如：`npm run build`，取`build`；
3. `process.env.npm_config_cdn`，cdn为可改变的，当运行`npm run build --cdn`，会返回true，如果将cdn改成dev，则运行`npm run build --dev`会返回true，其他返回空或undefined；




## 三、启动服务
1. `webpack`打包时，默认是访问文件路径的；
2. 安装：`yarn add webpack-dev-server -D` 安装开发依赖；
3. 安装之后直接运行：`npx webpack-dev-server`，默认在本地启的服务器是`localhost:8080`，默认以当前目录作为静态目录，可以在`devServer`选项配置；

```js
// webpack.config.js
module.exports = {
    ... 
    devServer: { // 开发环境配置
        port: 3000, // 端口
        progress: true, // 打包进度条
        contentBase: './build', //静态服务的路径
        open: true // 自动打开浏览器
    }
}
```
之后可以在`package.json`里面配置启动了
```json
"scripts": {
    "dev": "webpack-dev-server"
}
```
4. 自动创建html文件并引入；

（1）安装：yarn add html-webpack-plugin -D

（2）配置html

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    ...
    plugins: [ // 数组，放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html', //  模块目录;
            filename: 'index.html', // 打包后的名字
            minify: { // 对html文件进行处理,压缩html文件
                removeAttributeQuotes: true, // 删除html文件中的双引号
                collapseWhitespace: true, // 变成一行
            },
            hash: true, // 添加hash戳 解决缓存的问题
        })
    ]
}
```



## 四、配置loader

1. `loader`的特点：希望单一；
2. `loader`的用法：字符串只用一个loader，多个使用数组
3. `loader`的顺序：从右向左执行，从下到上执行；
4. `loader`还可以写成对象的形式

如：`{use:[{loader:'',options:{}}]}`，可以在`options`传入东西

案例：

配置css-loader

1. yarn add css-loader style-loader -D

```js
module.exports = {
    module: { // 模块
        rules: [ // 规则, 里面有很多 css-loader 解析@import这种语法
            {
                test: /\.css$/, // 文件匹配正则
                // style-loader 他是把css插入到head的标签中
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top' // 将模块中写的css样式默认插到层级的最下边, 在html模板中写的css层级更高
                    }
                }, 'css-loader']
            }
        ]
    }
}
```
2. 添加scss处理

（1）安装：`yarn add sass-loader node-sass -D`（sass-loader依赖node-sass）

```js
rules: [
    // use顺序从右向左, 需要先处理sass-loader之后再css;
    {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
]
```
3. css抽离成单文件（默认是在html模块里面的）

（1）安装：`yarn add mini-css-extract-plugin -D`

（2）将`rules`里面的`style-loader`替换成该插件，如果需要多个文件，可以声明多个插件即可

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin1 = require('mini-css-extract-plugin') // 当需要多个css文件时, 可以复制一份;
module.exports = {
    module: {
        rules: [
            {test: /\.css$/, use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          }, 'css-loader']},
            {test: /\.scss$/, use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          }, 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'  
            // 如果想输出到单独的文件夹，可以直接加路径 css/main.css
        })
    ]
}
```

4. 自动添加兼容前缀

（1）安装：`yarn add postcss-loader autoprefixer -D`

（2）配置rules

```js
rules: [
    // 先处理postcss-loader, 之后再处理css-loader
    {test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader']},
    {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']}
]
```
（3）在根目录创建`postcss.config.js`
```js
module.exports = {
    plugins: [require('autoprefixer')]
}
```
5. css打包成一行

（1）安装插件：`yarn add optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin -D`

```js
let optimizeCssAssetsWebpackPlugin =  require('optimize-css-assets-webpack-plugin')
// 用了css优化, 必须优化js, 否则js就不是一行了
let UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    .....
    optimization: { // 优化项
        minimizer: [
            new UglifyJSPlugin({
                cache: true, // 缓存
                parallel: true, // 并发
                sourceMap: true // sourceMap
            }),
            new optimizeCssAssetsWebpackPlugin({})
        ]
    }
}
```

