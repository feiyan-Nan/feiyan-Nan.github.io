# js-06 定时器、时间、Math
## 一、定时器
1. `setTimeout(fn[,delay,arg1,arg2,...])`;

后面的arg会作为参数传递给定时器函数中；

只执行一次，不用加单位，单位是毫秒；

清楚Timeout定时器：clearTimeout(定时器);



**setTimeout的原理**

采用定时器需要动用红黑树，创建定时器对象和迭代等操作；

很多人为了立即异步执行一个任务，会调用`setTimeout(function(){},0)`使用0毫秒来达到效果，由于事件循环自身的特点，定时器的精确度不够。事实上，采用定时器需要动用红黑树，创建定时器对象和迭代等操作，而`setTimeout(fn, 0)`的方式较为浪费性能。实际上，`process.nextTick()`方法的操作相对较为轻量，具体代码如下：

```js
process.nextTick = function(callback) {
    //on the way out, don't bother.
    // it won't get fired anyway
    if(process._exiting) return;
    
    if(tickDepth >= process.maxTickDepth)
        maxTickWarn();
    
    var tock = { callback: callback };
    if(process.domain) tock.domain = process.domain;
    nextTickQueue.push(tock);
    if(nextTickQueue.length) {
        process._needTickCallback();
    }
        
}
```

每次调用`process.nextTick()`方法，只会将回调函数放入队列中，在下一轮Tick时取出执行。定时器中采用红黑树的操作时间复杂度为0(lg(n))，nextTick()的时间复杂度为0(1)。相较之下，process.nextTick()更高效。



**setTimeout的特性**

1. setTimeout写入的毫秒数不一定是准确的，由于事件循环的机制问题，需要等待微任务执行完毕之后再执行setTimeout
2. setTimeout嵌套五次，至少是4毫秒，不是0毫秒
3. setTimeout调用的this指向是window



### setInterval

`setInterval(函数，时间(毫秒))`;

间歇性执行，每隔相同的时间执行一次；

常用于倒计时；清除：`clearInterval(定时器)`;

每个定时器开启的时候，都有一个自己的id数字，如果需要清除定时器，则需要清除定时器的id； 返回值就是定时器的id值；

定时器如果不清除，会一直占用内存，可以设置一个变量，用来保存这个定时器，之后设置一个清除定时器的方法；



### requestAnimationFrame

`requestAnimationFrame()` IE10+   不需要设置间隔，会自动调用；
案例：

```js
var a = 100;
function step(){
    a--;
    if(a === 0) return
    requestAnimationFrame(step)

    //如果需要传入参数
    // requestAnimationFrame(()=>step(1))
}
step()
```
兼容处理：
```js
if(!window.requestAnimationFrame){
    requestAnimationFrame = function(fn){
        setTimeout(fn,17)  // 因为刷新频率是16.7ms执行一次，所以是17;
    }
}
```



## 二、时间对象

### 获取时间

>  创建时间，返回一个对象，这个对象里面就有各种属性和方法，时间对象时需要实例化获取方式来获取

1. `new Date()`;    获取当前时间；

2. `new Date("2018/4/29 12:00:00")`; 设置时间；中划线，逗号(不用加引号)，或者时间戳；

   ```js
   +new Date()   // 添加一个+号会变成时间戳
   ```

3. `getFullYear()`;   年，获取到的内置对象是当前变量中的日期

4. `getMonth()+1`；  月，月份是0-11

5. `getDate()`;        日；
6. `getDay()`；       星期，取值0-6,0表示周日；
7. `getHours()`;      时间；
8. `getMinutes()`;   分钟；
9. `getSeconds()`;   秒；
10. `getMilliseconds()`   获取毫秒；
11. `getTime()`；从1970年1月1日到当前设置好的时间的毫秒；（常用）
12. `Date.parse()`；将一个格式的时间转为一个时间戳，毫秒；（可以直接放入new Date，也可以写格式时间，格式为：'月/日/年'）
13. `setTime()`   设置时间戳，也可以直接放进new Date里面；

简写：+new Date()  也是一个时间戳；



### 设置时间

date.setDate(date.getDate() + 7);

设置时间需要先获取时间；

有`get`的属性都可以`set`；**set有容错能力**，如：61秒就是1分1秒；

```js
// 设置日期加7天；
var date = new Date();   // 从声明开始就已经定死了,一直是该时间;
date.setDate(date.getDate() + 7);

// 设置日期加7天；
var date = new Date();
date.setDate(date.getDate() + 7);
```



### 获取星期和月数

* **获取这个月有多少天**：`new Date(y,m,0).getDate()`；

* **获取当前是这个月的周几**：`new Date(y,m,0).getDay()`；

