# html-15 css预处理器
CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。

使用CSS预处理器语言,可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

目前CSS 预处理器技术已经非常的成熟，而且也涌现出了很多种不同的CSS 预处理器语言，其中比较优秀的有LESS、Sass（SCSS）等等

Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件,只有在被编译后才能够被浏览器识别使用。预处理编译工具koala




## 一、SCSS

### 定义变量

```scss
$color: #f00;   // 在scss中使用$符定义变量
.txt{
    color: $color;
}
```

### &引用自身

> 对于BEM规范可以直接引用

```scss
.test{
    &__name{}  //相当于.test__name
}
```

### @mixin混合器

> 复用代码

使用`@mixin`定义，使用`@include`使用；

```scss
// 普通使用
@mixin danger{
    font-size: 10px;
    color: #eee;
}
.notice{
    @include danger
}

// 传参使用
@mixin danger($col:#e22){
    color: $col;
}
.notice{
    @include danger(#d33)
}

// 多个参数时
@mixin colors($text, $background, $border) {
 color: $text;
 background-color: $background;
 border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
 @include colors($values...);
}
// 编译
.primary {
 color: #ff0000;
 background-color: #00ff00;
 border-color: #0000ff;
}

// 参数使用...全部使用，
@mixin box-shadow($shadows...) {
 -moz-box-shadow: $shadows;
 -webkit-box-shadow: $shadows;
 box-shadow: $shadows;
}
.shadows {
 @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
// 编译
.shadowed {
 -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
 -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
 box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}
```

### 选择器继承

对于`mixin`使用的，会在每个使用了`mixin`的css里面都添加对应的样式，对于@extend继承的，则是将需要继承的类添加到一起，成为群组选择器

占位符输出不会包含定义的类；

```scss
// 直接使用
.note{
    font-size: 12px;
}
.danger{
    @extend .note;
}
// 输出：.note, .danger{}

// 占位符
%note{
    font-size: 12px;
};
.danger{
    @extend %note
};
// 输出：.danger {}
```

### 插值语句：#{}

```scss
$name: foo;
$attr: border;
p.#{$name}{
    #{$attr}-color: blue;
}
// 编译
p.foo{
    #{$attr}-color: blue;
}
```

### 控制语句

#### @if()，只能使用==；

```scss
p {
 @if 1 + 1 == 2 { border: 1px solid; }
 @if 5 < 3 { border: 2px dotted; }
 @if null  { border: 3px double; }
}
// 编译
p {
    border: 1px solid ;
}
// @else
$type: monster;
p {
    @if $type == ocean {

   } @else if $type == matador {

   } @else {}
}
```

#### @for

格式：`@for $var from <start> through <end>`

或：`@for $var from <start> to <end>`

使用through和to的区别：
	* through包含start和end的值
	* to只包含start的值，不包含end的值，to比through少执行一次；

```scss
@for $i from 1 through 3 {
    .item-#{$i} {width: 2em * $i}
}
```

### @each

格式：`$var in <list>`

```scss
@each $animal in puma,sea-slug,egret {
    .#{$animal}-icon {
       background-image: url('/images/#{animal}.png')
   }
}

// 编译
.puma-icon {
 background-image: url('/images/puma.png'); }
.sea-slug-icon {
 background-image: url('/images/sea-slug.png'); }
.egret-icon {
 background-image: url('/images/egret.png'); }
.salamander-icon {
 background-image: url('/images/salamander.png'); }
// 当多个变量数组时
@each $animal, $color, $cursor in (puma, black, default),
                                 (sea-slug, blue, pointer),
                                 (egret, white, move) {
 .#{$animal}-icon {
   background-image: url('/images/#{$animal}.png');
   border: 2px solid $color;
   cursor: $cursor;
 }
}
// 编译
.puma-icon {
 background-image: url('/images/puma.png');
 border: 2px solid black;
 cursor: default; }
.sea-slug-icon {
 background-image: url('/images/sea-slug.png');
 border: 2px solid blue;
 cursor: pointer; }
.egret-icon {
 background-image: url('/images/egret.png');
 border: 2px solid white;
 cursor: move; }
// 多重赋值时
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
 #{$header} {
   font-size: $size;
 }
}
// 编译
h1 {
 font-size: 2em; }
h2 {
 font-size: 1.5em; }
h3 {
 font-size: 1.2em; }
```

示例：间隔类名

```scss
@each $name,$prop in (p:padding,pt:padding-top,pr:padding-right,pb:padding-bottom,pl:padding-left){
 @for $i from 0 through 30 {
    .#{$name}#{$i}{
     #{$prop}: #{$i}px;
   }
 }
}
// 编译(可以去https://www.sassmeister.com/查看)
p{padding: 1px;}
```

### @while

```scss
$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
```



### 常用工具函数

```scss
$base_width: 750; // 设计稿宽度
$actual-max-width: 600; // 实际最大宽度

/* 根据设计稿中提供的宽度，计算出需要的 vw */
@function px2vw($px) {
  @return #{($px/$base_width) * 100}vw;
}

/* 由于限制了最大宽度，所以在采用vw布局时，需要限制最大高度 */
@function getMaxHeight($px) {
  @return #{($actual-max-width/$base_width) * $px}px;
}
```



## 二、less

### 注释

less有两中注释风格：

* 标准的注释风格：`/**/`，会保留到编译后的文件。

* 单行注释：`//` 不会保留到编译后的文件。

