# js-01 javascript 初始
## 一、js发展历史：

ECMAScript（Europe Computer Manufacture Association)；语法，定义变量

DOM（Document Object model） ; 文档对象模型；

BOM（Brower Object model）; 浏览器对象模型；

`javascript`是一个单线程、非阻塞、异步、解释性脚本语言；

V8是chrome里的javascript运行环境；

1. javascript 是解释性脚本语言；

* javascript原名不是JavaScript，而是Livescript；
* js是用来解决用户和浏览器交互的问题；
* ECMAScript是JavaScript的规范，JavaScript是ECMAScript的实现；
* ECMAScript方言：Jscript、ActionScript；

2. Javascript的创造者`Netscape`（网景公司）



## 二、script引入方法

1. 行间样式，在标签内直接写`onclick`点击事件。

```html
<div onclick = "alert('点击')";></div>
```
2. 内部样式，用script标签，写入事件，一般写在body结束标签之前。

3. 外部样式，创建一个js文件，在html引入`<script src="">`，src输入地址；

**放置位置：**

当浏览器解析script标签时，会暂停构建DOM，完成后才会从暂停的地方重新开始，也就是说，如果想在首屏渲染快，就越不应该在首屏就加载JS文件，所以都建议将script标签放在body结束标签之前的原因；

也可以在script标签上添加`defer`属性，规定是否对脚本执行进行延迟，直到页面加载为止；

```html
<script defer='defer'>
```

也可以添加`async`属性，立即加载脚本，不影响其他的顺序 ；

`defer`和`async`只对外部脚本有效



## 三、基本使用语法

1. 注释

单行注释：//     多行注释：/**/    。

单行注释一般用在一行代码上，多行注释一般用在函数上边；

";"和回车表示一条语句的结束，

2. js字符串类型可以是双引号也可以是单引号；

理解：

1. 在script的标签中有错误的代码，错误后面的代码都不执行；
2. 一个页面可以使用多个script标签，在一对script的标签里写错了代码，不会影响到其他script标签的代码；
3. script的标准写法：`<script type="text/javascript">`或者写`language="JavaScript"`;
4. 在html5当中是不需要写这个type的，在严谨的浏览器，需要写上，在不兼容的时候，写上两个都是可以的；
5. 不要在引入js的标签里面写任何js代码，可能导致文件js文件加载异常；
6. 如果script标签放在html后面，浏览器会自动放进body中的内容最后面；

3. 变量的命名规则

1. 不能有中划线，需要使用驼峰命名
2. 严格区分大小写
3. 可以以$符和下划线开头，不能以数字开头
4. 不能使用保留字和关键字
5.  起有意义的变量名

3. 关键字，浏览器当中标签名字也就是关键字，比如script，var；

5. 进制

以0开头的值为进制，16进制以0x开头，默认是十进制

八进制：遇八进1，十六进制，遇十六进1；

例如：07，表示八进制的7,      10，表示八进制的8；

0xa 表示十六进制的10；



6. 变量

变量声明，有var，有变量名字，没有值；

变量初始化，有var，有变量名字有值；

`var num=10`

可以说是声明变量并初始化--变量的初始化--声明变量赋值；





6. 声明变量的方式

先声明，后赋值    `var a;     a=12;`

声明并赋值：`var a=12`;

声明多个变量时：`var x,y,z;`     `x=1;y=2;z=3`;或`var x=1,y=2,z=3`；

声明多个值相同的变量时 `var a=b=c=12`，只有第一个有var。

只声明不负值时，变量为`undefined`;

变量名不能重复声明，后声明的会覆盖掉前面的声明；



7. 变量交换：

1. 借助第三个变量交换；

```js
var n=a;
a=b;
b=n;
```

2. 相加：一般适用于数字交换；

```js
a=a+b;
b=a-b;
a=a-b;
```







## 四、简单交互

1. 找到谁

通过id名获取元素：`document.getElementById("box")`;

2. 干什么：

`document.getElementById("box").onclick = function(){}`

通过(by)id获取(get)元素(Element)并声明变量。

3. 结果是什么：

`document.getElementById("box").onclick = function(){alert(1);}`




## 四、获取元素
1. 通过标签名获取元素；

`document.getElementsByTagName("")`;

获取到的都是类数组；当只有一个类名时，可以直接在括号后加中括号下标；

获取到数组中的某个具体标签需要加下标，从0开始；

2. 通过类名获取元素（IE9+）

`document.getElementsByClassName("")`;

获取之后也是类数组，

