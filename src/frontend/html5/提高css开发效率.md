# 提高css开发效率

## 清除浮动
```css
.clearfix:after {
  content: "\00A0";
  display: block;
  visibility: hidden;
  width: 0;
  height: 0;
  clear: both;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
}
.clearfix {
  zoom: 1;
}
```


## 垂直居中

（1）绝对定位且已知宽高
```css
.container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid #333333;
}
.content {
  background-color: #ccc;
  width: 160px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -80px; /* 宽度的一半 */
  margin-top: -50px; /* 高度的一半 */
}
```
（2）绝对定位+未知宽高+translate
```css
.container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid #333333;
}
.content {
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
}
```
（3）利用绝对定位宽高拉升原理，中心居中元素
```css
.middle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```
（4）利用相对定位于css3使元素垂直居中
```css
.v-middle {
  position: relative;
  top: 50%;
  -webkit-transform: -webkit-translateY(-50%);
  -moz-transform: -moz-translateY(-50%);
  -o-transform: -o-translateY(-50%);
  transform: translateY(-50%);
}
```
（5）图片上下左右居中
利用table-cell让内部的元素上下左右居中；
```html
<div class="content">
  <img src="./4.jpg" alt="img" />
</div>
```
```css
.content {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
```



## 变点状

1. 单行变点状：

```css
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
```

2. 多行变点状：

```css
display:-webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp:2;
overflow:hidden;
```



## 扩大选区范围

```css
&:after {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
}
```