* **获取这个月的第一天是周几**：`new Date(y,m-1,0).getDay()+1`;

    先获取上一个月多少天，再获取星期时加一天就是这个月的第一天；

* 如果想**获取当前月份最后一天**，可以直接设置日为0，`setDate(0)`

```js
var date= new Date(); //获取当前时间
var y=date.getFullYear(); //获取年
var m=date.getMonth()+1; //获取月
var d=new Date(y,m,0).getDate(); //获取当前这个月有多少天
var week=new Date(y,m-1,0).getDay()+1; //获取当前这个月第一天是周几
if(week >=7){week=0}; //7+1会为8，所以等于0
```



### 格式化时间

#### 英文状态

字符串格式时间：

toString();   Thu May 02 2019 01:24:10 GMT+0800 (中国标准时间)

toDateString();     Thu May 02 2019；

toTimeString();    01:24:56 GMT+0800；

toUTCString();   显示世界时间；



#### 转成本地时间

toLocaleString();   //2019-7-11 21:49:52

toLocaleDateString();  //2019-7-11

toLocaleTimeString();  //上午9:00:00;



#### 设置一个倒计时

计算两个时间的间隔，用第一个时间减去第二个时间；

1. 计算出目标时间和现在时间的间隔多少毫秒，用目标时间减去现在的时间，之后再除以一千显示为秒；

   计算倒计时剩下的时间：

   ```js
   var leftTime = (new Date(enddate)) - new Date(); //计算剩余的毫秒数
   var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
   var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
   var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
   var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
   
   s = 1242626
   m = s / 60
   h = s / 60 / 60
   t = s / 60 / 60 / 24
   ```

2. 根据计算出的时间写出时间戳，也可以再加入补零的操作

3. 倒计时思想：
   * 获取时间，根据时间得到年月日，时分秒
   * 补零
   * 用一个定时器让时间跑起来



### 计算一个循环花了多长时间

```js
let startTime = new Date().getTime()   // 记录一个开始时间毫秒
for(var i=0;i<10000;i++){}
let endTime = new Date().getTime()   // 记录一个结束时间毫秒
console.log(endTime - startTime)

// 当然也可以使用console.time来获取;
```


### 时间的比较

不要直接通过时间对比，是不相等的，想要相等，可以对比时间戳
```js
let date = new Date('2019/6/1')
let date2 = new Date('2019/6/1')
console.log(date == date2)  // false
console.log(date.getTime() === date2.getTime())  //true
// +号可以快速进行Number转换成时间戳
```
时间插件： http://momentjs.cn/

比moment打包更小的插件：dayjs https://github.com/iamkun/dayjs



### 常见bug

如果获取最后一天出错了，跳了月份，可以设置setMonth(28)即可，或者29，再getMonth+1



### 时间格式化函数

```js
function format(value){
  let data = new Date(value)
  let Y = data.getFullYear()
  let M = data.getMonth() + 1
  let R = data.getDate()
  let h = data.getHours()
  let m = data.getMinutes()
  let s = data.getSeconds()
  let f = d => String(d).padStart('2', '0')
  return `${Y}-${f(M)}-${f(R)} ${f(h)}:${f(m)}:${f(s)}`
}
```



## 三、dayjs用法

>  推荐使用dayjs，和moment用法一致，但是打包更小，moment打包之后200k，dayjs打包之后2k

