# node-02 路由、path、模块
## 一、线程和进程
进程：相当于一个工厂，启动一个应用程序就对应一个进程；

PHP java他们是多线程的 而Nodejs是单线程

线程：相当于工人，线程是真正来工作的；

Nodejs 单线程 异步非阻塞 事件驱动，node.js如果有一条线挂了，后面也就无法执行了；



## 二、路由

`http : //localhost :400/index.html?id=40`;

协议    域名    端口    目录   内容；

![image-20200422130341728](https://notecdn.hrhe.cn/images/node-02_路由、path、模块-01.png)

1. 路由：node.js中的路由实际上是url中的path部分；

    了解：生活上的路由主要是来化分网段的；

    路由可以根据你定的规则自动匹配页面

2. URL:网址后面的路径，又可以称为路由；

3. http模块中：req是请求，res是响应；

    req.url:获取访问目录；    

4. 设计路由：实际上就是根据不同的path路径返回不同的响应；



## 三、全局global

在node.js中的全局不是window，而是global;



## 四、process

* `process.chdir`  相当于cd命令
* `process.exit(0)`  退出当前命令
* `process.pwd`  返回当前的工作根目录



## 五、Buffer

什么是缓冲器：可以直接操作内存；

可以将Buffer看作数组，buffer可以操作二进制；

buffer在全局作用域中，因此不需要require；

### 方法

* 将字符串转成buffer对象：`Buffer.from('str')`
* 将buffer转成字符串：`buffer.toString('utf8')`  buffer流调用toString即可
* 创建一个空的buffer(缓存区)：`Buffer.alloc(6)` 创建了6个字节的缓存区;
* 创建一个空的buffer缓存区：`Buffer.allocUnsafe()`；

`Buffer.concat(chunkList).toString('utf8')`   将文件流合并，并tostring显示文件内容



## 六、接收键盘输入readline

基本例子：

```js
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('你如何看待 Node.js 中文网？', (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`);
  // 调用输入关闭, 如果不关闭则会一直停留
  rl.close();
});
```

一直输入的例子：

```js
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 设置提示的内容
rl.setPrompt('请输入内容：')
// 打印提示内容
rl.prompt()
rl.on('line', line => {
    if(line === 'exit'){
        console.log('已退出')
        process.exit(0)
        return false
    }
    console.log(line) // line为输入的内容
}).on('error', () => {
    console.log('出错了')
    rl.prompt() // 再次打印输入的内容
}).on('close', () => {
    console.log('已退出！')
    process.exit(0)
})
```

`rl.setPrompt(prompt)` 方法设置每当调用 `rl.prompt()` 时将写入 `output` 的提示。



项目实例：

```js
function lcQuestion(title) {
    return new Promise((resolve, reject) => {
        rl.question(title, answer => {
            resolve(answer)
        })
    })
}

async function createPackage(){
    let name = await lcQuestion('您的包名叫什么？')
    let description = await lcQuestion('您的描述信息？')
    rl.close()
}
```



## 七、模块化
了解：在前端之前是没有模块化的概念，ES5以前是没有模块化的概念的。到ES6才提出模块化。


需要什么功能就去require什么功能，这个功能就是对应的模块功能；

1. 模块分为三种：内置模块，自定义模块，第三方模块；

    第三方社区的模块: [https://www.npmjs.com/](https://www.npmjs.com/)



## 八、内置path与url模块

一般path与url搭配使用；

path方法：

`path.join()`;             将一系列路径拼接成完整路径，中间会使用/来连接每一个字符串；

`path.resolve()`;       拼接绝对路径；

`path.extname()`;     获取path的扩展名；

`path.parse(路径)`   将一个路径解析，包含路径的后缀、名字，后缀+名字；

`path.extname('1.txt')`  获取txt

`path.basename(p,[ext])`  第二个参数为要去除的后缀

注意：使用path.resolve必须使用相当路径，第二个路径需要加./；



### url

* `url.parse(urls,true)`；    加上true后使用query返回一个对象

```js
const url = require('url')
const str = '?user=hny&pass=123456&cont=哈哈'
url.parse(str, true).query // {user:hny,pass:123456,cont:哈哈}
```

* `url.resolve(targetUrl, url)`   将两个地址组成一个新的地址；


注意：使用path.resolve必须使用相当路径，第二个路径需要加./；





## 九、自定义模块

1. 在node当中，一个js文件就是一个模块。每一个js文件都是封闭的空间，模块与模块之间是互不影响的，因为模块是有一个隐藏的匿名函数包起来的；

2. 模块的引入：

* 引入自定义模块时，文件路径要以./或../开头；（因为它以为你要加载的是系统模块）

* 如果不加扩展名，会以.js--.json--.node去引用；

* 当引用一个文件夹时，默认引用index.js；

* 只要是require文件，就一定返回一个对象。不是null

3. 自定义语法：

    ```js
// 单个暴露
    exports.fn = function(){}
module.exports.fn = function(){}
    
    // 多个暴露
    module.exports = {}
    ```


单个和多个不能混着写；

注意：exports是module.exports的变量，模块最终返回的是module.exports；



## 十、第三方模块 

官方网站：[https://www.npmjs.com](https://www.npmjs.com)

1. 安装第三方包：npm install <包名>   install也可以写成i；

   安装之后在项目文件夹下，会自动生成一个dependencies-lock.json配置文件，里面有第三方依赖包，项目依赖和说明书配置文件是package.json；

   在npm install会自动检查目录下的package.json，并自动安装所属依赖；

2. **创建package.json文件**：npm init 你问我答创建，后面加-y，可以自动完成；

3. 给别人发包的时候，直接发送package.json文件就可以了，这个里面dependencies属性记录了所有项目依赖包，这时直接输入npm install 或 npm i就可以下载所有的项目依赖包；

4. 为什么要把第三方包下载到根路径？

   * 如果没有加./和../就是以包名来被require的；
   * 先找内置模块---再找node_modules文件夹----再往上一级---最后到盘符根路径----最后报错；




开放静态页面到网上
```js
const http = require('http');
const fs = require('fs');
const mi = require('mime');
const url = require('url');
const path = require('path');
http.createServer((req,res)=>{
    let urls = req.url == '/' ? '/index.html' : req.url; //获取路径
    fs.readFile(`${__dirname}/baofeng${urls}`,(err,data)=>{
        if(err) throw err;
        res.writeHead(200,'ok',{'content-type':`${mi.getType(urls)};charset='utf-8'`});
                //mime模块直接获取后缀名并转换；
        res.end(data);
    })
}).listen(80,()=>{
    console.log('监听完成.......');
})
```