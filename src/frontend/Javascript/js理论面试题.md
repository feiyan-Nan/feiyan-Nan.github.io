# js理论面试题

## 从url输入到页面展现到底发生了什么

* DNS解析，将域名解析成ip地址
* TCP连接，TCP三次握手
* 浏览器发送HTTP请求
* 服务器处理请求并返回HTTP报文
* 浏览器解析渲染页面
  1. 解析HTML，构建DOM树
  2. 解析CSS，生成CSS规则树
  3. 合并DOM树和CSS规则，生成render树
  4. 布局render树（Layout/reflow），负责各元素尺寸、位置的计算
  5. 绘制render树（paint），绘制页面像素信息
* 断开连接，TCP四次挥手；



## TCP三次握手的过程

TCP握手协议

在TCP/IP协议中,TCP协议提供可靠的连接服务,采用三次握手建立一个连接.

第一次握手：建立连接时,客户端发送syn包(syn=j)到服务器,并进入SYN_SEND状态,等待服务器确认；

SYN：同步序列编号(Synchronize Sequence Numbers)

第二次握手：服务器收到syn包,必须确认客户的SYN（ack=j+1）,同时自己也发送一个SYN包（syn=k）,即SYN+ACK包,此时服务器进入SYN_RECV状态；

第三次握手：客户端收到服务器的SYN＋ACK包,向服务器发送确认包ACK(ack=k+1),此包发送完毕,客户端和服务器进入ESTABLISHED状态,完成三次握手.


三次握手的步骤：（抽象派）

客户端：hello，你是server么？

服务端：hello，我是server，你是client么

客户端：yes，我是client


四次挥手的步骤：（抽象派）

主动方：我已经关闭了向你那边的主动通道了，只能被动接收了

被动方：收到通道关闭的信息

被动方：那我也告诉你，我这边向你的主动通道也关闭了

主动方：最后收到数据，之后双方无法通信



## 缓存

缓存分为前端缓存和后端缓存；

网络发起请求就是三个步骤：请求，处理，响应；

处理为后端处理，前端为请求和响应；



缓存主要包含memory cache和disk Cache；可以在network-size查看到，如果是大小多少k就是网络请求，如果是from memory cache或者from disk Cache和from ServiceWorker；

优先级是，由上到下寻找，找到即返回，找不到则继续寻找；

1. Service Worker
2. Memory Cache
3. Disk Cache
4. 网络请求



memory cache是内存中的缓存，disk cache是硬盘中的缓存，会先读内存，再读硬盘；几乎所有的网络请求资源都会被浏览器放进memory cache，但是关闭浏览器时，便会失效，失效之后则会访问disk cache；



memory cache是浏览器为了加快读取缓存速度而进行的自身优化的行为，不受开发者控制，也不受协议头的约束；

service worker是由开发者编写的额外的脚本，缓存独立；

平时最熟悉的是disk cache，也http cache，http协议头都分为disk cache的范畴；



### diskCache

disk cache又分为强制缓存和协商缓存(比对缓存)；

强制缓存是指客户端请求后，会先访问缓存数据库看缓存是否存在，如果存在直接返回，不存在则请求真的服务器，响应后再存入数据库；

强制缓存直接减少请求次数，提升最大的缓存策略；可以造成强制缓存的字段是cache-control和expires；

* expires    是表示缓存到期时间，是绝对的时间（当前时间+缓存时间）；
  1. expires由于是绝对时间，用户可以随意更改本地时间，达到缓存失效，或者由于时差的原因，也会导致失效；
  2. expires写法比较复杂，字符串多个空格或少个字母都会导致失效
* cache-control  是http1.1中增加的字段，表示资源缓存的最大有效时间，在该时间内，客户端不需要向服务器发送请求；cache-control是相对时间；cache-control常用的值：
  1. max-age：最大有效时间
  2. must-revalidate：
  3. no-cache：需要使用对比缓存来验证缓存数据
  4. no-store：真正意义上的不要缓存，所有内容都不走缓存，包括强制和协商；
  5. public：所有的内容都可以被缓存（包括客户端和代理服务器，如CDN）；
  6. private：所有的内容只有客户端才可以缓存，代理服务器不能缓存。默认值；



