# node使用babel

使用之后可以让node使用100%的es6语法；

可以使用import和export导入导出；

1. 安装：`yarn add @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime nodemon -D`

2. 配置package.json

   ```json
   "scripts": {
       "start": "node ./build",
       "dev": "yarn run nodemon --exec babel-node ./bin/www",
       "build": "yarn run babel . -d build --ignore node_modules --minified && cp -r public build"
   },
   ```

   打包时需要将public文件夹复制到打包的文件夹

   也可以直接本地开发，不用打包，由于上传到服务器压缩代码成一行，因此使用build减少服务器大小；

   

3. 创建.babelrc

   ```json
   {
     "presets": ["@babel/preset-env"],
     "plugins": [
       "@babel/plugin-transform-runtime"    
     ]
   }
   ```

   

