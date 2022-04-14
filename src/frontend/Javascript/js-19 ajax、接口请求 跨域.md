# js-19 ajax、接口请求、跨域

## 一、ajax

>  ajax（Asynchronous javascript and XML）异步的js和xml

ajax是为了实现异步请求，解决单线程的问题才存在的；

### 单线程

只有一条语句执行，如果前面的错误了，后面的无法执行；

不需要刷新整个页面，刷新页面中的一小部分，后台和服务器之间进行少量的数据交换

异步：不需要等待，可以执行其他的，定时器也是异步的；

同步：需要等待前一步执行，才能开始一下步执行；



### 工作原理：

通过XMLHttpRequest对象来向服务器发出异步请求，从服务器获得数据，然后用Javascript来操作DOM而更新页面



### ajax的优缺点

1. 优点
   * （1）页面不需要刷新，在页面内与服务器通信，给用户的体验非常好
   * （2）使用异步方式与服务器通信，不需要打断用户操作，具有更加迅速的响应能力
   * （3）可以减少服务器的负担，利用客户端闲置能力来处理任务
2. ajax的缺点：
   * （1）ajax干掉了back按钮，即对浏览器后退机制的破坏；
   * （2）安全出现问题，因为ajax技术就像是直接建立一个通道,会暴露比以前更多的数据和服务器逻辑；
   * （3）对搜索引擎的支持比较弱；
   * （4）破坏了程序的异常机制；
   * （5）违背了url和资源定位的初衷；
   * （6）一些手机设备现在还不能更好的支持ajax；



### 使用方法

```js
// 声明
var ajax = new XMLHttpRequest()
// 建立接口
ajax.open(method,url,async)
// 发送
ajax.send()
// 设置响应类型
ajax.responseType = 'json'
// 接收
ajax.onreadystatechange = function(){
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax.responseText)
    }
}
```

1. `open`方法参数

   * method分为post和get；

   * url：地址，传输或获取的地址，

   * async定义异步或同步，true是异步的，false是同步的；

2. `send`：

   1. get方式下
   2. post方式下：

   `ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=UTF-8')`;（设置头信息必须放在open后面）

   ajax.send()；必须在发送之前设置头信息，否则会报错；

3. `responseType`：可为arraybuffer 、blob、document、json、text

4. 结果

   每当 readyState 改变时，onreadystatechange 函数就会被执行。

   1. ajax.readyState，存有服务器响应的状态信息；
      * 0：未初始化，声明初始化，没有调用open；
      * 1：启动，建立接口（调用了open），没有调用send；
      * 2：发送，调用了send已经发送
      * 3：接收，等待结果（后续操作）；
      * 4：成功，已经接收到全部响应数据，而且已经可以在客户端使用了（如果写原生的js ajax请求需要等到 readyState==4的时候再做处理）其他的js库已经做好处理了
   2. ajax.status 状态码
      * 1xx：信息响应类，表示接收到请求并且继续处理
      * 2xx：处理成功响应类，表示动作被成功接收、理解和接受
      * 3xx：重定向响应类，为了完成指定的动作，必须接受进一步处理
      * 4xx：客户端错误，客户请求包含语法错误或者是不能正确执行
      * 5xx：服务端错误，服务器不能正确执行一个正确的请求
   3. ajax.responseText 将结果以字符串的形式返回；
      * `eval(val)`：将字符串转换成真正的数据类型；
      * `JSON.parse(val)`：将json格式的字符串转为对象；





### method

得到数据，一般使用get，上传数据一般使用post，不是严格要求的；

* `get`方式需要将传输的内容通过?问号的形式写在地址后面 如：a=1&b=2；

* `post`方式接口需要设置请求头信息：post方式发送请求在send小括号里面传数据；



### post方式和get方式的区别

1. 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

2. get方式无法使用缓存文件（更新服务器上的文件或数据库）

3. 向服务器发送大量数据（POST 没有数据量限制）

4. 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

```js
let ajax = new XMLHttpRequest()
ajax.open('get','http://39.107.82.176',true)
ajax.send()
ajax.onreadystatechange = function(){
    if(ajax.status === 200 && ajax.readyState === 4){
        console.log(ajax.responseText)
    }
}
```



