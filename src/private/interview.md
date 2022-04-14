#  面试复习
## html
### 图片下面空白距离清除方法
1. 图片转块
2. 设置 vertical-align
3. 父元素设置font-size 0

### 清除浮动方法
1. 父元素加高度
2. 浮动元素加overflow 属性
3. 加一个空的块， 添加样式clear: both
4. 给父元素加浮动

### BFC的特性
1. 内部的标签会在垂直方向一个接一个的放置
2. 垂直方向上的距离由margin决定，同一个bfc的两个相邻标签的margin会发生重叠
3. 每个标签的左外边距与包含块的左边界相接触（从左至右），即使浮动标签也是如此
4. bfc区域的不会与float标签区域重叠
5. 计算bfc的高度时，浮动子标签也参与计算
6. bfc就是一个隔离的独立容器，容器里面的子标签不会影响到外面的标签

### 垂直居中方法
1. 绝对定位 + 相对定位，top 50%, left 50%,之后margin left/top 各种一半
2. 绝对定位 + 相对定位 之后四个方位0，然后margin auto
3. 利用flex布局
4. 利用grid布局

### 回流和重绘
回流：布局或属性需要改变就叫回流
重绘：当节点需要更改外观而不会影响布局的，叫作重绘
回流一定重绘，重绘不一定回流
回流：
  * 改变window大小
  * 改变字体
  * 添加或删除样式
  * 文字改变
  * 定位或浮动
  * 盒模型

减少重绘与回流
  * 使用translate替换top
  * 使用visibility替换display: none

## js
### 数据类型各类
基本数据类型：undefined、null、boolean、string、number、symbol、bigint
基本包装类型：string、number、boolean
复杂数据类型：array、object、function、math、regexp

### 检测数据类型
instanceof
Object.prototype.toString.call
typeof
constructor
`__proto__`

### new操作符
1. 创建了一个空对象
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
3. 执行构造函数中的代码
4. 返回新对象
```js
function create() {
  var obj = new Object();
  var fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  var result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
```

### 斐波那契
```js
function fn(n) {
  if(n === 1 || n === 2 ) return 1;
  return fn(n - 1) + fn(n - 2)
}
```

### 数组常用方法
改变原数组：push、pop、shift、unshift、splice、sort、reverse
其他方法：concat、join、indexOf、include、flat
**常用迭代方法**：every、some、forEach、map、filter、reduce
转变真数组：Array.from、[].slice.call(arguments)、Array.prototype.slice.call(arguments)


### 继承
1. 原型链接继承
```js
B.prototype = new A()
```

2. 构造函数式继承
```js
function B() { A.apply(this, arguments) }
```

3. 组合式继承
```js
function B() { A.apply(this, arguments) }
B.prototype = new A()
B.prototype.constructor = B
```

4. 原型式继承
```js
function Create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
var obj = {name: 'hh'}
var obj2 = Create(obj)
```

5. 寄生式继承
```js
function copyObj(obj) {
  var clone = Object.create(obj)
  clone.say = function(){console.log('hello')}
  return clone
}
```

6. 寄生式组合式继承
```js
function Parent() {Son.apply(this, arguments)}
Parent.prototype = Object.create(Son.prototype)
Parent.prototype.constructor = Parent;
```

7. extends

### 闭包
闭包是在函数创建的时候，让函数打包带走的根据函数内的外部引用来过滤作用域剩下的链，它是在函数创建时生成的作用域链的子集，是打包的外部环境，eval无法分析内容，一般是把整个作用域打包（尽量不要使用eval，避免保存过多的无用变量）；作用域链只会包含外部函数变量，不包含本身

闭包是在返回一个函数时，为了把环境保存下来，创建的一个快照，对作用域链做了tree shking，只留下必要的闭包链，保存在堆里，作为对象的`[[scope]]`属性，让函数不管走到哪，都可以随时随地的访问外部环境，在执行这个函数时，会利用这个快照，恢复作用域链



### 垃圾回收机制
标记清除：声名时被引用，之后使用完标记清除
引用清除：使用记数的方法，如果这个数没有加过，就清除

### event loop
event loop是浏览器或node的一种解决javascript单线程运行不会阻塞的一种机制，也是异步的原理
由于js是单线程的，一些高耗时操作就带来了进程阻塞的问题，为了解决这个问题，js有两种任务执行方式，分为同步模式和异步模式
在异步模式下，创建异步任务主要分为宏任务和微任务
宏任务：script、setTimeout、setInterval、setImmediate
微任务：promise、process.nextTick、mutationObserver

event loop执行顺序如下：
1. 首先执行同步代码，这属于宏任务
2. 当执行完所有同步代码后，执行栈为空，查询是否有事件队列需要执行
3. 执行所有微任务
4. 当执行完所有微任务后，如有必要会渲染页面
5. 然后开始下一轮event loop，执行宏任务中的异步代码，也就是setTimeout中的回调函数

### 防抖函数
```js
function debounce(func, wait=500) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
```

### 节流函数
```js
function throttle(fn, wait) {
  var pre = Date.now()
  return function(...args) {
    var now = Date.now()
    if(now - pre >= wait) {
      fn.apply(this, args)
      pre = Date.now();
    }
  }
}
```

### 跨域
浏览器中的同源策略指的是：协议、域名、端口号相同，如果不同就会产生跨域
浏览器为了给用户提供一个安全的浏览环境，因此禁止跨域
页面中有几个标签的引入是不受同源策略影响的，如img、script、link

