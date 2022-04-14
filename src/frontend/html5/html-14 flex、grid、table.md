# html-14 flex、grid、table
## 一、CSS3多列布局

可以创建多个列用来布局，就像报纸那样。

1. `columns` ：宽度，列数
2. `column-count` 分割列数，后面写数字，默认为auto；
3. `column-width` 分割每列的宽度；
4. `column-gap`  每列之间的间隔；
5. `column-rule`  设置列之间的分割线的宽度、样式和颜色（值和border值的写法一样）
6. `column-span:1/all`  跨所有栏；




## 二、旧版弹性盒子

### 容器属性
```css
display: -webkit-box;
display: -moz-box;
display: -o-box;
display: -ms-box;
```
项目从左到右排列，项目不设置宽度的话，宽度由内容撑开，项目不设置高度的话，高度和容器一样。



### 项目盒子内容主轴方向

``` css
-webkit-box-orient: horizontal;     //项目从左到右；
-webkit-box-orient: vertical;         //项目从上到下；
-webkit-box-direction: reverse;     //设置元素反向排列
```



### pack对齐方式

```css
-webkit-box-pack: start /end/ center /justify;
-webkit-box-orient: horizontal;     
-webkit-box-pack: start; //左边开始     
-webkit-box-pack: end; //右边到结束     
-webkit-box-pack: center; //居中排序     
-webkit-box-pack: justify; //项目两端对齐，内容相等
```



### align对齐方式（交叉对齐）

```css
-webkit-box-align: start /end/ center;
-webkit-box-orient: horizontal;     //从左到右
-webkit-box-pack: justify;             //两端对齐
-webkit-box-align: center;     //竖轴居中对齐
-webkit-box-align: end;         //盒子底部对齐
```



### 项目属性

```css
-webkit-box-flex: 分配份数
-webkit-box-ordinal-group：排列到第几个
```



## 三、新版弹性盒子

