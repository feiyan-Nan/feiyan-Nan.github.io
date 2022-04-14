# html-18 2D、3D动画
## 一、过渡属性：
1. 属性名

   `transition-property`;

   不写默认是all，表示全部加入过渡的属性；

2. 时间

   `transition-duration;`

   中间用逗号隔开,和过渡属性一一对应。

   单位是s,ms，如果是0.5s，可以直接写.5s。

3. 速度变化曲线

   `transition-timing-function`;

   默认是ease，匀速是linear，写多个是和属性一一对应。

   贝塞尔曲线，[http://cubic-bezier.com](http://cubic-bezier.com)，cubic-bezier()，括号写不同的值。

4. 延长时间

   `transion-delay`

   单位是ms,s可以写多个。



5. 复合写法：

   `transition:过渡名 时间 速度 延时；`

   过渡时间不可以省略，属性默认是all，变化曲线默认是ease，延时0；



过渡的属性放到本身的盒子上，慢慢回来，放到滑过的盒子上，瞬间回去；




## 二、变形

1. 平移

   `transform:translate();`

   单位px；

   一个值:水平     两个值:水平，垂直，x轴和y轴。

   也可以写：translateX x轴    translateY y轴

2. 旋转

   `transform:rotate()`

   单位deg

   正值：顺时针，负值：逆时针；

   `backface-visibility:hidden`    背部不可见，可以做扑克牌效果；

3. 缩放

   `transform:scale();`

   没有单位，数字表示缩放的倍数

   两个值:水平，垂直

   一个值:水平垂直同时缩放，负值的时候先翻转再缩放。

4. 倾斜

   `transform:skew();`

   和translate用法一样；



5. 改变基准点

   `transform-orign` 改变基准点

   两个值:x y

   一个值:表示x轴，y轴中心点。

   单位px % 方向。 

6. 复合写法，多个属性值用空格隔开，属性值的值用逗号隔开。



## 三、3D
1. `perspective`；舒服的距离是500到1000；

   视距，景深，我们眼睛离屏幕的距离

   可以让子元素有近大远小的效果，配合3d使用，

   立体的3d x轴为中间的上下，y轴为左右两边，z轴顺时针旋转。

   左手定则，手握住轴，大拇指朝向是正值负值方向，四个指头是旋转的方向，轴的方向。

2. 旋转

   `rotateX()`，沿着x轴旋转，上下旋转。

   `rotateY(45deg)`    沿着y轴旋转，左右旋转。

   `rotateZ(45deg)`    沿着z轴旋转，顺时针旋转。

   `rotate3d(0,0,-1,45deg)`，复合写法，手机会启动3d加速，更快。



3. 平移

   translateX() 沿着x轴旋转，负值左边，正值右边。

   translateY() 沿着y轴旋转，正值向下，负值向上。

   translateZ() 沿着z轴旋转，正值朝前，负值朝后。

   translate3d(100px,100px,100px) 复合写法。

   

   x轴看元素的右侧，顺时针是正值，逆时针是负值

   y轴从元素下面看，顺时针正值，逆时针负值。




4. `transform-style:preserve-3d`    让子元素保留3d效果

   perspective只能有近大远小的效果，需要设置style保留3d。




## 四、动画
1. animation必须配合keyframes使用。

    keyframes里面写的关键帧是从0%写到100%，也可以写`from`，`to`。
    
    `@keyframes 动画的名字`(必须写)；

```css
canvas{
    animation: rotates 5s ;
}
@keyframes rotetas{
    from{
        transform:rotate(360deg);
    }
}
```
2. 动画属性：

| animation-name | 名字(必填) | name |
| --- | --- | --- |
| animation-duration | 时间(必填) | 单位是s,ms |
| animation-timing-function | 速度变化曲线 |  |
| animation-delay | 延时 |  |
| animation-iteration-count | 循环次数 | infinite(无限循环) |
| animation-direction | 反向运动 | alternate(至少循环次数2) |
| animation-fill-mode | 改变开始结束状态 | 属性值在下方 |
| animation-play-state | 暂停/开始 | paused/running |
| 复合写法：name duration timing-function delay iteration-count direction fill-mode; |

3. 暂停动画可以通过hover启动；
3. 改变动画的开始结束状态属性值；

| 属性值 | 等待时候 | 结束以后 |
| --- | --- | --- |
| none | 初始 | 初始 |
| backwards | 0% | 初始 |
| forwards | 初始 | 100% |
| both | 0% | 100% |

