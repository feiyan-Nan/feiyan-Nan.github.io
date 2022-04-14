# node-04 express 跨域
## 一、第三方包 express

下载官网： [http://www.expressjs.com.cn](http://www.expressjs.com.cn)

安装：`npm i express`；

安装之后：npm init -y   建立package.json；

1. 创建一个服务器；
```js
const express = require('express')   // 引入
let app = express()   // 使用
app.listen(80)   // 监听
app.get('/',(req,res)=>{})   //设置路由
```

2. 请求方式可以使用get,post,put,delete......；

    app.all：代表全部路由，一般写在页面最底部，用来响应404的；

    当多个相同的路径不同的请求方式时，找到一个则不找下一个；
```js
const app = require('express')()
app.listen(8080,()=>{console.log('监听成功...');
app.get('/',(req,res)=>{res.send('哈哈')});
```



## 二、url参数

### 传参

* get传参时，通过?后面传参；
* post传参点击postman软件的params添加；

### 接收参数：

* 查询字符串接收使用req.query；
* path路径使用req.params；

path路径是伪静态，对网络蜘蛛有优化，写地址需要带动态的，需要冒号写:name；

:nid/:page，接收之后是{nid:123,page:11}；

### 使用 URLSearchParams接口

```js
var query = new URLSearchParams(url);
```

* 获取单个字段：`query.get(key)`; 括号获取具体的名；
* 查询：`query.has(key)`；判断是否存在；
* 添加字段：`query.append(key,value)`；
* 删除：`query.delete(key)`；
* 修改：`query.set(key,value)`；
* 转回去：`query.toString()`；转回路由；

`urlsearchParams`配合`Object.fromEntries()`；将假对象转换为真对象；

```js
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// { foo: "bar", baz: "qux" }
```



## 三、路由

1. 设计路由
   * 请求方式：get、post、put、delete.....
   * 根据path（请求地址）不同，返回不同的响应；

2. url地址还可以写正则表达式，

3. `res.send()`：括号填写需要显示的内容，能根据返回的内容自动识别返回的类型（不需要设置头信息就可以显示）；

   里面也可以存放script标签，这样可以向前台传输alert和location跳转页面；

4. `res.sendFile(path)`；开放静态页面；需要填写绝对路径

   ```js
   res.sendFile(`${__dirname}/index.html`)
   ```

5. 所有路由都是从'/'根开始的；

6. `app.method(path,callback)`；获取响应方式；



## 四、路由模块化

作用：将路由地址的部分单独拧出来；

1. 创建/routers/users.js

   ```js
   //* /router/users.js
   const express = require('express') 
   const routers = express.Router()   // 创建模块化
   routers.get('/list', (req,res) => {
       res.send([{}])
   }) 
   module.exports = router
   ```

2. 修改app.js

   ```js
   const routes = require('./router/users.js')
   app.use('/api/users', routes)
   ```

之后users.js文件夹下面的所有api访问都需要添加/api/users的前缀了；



## 五、express跨域问题

1. 将以下内容加到路由下面的头信息，设置之后不需要跨域了；cors解决的；
```js
// 允许哪个源可以访问
res.header('Access-Control-Allow-Origin', '*');
// 允许携带那个头访问
res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
// 允许哪个请求方法访问
res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
// 允许携带cookie  当origin设置*之后，不允许设置该选项
res.header('Access-Control-Allow-Credentials', true)
// 预检的存活时间
res.header('Access-Control-Max-Age', 6)
// 允许前端获取哪个头信息
res.header('Access-Control-Expose-Headers', 'name')
```
2. 使用中间件给所有请求添加请求头
```js
app.use((req,res,next) => {
    // 这里可以直接拿origin：req.headers.origin
    // 也可以直接判断origin是否在白名单，才进行往下面走
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
```

2. 查看ajax完整的错误信息
```js
error: (XMLHttpRequest, textStatus, errorThrown) => {
    console.log(XMLHttpRequest.responseText);
    console.log(XMLHttpRequest.status);
    console.log(XMLHttpRequest.readyState);
    console.log(textStatus); // parser error;
}
```





put、post等等请求会发送options请求进行跨域检测，当允许跨域时才会发送请求，此时可以在node中间件中进行设置：

```js
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS')
    res.setHeader('Access-Control-Max-Age', 6) // 6秒不重新发送options
    if(req.method === 'OPTIONS') {
        res.end() // OPTIONS请求不做任何处理
    }
})
```









## 六、接收前端传入的数据post

1. 下载第三方npm包(body-parser)；

2. 引入模块
```js
const bodyParser = require('body-parser')
```
3. 加载json中间键
```js
app.use(bodyParser.json())
```
4. 加载解析urlencoded请求体的中间件。
```js
app.use(bodyParser.urlencoded({extended:false}));
```
5. req.body，显示传入的data数据；

使用postman测试接口：点击params---body----x-www-form-urlencoded；

以上方法已废弃，直接使用express即可
```js
app.use(express.json())
app.use(express.urlencoded({extended:false}));
```



## 七、node修改自动重启  热更新

1. 全局安装：`npm i -g nodemon`
2. 在项目根目录（和服务入口文件同级）创建一个文件`nodemon.json`并写入（为了配置，如果不需要则不用配置），之后启动项目需要`nodemon index.js`启动
```json
{
    "restartable": "rs",
    "ignore": [
        ".git",
        ".svn",
        "node_modules/**/node_modules"
    ],
    "verbose": true,
    "execMap": {
        "js": "node --harmony"
    },
    "watch": [

    ],
    "env": {
        "NODE_ENV": "development"
    },
    "ext": "js json"
}
```
3. 修改入口文件
```js
const debug = require('debug')('my-application')
app.listen(80, ()=>{
    debug('服务器运行在80端口上')
})
```
4. 修改package.json的script运行脚本
```json
"scripts": {
    "start": "nodemon ./index.js"
}
```
之后就可以直接npm start启动服务了

nodemon支持指定监听文件

```js
nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node' src/index.ts
```





## 八、使用脚手架快速生成express框架

> 官网：[https://github.com/expressjs/generator](https://github.com/expressjs/generator)

1. 安装：`npm install express-generator -g`

2. 生成jade项目：`express projectName` 

   默认是`jade`模板

   生成项目之后需要进入运行`npm i`安装依赖;

   启动项目默认端口是3000；

3. 使用ejs模板项目：`express projectName -e`  

   -e表示使用ejs模板;



## 九、javascript运行机制

javascript是单线程的

主要用途是与用户交互，操作dom，因此只能是单线程，

所有同步任务都会放到栈中，回调函数都会放在任务对列，只有执行栈全部清空才会执行任务队列，回调函数比如定时器。

setTimout的最小时间是4ms，低于4毫秒自动设为4ms。


nodejs的     

process.nextTick(不推荐使用)和setImmediate的值是一个回调函数。

process.nextTick 方法可以在当前"执行栈"的尾部之前执行。比settimeout先执行，

setImmediate方法则是在当前"任务队列"的尾部添加事件，它指定的任务总是注册到下一次Event Loop时执行，同一轮的event先执行，如同setTimeout(func, 0)

多个process.nextTick语句总是在当前"执行栈"一次执行完，多个setImmediate可能则需要多次loop才能执行完。

```js
process.nextTick(function foo() {
  process.nextTick(foo);
});
```

将会一直循环递归，不会去执行其他的代码



