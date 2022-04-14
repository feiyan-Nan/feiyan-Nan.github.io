# CSS 预处理器
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



## 常用工具函数

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

**注意事项**

* 用_开头的scss文件时，表示告诉scss不要将其编译到css文件中，在导入语句时，不需要加下划线；



## 二、Stylus

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

