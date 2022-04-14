# html-13 CSS3选择器
## 一、CSS3新增的特性：
1. 选择器
2. 盒模型
3. 背景和边框
4. 文字效果
5. 2D/3D转换
6. 动画
7. 多列布局
8. 用户界面
9. 圆角
10. 语音


div+p 兄弟元素选择器；

div~p 选中div兄弟元素下面的所有的p。



## 二、css3标签

```css
width:calc(100% - 20px) 函数；
```



## 三、结构性伪类选择器

child用法必须保证是连续数的，从父级元素里面开始算第几个的。

n是从0开始走的，第一个是2\*0+1，第二个是2\*1+1，

几n就是几的倍数。

### nth-child（n）

1. `nth-child(3)`

   表示选择列表中的第3个标签，代码如下：

   ```css
   li:nth-child(3){background:#fff}
   ```

2. `nth-child(2n)`

    表示选择列表中的偶数标签，即选择 第2. 第4. 第6…… 标签，代码如下：
    ```css
    li:nth-child(2n){background:#fff}
    ```

3. `nth-child(2n-1)`

    表示选择列表中的奇数标签，即选择 第1. 第3. 第5. 第7……标签，代码如下：
    ```css
    li:nth-child(2n-1){background:#fff}
    ```
    
4. `nth-child(n+3)`

    表示选择列表中的标签从第3个开始到最后，代码如下：
    ```css
    li:nth-child(n+3){background:#fff}
    ```
    
5. `nth-child(-n+3)`

    表示选择列表中的标签从0到3，即小于3的标签，代码如下：
    ```css
    li:nth-child(-n+3){background:#fff}
    ```
    
6. `nth-last-child(3)`

    表示选择列表中的倒数第3个标签，代码如下：

    ```css
    li:nth-last-child(3){background:#fff}
    ```

    

### first-child

1. `first-child`

   first-child表示选择列表中的第一个标签。代码如下：

   ```css
   li:first-child{background:#fff}
   ```

   

### last-child用法

1. `last-child`

last-child表示选择列表中的最后一个标签，代码如下：
    ```css
    li:last-child{background:#fff}
    ```



### 高级用法

`nth-child(n+2):nth-child(odd):nth-child(-n+9)`

使用我们将会选中的子元素是从第2位到第9位，并且只包含奇数位。



### nth-of-type

type用法是选择所有级元素里面第几次出现的
1. `nth-of-type(n)`

   选择父元素中第几次出现的元素；

2. `nth-last-of-type(n)`

   选择父元素中倒数第几次出现的元素；

3. `nth-of-type(odd)/(2n-1)`

   选择父元素中出现的奇数次元素；

4. `nth-of-type(even)/(2n);`

   选择父元素中出现的偶数次元素；



## 四、属性选择器

1. `div[title]`

   选择所有div标签包含有title的属性；

2. `div[title=value]`

   选择所有div标签包含value值相等的元素

3. `div[title*=value]`

   选中包含字母的所有标签；

4. `div[title~=value]`

   选中单独的单词的标签；

5. `div[title^=value]`

   选中以value开头的标签；

6. `div[title$=value]`

   选中以value值结尾的标签；

7. 属性选择器也可以单独选择；

   `[title=value]`



### 补充：

`:not()`，选择器匹配非指定元素选择器的每个元素；

```css
li:not(:last-child){
 /*选择除最后一行的所有元素 */
	margin-bottom:20px; 
}
```







## 四、状态伪类选择器

1. `checked` 选中的元素；

2. `enabled` 可用的状态；

3. `disabled` 禁用状态；

4. `focus` 选中鼠标点击获取的焦点；

5. `::first-line` 选中文本中第一行文字；

6. `::first-letter` 文本中的第一个单词或字，用于金钱的地方

7. `p::selection` 改变鼠标选中文字的样式(必须双冒号)；

8. `target` 选择当前活动的元素，可以不写标签，直接:target。
        给a标签href地址里面写#name，给需要选中的标签添加id=name；





## 五、before,after
1. 在E元素内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合content属性使用。

2. 为什么用双冒号：

   E:after、E:before 在旧版本里是伪元素，CSS3的规范里“:”用来表示伪类，“::”用来表示伪元素，但是在高版本浏览器下E:after、E:before会被自动识别为E::after、E::before，这样做的目的是用来做兼容处理，":" 与 "::" 区别在于区分伪类和伪元素。

3. before,aften其实是一个盒子，这个盒子是内联元素，转块可以改变宽高，content属性是伪元素的内容，使用时必须配合使用，也称为是一个能插入元素的选择器，改变属性可以利用改变父元素继承。


补充：

