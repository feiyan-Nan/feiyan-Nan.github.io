# css常见bug

## 图片出现间距解决方案

给父元素设置font-size: 0;



## 解决移动端1px像素问题

```css
$borderColor: #E1E0DF;

.border-1px, .border-1px-t, .border-1px-b, .border-1px-tb, .border-1px-l, .border-1px-r {
  position: relative;
}

.border-1px {
  &:before {
    content: " ";
    position: absolute;
    border: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    transform-origin: left top;
    transform: scale(0.5);
  }
}

.border-1px-t {
  &:before {
    content: " ";
    position: absolute;
    border-top: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
}

.border-1px-b {
  &:after {
    content: " ";
    position: absolute;
    border-bottom: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
}

.border-1px-tb {
  &:before {
    content: " ";
    position: absolute;
    border-top: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 0;
    transform: scaleY(0.5);
  }
  &:after {
    content: " ";
    position: absolute;
    border-bottom: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
  }
}

.border-1px-l {
  &:before {
    content: " ";
    position: absolute;
    border-left: 1px solid $borderColor;
    color: $borderColor;
    left: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    transform-origin: 0 0;
    transform: scaleX(0.5);
  }
}

.border-1px-r {
  &:after {
    content: " ";
    position: absolute;
    border-right: 1px solid $borderColor;
    color: $borderColor;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    transform-origin: 100% 0;
    transform: scaleX(0.5);
  }
}
```

* 使用scss `#include`变量

```css
/* 根据条件，输出 1px 边框（top or bottom） */
@mixin render-1px-top-and-bottom($position, $color) {
  content: '';
  position: absolute;
  @if $position == top {
    top: 0;
    -webkit-transform-origin: 0 top;
    transform-origin: 0 top;
  }
  @if $position == bottom {
    bottom: 0;
    -webkit-transform-origin: 0 bottom;
    transform-origin: 0 bottom;
  }
  left: 0;
  background: $color;
  width: 100%;
  height: 1px;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
/* 根据条件，输出 1px （left or right） */
@mixin render-1px-left-and-right($position, $color) {
  content: '';
  position: absolute;
  @if $position == left {
    left: 0;
  }
  @if $position == right {
    right: 0;
  }
  background: $color;
  width: 1px;
  height: 100%;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}


/* 输出 1px 边框：
  ## 一、对于一个元素，只能输出两个边框（top bottom 二选## 一、left right 二选一）
  ## 二、如果要输出 4 条边框，考虑使用两个元素嵌套
*/
@mixin get-1px-border($position, $color) {
  position: relative;
  @if $position == top {
    &:before {
      @include render-1px-top-and-bottom($position, $color);
    }
  }
  @if $position == bottom {
    &:after {
      @include render-1px-top-and-bottom($position, $color);
    }
  }


  @if $position == left {
    &:before {
      @include render-1px-left-and-right($position, $color);
    }
  }
  @if $position == right {
    &:after {
      @include render-1px-left-and-right($position, $color);
    }
  }
}
```



## ios端出现下图问题

给input框设置：background-color: transparent;

![image](https://notecdn.hrhe.cn/images/css小方法-10.png)



## 解决移动端报红

![image](https://notecdn.hrhe.cn/images/css小方法-11.png)

由于没有e.preventDefalt引起的，给触摸范围的元素添加css属性

```css
touch-action: pan-y;
```



## 解决ios滚动卡的问题

```css
body {
    -webkit-overflow-scrolling: touch;
}
```



## 浏览器自动填充密码颜色

```css
:-webkit-autofill{
    box-shadow: 0 0 0 400px #fff inset; // 设置背景颜色
    -webkit-text-fill-color: red; //设置字体颜色
}
```



