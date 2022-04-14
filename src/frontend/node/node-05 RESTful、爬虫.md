# node-05 RESTful、爬虫
## 一、扩展node的路由
1. `res.statusCode = 200`，    设置状态码
2. `res.statusMessage = 'ok'`；  设置状态描述
3. `res.setHeader('content-type','text/html')`； 

    告诉浏览器接收的内容是什么类型的；

    还可以设置响应里面的内容；

    text/plain  纯文本；

上面三种都是res.writeHead的分开写法；



## 二、扩展express的路由

1. `res.json()`；输出json对象；
2. `res.send(JSON.stringify())`；输入json字符串；
3. `res.set()`；设置浏览器文件类型；
4. `res.status()`；设置状态码；可以直接链式调用send；



## 三、静态资源托管

1. `app.use([path],express.static(path))`；

   第二个写要开放的目录，建议写绝对路径，可以自动查询index.html；

   第一个可选，可以写一个路由，访问后面的目录需要带上这个路由；

2. `app.use((req,res)=>{})`；        等同于`app.all('*')`；



## 五、RESTful API

1. 传统设计路由的形式:
       形容词+名词

   ```
   get  /addbook
   get  /book
   get  /doaddbook
   get  /dodelbook
   get  /doupdatebook
   ```

   RESTful: 这个东西就是去描述 路由应该如何设计

2. RESTful这个标准 把一些路由当中的形容词给去了。用 method请求方法表示

   GET：读取（Read）

   ```
   get  /book/get
   ```

     POST：新建（Create）

   ```
   post /book/post
   ```

     PUT：更新（Update）

   ```
   put  /book/put
   ```

     PATCH：更新（Update），通常是部分更新

   ```
   patch /book
   ```

     DELETE：删除（Delete）

   ```
   delete /book
          /book?id=1
          /book/1
   ```

   

## 六、中间件

>  每一个中间都有自己的一些含义

在express所有的回调函数，都可以称为中间件，中间件可以理解为工厂当中的车间。

- 内置中间件

- 第三方的

- 自定义中间件

    其实我们定义的路由都可是中间件

    `app.get('/book')`  `app.post('/user')`... 都是中间件

- 使用中间件特定的语法
    ```js
    app.use((req, res, next) => {
        // 这里可以做一些处理
        next() // 必须调用next函数，否则不会往下面走了
    })
    ```
    使用中间件和定义路由很相像，只要匹配成功并且send了，就不会再往下匹配 。



## 七、OS

* `os.cpus()`  获取操作系统的CPU信息；
* `os.totalmem()`   获取内存的信息
* `os.arch()`   查看系统架构，比如x64、x86，手机也不同；
* `os.freemem()`    查看剩余内存；
* `os.platform()`   查看操作系统平台



## 八、node爬虫

### 接口请求工具

* `axios`   需要安装

* `request`   需要安装

```js
// body为页面内容或请求内容
// response为响应头信息
request('http://', function(err,response, body){})
```

**axios获取图片存入到本地**

```js
const ws = fs.createWriteStream(path)
// 请求注意添加响应信息, 以流的方式返回回来
axios.get(imgUrl, {responseType: 'stream'}).then(res => {
    res.data.pipe(ws)
    // 流读取完成时关闭
    res.data.on('close', () => {
        ws.close()
    })
})
```

由于爬虫循环请求数据，容易导致拉黑，建议添加延时函数

```js
function lcWait(milliSeconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliSeconds)
    })
}
```

注意在等待时给定延时，需要是不同的时间，否则就是一起等待了；





### 获取dom工具(类似jquery)

