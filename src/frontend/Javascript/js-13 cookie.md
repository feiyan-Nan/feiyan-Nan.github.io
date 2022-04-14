# js-13 cookie
## 一、cookie
保存页面中的信息，比如用户名、密码等；比较小，只有4kb；

不同浏览器的cookie是不相通的；

谷歌浏览器的cookie不允许访问本地的cookie，只允许访问网上的，而火狐和ie可以访问本地的；



### cookie机制

如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。

如果设置cookie的过期时间，cookie被 保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。



### 操作方式

* 存储：`document.cookie = "key=value";`   设置临时存储，键值对；

```js
document.cookie = "key=12;expires=" + 字符串格式时间；有过期时间；
```
date.setSeconds()；设置秒，可以设置所有时间；

* 读取：`document.cookie`；获取的是字符串，中间用分号和空格分开的；

* 删除：将过期时间设置成负数；

```js
var date = new Date();
date.setDate(date.getDate() + 10);  //设置10天以后过期；
date.toString(); //10天以后的字符串格式时间
```



### cookie和session的区别

* （1）(失效) Session 会在浏览器关闭之后失效，Cookie 则可以在理论上永久有效(设置过期时间)。
* （2）(存放) Cookie 数据存放在客户的浏览器上， Session 数据存放在服务器上。
* （3）(黑客) Cookie 不安全，黑客可以分析本地的 Cookie, 并进行 Cookie 欺骗。 而 Session 保存在远程服务器上，相对安全（重要的信息应该存在session）;
* （4）(限制) Cookie有大小限制，一般是4KB。 域名20-50个以内，Session 则没有这方面的限制。
* （5）(禁用) 浏览器的设置可能禁用 Cookie，这时所有关于 Cookie 的应用都将失败，但是 Session 却永远不会有这个问题；



### session与cookie的联系 

​    Session 依赖 cookie，因为 session id 存在客户端。





## 二、js-cookie操作方式

1. 安装：`npm i js-cookie`
2. 用法：

在项目中引入：import Cookie from 'js-cookie'

（1）`Cookie.set('name','value', {expires: 7， path:''})`，name和value不可少

（2）`Cookie.get('name', {domain: 'sub.example.com'})`，name不可少

（3）`Cookie.remove('name', {path: '',domain: ''})`，name不可少

3. 解决命名空间冲突问题
```js
const Cookies2 = Cookies.noConflict()
Cookies2.set('name','value')
```
4. 安全
```js
// 需要使用https才有效
Cookies.set('name','value',{secure: true})
```
5. 设置默认值
```js
const api = Cookies.withAttributes({path: '/', domain: '.example.com'})
```
6. 控制读写
```js
var cookie = Cookies.withConverter({
    // 读
    read: function (value, name) {
        if(name === 'escaped'){}
        return Cookies.converter.read(value, name)
    },
    // 写
    write: function(value, name){
        return value.toUpperCase()
    }
})
// 之后使用cookie对象来进行读写操作
```



## 三、web Storage（HTML5）

### 区别

`localStorage`的储存没有时间限制，永久保存，除非主动删除；

`sessionStorage`用于临时保存同一窗口(或标签页)的数据，在关闭窗口之后将会删除这些数据；

兼容：ie8+



### 特点

（1）生命周期：

* localStorage：永久的，关闭浏览器都不会消失，除非主动删除数据；

* sessionStorage：仅在当前会话下有效，只要窗口没关闭，数据永远存在，刷新页面都在；两个窗口的sessionStorage数据是不一样的；

（2）存储大小：两者都是5MB；

（3）存储位置：都保存在客户端，不与服务器进行交互通信；

（4）存储类型：仅支持字符串类型，对象数组需要使用JSON对象的stringify和parse处理；

（5）应用场景：

* localStorage：常用于长期登录，适合长期保存在本地的数据；
* sessionStorage：敏感账号一次性登录；



### 用法

localStorage和sessionStorage使用方法一致；

1. 储存：`setItem(key, value)`
2. 获取：`getItem(key)`
3. 删除：`removeItem(key)`
4. 清空：`clear()`；
5. 索引：`key(index)` 可以通过索引获取；

除了以上方式，还支持点的方式或中括号方式：

设置：localStorage.age = 18

获取：localStorage.age




当储存的值是对象或者数组时：

储存：`localStorage.setItem('test',JSON.stringify({id:1,age:18})`；

取值：`JSON.parse(localStorage.getItem('test')`；





## 高频面试题
● 使用正则表达式验证邮箱。

● 请用 js 去除字符串空格 var str = “ fdf er re545 6565 2fdfd ”

● 判断字符串是否是这样组成的。第一个字符必须是字母，后面可以是字母、数字、下划线，总长度 5-20。

● cookie 的利弊？

● 封装一个获取 cookie 的函数。

