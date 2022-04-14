# html-03 CSS样式字体
## 一、引入样式的三种方式
1. 内部样式，在html文件的head标签内写style标签，style标签里面写样式。

2. 外部样式，新建一个CSS的文件，在html的head标签里写link标签。

`<link  href="style.css" type="text/css" rel="stylesheet"> `

href链接到的css文件，type写引入的css文件类型，

rel="stylesheet"，被链接文档和当前文档之间的关系：引入样式表。

优点： ①多个页面可以使用同一个css文件，大大减少了工作量

②方便后期维护，改变一个css文件里的样式，就可以改变所有html页面里的样式

3. 行间样式，html标签的开始标签里面直接空格写，style=""，多个用分号隔开

优先级：

通常：行间样式>内部样式>外部样式；

内部样式和外部样式，谁在后谁的优先级最大，遵循就近原则。




## 二、选择器
1. 标签选择器：直接选择标签名字。

2. class选择器(类选择器)：给标签起class名，css直接写.class名。

同一个标签可以有多个class名，class名中间用空格隔开，

同一个class名可以使用多次，相当于人的姓名。

class命名规则：a-z,A-Z,0-9,_,-，必须以字母开头

3. id选择器：给标签起id名，css直接写#id名。

同一个id名只能使用一次，同一个标签只可以有一个id名，相当于人的身份证

4. 后代选择器：中间用空格隔开，选择class名里面的标签。

5. 群组选择器：中间用逗号隔开(逗号隔开的是完整的选择器)。

6. 直接子元素选择器：只选择儿子那辈，儿子里面的标签不被选中，中间用>号隔开。·

7. 交集选择器：中间啥标点符号都不加

div.red：选中所有div标签带red的class名的标签。

8. 通配符(*)，把所有的标签都选中，修改所有属性

常用于margin值，padding值初始化

优先级：

权重值：id选择器 100>class选择器 10>标签选择器 1。

1. 当选择到不同的标签上的时候，继承来的样式优先级小于给自己设置的优先级。
2. 当选择到同一个标签上的时候，比较权重，谁的权重高，谁的优先级就更大。
3. 当选择到同一个标签，权重还相同的时候，遵循就近原则。
4. 行间样式优先级大于id选择器，class选择器，标签选择器
5. `!important` 优先级最大 写在分号里面









## 三、文字相关样式
1. `font-size`：文字字号，可以继承，

   谷歌里面默认是16px，默认最小是12px，通常情况下，文字的字号都是双数（但也是有单数的）

2. `line-height`：行高，可以继承，想要设置一行文字在盒子里垂直位置居中，给文字设置行高和盒子高度相等，

   单位：px %，如果字号是100px，line-height:2，表示行高是200px；

3. `font-family`：文字字体，可以继承，

   安全字体：楷体，宋体，微软雅黑，黑体，可以设置多种字体，用逗号隔开，先识别第一种，字体带空格，必须加空格。

4. `font-style`：设置文字是否倾斜，可以继承，italic倾斜，normal不倾斜。

5. `font-weight`：文字是否加粗，可以继承，bold加粗，normal不加粗。

6. 文字样式复合写法，倾斜和加粗如果省略，默认是不倾斜加粗的，字号和字体不能省略。

   `font:italic bold 30px/50px '楷体'`； font:是否倾斜 是否加粗 字号/行高 字体。

7. color文字颜色

   ①英文单词，

   ②十六进制，六位数组成，0-9，a-f，前两位是红色，中间是绿色，最后是蓝色

   ③rgb，取值0到255，中间用逗号隔开，示例：rgb(255,255,255)

**解决最小12px问题**

```css
font-size:10px;          
-webkit-transform-origin-x: 0;    /*定义元素被置于x轴的何处*/
-webkit-transform: scale(0.90);   /*定义元素被缩放*/
```



## 四、文本相关样式，可以继承
1. `text-indent`，首行缩进，单位:px em，一般使用2em（表示第一行空2格）

   em  是本身的font-size值相比较  font-size:20px  。1em=20px,2em=40px

2. `text-align`，文字对齐方式，可以继承,center/left/right。对inline元素都起作用；如果子元素都是span，可以给父级div设置

   让文字两端对齐：

```css
text-align:justify
text-align-last:justify
```
3. `text-decoration`，设置文本装饰，可以继承

   `line-through`，中划线，`underline`，下划线，

   `overline`，上划线，，，`none`，去掉下划线

4. `letter-spacing`，字母与字母之间的距离，文字与文字之间的距离。
5. `word-spacing`，单词与单词之间的距离，空白距离
6. 如果想让横着的文字重叠到一起：设置letter-spacing 为负值

   如果想让竖着的文字重叠到一起：设置行高为0。

7. `user-select: none` 让用户不能选择文本内容
8. `text-overflow: ellipsis`； 超过文本变点状
9. `text-transform: uppercase` 让输入的字母通通大写；

10. `white-space` 空白处理

    当html中输入多个空白符时，默认会被当成一个空白符处理，就是这个属性控制的；

* `normal`： 合并空白符和换行符
* `nowrap`：合并空白符，但不许换行；
* `pre`：不合并空白符，并且只在有换行符的地方换行；（常用）
* `pre-wrap`：不合并空白符，允许换行符换行和文本自动换行；


11. `word-break: break-all`; 以字母作为依据换行，解决文本在不该换行的时候换行；

`white-space: pre-wrap;` textarea保留换行；



## 五、文本变点状

1. 单行变点状：

```css
white-space:nowrap;     /*超出文本不换行*/
text-overflow:ellipsis;    /*超出文本变点状*/
overflow:hidden;        /*超出文本内容隐藏*/
```

2. 多行变点状：

```css
display:-webkit-box;    /*旧版弹性盒子;*/
-webkit-box-orient:vertical;    /*项目往下排;*/
-webkit-line-clamp:2;    /*超出两行文本变点状;*/
overflow:hidden;        /*超出内容隐藏;*/
```

3. white-space属性

   （1）nowrap，文本不换行

   （2）pre-line，保留换行符，在textarea输入的回车会换行；

4. 多行变点状不生效原因

   由于postcss原因导致，将`-webkit-box-orient:vertical` 写入行内即可




## 六、伪类选择器
`a:link`，初始样式。

`a:visited`，访问过后的样式。

`a:hover`，鼠标滑过的样式。

`a:active`，鼠标按住的样式。

顺序不能错乱：l-v-h-a。





## 面试题
● 引入css的方式有几种？

● 单行文本水平垂直居中如何实现？

● 选择器优先级如何计算？


