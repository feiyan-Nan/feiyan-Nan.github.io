# Webpack-05 抽离公共模块、懒加载
## 一、抽离公共模块
如果a.js和b.js是公共的模块，在index.js和other.js文件里面都引入了，打包时则是打包两份，因此可以将a.js和b.js抽离出来，只打包一份

1. 配置optimization
```js
module.exports = {
    optimization: {
        splitChunks: { // 分割代码块
            cacheGroups: { // 缓存组
                common: { // 公共的模块
                    chunks: 'initial',
                    minSize: 0,  // 大于0字节的就抽离
                    minChunks: 2, // 引用两次一定抽离
                },
                vendor: { // 抽离第三方
                    priority: 1, // 权重,先执行抽离第三方, 再抽离前一个
                    test: /node_modules/, // 将node_modules抽离
                    chunks: 'initial',
                    minSize: 0,  // 大于0字节的就抽离
                    minChunks: 2, // 引用两次一定抽离
                }
            }
        }
    }
}
```

## 二、懒加载
场景：比如点击一个按钮之后加载一个js文件

使用webpack内置的import语法，默认会返回一个promise，

```js
const btn = document.createElement('button')
btn.addEventListener('click', function(){
    import('./a.js').then(data => {
        console.log(data.default) // 放到default属性里面的
    })
})
```
如果打包失败则需要安装一个插件，

安装：yarn add @babel/plugin-syntax-dynamic-import
```js
// 放到解析js的下面
{
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [],
            plugins: ['@babel/plugin-syntax-dynamic-import']
        }
    }
}
```