# canvas
## 一、canvas入门
1. canvas属性html5新增属性，它是一个画布，其本身不具备绘制能力；
2. 绘制工具是javascript，使用getContext('2d')绘制；
3. canvas有默认宽和高（300*150），默认颜色黑色，黑色比较浅；
4. 定义canvas的宽高

标签属性直接定义width+height，有点类似于img图片标签定义，省略了px单位；

不能在css里面定义width+height，会造成坐标点的拉伸和变形，绘制图像造成错误变形；

5. img有alt属性，canvas的alt属性写在标签内部（标签内容），当canvas不被支持才显示内容；
6. canvas兼容IE9+，使用canvas就不能考虑IE8-用户；
7. canvas的坐标系问题：符合正常开发者的页面浏览顺序，从左到右为x正方向，从上到下y为正方向；
8. 如果需要canvas居中，需要转块在margin:0 auto;

设置canvas的宽高

使用canvas.width设置，不要使用getContext之后的变量设置；
```js
var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')
canvas.width = 300;
```
温馨提示：

在vscode编辑器中，只要是通过id方式获取的canvas都没有自动补全功能；


## 二、绘制矩形
1. 直接绘制

（1）绘制实心矩形：cas.fillRect(x,y,w,h)；

​		x,y 起始坐标轴；w,h 绘制宽高；

（2）绘制空心矩形：cas.strokeRect(x,y,w,h);



2. 路径绘制

（1）开始路径：cas.beginPath();

（2）绘制：cas.rect(x,y,w,h);

（3）闭合路径：cas.closePath();

（4）绘制：cas.fill()或cas.stroke()；


3. 清除画布：cas.clearRect(x,y,w,h);

x,y：起始位置，w,h：要清除的内容宽高；


## 三、描边+填充同时存在
1. cas.fillStyle='red' 填充颜色
2. cas.strokeStyle='green' 线条颜色
3. cas.lineWidth=10 线条的两边各5px

    注意： 所有的样式声明和属性设置都必须要写在绘制前面；（重点）

继承：以上属性都可以继承，后续的可以不用再写，如有需要改变可以写;

权重：越靠后的绘制内容，就越靠上层显示；

## 四、绘制三角形
只能通过路径绘制三角形，闭合路径首尾端点自动实现闭合；

1. 起始端点：cas.moveTo(x,y)有且仅有一个起始端点；
2. 连接端点：cas.lineTo(x,y)可以有多个；

最后一条边可以使用闭合路径，会自动连接，如果不使用闭合路劲，会有bug

3. 闭合连接：cas.closePath()；

如果没有闭合路径，加此属性也能实现效果(第三条边)，但是有个bug，它不具备闭合路径，绘制三角形时会发生缺角；


## 五、绘制圆形
1. 也是只能通过路径绘制，以圆规的原理画圆

2. 因为y轴由向下为正，所以坐标系的象限也改变了，为顺时针；

3. cas.arc(x,y,r,angleStart,angleEnd,false);

     x,y表示圆心的坐标，r绘制半径；

     angleStart,angleEnd为起始弧度和终止弧度

     false：是否逆时针，默认为false；

4. 绘制半径根据Math.PI来计算，0的位置在右边，画圆：

    cas.arc(250,250,250,0,Math.PI*2);

圆形的坐标系：