post请求发送数据方法：

```js
var xhr = new XMLHttpRequest()
xhr.open('post', '***')
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
xhr.send(new URLSearchParams({name: 'hhh'}))
xhr.onload = function(){
    var res = JSON.parse(xhr.response)
}
```







### XHR新增的事件

* `timeout` 请求超时时触发
* `error` 请求失败时
* `abort` 请求中断时
* `load` 响应成功后
* `loadstart` 开始请求时
* `loadend` 结束响应时
* `progress` 请求响应过程中连续触发
* `upload.onprogress(e)`    上传进度监听；


```js
// 请求一个接口
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://wyy.heny.vip/banner', true)
xhr.responseType = 'json'
xhr.onloadstart = function(){
    console.log('开始请求')
}
xhr.onload = function(progressEvent){
    console.log(JSON.parse(xhr.response))
}
xhr.onerror = function(){
    console.log('请求出错了')
}
xhr.send()
```



### ProgressEvent

* 属性 loaded 当前下载了多少字节
* 属性 total 总的字节数
* 属性 lengthComputable 长度是否可计算

通过判断长度是否可计算之后再进行loaded/total即可；

```js
let xhr = new XMLHttpRequest();
const downloadUrl = 'installer.dmg';
xhr.open('GET', downloadUrl, true);
xhr.addEventListener('progress', function (event) {
// 响应头要有Content-Length
if (event.lengthComputable) {
  let percentComplete = event.loaded / event.total;
  console.log(percentComplete); // 最后输出1
}
}, false);
xhr.send();
```

前提是响应头里面有Content-Length这个字段告知当前文件的总字节数，如下图所示：

![image-20200514201221347](https://notecdn.hrhe.cn/images/js-16_闭包、高阶函数、ajax.png)



### 封装xhr请求方法

```js
function request({
  url,
  method = "get",
  data,
  headers = {},
  onProgress = e => e
}) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = onProgress;
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(data);
    xhr.onload = e => {
      resolve(JSON.parse(e.target.response));
    };
  });
}
```





## 二、axios

### 优点

* 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
* 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
* 拦截请求和响应
* 转换请求数据和响应数据
* 取消请求
* 自动转换 JSON 数据
* 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)



### 快速使用

