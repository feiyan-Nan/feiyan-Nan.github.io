# html-12 HTML5
## 一、HTML5的概念
1.广义的概念：H5 ≈ HTML5+CSS3+JavaScript\
2.狭义概念：html的5.0版本



## 二、HTML5新增的特性
1. 简洁的主体结构。
2. 语义化标签。
3. 增强的表单元素。
4. 音频视频。
5. canvas画布。
6. SVG。
7. 地理位置。
8. web存储（本地存储）。
9. 离线缓存。
10. 拖拽API。
11. web workers（让JS运行在服务器端）。
12. 服务器发送事件。

简洁的主题结构：

html5支持不用head、body、还有一些结束标签，浏览器会自动补齐。



## 三、使用iconfont图标
1. https://www.iconfont.cn/ 官网下载文件，并用link引入iconfont.css文件。
2. 引入方式：

a. font class

建立一个新标签，class="iconfont 图标代码" ，

b. unicode

拷贝生成的@font-face代码，拷贝iconfont样式，span标签里填写&#xe61c;值。

c. symbol

script引入生成的js文件，加入通用icon代码，挑选响应图标获取类名。

d. 表单加入提示图标

input起类名放iconfont，value值填写图标代码，填写unicode生成的代码。

e. before引入，content:"\e900"; 如果图标不显示则改变加入字体文件font-family:"iconfont";。

3. iconfont改变样式的方法：

a. font-size 改变图标的大小

b. color 改变图标的颜色

c. font-weight:改变图标的边框粗细；

d. symbol方式修改颜色，打开js文件，搜索fill，并修改填充的颜色值。



## 四、新增的语义化标签
1. hearder：定义文档的页眉，头部；

2. nav：定义导航链接的部分；

3. footer：定义文档或节的页眉底部；

5. section：定义文档中的节，可以替换div，语义不强烈，相当于一个块。
```html
<article>
    <section></section>
</article>
```
6. aside：侧边栏，侧边的都可以用到；

4. article：定义文章；

7. hgroup；表示标题组，需要和h1-h6组合使用，可以在一个页面使用多个h1标签；一个标题组可以使用一个h1标题，标题组外面只能有一个h1标题。

```html
<article>
    <hgroup>
        <h2>金正恩的故事</h2>
        <h3>去会见特朗普的故事</h3>
        <h4>去会见特朗普的第一天，</h4>
    </hgroup>
    <p>这个<mark>小秘密</mark>是什么呢，就不告诉你！</p>
</article>
```



8. figure；主要用作表示内容的附属信息（如图片、表格、代码等），如果删除，不影响整体文档流和文章的完整性。

figure属性值：

9. figcaption：标题；
```html
<figure> <img src="" alt="" /> //是个内联块 <figcaption>图片说明</figcaption> </figure>
```

time表示时间的标签，没有任何样式，常用于js可以修改时间。

mark用来标记文字。
```html
<p><time>04月15号</time>今天<mark>学习</mark>HTML5</p>
```

