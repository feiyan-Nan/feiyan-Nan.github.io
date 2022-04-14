# node-06 加密 cookie ejs
## 一、加密

1. 引入模板：`require('crypto')`；
2. 散列算法(哈希)加密：

散列算法也叫哈希算法，把任意长度的输入变换成固定长度的输出，常见有md5,sha1,sha256等,需要跟一个密钥，密钥随便写；

```js
crypto.createHmac('md5','hny#@!').update(str).digest('hex');
```
3. 哈希算法：
```js
crypto.createHash('md5').update(str).digest('hex')；
```
加密之后的判断，再用户输入完成之后再次加密，再进行对比；



## 二、cookie

主要解决http协议无状态问题（没有记忆）；

### 在nodejs使用cookie

* 设置：`res.setHeader('Set-Cookie',['name=hny','age=18'])`;

* 获取：`req.headers`；（也可以使用中间件来获取req.cookie）



### 在express中使用cookie

安装中间件：`cookie-parser`；

```js
const cookieParse = require('cookie-parser')
app.use(cookieParse())
```



* 设置：`res.cookie(name,value[,option])`；

  可选option：

  * `expires` : 时间对象   `new Date( Date.now() +1*24*60*60*1000 )`
  * `maxAge`：`1*24*60*60*1000`；以毫秒为单位；

  * `httpOnly`：布尔值，客户端不能设置cookie；

  * `path`：只允许指定的位置访问；

  * `domain`：只允许指定的域名访问；

  修改host文件：C:\Windows\System32\drivers\etc；ip地址+域名；指定域名为本地域名；

* 获取：req.cookies；



## 三、cookie-session

安装中间件：`cookie-session`

```js
const cookieSession = require('cookie-session')
app.use(cookieSession({}))
```

**对象里面**

* name: cookie名字，默认为session,

* keys:[]；密钥，随意多个； 必填；需要方括号;
* maxAge；过期时间，以毫秒为单位；

**操作方法**

* 设置cookie：`req.session.username = 'hny'`;

* 获取cookie：`req.session.username`；

如果需要删除cookie，可以让值等于空；

当cookie里面存有session  id时，需要获取到存的cookie，需要设置相同的name和keys，才能通过req.session拿值；



### cookie和session的区别

* （1）(失效) Session 会在浏览器关闭之后失效，Cookie 则可以在理论上永久有效(设置过期时间)。
* （2）(存放) Cookie 数据存放在客户的浏览器上， Session 数据存放在服务器上。
* （3）(黑客) Cookie 不安全，黑客可以分析本地的 Cookie, 并进行 Cookie 欺骗。 而 Session 保存在远程服务器上，相对安全（重要的信息应该存在session）;
* （4）(限制) Cookie有大小限制，一般是4KB。 域名20-50个以内，Session 则没有这方面的限制。
* （5）(禁用) 浏览器的设置可能禁用 Cookie，这时所有关于 Cookie 的应用都将失败，但是 Session 却永远不会有这个问题；



### session与cookie的联系 
​    Session 依赖 cookie，因为 session id 存在客户端。

   

## 四、模板引擎ejs

渲染页面：新闻列表页中的显示的内容不同，但显示的风格都一样，就可以作为一个模板，实际上就是渲染页面；

前端渲染：前端渲染都使用的ajax的技术，但不利于seo优化；

后端渲染：使用模板引擎，有利于seo优化；


1. 下载ejs包，之后不需要手动引入
```js
app.set( 'view engine','ejs' )  //设置引擎；
app.set('views',[__dirname+'/views','template'])    //按照顺序指定模板目录
app.engine('html',require('ejs').__express)     //告诉express html以ejs模板引擎去渲染
```
3. `res.render('index',[,data])`；使用ejs引擎；

注意：传入的index文件不需要后缀，会自动去views文件夹中找模板文件，后面传入数据，多个可使用对象，在ejs模板中使用：

### 标签含义

- `<%` '脚本' 标签，用于流程控制，无输出。
- `<%_` 删除其前面的空格符
- `<%=` 输出数据到模板（输出是转义 HTML 标签）
- `<%-` 输出非转义的数据到模板
- `<%#` 注释标签，不执行、不输出内容
- `<%%` 输出字符串 '<%'
- `%>` 一般结束标签
- `-%>` 删除紧随其后的换行符
- `_%>` 将结束标签后面的空格符删除



### ejs常用语法

```js
// 使用变量
<%= 变量%>

// 使用模板
<%- include('header', {title: ''}) %>
    
// 使用循环或判断方式
<% for(let i=0;i<arr.length;i++){%>
    <%=arr[i]%>
<%}%>

```



### class使用变量

```ejs
<div class="<% if(!theme.music.fixed) { %> music-player <% } %>"></div>
```



### ejs声名变量

ejs还可以在外部声名变量，在内部直接使用，ejs也可以直接写js代码

```ejs
<%
	var name = 'hny'    
%>
<div class='<%- theme.music.class %>'
    <%= name %>
</div>
```



### ejs作用域

ejs是有作用域的，在ejs写的代码，必须使用ejs模板

```ejs
<%
	var name = 'hny'    
%>
<script>
	var curName = <%- name %>
</script>
```

