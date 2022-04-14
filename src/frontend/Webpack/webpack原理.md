# Webpack原理
## 作用：

（1）打包：可以把多个JavaScript文件打包成一个文件，减少服务器压力和下载宽带；

（2）转换：把扩展语言转换成普通的JavaScript语言，让浏览器识别更顺利运行；

（3）优化：前端变的越来越复杂后，性能也会遇到各种问题，webpack肩负起优化和提升的责任；



## 打包原理：

识别入口文件，分析代码，获取模块依赖，并且将代码打包为浏览器可以识别的代码；

递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有模块打包成一个多个bundle；



## 配置webpack

```js
module.exports = {
    // 配置打包选项  development开发环境
    mode: 'dev',   // production 生产环境
    // 指定入口文件：要打包的文件
    entry: './src/js/index.js',
    // 指定输出文件：打包之后的文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.min.js'
    },
    // 配置资源的加载器 loader
    module: {
        rules: [
        // 配置js的加载器（把ES6转化为ES3/5代码）
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            //打包除这个文件之外的文件
            exclude: path.join(__dirname, './node_modules'),
            //打包包括的文件
            include: path.join(__dirname, './src')
        },
        // 配置css的加载器
        {
            // 匹配.css结尾的文件
            test: /\.css$/,
            // 配置css文件的加载器,处理顺序：从右向左
            use: ['style-loader', 'css-loader']
        },
        // 配置less的加载器
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }
        ]
    },
    // 配置插件
    plugins: [
        new CleanWebpackPlugin(),
        // 动态生成html
        new HtmlWebpackPlugin({
            title: '测试标题',
            template: 'index.html'
        })
    ],
    // 配置实时预览环境
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000
    }
}
```

`mode`  配置环境是开发环境还是生产环境

`entry`   指定入口文件

`output`   指定输出文件

`module`    模块

`rules`    配置js的加载器

`loader`   模块转换器

`plugins`   扩展插件



## webpack运行流程

1. 初始化参数
2. 开始编译
3. 确定入口
4. 编译模块
5. 完成模块编译
6. 输出资源
7. 输出完成