* jsdom
* cheerio：[中文文档](https://github.com/cheeriojs/cheerio/wiki/Chinese-README) 推荐使用

cheerio基本例子

```js
const cheerio = require('cheerio')
const request = require('request')

let url = 'https://www.1905.com/'
request(url, function(err, response, body){
  // 使用load加载dom结构，之后可以使用$符获取；
  const $ = cheerio.load(body)
  let arr = []
  $('div.exclusive-content a').each((index, element) => {
    arr.push({name: $(element).attr('alt'), url: $(element).attr('href')})
  })
  console.log(arr)
})
```



### 常用爬虫函数

```js
// 创建文件夹的正则
const reg = /[\\/\:\*\?\"\<\>\|\t\b\r]/g

// 创建写入文件，递归创建
function recursiveFile(dir, name) {
  const curPath = path.resolve(process.cwd(), dir)
  if(!fs.existsSync(path)) {
    fs.mkdirSync(curPath, {recursive: true})
  }
  return fs.createWriteStream(path.resolve(curPath, name + '.' + extname))
}
```



## 九、Puppeteer

### 介绍

- 生成页面 PDF。
- 抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。
- 自动提交表单，进行 UI 测试，键盘输入等。
- 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
- 捕获网站的 [timeline trace](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)，用来帮助分析性能问题。
- 测试浏览器扩展。



### 安装

教程网站：[zhaoqize.github.io/puppeteer-api-zh_CN/#](http://zhaoqize.github.io/puppeteer-api-zh_CN/#)

1. 安装：`npm install puppeteer-core` 

   `puppeteer-core`为跳过安装chromium版，通过后面指定`executablePath`来打开本地chrome

2. 启动demo

   ```js
   const puppeteer = require('puppeteer');
   puppeteer.launch({
       headless: false,
       // 设置浏览器视窗大小
       defaultViewport: {
           width: 1400,
        height: 800
       },
       // 设置放慢速度，方便调试
       slowMo: 250,
       executablePath: '本地chrome文件exe地址'
   }).then(async browser => {
       const page = browser.newPage() // 打开一个新窗口
   })
   ```
   
   headless：设置为true时不打开浏览器，设置false为打开浏览器，方便调试；



### 获取控制台内容

使用page对象；

```js
page.on('console', eventMsg => {
   // node中打印浏览器控制台输出文字
   console.log(eventMsg.text())
})
```





### 获取节点内容

page.$是返回ElementHandle用来操作点击事件的；

page.$eval是用来获取页面内容的；

```js
const page = await browser.newPage()
await page.goto('https://www.dygod.net')
let elements = await page.$$eval('#menu li a', elements => {
    // 代码在浏览器运行, 不在node中打印;
    const contentArr = []
    elements.forEach(item => {
        contentArr.push({
            href: item.getAttribute('href'),
            name: item.innerText
        })
    })
    return contentArr
})
console.log(elements)
```



### 页面点击事件

```js
const elementHandle = await page.$$('#menu li a')
elementHandle[2].click()
```



### 搜索事件

```js

const iptEl = await page.$('.searchl .formhue') // 找到搜索框
await iptEl.focus()  // 聚焦事件：focus
await page.keyboard.type('哆啦A梦') // 输入对象：keyboard
const btnEl = await page.$('.searchr input[type="Submit"]') // 获取搜索按钮并点击
await btnEl.click()
await iptEl.dispose() // 关闭当前句柄，否则会报错丢失；
await btnEl.dispose()
```

或者使用：

```js
await page.goto('https://www.baidu.com')
await page.type('#head_wrapper .soutu-env-nomac #form #kw', 'puppeteer')
await Promise.all([
    page.waitForNavigation(),
    page.click('#head_wrapper .s_btn', )
])
```







### 拦截network请求

由于请求一些数据导致页面加载更慢，可以中断一些请求。开启请求拦截器需要设置为true：page.setRequestInterception(true)

```js
await page.setRequestInterception(true)
page.on('request', interceptedRequest => {
    console.log(interceptedRequest.url())
    if(interceptedRequest.url().endsWith('.png')){
        // 中断请求
        interceptedRequest.abort()
    } else {
        // 继续请求
        interceptedRequest.continue()    
    }
})
await page.goto('https://chat.heny.vip')
```



### 页面内执行方法

`page.evaluate(pageFunction[,...args])`：代码执行返回字符串

`page.evaluateHandle(pageFunction[,...args])`：代码执行返回`JSHandle`

```js
const aHandle = await page.evaluateHandle(() => document.body);
const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
console.log(await resultHandle.jsonValue());
await resultHandle.dispose();
```



### 监听下载完成

下载完成相当于是一个请求完成的操作

```js
page.on('requestfinished', request => {})
```





### 好用的api

* `page.close()`：关闭当前页面
* `browser.close()`：关闭当前浏览器
* `page.waitForSelector(selector)`：等待元素出现之后再进行操作（由于前端渲染页面，比如单页面应用，需要使用该方法等待元素出现）
* `page.mouse`：用于移动鼠标的当前位置，可以用来选中某个区域；
  * `page.mouse.down`
  * `page.mouse.up`
  * `page.mouse.move`
  * `page.mouse.click`