官方网站：[dayjs中文教程](https://dayjs.gitee.io/zh-CN/)

支持链式调用

安装：`npm i dayjs`



### 获取&设置

年`y`：`year`

月`M`：`month`（一月0，十二月11）

日`D`：`date`

星期`d`：`day` (星期天0，星期六6)

时`h`：`hour`

分`m`：`minute`

秒`s`：`second`

毫秒`ms`：`millisecond`

示例：

* 获取年：`dayjs().year()`  也可以：`dayjs().get('year')`，缩写：`dayjs().get('y')`
* 设置年：`dayjs().year(2000)` 也可以：`dayjs().set('year', 2000)`



### 操作

都可以使用缩写

```js
// 格式化, 里面会检测字母, 大写H是24小时制 小写是12
dayjs().format('YYYY-MM-DD hh:mm:ss A') // 2021-01-10 04:39:28 PM

// 获取一月初
dayjs().startOf('month')

// 获取一年年末
dayjs().endOf('year')

// 增加7天
dayjs().add(7, 'days') 

// 减少7天
dayjs().subtract(7, 'days')

// 上个月, months可用: day
dayjs().subtract(1, 'months')
```

* startOf和endOf支持的单位（支持缩写）：

| 单位      | 缩写 | 详情                                                         |
| --------- | ---- | ------------------------------------------------------------ |
| `year`    | `y`  | 今年一月1日上午 12:00                                        |
| `quarter` | `Q`  | 本季度第一个月1日上午 12:00 ( 依赖 [`QuarterOfYear` ](https://day.js.org/docs/zh-CN/plugin/quarter-of-year)插件 ) |
| `month`   | `M`  | 本月1日上午 12:00                                            |
| `week`    | `w`  | 本周的第一天上午 12:00                                       |
| `isoWeek` |      | 本周的第一天上午 12:00 (根据 ISO 8601) ( 依赖 [`IsoWeek` ](https://day.js.org/docs/zh-CN/plugin/iso-week)插件 ) |
| `date`    | `D`  | 今天上午 12:00                                               |
| `day`     | `d`  | 今天上午 12:00                                               |
| `hour`    | `h`  | now, but with 0 mins, 0 secs, and 0 ms                       |
| `minute`  | `m`  | now, but with 0 seconds and 0 milliseconds                   |
| `second`  | `s`  | now, but with 0 milliseconds                                 |



### 查询

* 早于：`dayjs('2010-10-20').isBefore('2010-10-21')` 返回true

* 晚于：`isAfter`

* 闰年：

  ```js
  var isLeapYear = require("dayjs/plugin/isLeapYear")
  dayjs.extend(isLeapYear) // 必须使用插件
  dayjs().isLeapYear()
  ```

* 返回月份的天数：`dayjs().dayslnMonth()`



### 显示

* `format`

```js
dayjs().format('YYYY-MM-DD hh:mm:ss') // 2020-05-02 10:30:00
```

| 占位符 | 输出             | 详情                     |
| ------ | ---------------- | ------------------------ |
| `YY`   | 18               | 两位数的年份             |
| `YYYY` | 2018             | 四位数的年份             |
| `M`    | 1-12             | 月份，从 1 开始          |
| `MM`   | 01-12            | 月份，两位数             |
| `MMM`  | Jan-Dec          | 缩写的月份名称           |
| `MMMM` | January-December | 完整的月份名称           |
| `D`    | 1-31             | 月份里的一天             |
| `DD`   | 01-31            | 月份里的一天，两位数     |
| `d`    | 0-6              | 一周中的一天，星期天是 0 |
| `dd`   | Su-Sa            | 最简写的星期几           |
| `ddd`  | Sun-Sat          | 简写的星期几             |
| `dddd` | Sunday-Saturday  | 星期几                   |
| `H`    | 0-23             | 小时                     |
| `HH`   | 00-23            | 小时，两位数             |
| `h`    | 1-12             | 小时, 12 小时制          |
| `hh`   | 01-12            | 小时, 12 小时制, 两位数  |
| `m`    | 0-59             | 分钟                     |
| `mm`   | 00-59            | 分钟，两位数             |
| `s`    | 0-59             | 秒                       |
| `ss`   | 00-59            | 秒 两位数                |
| `SSS`  | 000-999          | 毫秒 三位数              |
| `Z`    | +05:00           | UTC 的偏移量             |
| `ZZ`   | +0500            | UTC 的偏移量，两位数     |
| `A`    | AM PM            |                          |
| `a`    | am pm            |                          |

### 时长duration

使用时长需要引入插件

```js
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)
```

获取：

* 秒：`seconds`
* 分：`minutes`
* 时：`hours`
* 天：`days`
* 周：`weeks`
* 月：`months`
* 年：`years`

```js
// 获取秒，传入时间戳
dayjs.duration(1500).seconds() // 1
```





## 四、Math

1. `Math.abs()`；取绝对值，负数是他的相反数，正数还是为正；
2. `Math.floor()`；向下取整，取最向下最接近的整数；
3. `Math.ceil()`；向上取整，取最向上最接近的整数；
4. `Math.round()`；四舍五入；-1.6为-2；
5. `Math.min()`；取一组数的最小值，括号填写一组数；
6. `Math.max()`；取一组数的最大值，括号填写一组数；
7. `Math.pow()`；两个值，n的m次方；
8. `Math.sqrt()`；开平方
10. `Math.PI`   圆周率，没有小括号;
11. `Math.sin()/Math.cos()`;    正弦/余弦
12. `Math.trunc(i)` : 直接去除小数部分；只对number有效；



Math.max和Math.min接收多个数字返回最大、最小数，

```js
Math.max(3,53,2,12) // 53
// 以数组的形式放
Math.max.apply(Math, [3,53,2,12])
```



### Math.random

`Math.random()`；取随机数，取出来的是0-1的随机小数；

套用下面的公式取某个整数范围内随机选择的一个值

```js
值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
```

取n-m的随机数：`Math.random()*(m-n+1)+n；`

比如3-10的随机数：`Math.random()*8+3`；

理解随机数：`Math.ceil(Math.random()*6)`   取1-6；向上取整不会包括0；因为不会到6，所以是6；



