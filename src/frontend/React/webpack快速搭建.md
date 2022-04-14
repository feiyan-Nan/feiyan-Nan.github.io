# webpack快速搭建react项目

1. 创建文件夹，之后执行以下命令
   * `yarn init -y`
   * 安装webpack相关：`yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D`
   * 安装babel相关：`yarn add babel-loader@7.1.5 babel-core babel-preset-react babel-preset-env -D`  安装开发依赖
   * 安装react相关：`yarn add react react-dom` 安装到生产环境

2. 创建文件夹src/index.html，src/main.js

3. 创建.babelrc文件

   ```js
   {
     "presets":["react"]
   }
   ```

4. 创建webpack.config.js

   ```js
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const path = require('path')
   module.exports = {
     entry: './src/main.js',
     output: {
         filename: './src/main.js',
         path: path.resolve(__dirname, 'dist')
     },
     module: {
       rules: [{
         test: /\.js$/, use: ['babel-loader']
       }]
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html'
    })
     ]
   }
   ```
   
   