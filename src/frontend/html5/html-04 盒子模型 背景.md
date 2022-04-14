# html-04 盒子模型 背景
盒子模型：

由内容（width,height），padding(内边距)，border(边框)，margin(外边距)组成。


## 一、padding：内边距。
内容与边框之间的距离，

padding-方向 ，，方向设置top上，right右，bottom下，right右。

复合写法：padding：

一个值：所有边

两个值：上下，左右

三个值：上，左右，下

四个值： 上，右，下，左（从上边开始，顺时针一圈）

在有设置宽高的时候，padding值改多少，对应的宽高需要减多少，margin值设置不影响宽高。因为padding值是设置的内容，会占用宽高，而margin设置的外边距， 不是内容不占用内容的宽高；




## 二、border边框。
padding与margin之间的距离

边框的三个要素：边框的宽度width，边框的样式style，边框的颜色color。

border-方向-要素。


边框的样式style有有四种：

`solid`实线 `dashed`虚线

`dotted`点状 `double`双实线


去掉边框：border: none;

复合写法:（和padding复合写法一样）

`border-right`: 宽度 边框样式 颜色；中间用空格隔开。

有方向是单独方向样式，没有方向是所有的边框样式。

使用边框写三角形：

设置宽高都为0，设置边框宽度，设置实线，设置其中一条边有颜色，其他颜色都为transparent(透明色)。也可以设置上，左右边框，上有颜色，左右隐藏。




## 三、外边距
margin：边框以外的距离，使用方法和padding值一样。

margin的两个问题：

1. 当margin-top和margin-bottom相遇的时候，会出现重叠，谁大取谁，相同取其一。

    解决办法：给其中的一个标签设置margin值

2. 给小盒子加margin-top；会出现塌陷的现象

原因：给小盒子设置的margin-top传递给了父元素，导致出现了塌陷，只有子元素是父元素的第一个子元素才会出现问题，如果不是第一个子元素，看看前面的元素有没有内容样式，没有内容样式也会出现塌陷，前面子元素没有内容就不会出现塌陷。

**解决办法：**
1. 给大盒子加padding-top（需要给盒子的高度减对应的值），或者触发BFC。
2. 小盒子有文字也不会塌陷，
3. 给大盒子设置border值，小盒子的margin-top也不会传递给大盒子。
4. 大盒子有一个padding：1px，也不会出现塌陷。


对内联元素设置padding和margin值有用吗？

padding:左右管用，上下不管用（上下部分的背景颜色可以延伸）

margin:左右管用，上下不管用，

如果需要给内联元素设置padding和margin值，需要给内联元素套一个盒子，或者转为块元素。



盒子模型的宽度=margin左右值+border左右值+padding左右值+宽度

盒子模型的高度=margin左右值+border左右值+padding左右值+高度




## 四、背景
1. `background-color:red`;  背景颜色

2. `background-image: url(pic.gif)`; 背景图片：用url来引入路径

3. `background-repeat`：背景是否平铺。

   * `no-repeat`：不平铺。
   * `repeat-x`：沿x轴平铺。
   * `repeat-y`：沿y轴平铺。

4. `background-position`：背景定位

   一个值：这个值代表x轴的位置，y轴位置默认为center；

   两个值：第一个值x轴的位置，第二个值y轴的位置。

   两个值单位可以写：px或者方向left,top,right,bottom,center,%

   写 %的话，(0% 0%,左上角；100% 100% 右下角)。

5. 复合写法：

   `background`:背景颜色 背景图片 背景平铺 背景定位。

   `background:red url(pic.gif) no-repeat right bottom` ;

### 其他

可以设置多个背景图，中间以逗号隔开，

多个定位用空格隔开，第一个写的在上面，第二个在下面。

1. `background-attachment`：背景图片是否跟随页面其他部分滚动而滚动。

   `fixed`：固定在页面的顶部，滚轮滑到哪，图片在哪

   `scroll`：(默认值)滚动，，这个属性设置到body里。

2. `backgrud-size`，背景大小
   
* 一个值：默认是宽度，
  
   * 两个值：宽度，高度。
  `cover`:等比例缩放，直到图片最后一条边重合边框大小，裁剪多余的部分；
  
  `contain`:等比例缩放，直到图片完全进入方框，多余的填充背景颜色；
  
3. `background-origin`，规定背景图片的定位区域

   `border-box`  从border开始

   `padding-box` 从padding开始

   `content-box` 从content开始

4. `background-clip`，规定背景的绘制区域

   绘制区域，默认是从边框开始的，设置绘制区域代表从部分开始显

   `content-box`：内容区域（如果需要仅绘制边框可以使用box-shadow，设置内阴影）

   `border-box`: 边框区域（默认值）

   `padding-box`: 内边距区域

给img设置：
`object-fit: cover/contain/none;`



### 背景渐变

6. 线型渐变：渐变色可以多重叠加变成其他的颜色，可以写多个中间用逗号隔开。

   `linear-gradient`(单位，颜色值，颜色值)，（也可以只写两个颜色值）

   1. 单位可以写一个或两个方向，可以写度数。
   2. 颜色值后面写占比，或者百分比。
   3. 四个值的时候，前面两个值包含颜色一样的情况下，两个值不渐变；后两个值接第二个值开始写不渐变，不接着写渐变。

`repeating-linear-gradient()`; 重复线性渐变。

线形渐变例子：

```css
.demo {
    transition: .3s;
    background: linear-gradient(0, red 2px, red 2px) no-repeat left top/0 2px,
   			 	linear-gradient(-90deg, red 2px, red 2px) no-repeat right top/2px 0,
   				 linear-gradient(-180deg, red 2px, red 2px) no-repeat right bottom/0 2px,
   				 linear-gradient(-270deg, red 2px, red 2px) no-repeat left bottom/2px 0;
}
.demo:hover {
    background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
}
```

![image](https://notecdn.hrhe.cn/images/css小方法-09.png)

解析：

```js
// size的四个表示：上右下左， 第一个为宽度，第二个为高度
background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;

// linear-gradient(度数, 第一个颜色值，第二个颜色值) 平铺 x轴 y轴 / x轴尺寸 y轴尺寸
background: linear-gradient(-180deg, red 2px, red 2px) no-repeat right bottom/0 2px;

```







2. 径向渐变

   1. `radial-gradient`()，
      1. at改变圆心的位置，x轴，y轴；
      2. repeating-radial-gradient()，重复的径向渐变；
      3. circle，写在at前面，表示圆形；中间用逗号隔开。
      4. 可以写多个径向渐变，中间用逗号隔开。







## 面试题
● 简述css盒模型？

● 如何使用border实现小三角？

● margin外边距常见问题及处理方法？

