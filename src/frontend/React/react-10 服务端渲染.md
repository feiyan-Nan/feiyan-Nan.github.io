# React-10 服务端渲染
## 一、CSR与SSR
![image](https://notecdn.hrhe.cn/images/react-10_服务端渲染-01.png)

1. CSR：客户端渲染（Client Side Render）
过程：
* ①浏览器发送请求
* ②服务器返回空白HTML(HTML里包含一个root节点和js文件)
* ③浏览器下载js文件
* ④浏览器运行react代码
* ⑤页面准备就绪


即：当前页面是由js文件渲染出来的；

SEO (搜索引擎优化)，搜索关键词的时候排名，对大多数搜索引擎，不识别JavaScript 内容，只识别 HTML 内容。 （注：原则上可以不用服务端渲染时最好不用，所以如果只有 SEO 要求，可以用预渲染等技术去替代；

2. SSR：服务端渲染（Server Side Render）
过程：
* 浏览器发送请求
* 服务器运行react代码生成页面并返回HTML页面
* 浏览器下载HTML文档
* 页面准备就绪


即：当前页面是由服务器生成好给到浏览器的；



## 二、ReactDOMServer类库

react-dom/server包提供了组件的服端渲染功能，返回值是一个html
1. 渲染为html：renderToString
```jsx
ReactDOMServer.renderToString(element);
```
2. 渲染为静态HTML：renderToStaticMarkup
该方法与renderToString方法类似，但这个方法不会生成额外的DOM特性，如：data-react-id等 React内部所使用的特性。当你想使用一个简单的静态页面生成器时这个方法非常有用，它会剥离额外的特性且会节省大量字节。
```jsx
ReactDOMServer.renderToStaticMarkup(element)
```
简单用法：在页面没有展示时，渲染的是该html，给页面添加骨架屏
```jsx
var html = ReactDOMServer.renderToStaticMarkup(
    <skeleton/>
)
document.getElementById('root').innerHTML = html
ReactDOM.render(<App />, window.root) // window.root相当于上面的获取id为root的
```