* 安装：`npm install axios`
* 或使用cdn地址：

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```



### 请求方法

* get请求（get传参需要使用params传参）

```js
axios.get('/user?id=12').then(res=>{}).catch(err=>{})
axios.get('/user',{params:{id:123})
```

* post请求

```js
axios.post('/user', {id: 666})

// 如果后台没有接收到参数，使用qs转换一下，需要npm i qs安装;
let params = new URLSearchParams()
params.append('id', 666)
或：let params = qs.stringify({id:666});
// network中显示form Data才算成功；
this.$axios.post('/user', params).then....
```

* 多个并发请求

```js
get1(){return axios.get('/user/123');
get2(){return axios.get('/user/123/permissions');
       
axios.all([this.get1(),this.get2()])
.then(axios.spread((acct,perms)=>{}))
// spread为分页,如果不使用spread也可以直接使用res，是一个数组;
```



### axios拦截器

创建拦截器时，建议创建一个实例来写拦截器，否则会影响全局的拦截器；

* 创建文件夹api/index

```js
import axios from 'axios'
import { Loading, Message } from 'element-ui'
let loading = null
const service = axios.create()
service.interceptors.request.use(
    config=>{
        // 在发起请求事要做的事情  可以给config添加请求头等
        loading = Loading.service({
            text: '正在加载......'
        })
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response=>{
        // 对响应的事情要做的事情
        if(loading) loading.close()
        return response
    },
    error=>{
        if(loading) loading.close()
        if(!error.response){
            if(error.message.includes('timeout')){
                Message.error('请求超时，请检查网络是否连接正常')
            } else {
                Message.error('请求失败, 请检查网络是否已连接')
            }
            return
        }
        return Promise.reject(error)
    }
)
export const getData = (url,data={},method='get')=>{
    let config = {
        url,
        method:method.toLowerCase(),
        data
    }
    // get方式需要处理, 使用params传参
    if(method.toLowerCase() === 'get'){
        config.params = data
    }
    return service(config)
}
```

* 在需要请求数据的地方引入getData即可

![image](https://notecdn.hrhe.cn/images/vue-07_接口请求_跨域-01.png)



### axios取消请求接口

业务情况：多次点击页面，会造成很多接口的请求，可以在页面切换关闭上一个请求，效果如下

![image-20200611161648246](https://notecdn.hrhe.cn/images/image-20200611161648246.png)

在请求拦截器中作处理：

```js
import axios from 'axios'
let cancelArr = {} // 保存需要取消的接口
axios.interceptors.request.use(
	config => {
        // 判断请求该接口是否需要删除上一个接口
        if(config.data.cancelToken) {
            // 循环取消当前保留的接口
            for(let prop in cancelArr) {
                cancelArr[prop]()
            }
            // 对该接口添加取消事件, 注意：必须挂载到config上面去
            config.cancelToken = new axios.CancelToken(cancel => {
                cancelArr[config.url] = cancel
            })
        }
    }
)
axios.interceptors.response.use(
	response => {
        // 接口回来删除该接口
        if(response.config.cancelToken) {
            delete cancelArr[response.config.url]
        }
    }
)
```

之后哪个接口需要取消的话，直接发送一个`{cancelToken: true}`即可；



### 常用config配置

```json
{
    // 请求方法
    method: 'get', 
	// 根路径
    baseURL: 'http://heny.vip',
    // 自定义请求头
    headers: {},
    // 发送数据，用于get
    params: {},
    // 发送数据, 用于POST
    data: {},
    // 指定超时
    timeout: 1000,
    // 解决cookie跨域， 允许后端携带cookie到前端
    withCredentials: false,
    // 返回类型，常用有：blob、stream
    responseType: 'json',
    // 上传处理进度
    onUploadProgress: function(e: progressEvent){
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if(percentage < 100) {
            // 这里调用进度方法
        }
    },
    // 下载处理进度
    onDownloadProgress: function(progressEvent){},
    // 代理请求，在ip被拉黑时特别有用
    proxy: {
        host: '127.0.0.1',
        port: 9000
    },
    // 取消请求;
    cancelToken: new CancelToken(function(cancel) {})
}
```

注意：

设置了withCredentials:true时，需要将浏览器默认的选项修改一下才行

Chrome 中打开 chrome://flags，将same-site-by-default-cookies 和 cookies-without-same-site-must-be-secure 设置为 Disabled ，重启浏览器





### 修改默认值

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

也可以自定义一个实例

```js
var instance = axios.create({
    baseURL: '...'
})
```





## 二、superagent

支持链式调用

安装：`yarn add superagent`；

```js
const superagent = require('superagent');
superagent
    .post('/api/pet')
	.send({name: 'manny'})
	.set('X-API-Key', 'foobar')
	.end((err, res) => {})

(async () => {
    let res = await superagent.post('/api/pet')
})
```

推荐文档：[SuperAgent使用文档](https://www.jianshu.com/p/1432e0f29abd)



## 二、vue-resource

### 快速使用

* **安装：** yarn add vue-resource

* main.js导入

```js
import VueResource from 'vue-resource'
Vue.use(VueResource);
```

### vue-cli配置模拟假数据

地址：build文件夹--->webpack.dev.conf.js文件添加

* 引入插件

```js
const url = require('url')
const bodyParser = require('body-parser')
```

* 定义路由（在devServer下加入）

```js
before(app){
    app.use(bodyParser.urlencoded({extended:true})) //加载中间件
    app.get('/api/seller', (req, res) => {
       res.json({errno: 0,data: ['jack','rose','peter','jerry']})
    }),
    app.post('/api/addSeller', (req, res) => {
        res.json({
            errno:0,
            data:'success'
        })
    })
    app.get('/api/goods', (req, res) => {
        //处理JSONP请求
        let $url = url.parse(req.url,true)
        let ck = $url.query.callback
        let result = ck+'('+123+')'
        res.send(result)
    })
}
```

* JSONP请求，处理callback

```js
let $url = url.parse(req.url,true)  //true解析为对象模式;
let ck = $url.query.callback  //取出回调函数
let result = ck+'('+123+')'  //给前端传参
res.send(result)
```


### 接口调用方法

* get方式（后台接参：req.query）

```js
this.$http.get(url,[option]).then(successCallback,[errorCallback]);(后台无法接收前台发来的数据，发送请求需要用下面的)

//或使用大括号形式：
this.$http({url:'',params: {}}).then(res=>{res.body}).catch(fn)   //catch捕捉错误
 //params要发送的数据;

//也可以配合async函数调用：
let result = await this.$http(..)
//this.$http返回一个promise函数，可以调用then方法;
```

* post方式（后台接参：req.body）

```js
this.$http.post('',{},{emulateJSON:true,emulateHTTP:true}).then(res=>{})
  //第二个参数为要向后台发送的数据;
```

emulateJSON:true：设置表单：application/x-www-form-urlencoded；必须填写;emulateHTTP:true：处理restful：put/patch/delete等请求;

* JSONP方式（后台接参：req.query）

```js
this.$http.jsonp(url,[option])     //后台无法接参，需要用下面的;
this.$http({url:'',params:'',method:'jsonp',jsonp:'callback'})
```

* 其他快捷方法
  * get(url, [options])
  * head(url, [options])
  * delete(url, [options])
  * jsonp(url, [options])
  * post(url, [body], [options])
  * put(url, [body], [options])
  * patch(url, [body], [options])
* 查看是否发送成功

F12查看控制台---Network---headers；点击clear清除一下，再获取，之后headers翻到最下面，post方式中：form data就是发送成功，后台能够正常接收到数据，Request Payload没收到；



## 三、fetch

> fetch为原生方法，不需要下载任何插件
>
> fetch可以跨网络异步获取资源

文档地址：[WorkerOrGlobalScope.fetch()](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch)

### 请求方法

```js
fetch('https://wyy.heny.vip/banner')
    .then(response=> response.json()) // 获取json格式数据
    .then(data=> console.log(data) )
	.catch(e=> console.log(e) )

// 常用方式
async function fetchData(){
    let response = await fetch('https://wyy.heny.vip/banner')
    let res = await response.json()
    console.log(res)
}
```



### 添加请求头

```js
// post方法
const requestHeaders = {
    method: 'post',
    headers: {
        'Content-Type': ''
    },
    body: JSON.stringify({file: ''})
}
fetch('http://localhost:3000/upload', requestHeaders)
  .then(res => res.json()).then(data => ....)
```



### 获取文件二进制数据

```js
const url = 'https://notecdn.hrhe.cn'
(async () => {
    let response = await fetch(url)
    let blob = await response.blob();
})()
```

### fetch的缺点

* 只对网络请求报错，对400，500都当做成功的请求
* 默认不会带cookie
* 不支持abort，不支持超时控制
* 没办法原生监测请求的进度



### fetch与jQuery.ajax()的不同

* 当接收响应状态码是404或500，promise状态仍然是resolve，但是response的返回值ok属性是false；

* 由于fetch返回的只是一个http响应，而不是真的JSON，为了获取JSON的内容，需要使用json()方法

fetch是一个实验的API，在生产环境不建议使用







## 四、跨域

**什么叫跨域**

浏览器中的同域，浏览器中的同源策略指的是：协议、域名、端口号相等；当不同时，就会发生跨域

在页面中有几个标签的引入是不受同源策略的影响的，如：img、link、script等等；



**为什么浏览器不支持跨域**

浏览器是为了给用户提供一个安全的浏览环境，因此禁止跨域；

比如：cookie会被用户滥用，拿到其他网站做操作，页面被嵌入ifame等等；



### 实现跨域的方式：

* `jsonp`  前端解决
* `cors` 后端解决
* `postMessage`  不同iframe跨域
* `document.domain`   通过设置domain为同域名解决跨域； 做子域和父域的通讯，比如a.demo.cn想和demo.cn通讯，可以直接通过iframe去获取window对象，直接拿值；
* `window.name`   同hash解决方式一样，在b.cn中设置window.name的值；
* `location.hash`  在a.cn和b.cn和c.cn，a.cn拿c.cn的值，属性跨域，此时需要c.cn去加载b.cn，在b.cn访问hash值；
* `webpack`  代理跨域，使用了http-proxy中间件跨域
* `nginx`   配置跨域
* `websocket`    socket跨域没有跨域的处理



### JSONP(本质上是XHR，动态生成script标签)

* 兼容性好
* 只支持get方式

jsonp的缺点：由于是访问地址，因此是只能get请求方式，容易被xss攻击，嵌入js脚本；

封装一个jsonp：

```js
function jsonp({url, params, cb}) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    window[cb] = function(params) {
      resolve(params)
      script.remove()
    }
    params = Object.assign(params, {cb})
    params = Object.keys(params).reduce((c, p) => {
      let tag = c[0] === '?' ? '&' : '?'
      c += `${tag+p}=${obj[p]}`
      return c
    }, '')
    script.src = url + params
    document.body.appendChild(script)
  })
}

// 调用时：
jsonp({
    url: '',
    params: '',
    cb: 'show' // 回调函数
}).then(data => {})
```





### CORS（跨域资源共享）

* 优点：简单、只需在后台写一句话、GET、POST都支持 

* 缺点：兼容性不如JSONP 

res.writeHead('Access-Control-Allow-Origin','*')



### postMessage 

两个页面之间的通讯使用postMessage，常用于iframe；

发送消息：

`otherWindow.postMessage(message, targetOrigin, [transfer])`

* otherWindow：目标窗口，如：iframe.contentWindow；
* targetOrigin：目标窗口的地址url，或者*表示无限制，任何url都允许发送；

```js
// a.com 和 b.com之间的通话
// 父页面向子页面
const iframe = document.getElementByid('iframe')
iframe.contentWindow.postMessage('父页面发送的消息', 'http://b.com')

// 子页面接收父页面的消息
window.addEventListener('message', e => {
    if(e.origin === 'http://a.com') {
        console.log(e.origin) // 父页面的url，这里是a.com
        console.log(e.source) // 父页面window对象 全等于window.parent/window.top
        console.log(e.data) // 父页面发送消息
    }
}, false)

// 子页面向父页面发送消息
window.parent.postMessage('子页面发送的消息', 'http://a.com')
// 父页面接收消息和子页面是一样的；
```





### 利用proxy代理

* 修改config---index.js文件下的proxyTable的值
* 特点：跨域失败仅存在于(Ajax),NodeJS(A程序) ===》 PHP(B程序)后台之间是不存在跨域失败
* 场景：后台(Java)<=>前端(WebPack)[Proxy]
* 场景：公开API[JSONP]

```js
// webpack配置代理
proxy: {
    '/api': {    //api前台访问时需要加的前缀；
    	target: 'http://v.juhe.cn',  //需要代理访问跨域的域名
    	changeOrigin: true,    // 是否设置跨域
    	pathRewrite: {"^/api" : ""} 
    }  //地址重写;
},
    
// 前台请求
this.$axios.get('/api/movie/index')   //带上前缀，连接到访问的地址
// 最终请求的地址为：http://v.juhe.cn/movie/index
```



### 跨域其他解决办法

#### 修改本地host解决跨域
> 由于造成跨域的原因是因为不同域，我们可以手动修改为同域

host文件位置：C:\Windows\System32\drivers\etc\hosts
也可以安装[SwitchHosts](https://oldj.github.io/SwitchHosts/)使用；
host修改格式如下：

```bash
10.107.18.124  a.com
```
之后访问a.com将会映射到10.107.18.124地址，也可以输入127.0.0.1直接代理本地
可以通过cmd输入ping a.com 查看访问的ip地址，确认是否代理生效

**修改host不生效的原因**

* 检查本地是否有其他代理工具，如科学工具
* hosts文件内注释不能和代理在同一行
* 尝试使用ipconfig /flushdns 刷新dns缓存
* 最后也是最有效的解决三步骤：重启、重装、换电脑

**端口提示被占用，查找不到端口号**

```bash
##### Local host #####
127.0.0.1   localhost
255.255.255.255 localhos
::1     localhost
```




### 九种跨域方案详解

珠峰架构公开课：[九种跨域方案详解](https://ke.qq.com/course/367589?taid=2972117369199589#term_id=100437143)





