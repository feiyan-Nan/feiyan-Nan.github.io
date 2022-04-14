# Webpack-04  优化、动态链接库、多线程打包
## 一、分析包内容
用于查看哪个包占用内容多大
1. 安装：`webpack-bundle-analyzer`
```bash
npm install webpack-bundle-analyzer -S
// or
yarn add -D webpack-bundle-analyzer
```
2. 配置webpack.js
```js
// 分析包内容 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; 
module.exports = {
 plugins: [ 
    // 开启 BundleAnalyzerPlugin 
    new BundleAnalyzerPlugin(), 
 ], 
};
```
## 二、优化
1. `noParse`

由于包没有引用其他模块，因此使用该方法，不去解析某个包，比如jquery
```js
module: {
    noParse: /jquery/, // 当引入jquery时，不去解析
    rules: []
}
```
2. `exclude &  include`

exclude不包含某个文件夹，include包含某个文件夹，一般两者使用其一即可，

一般解析js文件时，也会找node_module，因此需要加上exclude
```js
module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_module/,
        include: path.resolve('src')
    }]
}
```
3. `webpack.IgnorePlugin`

忽略包内部引入的所有文件，使用IgnorePlugin配置

当引入moment时，会默认加载所有的locale文件，因此需要忽略掉，只引入zh-cn文件
```js
const webpack = require('webpack')
module.exports = {
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale//, /moment/) // 第一个忽略谁, 第二个引入什么的时候
    ]
}
```



## 三、dllplugin 动态链接库

由于每次打包很慢，因为每次都在对react库重新进行打包，因此需要提取一下

1. 创建一个新的js文件，并打包一次

（1）安装clean-webpack-plugin插件，用于清除之前冗余的dll文件

（1）`webpack.config.other.js`     名字随意
```js
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom'], //这里写入一些提取的js
    others: ['axios', 'js-cookie'] // 其他的js, 数组里面的值越多, js文件越大, 如果太多可以分开写, 再单独写一个文件
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]' //提取名字, 直接取entry的名字react
  },
  plugins: [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '_dll_[name]', // 需要和library名字一样
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}
```

（2）写完之后就可以运行`npx webpack --config webpack.config.other.js`     打包一次

（3）打包之后会看到dist目录下面已经有了，在模板index.html文件里面引入，这个是需要写死的，有多少写多少
```html
<script src='/_dll_react.js'></script>
<script src='/_dll_other.js'></script>
```
2. 修改webpack.config.js文件
```js
const webpack = require('webpack')
module.exports = {
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}
```
摘抄： https://blog.csdn.net/janyxh/article/details/100131082



## 四、多线程打包

当项目比较大时，可以使用happypack打包，如果项目比较小，使用happypack打包不如原来的打包速度更快
1. 安装：`yarn add happypack`
2. 替换rules里面的use规则
```js
const Happypack = require('happypack')
module.exports = {
    module: {
        rules: [
            {test: /\.js$/, use: 'Happypack/loader?id=js'}, // 将js传入
            {test: /\.css$/, use: 'Happypack/loader?id=css'} // 如果是css打包
        ]
    },
    plugins: [
        new Happypack({
            id: 'js',
            // 将use以前的配置放在这里
            use: [{
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-env', '@babel/preset-react']}
            }]
        }),
        // 多个再new一次
        new Happypack({
            id: 'css',
            use: ['style-loader', 'css-loader']
        })
    ]
}
```

![img](https://upload-images.jianshu.io/upload_images/1967135-2edd36749223cd32.png?imageMogr2/auto-orient/strip|imageView2/2/w/416/format/webp)

以上显示3个进程为已经开启了打包；



## 五、webpack内置优化项

1. `tree-shaking`   摇晃树

import引入的代码在生产环境下，会自动去除掉没用的代码，简称tree-shaking，摇晃树

2. `scope hosting`   作用域提升

在webpack3以上，会自动简化代码，如果声明的过于简洁，比如单个数字，webpack会直接省略掉