●滑过选中设置好的伪元素： div:hover::before；(鼠标放在div上将before选出来，选出来之后是不用加content的，因为前面已经加了），也可以做动画效果，因为before是一个独立的盒子，可以单独做效果，如果写一个文字是无法做效果的；


content属性可以使用attr()函数，取元素的属性名；




## 六、圆角
先写top或bottom，后写left或ight

`border-radius`:50%;/或者边框的一半；

​	一个值：表示所有角；

​	两个值：表示左上 右下，右上 左下；

​	三个值：表示左上，右上 左下，右下；

​	四个值：左上，右上，右下，左下；

​	八个值：左上  右上  右下  左下（水平半径）/左上  右上  右下  左下(垂直半径)

`border-top-left-radius:50px;` 左上角圆角50px；

​	一个值：水平和垂直半径

​	两个值：水平半径和垂直半径






## 七、box-shadow盒阴影
1. `h-shadow`:水平 可以为负值
2. `v-shadow`:垂直 可以为负值
3. `blur`  可选，模糊的距离，模糊度；
4. `spread`  可选，模糊尺寸
5. `color`   可选，颜色
6. `inset`   可选，把盒子外阴影（outset）设置为内阴影
7. 多个阴影用逗号隔开。

阴影样式: x轴 y轴 模糊值 颜色（在内部）

`box-shadow: 0px 0px 10px black (inset)`; 

文字的阴影：`text-shadow`   

多个阴影：

```css
.demo {
    .box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
    			3px 3px 5px rgba(0, 0, 0, .1);
}
```






## 九、用户界面
1. `resize`是否可由用户调整元素的尺寸。

    resize:none;
    
    下面这几个要配合overflow: auto/hidden/scroll;使用
    
    resize: horizontal; 用户可以改变水平方向的尺寸
    
    resize: vertical; 用户可以改变垂直方向的尺寸
    
    resize: both;`用户可以改变水平和垂直方向的尺寸
    
 2. `box-sizing` 允许你以特定的方式定义匹配某个区域的特定元素。

    box-sizing: border-box;    设置的padding、border往盒子里面收缩；

    box-sizing: content-box;(默认值)  设置的padding、border往外面长大；



浏览器私有前缀

| 内核 | 兼容性前缀 | 浏览器 |
| --- | --- | --- |
| Gecko | -moz- | Firefox |
| Webkit | -webkit- | Chrome、Safari |
| Presto | -o- | Opera |
| Trident | -ms- | IE |


选择器的表格

| 选择器 | 例子 | 例子描述 | CSS |
| --- | --- | --- | --- |
| element>element | div>p | 选择父元素为 `<div>` 元素的所有 `<p>` 元素。 | 2 |
| element+element | div+p | 选择紧接在 `<div>` 元素之后的所有 `<p>` 元素。| 2 |
| [attribute=value] | [target=_blank] | 选择 target="_blank" 的所有元素。 | 2 |
| [attribute~=value] | [title~=flower] | 选择 title 属性包含单词 "flower" 的所有元素。 | 2 |
| [attribute\|=value] | [lang\|=en] | 选择 lang 属性值以 "en" 开头的所有元素。 | 2 |
| :focus | input:focus | 选择获得焦点的 input 元素。 | 2 |
| :first-letter | p:first-letter | 选择每个 `<p>` 元素的首字母。 | 1 |
| :first-line | p:first-line | 选择每个 `<p>` 元素的首行。 | 1 |
| :before | p:before | 在每个 `<p>` 元素的内容之前插入内容。 | 2 |
| :after | p:after | 在每个 `<p>` 元素的内容之后插入内容。 | 2 |
| :lang(language) | p:lang(it) | 选择带有以 "it" 开头的 lang 属性值的每个 `<p>` 元素。 | 2 |
| element1~element2 | p~ul | 选择前面有 `<p>` 元素的每个 `<ul>` 元素。 | 3 |
| [attribute^=value] | a[src^="https"] | 选择其 src 属性值以 "https" 开头的每个 `<a>` 元素。 | 3 |
| [attribute$=value] | a[src$=".pdf"] | 选择其 src 属性以 ".pdf" 结尾的所有 `<a>` 元素。 | 3 |
| [attribute*=value] | a[src*="abc"] | 选择其 src 属性中包含 "abc" 子串的每个 `<a>` 元素。 | 3 |
| :first-of-type | p:first-of-type | 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素。 | 3 |
| :last-of-type | p:last-of-type | 选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素。 | 3 |
| :only-of-type | p:only-of-type | 选择属于其父元素唯一的 `<p>` 元素的每个 `<p>` 元素。 | 3 |
| :only-child | p:only-child | 选择属于其父元素的唯一子元素的每个 `<p>` 元素。 | 3 |
| :nth-child(n) | p:nth-child(2) | 选择属于其父元素的第二个子元素的每个 `<p>` 元素。 | 3 |
| :nth-last-child(n) | p:nth-last-child(2) | 同上，从最后一个子元素开始计数。 | 3 |
| :nth-of-type(n) | p:nth-of-type(2) | 选择属于其父元素第二个 `<p>` 元素的每个 `<p>` 元素。 | 3 |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。 | 3 |
| :last-child | p:last-child | 选择属于其父元素最后一个子元素每个 `<p>` 元素。 | 3 |
| :root | :root | 选择文档的根元素。 | 3 |
| :empty | p:empty | 选择没有子元素的每个 `<p>` 元素（包括文本节点）。 | 3 |
| :target | #news:target | 选择当前活动的 #news 元素。 | 3 |
| :enabled | input:enabled | 选择每个启用的 `<input>` 元素。 | 3 |
| :disabled | input:disabled | 选择每个禁用的 `<input>` 元素 | 3 |
| :checked | input:checked | 选择每个被选中的 `<input>` 元素。 | 3 |
| :not(selector) | :not(p) | 选择非 `<p>` 元素的每个元素。 | 3 |
| ::selection | ::selection | 选择被用户选取的元素部分。 | 3|