![image-20200803112513487](https://notecdn.hrhe.cn/images/image-20200803112513487.png)

弹性盒子的定义

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。弹性盒子是 CSS3 的一种新的布局模式。设置弹性盒子内联元素回车之后空格也解决，也不用浮动了。

* 设置给大盒子设置属性：
```css
display: flex;  /* 设置弹性盒子（块元素） */
display: inline-flex; /* 设置弹性盒子（内联块） */
```


* 设置主轴的方向
  `flex-direction`

  * `row`（默认值）：水平方向左侧开始排列。

  * `row-reverse`：水平方向右侧开始排列。

  * `column`：垂直方向开始排列。

  * `column-reverse`：垂直方向倒列。



### 内容在主轴上的对齐方式

`justify-content`  

当主轴为水平方向：内容在水平方向上对齐；

当主轴为垂直方向：内容在垂直方向上对齐，不能左右移动；

当主轴为垂直方向没有设置高度时，无法对齐；

* `flex-start`（默认值）：左对齐；

* `flex-end`：右对齐；

* `center`： 居中；

* `space-between`：每个项目两侧的间隔相等；项目之间的间隔比项目与容器边框间隔大一倍；

* `space-around`：项目两段间隔相等；

* `space-evenly`: 项目与项目、项目与容器边框间隔相等；





### 项目与起点交叉对齐
`align-items ` 

当主轴为水平方向时，调整的对齐方式在垂直方向对齐；

当主轴为垂直方向时，调整的对齐方式在水平方向对齐；

* `flex-start`：交叉轴的起点对齐。

* `flex-end`：交叉轴的终点对齐。

* `center`：交叉轴居中对齐

* `baseline`：项目中第一行文字的基线对齐。

* `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度



### 如果一条轴线排不下，如何换行

`flex-wrap` 

* `nowrap`：不换行

* `wrap`：换行；

* `wrap-reverse`：换行，第一行在下方；



### 项目多行的情况，如何排列（可以取消换行中间的空隙）
`align-content`:

* `flex-start`      //两排从顶部开始排列

* `flex-end`     //从底部结束排列

* `center`         //从中心排列

* `space-between`     //分别在两端对齐

* `space-around`         //两端间隔相等




### 项目属性
`order`： 定义项目的排列顺序

`flex-basis`  设置子元素的宽度，跟width、height一样设置：250px；

`flex-grow` 默认值：0。项目根据盒子剩余空间放大，将占用没有被占用的空间；

`flex-shrink` 定义项目的缩小比例，默认为1，

* 0的话，就是项目的width是多少就是多少。
* 超出容器宽度时的收缩比例，自己的flex-shrink与flex-basis乘积除以每一项的flex-shrink*flex-basis乘积之和，最后再拿得到的比例系数与乘以超出的宽度，从而得到该项目要收缩的空间数量；
* shrink定义项目缩小比例算法：

```
一共8个项目，每个项目宽度100,8个项目一共宽度是800
    容器是600,
    所以多了200
这200就需要分配到8个项目里面，
给第一个项目设置flex-shrink:2;
第2个到第8个项目都是flex-shrink:1;
2:1:1:1:1:1:1:1
    一共的权值：     2*200+1*200+1*200+1*200+1*200+1*200+1*200+1*200=1800
    第一个项目：
        （2*200/1800）*200=44.44444
        100-44.44444=55.5555556
    第二个项目
        （1*200/1800）*200=22.222
        100-22.2222=77.77778
```
* `flex-shrink` 默认值：1。当项目占满盒子之后，选择的项目等比例缩小，其他则放大。
* `flex`
  * 设置为1，占满剩余空间，设置`flex: 1`之后建议添加`overflow:hidden`属性，避免被挤出父元素的盒子
  * 为flex-grow、flex-shrink、flex-basis的简写
  * 项目分配的份数，可以是百分比，比如给项目设置：flex:20%；则会每排分5个；



### 项目在交叉轴排列方式

`align-self`：默认为auto、继承父元素的align-items；

`align-self`: auto/flex-start/flex-end/center/baseline/stretch

设置该属性将覆盖容器的align-items，如果需要向右对齐，可以设置

```css
flex: 1;
text-align: right;
```





### 弹性盒子多列布局

多列布局，如果不给子元素设置高度，则盒子高度等高；

1. 设置一个父元素，需要几个盒子，则设置几个盒子。
2. 给父元素设置display:flex；
2. 给左边的盒子设置宽度，设置高度。
3. 给中间的盒子设置margin左右值，设置flex分等份。
4. 给右边的盒子设置分等份。

给子元素设置flex：份数，不需要跟单位。



### flex布局最后一个元素需要向右对齐的解决方法：

（1）给倒数第二个元素设置`flex:1`;

（2）给最后一个元素设置`margin-left: auto`;





## 四、grid二维网格布局

### 设置父元素属性

**块级grid**：`display:grid`；

**行内块grid**：`display: inline-grid`；

由于可以设置行列的关系，设置了grid的父元素，其子元素会默认按列排列，并且仅对其直接子元素生效，孙子那辈没作用；

注意：设置网格布局以后，子元素的float、display:inline-block，display:table-cell、vertical-align都将失效；

**单元格**：行*列的单元格；3行3列会生产9格；

**网格线**：行或列+1的网格线；



### 设置行列

设置行：`grid-template-rows；`

设置列：`grid-template-columns`；

复合写法：`grid-template：rows / columns`

使用单位：`1fr`、`%`、`px`、`rem`、`em`；`1fr`代表1行/列；


三行三列的布局，都是100宽高；
```css
.container{
    display:grid;
    grid-template-columns:100px 100px 100px
    grid-template-rows:100px 100px 100px
}
```


设置行列的方法：

* `repeat`

  重复次数：`grid-template-columns: repeat(3, 100px)；`

  重复模式：`grid-template-columns: repeat(2, 100px 20px 80px)`；(共六列)

* `auto-fill`或`auto-fit`

  用于不需要确定列数使用；

  `grid-template-columns: repeat(auto-fill, 100px)`

  以100px的宽度填充一行的列，如果占位则换行；响应式布局可以使用；

* `fr`单位

  `grid-template-columns: 100px 1fr 2fr`；第一列100px，第三列是第二列的2倍；

* `minmax()`

  表示一个范围（可以用于）

  `grid-template-columns: 1fr 1fr minmax(100px,1fr)`     //不小于100px，不大于1fr；

* `auto`
  `grid-template-columns: 100px auto 100px；`

* 网格线的名称；

  使用方括号指定每一根网络线的名字，方便以后的引用；

  `grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4]`；3行+1为4根网络线；

  同一根线多个名字：`[fifth-line row-5]`；



### 间隔

行间隔：`grid-row-gap`

列间隔：`grid-column-gap`

复合写法：grid-gap: 行 列   如果省略第二个值，则两个值相等；


`grid-row-gap: 20px`;

`grid-gap: 20px 20px`;

前缀已经删除，可以直接去掉前缀：row-gap、column-gap、gap；


规定区域：`grid-template-areas`：



### 三行三列布局实例

`grid-template-areas: 'header header header' 'main . slider' 'footer footer footer'`

可以使用.点规定不需要使用的区域；

使用规定的区域：`gird-area：header`；等于规定的区域名称；名称不加引号；

注意：区域命名会影响到网络线，起始网格线：区域名-start，终止：区域名-end；



### 规定单元格内容顺序

水平位置：`justiy-items`: start | end | center | stretch(默认值)

垂直位置：`align-items:` 参上

复合写法：`place-items`: align justify     如果省略第二个值，则两个值相等；



### 整个内容在容器里的位置

水平位置：`justify-content`: start | end | center | stretch | space-around | space-between | space-evenly

垂直位置：`align-content`：参上

复合写法：`place-content`: align justify    如果省略第二个值，则两个值相等；

* `space-around` 每个项目两侧的间隔相等；项目之间的间隔比项目与容器边框间隔大一倍；

* `space-between` 项目与项目间隔相等，项目两边贴边；

* `space-evenly` 项目与项目、项目与容器边框间隔相等；


每个单元格是`items`，整个内容是`content`;



### 规定排序方式

先行后列：`grid-auto-flow: row；`（默认）

先列后行：`grid-auto-flow: column；`

row、row dense、column、column dense；

理解：横向的1-9变为纵向的1-9；



### 规定多余行列的宽高；
`grid-auto-columns/rows`

当规定3行3列时，如果有第4行，浏览器会根据单元格内容的大小，决定新增网格的列宽和行高；

grid-auto-columns:50px  规定新增的高度为50px；



grid；

grid属性：grid-template-columns/rows/areas   grid-auto-rows/columns/flow 六个属性的简写；

不建议使用这个属性；



### 项目属性

#### 跨越

垂直开始网格线：`grid-column-start`；

垂直结束网格线：`grid-column-end`；

复合写法：`grid-column`: start / end；




水平开始网格线：`grid-row-start`；

水平结束网格线：`grid-row-end`；

复合写法：`grid-row`: start / end；




整体复合写法：`grid-area`: row-start / column-start / row-end / column-end

这样也可以设定占用份数；也可以指定网格线的名字；




参数除了写数量，还可以写span，跨越多少个网格；

grid-column-start: span 2；   跨域2个列；（span不区分end还是start）

如果项目重叠，可以使用z-index指定重叠顺序；


grid-column: auto / span 2  // 向左跨越2列



#### 排列顺序

水平位置：`justify-self`: start | end | center | stretch

垂直位置：`align-self`: 参上

复合写法：`place-self`： align justify    省略则相等；




## 五、表格布局IE8+
使用`display: table`；将内部元素使用table表格的特性；

`display: table-cell`；给包裹元素设置；

![image](https://notecdn.hrhe.cn/images/html-14_flex、grid、table-01.png)

一般用于这种布局；设置了table-cell之后，需要设置vertical:属性；

![image](https://notecdn.hrhe.cn/images/html-14_flex、grid、table-02.png)

```html
<div class="container">
   <div class='left'>
     <div class="logo"></div>
   </div>
   <div class='right'>哈哈哈哈哈哈哈哈</div>
</div>
```
```css
.container{
  display: table;
  width: 500px;
  padding: 15px 10px;
  border: 1px solid black;
}
.left{
  width: 60px;
  display: table-cell;
  vertical-align: top;
}
.logo {
  width: 60px;
  height: 60px;
  border: 1px solid black;
}
.right{
  margin-left: 20px;
  padding: 20px;
  border: 1px solid red;
}
```
