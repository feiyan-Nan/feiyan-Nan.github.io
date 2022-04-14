# html-11 Svg简介
## 一、Svg简介
SVG 意为可缩放矢量图形（Scalable Vector Graphics） ，是使用 XML 来描述二维图形和绘图程序的语言

定义标准：
	1. 是万维网联盟的标准。
	2. 定义用于网络的基于矢量的图形。
	3. 图像在放大或改变尺寸的情况下其图形质量不会有所损失。



兼容浏览器：
● IE9+

● Chrome

● Firefox

● Safari7.0+





## 二、常用的图片格式
常用的图片格式：jpg、png、gif、webp、svg。

图片格式之间的区别：

位图：基于颜色的描述放大后会出现方块状，图片属于真彩色，图片会失真（JPG、png、gif）

矢量图：基于数学的描述，放大后不会产生锯齿状，图片放大不会失真（svg、AI）




## 三、SVG引入的三种方式
引入方式：
1.创建一个SVG文件，之后直接使用img标签引入SVG文件地址。
```html
<svg xmlns="http://www.w3.org/2000/svg">     <rect x="50" y="50" width="100" height="100" /> </svg>
```
2.直接在HTML标签中使用SVG标签；
```html
<svg> <rect x="0" y="0" width="100" height="100" /> </svg>
```
3.作为CSS背景图片。



## 四、使用SVG来画图的方法
1.rect标签：用来创建一个矩形。
属性值：

x : 定义矩形的起始坐标的x轴

y：定义矩形的起始坐标的y轴

width：矩形的宽度

height：矩形的高度

rx: 圆角矩形的水平半径

ry: 圆角矩形的垂直半径

![image](https://notecdn.hrhe.cn/html-11_Svg简介-01.png)



2.circle:用来创建一个圆形；

属性值：

cx 圆心的x轴坐标

cy 圆心的y轴坐标

r 圆的半径

如果不定义圆心坐标，默认为（0,0）

![image](https://notecdn.hrhe.cn/html-11_Svg简介-02.png)




3.ellipse:用来定义椭圆；

属性值：

cx：圆心x轴坐标

cy：圆心y轴坐标

rx：水平半径

ry：垂直半径

![image](https://notecdn.hrhe.cn/html-11_Svg简介-03.png)


4.line：定义一条直线；

属性值：

x1：起始x轴坐标

y1：起始y轴坐标

x2：x轴的结束坐标

y2：y轴的结束坐标

![image](https://notecdn.hrhe.cn/html-11_Svg简介-04.png)


5.polyline:用来创建任何只有直线的形状；

属性值：

points：直线坐标点（不少于两个点）；
```html
<polyline points="10,0 110,0 110,100 10,100 10,0" fill="none" stroke="blue" />
```

![image](https://notecdn.hrhe.cn/html-11_Svg简介-05.png)

 

6.polygon：用来创建含有不少于三个边的图形；

多边形的坐标点（至少3个坐标点）

```html
<polygon points="100,10 150,100 50,100" />
```

![image](https://notecdn.hrhe.cn/html-11_Svg简介-06.png)

 


## SVG 基本属性

fill：填充颜色

stroke：边框颜色

stroke-width：边框宽度

transform 变形旋转（参考坐标点为（0,0））