**对比缓存**

需要进行比较判断是否可以使用缓存

浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。
再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。

Last-modified：服务器在响应请求时，告诉浏览器资源最后的修改时间；

If-modified-Since：再次请求服务器时，通过此字段通知服务器上次请求时，服务器返回资源的最后修改时间，

与最后修改时间作对比，如果大于，说明资源被修改过，返回200，如果小于或等于，则返回304



Etag / If-None-Match（优先级高于Last-modified / If-modified-Since）

Etag：服务器响应请求，告诉浏览器当前资源在服务器的唯一标识

If-None-Match：再次请求服务器，通知服务器客户端缓存数据；

如果服务器收到请求有If-None-Match字段，则进行对比，如果不同，则说明资源被更改，返回200，如果相同，则没有作更改，返回304



浏览器发起请求时：

![image](http://notecdn.hrhe.cn/images/%E7%BC%93%E5%AD%98%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AF%B7%E6%B1%82.png)



浏览器再次请求时：

![image](http://notecdn.hrhe.cn/images/%E7%BC%93%E5%AD%98%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%8D%E6%AC%A1%E8%AF%B7%E6%B1%82.png)()



缓存小结：

当浏览器要请求资源时：

1. 调用Service Worker的fetch事件响应
2. 查看memory cache
3. 查看disk cache。这里又细分：
   1. 如果有强制缓存且未失效，则使用强制缓存，不请求服务器。这里状态码全部是200；
   2. 如果有强制缓存但已失效，使用对比缓存，比较后确定304还是200



1. 发送网络请求，等等网络响应
2. 把响应内容存入disk cache（如果http头信息可以存的话）
3. 把响应内容的 **引用** 存入memory cache（无视HTTP头信息的配置）
4. 把响应内容存入Service Worker的Cache Storage（如果Service Worker的脚本调用了cache.put()）




## Proxy与Object.defineProperty的优劣对比?

Proxy的优势如下:

* Proxy可以直接监听对象而非属性
* Proxy可以直接监听数组的变化
* Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的
* Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改
* Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

`Object.defineProperty`的优势如下:

* 兼容性好,支持IE9



## 前端常见攻击方式

* XSS攻击  ---- 跨站脚本攻击，向页面中插入恶意脚本执行
* CSRF攻击  ---  跨站请求伪造，冒充用户发送请求
* Sql注入  ---- 在用户输入框输入sql命令进行攻击
* html脚本注入



## 前端常用跨域方案

* JSONP跨域（本质是js调用）
* CORS 后台配置
* postMessage 两个window之间的跨域解决方案
* Nginx 反向代理

跨域是浏览器做出的安全限制，必须同协议、同域名、同端口否则会被浏览器block



## 什么是Virtual dom

用javascript对象结构表示dom树的结构；然后用这个树构建一个真正的DOM树，插到文档当中，当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树的差异，把所记录的差异应用到所构建的真正的dom树上，视图就更新了。virtual dom本质上就是在js和dom之间做了一个缓存；



## 前端网站常规优化方案

优化策略：减少请求次数、减小资源大小、提高响应和加载速度、优化资源加载时机、优化加载方式

* 合并、压缩、混淆html/css/js文件（webpack实现，减小资源大小）
* Nginx开启Gzip，进一步压缩资源（减小资源大小）
* 图片资源使用CDN加速（提高加载速度）
* 符合条件的图标做base64处理（减小资源大小）
* 样式表放首部、js放尾部（js单线程，会阻塞页面，资源加载方式）
* 设置缓存（强缓存和协商缓存，提高加载速度）
* link或者src添加rel属性，设置prefetch或preload可预加载资源（加载时机）
* 如果使用了ui组件库，采用按需加载（减小资源大小）
* SPA项目，通过import或者require做路由按需加载（减小资源大小）
* 服务端渲染SSR，加快首屏渲染，利于SEO
* 页面使用骨架屏，提高首页加载速度
* 使用JPEG 2000, JPEG XR, and WebP的图片格式来代替现有的jpeg和png，该页面图片较多时，这点作用非常明显
* 使用图片懒加载-lazyload