实现跨域：
jsonp
cors
webpack
nginx
postMessage
document.domain
window.name
location.hash
websocket
也可以通过修改hosts文件解决当前跨域

### 从url输入到页面展现到底发生了什么
1. dns解析，将域名解析成ip地址
2. tcp连接，tcp进行三次握手
3. 浏览器发送http请求
4. 服务器处理请求并返回http报文
5. 浏览器解析渲染页面

  1. 解析html，生成dom树，解析css，生成cssom树
  2. 将dom树和cssom树进行结合，生成渲染树
  3. 根据生成的渲染树，进行回流，得到节点的几何信息
  4. 根据几何信息，得到节点的绝对像素
  5. 将像素发给GPU，展示在页面上
6.断开连接，tcp四次挥手

### 前端常见攻击方式
* XSS攻击  ---- 跨站脚本攻击，向页面中插入恶意脚本执行
* CSRF攻击  ---  跨站请求伪造，冒充用户发送请求
* Sql注入  ---- 在用户输入框输入sql命令进行攻击
* html脚本注入 

### 网站优化方案
* 合并、压缩、混淆html/css/js文件
* nginx开启gzip压缩
* 图片资源使用cdn地址
* 图标做base64处理
* 样式表放首部、js放尾部
* 设置缓存（强缓存和协商缓存，提高加载速度）
* link或者src添加rel属性，设置prefetch或preload可预加载
* spa项目通过import或者require做路由按需加载
* 服务端渲染ssr，加快首屏渲染
* 页面使用骨架屏
* 图片使用懒加载

### 对象遍历的方法
* 使用for..in
* 使用Object.keys
* 使用Object.enteries

###  缓存
缓存分为 memory cache和disk cache，内存缓存和硬盘缓存
会先读取内存，再读硬盘，几乎所有的网络请求都会被浏览器放进memory cache，关闭浏览器就会失效，之后读取disk cache

disk cache又分为强制缓存和协商缓存（也叫对比缓存）
强制缓存是指客户端请求后，会先访问缓存数据库看缓存是否存在，如果存在直接返回，不存在则请求服务器，响应后再缓存
强制缓存直接减少请求次数，提升最大的缓存策略，可以造成强制缓存的字段是cache-control和expires
cache-control可以设置的字段：max-age、no-cache、no-store、public、private



当服务器要请求资源时
1. 调用service woker的fetch事件响应
2. 查看memory cache
3. 查看disk cache
   * 如果有强制缓存未失效，则使用，不请求服务器，这里状态码全是200
   * 如果有强制缓存已失效，则查看协商缓存，比较后确定304还是200


### 实现一个call
```js
Function.prototype.myCall = function(context, ...args) {
  context = Object(context) || window;
  context.fn = this;
  let result = context.fn(...args)
  delete context.fn;
  return result;
}
```

### 实现一个apply
```js
Function.prototype.myApply = function(context, args) {
  context = Object(context) || window;
  context.fn = this;
  let result = args ? context.fn(...args) : context.fn()
  delete context.fn;
  return result;
}
```

### 实现一个bind
```js
Function.prototype.myBind = function(context, ...args) {
  var that = this
  return function F() {
    if(this instanceof F) return new that(...args, ...arguments)
    return that.apply(context, args.concat(...arguments))
  }
}
```


### es6常用方法
* let、const
* 解构赋值
* 箭头函数
* ...扩展运算符
* 异步处理 Promise、async、generator
* 问号链，双问号
* symbol、Map、Set

### Promise
实例方法：
* then、catch、finally
静态方法：
resolve、reject、all、race、try


## Vue和React的区别
1. 监听数据变化实现的原理不同    
     vue通过getter/setter劫持，react通过比较引用 
2. 数据流不同    
     vue通过v-model，react通过setState/onChange 
3. HOC和mixin   
     vue使用的mixin方式，react使用HOC的方式
4. 组件通信的区别    
     vue使用provide/inject的方式隔代传值，react使用context进行隔代 
 5. 模板渲染方式不同    
      react使用的是jsx，vue使用的是拓展的html语法 
  6. vuex和redux不同    
      vue使用dispatch和commit提交更新，this.$store直接获取，可以通过直接修改state值 
      react使用dispatch  action的方式，需要使用connect连接组件才能获取，需要返回所有状态，不能直接返回




## Vue
### vue组件传值
props/$emit
$children/$parent
ref
$attrs/$listenrs
eventBus
vuex
localStorage/sessionStorage
inject/provide

### vue生命周期
beforeCreated
created
beforeMounted
mounted
beforeUpdate
updated
beforeDestory
destroyed
actived
deactived

### 路由守卫
全局守卫
beforeEach
afterEach

路由守卫
beforeEnter

组件守卫
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
动态路由管理权限渲染路由：addRoutes

### 路由实现方式：
hash模式：利用hashChange监听url的变化
history模式  利用h5的history.pushState和history.replaceState特性；

### Vuex
state
mutations
actions
getters
model

Vue.extend进行插件开发

### 设置key和不设置key的区别
不设key，新旧对象进行头尾两端的相互比较
设key，除了头尾两端之外，还会从key生成的对象index进行查找匹配，比不设key更高效

### Vue逻辑复用方法
添加全局方法或属性，直接挂载到vue实例上
directive 自定义指令
mixin  混入
Vue.component 注册组件



