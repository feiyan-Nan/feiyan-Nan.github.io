# html-05 元素转换、浮动
## 一、元素的互相转换
1. 转成块元素：`display:block`;

2. 转成内联元素：`display:inline`;

3. 转成内联块元素：`display:inline-block`;


拓展知识：

块元素尽量不要转换内联块元素，为了使块元素在一行显示，用浮动。




## 二、图片下面空白距离清除方法
> 图片默认最下边有空白，因为默认图片是基线对齐的

1. 给图片转块：display:block;
2. 给图片设置垂直对齐方式：

vertical-align: top/middle/bottom;

居上，中，下对齐，默认是baseline，基线对齐；

3. 给图片的父元素设置：font-size:0;line-height:0;（常用）

缺点：文字字号和行高都是0，需要重新设置文字的字号和行高。




## 三、对齐方式
1. 水平对齐方式：text-align：center；

   针对行内元素和文字设置居中对齐的，给块元素设置居中，里面的行内元素，文字元素都会居中对齐。



2. 块元素居中对齐：margin：0 auto；

   块元素在有宽度的情况下居中对齐。

   auto可以用到很多的地方，表示自动的意思。margin值设置三个的时候，中间写auto代表三个值；



3. 内联元素，内联块元素居中对齐：vertical-align: top/middle/bottom;，也可以写px/em/rem

   不影响块级元素中的内容对齐，它只针对行内元素或行内块元素，特别是行内块元素，通常用来控制图片/表单与文字的对齐。

   让一行文字在一个块中，垂直居中；对图片也管用；

   vertical-align属性是参照line-height来设置的;

```css
display:table-cell; 
vertical-align: middle；
text-align: center;
```



4. vertical-align: middle，需要给两个内联元素都设置，如果解决不了，也可以使用ex单位，一个ex是字体的x-height字体尺寸的一半，比如：vertical-align: -.5ex；也可以直接居中；

   如果是12px的字体想要垂直居中，可以尝试line-height: 2.4ex;

```html
// 两个内联元素都加上
<label style='vertical-align:middle'/>
<span style='vertical-align:middle' />
```



## 四、浮动
1. 浮动元素按照指定的方向发生浮动，碰到父元素的边缘或者相邻的浮动元素就停下来了。
2. 浮动元素脱离文档流不占位。不脱离文本流。

    文档流（普通流）：文档中可显示对象在排列时所占用的位置，从上到下排列，从左到右排列

3. 浮动元素的父元素高度撑不起来，父元素高度为0，下面的元素往上移动。(问题)

单个div不浮动，可以在单个div设置`<p style="clear:both";></p>`。



### 清除浮动的办法

1. 给浮动元素的父元素加高度，

    很多的html页面都是内容撑开的高度，不便于后期维护，不推荐使用。

2. 给浮动元素的父元素加overflow：hidden、scroll、auto 都可以。

    缺点：会不兼容ie6，解决办法：后面添加_zoom:1;（了解）

    当添加了overflow在父元素没有高度的时候，会计算子元素的高度，知道子元素的高度之后，就会自动，撑起父元素。

    一般用auto，auto自动添加滚动条，scroll会默认有滚动条，影响直观。

3. 在浮动元素的后面，加一个空的块元素，一定要加块元素，给块元素起class名，并给这个块元素设置样式clear:both(会导致代码冗长)

    缺点：如果有100个地方写了浮动，就需要加一百个div。

4. 给浮动元素的父元素加class名，给class加上以下属性；

```css
/* clearfix是自己取得，可以随便取。 */
.clearfix:after{ /* 伪类元素，在以clearfix的为名的class标签结尾添加内容*/
    content: '';      /* 引号中间不要写内容 */
    display:block;    /* 为了使添加的内容需要时块，转块 */
    clear: both;    /* 清除浮动的属性。 */
    height: 0;     /* 低版本浏览器默认生成的高度和行高需要清除，也可以不加 */
    line-height: 0;     /* 如果内容添加文字，高度会被撑起来，需要设置行高为0 */
    visibility: hidden;    /* 隐藏元素用户，肉眼看不见，可以不写。 */
}     /* 高度行高和隐藏可以不写，就怕浏览器有默认样式，最好写上。 */

.clearfix{
 *zoom:1;     /* 写了伪元素之后再ie7及以下不兼容了，添加上 */ 
}
```

5. 给父元素加浮动，缺点：脱离了文档流，导致其他内容显示不对位置了。

清楚浮动：

1.加高度，2.overflow，3.加块设clear:both，4.clearfix，5.父元素浮动。




## 五、overflow：
1. `overflow:hidden`  溢出隐藏
2. `overflow:scroll`  加滚动条
3. `overflow：auto`  溢出加滚动条，不溢出不加滚动条





## 面试题
● 块级标签和行内标签的区别？

● 浮动产生的问题？清除浮动的方案？