![image](https://notecdn.hrhe.cn/images/canvas-01.png)


## 六、碰撞的小球
1. 创建getContext('2d')之后，返回一个对象，里面有canvas对象，里面有各种属性；
2. 常用的canvas对象属性有：cas.canvas.width 画布的宽，cas.canvas.height 画布的高
3. 判断边界：和

画布的宽高减去小球的半径，为小球的正方向边缘；

当x，y值小于小球的半径时，为负方向边缘；


## 七、其他绘制
1. lineCap（线帽）

（1）控制线条末端的形状

（2）属性值：butt(默认没有)、round(圆形)、square(方形)

（3）示例：cas.lineCap='butt'

（4）圆形线帽：以lineWidth的一半为两头的半径；

画线不需要闭合；

2. lineJoin（连接）

（1）线条的连接方式，控制线条相交的方式是

（2）属性值：圆交(round)、斜交(bevel)、斜接(mitter)

（3）示例：cas.lineJoin='mitter'



## 八、绘制阴影
1. cas.shadowOffsetX = num;  //阴影在x轴的偏移量
2. cas.shadowOffsetY = num; //阴影在y轴的偏移量
3. cas.shadowColor = 'red';   //阴影的颜色
4. cas.shadowBlur = num;    //阴影模糊程度；


## 九、裁剪
1. 裁剪之后只能在当前区域显示
2. cas.clip()表示裁剪区域，分三个步骤：

（1）绘制裁剪区域

（2）cas.clip();

（3）再绘制其他图形，查看裁剪效果；


## 十、绘制渐变
1. 线性渐变

（1）创建一个线性渐变：cas.createLinearGradient(x1,y1,x2,y2);

          x1,y1：渐变的起始点，x2,y2：渐变的终点；

（2）线性渐变是根据一条线来画的，里面的每一个分段代表一个断点；

（3）添加断点：变量.addColorStop(值,颜色)；添加一个断点，可以无限添加；

         断点的第一个参数不能超过1；
    
         值可以是百分比，也可以是0-1的小数；

（3）使用：添加出来的就相当于一个颜色，给对应的fillStyle赋值就可以了；

2. 径向渐变

（1）创建径向渐变：cas.createRadialGradient(x1,y1,r1,x2,y2,r2);

 x1,y1,r1 径向小圆的圆心坐标+半径；

       x2,y2,r2 径向大圆的圆心坐标+半径；

（2）相当于水滴一环一环的改变；



## 十一、绘制文本
1. cas.fillText(字符串,x,y,[options]) 绘制实心文字（使用最多）
2. cas.strokeText(字符串,x,y,[options]) 绘制空心文字
3. 参数：第一个为需要写入的字符串，x轴y轴坐标，第三个为可选的最大像素宽度
4. 属性：

（1）cas.font='italic bold 30px/50px 楷体；字号和字体不能省略；

（2）cas.textAlign='center'; 可选：start、end、center；（不建议使用left,right）；相对于起始点对齐；

（3）cas.textBaseline = 'middle'; 可选：top、middle、bottom；

textBaseline可选的值："top" 、 "hanging" 、 "middle" 、 "alphabetic" 、"ideographic" 和 "bottom" 。

从上往下走;



## 十二、cos、sin
1. 对应的三角函数，用于计算x轴和y轴的；
2. Math.cos(角度)  = 邻边/斜边
3. Math.sin(角度) = 对边/斜边
4. Math.PI：不带小括号，为180度；



## 十三、改变圆心点

1. 平移画布中心点：`cas.translate(x,y)`; 
2. 旋转画布：`cas.rotate()`; 

      js不接受deg，仅支持Math.PI
3. 保存当前状态：`cas.save()`;
4. 恢复保存的状态：`cas.restore()`;

如果画布有旋转或平移，则需要保存和恢复一下，否则第二次将会发生变化；



## 十四、图像

1. 绘制图像与绘制重复图像
```js
var img = new Image();
    img.src = './1.png';
```
2. 因为img的加载速度是滞缓与js的运行速度的；所以需要图片加载完成才能绘制
    img.onload =function(){};

3. 绘制图像

（1） 3参数法：`cas.drawImage(img,x,y)`

​		img 表示当前的图片

​		x,y表示绘制图像的起点；

（2）5参数法（带宽高）：`cas.drawImage(img,x,y,w,h)`；

w,h 表示绘制的图像宽高；

（3）9参数法（剪裁加绘制）：`cas.drawImage(img,x1,y1,w1,h1,x,y,w,h)`

​		img表示原始图片

​	x1,y1表示剪裁图像的起始位置，

​	w1,h1表示剪裁图像的宽高

​	x,y表示剪裁后的图像的绘制位置

​	w,h 表示剪裁后的图像的显示宽高；


​	截取位置可以通过ps来获取定点；尺寸--标注，获取起始点，再获取宽高；

### 绘制重复图像

（1）创建
```js
var pattern =cas.createPattern(img,'repeat');
```
（2）作为颜色填充进矩形;
```js
cas.fillStyle = pattern;
cas.fillRect(0,0,1000,1000);
```
如果需要描边，可以赋值给strokeStyle=''，并设置lineWith值;

### 下载绘制的canvas图片

（1）获取图片的base64地址
```js
canvas.toDataURL('image/jpeg')
```
（2）将图片转换成file文件
```js
// canvas.toBlob(callback, [type='image/png'], [encoderOptions])

canvas.toBlob(blob=>{
    let newFile = new File(blob, 'new-img', {type: blob.type})
}, 'image/jpeg', 0.7)
// 第三个为压缩质量, 当type类型为jpeg或webp时可用;
```



## 十五、canvas录制视频

```js
// 捕获当前流
const stream = canvas.captureStrem()

// 创建MediaRecorder录制对象
const recorder = new MediaRecorder(stream, {mimeType: 'video/webm'})
const data = []
recorder.ondataavailable = function(event) {
    if(event.data && event.data.size) {
        data.push(event.data)
    }
}

// 当停止录制时获取当前video的url
recorder.onstop = function() {
    const url = URL.createObjectURL(new Blob(data, {type: 'video/webm'}))
    document.querySelector('#video').src = url
}

// 开始录制
recorder.start()

// 录制6秒视频
setTimeout(() => {
    recorder.stop()
}, 6000)
```





## 十六、截图canvas实例

```js
const ctx = canvas.getContext('2d')
ctx.clearRect(0, 0, 200, 200);
ctx.drawImage(this.video, 0, 0, 200, 200)
let url = canvas.toDataURL('image/png')
```







## 画时钟

大致分为两步

（1）绘制手表 Clock()

（2）动起来 setInterval()


1.绘制手表

1.1绘制表盘

（1）每次绘制时，建议清除一下画布；

1.1.1画圆

1.1.2渐变

给圆填充颜色；

1.2绘制刻度

（1）刻度需要平移画布到中心点，

（2）可以通过旋转

1.2.1绘制时针刻度

1.2.2绘制分针刻度

1.3绘制指针

1.3.0获取世界时间

1.3.1绘制时针

（1）时针跟着分针和秒针一起动的；

（2）获取正确的时针，应该是需要加上分针和秒针；

（3）hours = now.getHours+minutes/60+second/60/60；

是将分钟和秒钟转化为小时;

（4）时针对应的度数是30度；

1.3.2绘制分针

1.3.3绘制秒针    

1.3.4绘制表钉

1.4绘制文字

1.4.1绘制商标
 1.4.2绘制十二时    

（1）需要根据Math.sin()和Math.cos()，计算出x和y的值;

x = Math.cos(角度)*半径

y = Math.sin(角度)*半径