![image](https://notecdn.hrhe.cn/images/html-12_HTML5-01.png)



## 五、语义化标签的IE兼容问题处理

1. 创建元素，给元素转块

```html
<script> document.createElement('header'); </script>
```
2. 引入html5shiv.js文件
```html
<script src="html5shiv.js"></script>
```



## 六、HTML5新增表单属性

复习之前学过的表单元素：

text、password、radio、checkbox、button、submit、reset、file、image、

h5表单，新增添加了常用的验证信息，只能输入限定值，才能被提交上去。

h5新增表单属性input  的type类型:

```html
<!-- type="url" 输入内容是链接，移动端会出现带.com的键盘--> 
<!-- type="email" 输入内容是邮件，移动端出现带@符号的键盘--> 
<!-- type="search" 搜索框 输入内容后会出现叉号--> 
<!-- type="tel" 输入内容是电话号码，移动端会出现数字键盘 --> 
<!-- type="number" 数字 value默认值 step步长 min最小值 max最大值--> 
<!-- type="range" 滑块 value默认值 step步长 min最小值 max最大值 --> 
<!-- type="date" 选取年月日--> 
<!-- type="datetime-local" 选择年月日和时间 --> 
<!-- type="month" 选择一整个月 --> 
<!-- type="week" 选择一整个周 --> 
<!-- type="time" 时间 --> 
<!-- type="datetime" 需要用户手动输入 --> 
<!-- type="color" //颜色选择器
```

## 七、html5新增的属性
1. contenteditable    可以编辑的文字；

```html
<p contenteditable="true">1</p> 
```
contenteditable="true" 放在标签里可以编辑的文字。

该标签可以自适应高度，而textarea不能自适应高度；


2. 右到左显示
```html
<bdo dir="rtl">该段落文字从右到左显示。</bdo>
```
dir 改变文本的方向，ltr 从左向右，rtl 从右向左，，auto 自动；

必须使用bdo标签，覆盖文本方向，适用于需要倒过来显示的文本，很少使用；

3. hidden    元素进行隐藏；

4. title    元素的额外信息，鼠标放在元素上面显示；



## 八、form表单新增的相关属性

```html
<input type="text" placeholder="请必须输入文字" autofocus autocomplete required pattern multiple />
```
* `placeholder` 输入框里提示内容文字 

* `autofocus` 输入框自动获取鼠标焦点（一个页面只能给一个form表单元素添加）

* `autocomplete` 属性值自动返回之前输入的值，有两个值：on、off（默认值为on）；

   	设置off可以去掉下拉框提示，也可以给form设置

* `required` 必须项，不能为空

* `pattern` 验证输入域的值，限制输入数值，它的值是一个正则表达式（[a-z]{3,8}）；

* `multiple` 用于多选

* `min`  最小输入值（number、range）

* `max` 最大输入值（number、range）

* `step` 数字间隔步长（number、range）

* `accesskey="键位"` 规定激活（使元素获得焦点）元素快捷键。一般alt+s。



form不在form表单里面的输入域也能被提交数据；

1. 给form表单添加id名字，给外面的
2. form表单元素添加form="form表单id"





fieldset    对表单中的相关元素进行分组，会在相关表单元素周围绘制边框；可以嵌套，可以有多个；

legend    为fieldset定义标题；

利用list来设置下拉选项菜单；

用datalist替换select，option作为选项，

类似于百度，点击之后出现一堆选项。

建立连接：

在input标签设置list="名"，在datalist设置id="名"。

注意：option里面必须输入value值，否则不能选择。

```html
<input type="text" list="test" />
<datalist id="test">
    <option>请选择省份</option>
    <option value="北京">北京</option>
</datalist>
```



修改单选框复选框默认样式html代码：

清除表单默认样式：`-webkit-appearance:none`;

第一种写法：
```html
<label><input type="checkbox" value="打豆豆" name="hobby"> <span><span> </label>
```
第二种写法：
```html
<input type="checkbox" value="打豆豆" name="hobby" id="select"> <label for="select"></label>
```

css代码：
```css
label{ 
    width:34px; 
    height:34px; 
} 
label input{ 
    display:none; //隐藏默认样式 
} 
label span{
   display:block;
   width:34px; 
   height:34px; 
   background:url(./images/radio.png) no-repeat 0 0;} 
label input:checked + span{
 //当label里面input处于被选中状态时，改变兄弟元素span的属性; 
    background-position:0 -34px; 
}
```

* 隐藏number的上下箭头
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
// 火狐去number后缀
input[type=number] {
  -moz-appearance:textfield!important;
}
```



## 九、HTML5新增多媒体标签

1.audio音频标签；

第一种：直接src地址写
```html
<audio src="" controls loop muted autoplay></audio>
```
第二种：写多个音频，当浏览器不兼容第一个文件时，则会执行第二个音频。
```html
<audio controls loop muted autoplay>
    <source src="" type="audio/ogg">
    <source src="" type="audio/ogg">
    您的浏览器不支持音频，请升级浏览器版本！
</audio>
```
src 路劲

controls: 加入控制器

loop 循环播放

muted 静音

autoplay 自动播放


浏览器及格式样式：


| 格式 | MIME-type | 最新的浏览器支持情况 |
| --- | --- | --- |
| ogg | audio/ogg | Chrome、Firefox、Opera10+ |
| mp3 | audio/mpeg | Chrome、Firefox、Opera10+、IE9+、Safari5+ |
| wav | audio/wav | Chrome、Firefox、Opera10+、Safari5+ |


2.video插入视频

属性值：src controls loop muted autoplay，

width 设置video的宽度

height 设置video的高度

poster 设置视频播放器默认显示的图片（缩略图）

注意：如果需要修改播放器的高宽，必须等比例缩放，4:3或16:9，否则会出现多一段；

| 格式 | MIME-type | 最新的浏览器支持情况 |
| ogg | video/ogg | Chrome、Firefox、Opera |
| mp4 | video/mp4 | Chrome、Firefox、Opera25+、IE9+、Safari |
| webM | video/webm | Chrome、Firefox、Opera |



## 十、设置字体：

1.声明字体文件：

```css
// 支持ttf和eot字体文件
@font-face{
    font-family: ''; //这里填写引入了src的字体文件;
    src: url('字体文件.ttf|eot');
}
```
如果是woff字体文件：src: url('字体文件.woff') format('woff');
```css
@font-face{ 
    font-family:"声明字体"; 
    src: url(字体文件.ttf); 
}
```
2.使用字体

```css
.box{ font-family:'myfont'; }
```



## 课外知识：

1.number属性值：

清除number默认样式，及上下箭头：
```css
/*在chrome下移除input[number]的上下箭头*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
     margin: 0;
}
/*在firefox下移除input[number]的上下箭头*/
input[type="number"]{
    -moz-appearance:textfield;
}
```

添加一个number标签，限制最大长度为5，第一个数值5代表最大长度，第二个数字5代表
```html
<input type="number" oninput="if(value.length>5)value=value.slice(0,5)">
```
在input标签里面加入以上代码，使输入框无法掉入e；
```html
onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )'
```


2.select下拉框清除默认样式
```css
appearance:none;
-moz-appearance:none;
-webkit-appearance:none;
```
以上三种属性清除下拉框的默认样式；

background: url("arrow.png") no-repeat scroll right center transparent; 放下拉框的图片

padding-right: 14px; 空出箭头的位置；

ie浏览器清除下拉框的样式

select::-ms-expand{ display: none; }
