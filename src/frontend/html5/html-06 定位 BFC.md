# html-06定位 BFC
## 一、 相对定位position：relative
1. 只给一个元素加相对定位，不加具体的位置，对这个元素本身没有任何影响。

2. 相对于原来的位置进行定位的，原来的位置还占位。

3. 配合top,left,right,bottom使用

4. 提升层级



## 二、提升层级
z-index:改变元素层级，只用在加了定位的元素上，

数值越高层级越大，正常文档流层级是0。

**不生效的原因**

* 没有设置定位
* 子级的层级永远不可能高于父级；





## 三、绝对定位：position: absolute;
1. 相对于初始包含块定位，根据用户代理的不同，初始包含块可能是html，也可能是画布，脱离文档流不占位。

3. 配合top,left,right,bottom使用

4. 通常情况下绝对定位和相对定位配合使用，子元素用绝对定位，父元素用相对定位（子绝父相）。

5. 加了绝对定位的元素，先看父元素有没有定位（绝对定位，相对定位，固定定位），如果父元素有定位，就相对于父元素定位，父元素没有定位，就看爷爷，爷爷有定位就相对于爷爷定位

6. 提升层级



## 四、 固定定位：position：fixed。
1. 相对于浏览器进行定位，定位之后脱离文档流不占位。
3. 提升层级
4. 配合top,left,right,bottom使用

添加fixed需要添加-webkit-transform: translateZ(0) 防止webkit抖动；



## 五、粘合定位

position: sticky；

是relative和fixed的结合体；

当元素在屏幕内，表现为relative，当溢出屏幕，表现为fixed；

作用：特别适合导航的跟随定位效果；

```css
nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0; /* 必须加 */
}
```



 

## 六、 脱离文档流的属性
1. float:left;
2. float:right;
3. position:absolute;
4. position:fixed;

浮动，脱离文档流但是不脱离文本流。

定位：既脱离文档流，也脱离文本流。

脱离文档流的元素就不区分块还是内联，都可以设置宽高等盒模型的样式。

 


## 七、 BFC(块级格式化上下文)
### 什么是BFC

Block Formatting Context：指页面中的一个渲染区域，并且拥有一套渲染规则，他决定了其子标签如何定位，以及与其他标签的相互关系和作用。



### 如何生成BFC

既然BFC是一块渲染区域，那这块渲染区域到底在哪，它又是有多大，这些由生成BFC的标签决定，CSS2.1中规定满足下列CSS声明之一的标签便会生成BFC。

1. 根标签 html
2. float的值不为none(为left/right)。
3. overflow的值不为visible（为hidden/scroll/auto都行）
4. display的值为inline-block
5. position的值为absolute或fixed



### BFC的特性

1. 内部的标签会在垂直方向上一个接一个的放置
2. 垂直方向上的距离由margin决定，属于同一个BFC的两个相邻标签的margin会发生重叠 
3. 每个标签的左外边距与包含块的左边界相接触（从左向右），即使浮动标签也是如此。
4. BFC的区域不会与float的标签区域重叠
5. 计算BFC的高度时，浮动子标签也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子标签不会影响到外面标签，反之亦然 





### BFC解决的问题

1）外边距折叠 (margin重叠的问题)

2）自适应两栏或三栏布局。

3）防止字体环绕

4）清除浮动 

5) margin塌陷问题 











## 面试题
● 如何让盒子水平垂直居中？

● 简述BFC规则，及解决的问题？