通过`className`获取的元素，属于；



3. 从父元素通过标签名获取元素：

`父元素.getElementsByTagName("类名")`;

`父元素.getElementsByClassName("")`;

4. 通过css选择器来获取元素；

`document.querySelector("css选择器选择")`;    返回的是一个

`document.querySelectorAll("css选择器选择")`； 返回的是一组；

比如：`ul.querySelectorAll('[title^="3"]')`;   title属性以3开头的；

`document`也可以是父级元素；

括号获取和css选择器一样选择，兼容IE8+；



5. 也可以通过`window.id`名   也可以获取；

6. 现在通过给元素设置id名，可以直接调用事件，不需要获取了；
```js
<button id='btn1'>按钮</button>
btn1.onclick = function(){
    consle.log('11111111111')
}
```



## 五、鼠标事件

`元素.事件 = function(){}`

`元素.addEventListener('事件', handler)`

1. 单击事件，
       `onclick`，单击触发

2. 双击事件，
       `ondblclick`，双击触发
3. 移入，
       `onmouseover`，鼠标移入触发，移入子元素再次触发；
4. 移入，
       `onmouseenter`，鼠标移入触发，移入子元素不触发，穿过子元素；
5. 移出，
       `onmouseout`，当鼠标离开时会触发，移入子元素也触发离开；
6. 移出
       `onmouseleave`；移入子元素不触发离开；
7. 移动
       `onmousemove`；鼠标经过元素每一个点都会触发一次。
8. 按下
       `onmousedown`；鼠标按下会触发
9. 抬起
       `onmouseup`；鼠标松开会触发；和`onmousedown`组成一个完整的单击事件；
10. 菜单
        `oncontextmenu`；右键触发菜单；



## 六、操作内容

1. 获取内容

`元素.innerHTML`   可以识别标签；

`元素.innerText`      不能识别标签，纯文本；



2. 设置

`变量.innerHTML = ""`;    赋值

`变量.innerText = ""`;     赋值





## 七、表单操作内容

表单有三种，`input`,`textarea`,`select`。

1. 获取

`input.value`;  获取的是value值；

`textarea.value`;  获取的是value值；

`select.value`；获取的是里面默认被选中的value值；

`元素.checked=true`；复选框被选中



2. 设置

`input.value = ""`; 改变其中的内容

`select.value = ""`; 改变默认选中项；





## 八、操作元素属性

1. 获取

    变量名.属性名。例如:`a.href`；

    获取类名时：`变量名.className`;  需要大写；

2. 设置

   
   `box.id = "obox"`;
   
   `a.href = "http://baidu.com"`;
   
   `img.src = "1.jpg"`；js外部文件时路劲要以html文件来找；



## 九、操作元素样式

1. 获取

    `元素.style.属性值`；只能获取行内样式；

2. 设置

(1)`元素.style.属性值 = "";`（设置的样式也都是在行内样式）

属性值是font-size有中划线的时候，需要fontSize；去掉中划线，第二个单词首字母大写；

(2)`元素.style.cssText = ""`;   可以写多个样式；

(3)`元素.style = ""`;   可以写多个样式， //行间样式会全部替换掉；分号隔开;

常用: `元素.clssName`，写一个类名，使用时添加类名





## 六、document.write()；
`document.write()` 和 innerHTML 的功能类似，操作标签的内容，但是 `document.write()` 只能操作 body 的内容。



`document.write()` 和 `innerHTML` 的区别：

1. `document.write()` 可以识别标签。
2. `document.write()` 会覆盖标签中已有的内容，但是不会覆盖 document.write() 添加的内容。
3. `document.write()` 只能操作 body 的内容。
4. `document.write() == document.body.innerHTML`。

document.writeln 与 document.write的区别：仅仅是writeln多了一个换行符




## 十、常用方法
1. `document.write()`; 在页面添加内容。
2. `prompt()`；打开浏览器弹窗输入；
3. `alert` 弹窗
4. `console.log(内容)` 输出到控制台
5. `+`拼接符 可以将前后内容链接起来，组成一串完整的代码；
6. `javascript:void(0)`;    写在a标签里面，阻止浏览器刷新，#号也行，点击之后http地址自动多个#，并文字变色；



`window.onload = function(){}` 

当前页面加载完之后再执行函数中的代码

可以将script写在body内容之上；


## 高频面试题：
● 什么是 JavaScript ？

● JavaScript 与 ECMAScript 的关系？

● 变量的命名规则？

● window.onload 的作用？

● document.write() 与 innerHTML 的区别？