1. koala有两种编译方式：

   `normal` 按照完整格式编译

   `compress` 压缩编译模式，多余的不显示。



### import 导入样式

引入样式有两种方式：

* 引入css文件：`@import "css文件路径"`，空格和后缀名不能省略。

* 直接引入less文件：`@import "style"`，引入less文件可以省略扩展名。

编译后倒入的文件会和当前文件内容合并。



### 变量定义

变量以@开头，变量名与变量值之间用冒号隔开，

好处是更换风格方便。直接修改变量名的值就可以了。

使用变量直接@变量名，修改变量名可以直接修改被使用的属性值，编译之后直接是16进制的文件。

* 变量可以使用字符串，使用时必须在@之后加{}; 

  @side : left; border-@{side}: 5px solid black;

* 变量可以使用图片路径,使用路径时需要添加引号。

   @images: "../img"; background: url("@{images}/white-sand.png");



### 嵌套使用

选择器的嵌套：

可以在父元素选择器里面直接写子元素选择器嵌套使用，编译后的css文件会按照标准格式显示出来。

在嵌套的代码块内，可以使用&引用父元素，

选择器里面还可以嵌套自己本身，用&引用自己。

 

### 混入

混入在一个class中引入另一个定义好的class，直接增加另外一个class的属性。

定义一些通用的属性为一个class，使用的时候直接.class名;。


```css
.bordered {    
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
```
调用：

```less
a{
   color: #111;
   .bordered;
} 
```

编译后会自动给a标签加入上面定义的属性。


### 混入参数

```css
.bordeRadius (@radius:20px) {
     -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
     -o-border-radius:@radius;
     -ms-border-radius:@radius;
     border-radius: @radius; 
}
```
//前面是类名，括号里面是变量值，用来传值的; //调用时直接使用调用类名的方式，如果有给类名设置默认值， //直接就是默认值的值，需要修改里面的值可以直接括号写值。 //编译后直接加入类名里面的代码



### @arguments变量

>  代表所有参数。

```css
.box-shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
    -moz-box-shadow: @arguments;
    -webkit-box-shadow: @arguments;
    box-shadow: @arguments;
}
```
//前面写类名，括号里面写用到的值,前面加@属性名，多个用逗号隔开。 //如果需要写默认值，需要用冒号隔开。
```css
.box{
 .box-shadow(2px, 5px); 
} 
编译后： 
.box {
 -moz-box-shadow: 2px 5px 1px #000000;
 -webkit-box-shadow: 2px 5px 1px #000000;
 box-shadow: 2px 5px 1px #000000; 
}
```



### extend

  extend伪类来实现样式的继承使用

直接写类名，会将类名里面所有的属性加入选择器里面的属性。

写了extend伪类之后，编译之后会将该组合选择类名的组加入到一起，其他单独元素另起一个类名写。

好处是少了很多行代码。



### 运算
LESS支持一些算术运算，例如加号(+)，减号( - )，乘法(*)和除法(/)的操作 只需写好表达式，编译时会计算结果; less会为你自动推断数值的单位，所以不必每一个值都加上单位 注意：涉及优先级时以()进行优先级运算



### 函数

转换颜色、处理字符串合进行算术运算的函数。

颜色：`lighten()` 减淡，`darken()`加深

```css
.bg_light {
   height: 100px;
   background: lighten(rgb(255, 0, 0), 20%);
}
.bg_darken {   
    height: 100px;
   background: darken(blue, 20%)
}
```
`percentage` 将浮点数转换为百分比字符串。
参数：number- 一个浮点数。 返回： string (字符串) 代码示例

```css
.main{
    width:percentage(100px/200px);
};
编译为css:
.main {
    width: 50%;
};
```



### 循环

```less
.loop(@n, @i: 1) when (@i < @n){
  .demo-@{i}{
    background: red;
  }
  .loop(@n, (@i+1));
}
.loop(100);

```





## 三、Stylus

Stylus是一个CSS预处理器。富于表现力、动态的、健壮的 CSS

### 安装

`npm install stylus –save`

`npm install stylus-loader --save`

### 特点

冒号可有可无 分号可有可无 逗号可有可无 括号可有可无

全靠空格和缩进来区分

### 使用变量

$不是必须的，但加上可以很醒目的知道它是个变量

$font-size = 14px

```css
body
   font font-size Arial, sans-seri
```

### 使用函数

```less
fontS(){
   font-size 30px
   font-style normal
   color #00ff00
   font-weight 400
}

h1
   fontS()
   background $bgColor;
```

### 使用选择器

```less
textarea
input
   color #A7A7A7
   &:hover
       color #000
   等同于：textarea,input
```

### 使用插值

```less
vendor(prop, args)
   -webkit-{prop} args
   -moz-{prop} args
   {prop} args

border-radius()
   vendor('border-radius', 50%)
box-shadow()
   vendor('box-shadow', 5px 5px red)
```

### 条件判断

```less
box(x,y,margin-only=false)
if margin-only
    margin x y
else
    padding x y
p
box(5px,10px,true)
```

### 导入文件

推荐方案

公共的样式文件如reset.css使用JS方式导入在App.vue中,所有组件共享！

公共的.styl文件通过@import “xx.styl” 添加到需要的Vue文件中单独使用!

### 穿透

仅支持stylus使用；

当遇到无法修改的样式时，使用>>>进行穿透；

`.btn >>> .swiper-tab-tem{}`；优先级是最高的，比important还高；

父元素下的子元素颜色无法修改时使用；

