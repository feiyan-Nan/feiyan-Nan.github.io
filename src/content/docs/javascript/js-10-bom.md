---
title: "js-10 BOM"
category: "javascript"
order: 10
---

## 一、BOM
bom（browser object model）

包括：window、location、navigator、screen、history；

`window`对象：在全局中定义的变量是window的属性，定义的函数是window的方法；window.a，在全局写的变量或函数都是使用window调用的，只是被省略了；



## 二、打开关闭页面
1. `window.open(url,name,attr,boolean)`;
* url地址，name名字，attr属性设置
    * boolean：false新历史，true替换历史；
2. `window.close()`；直接调用方法，关闭当前窗口；



## 三、网络状态
在线`online`     离线`offline`

监听当前的网络状态变动事件：
```js
window.addEventlistener('online',xxx);
window.addEventlistener('offline',()=>{
    alert('您断网啦;')
})
```
PC端测试：点击NetWork，之后点击offline，可以测试；

手机端：关闭移动网络之后就可以提示了；



## 四、location（位置）
`location`既是`window`的属性，也是document的属性；

### location对象的属性

* `href`：获取当前的url；    "http://www.baidu.com"
* `host`：获取服务器名称和端口；    "www.baidu.com:80"
* `hostname`：不带端口号的服务器；    "www.baidu.com"
* `pathname`：目录部分；    /wileyCDA/
* `port`：返回端口号    "8080"
* `protocol`：协议；   "https:"
* `search`：以?开头；    "?q=javascript"
* `hash`：#号开头；    "#contents"



### location对象的方法

* `href="新地址"`；强制跳转到新地址；不写地址为获取当前地址；
* `assign('地址')`；跳转有历史记录；
* `replace('地址')`；跳转没有历史记录（免登录常用）
* `reload()`；刷新，重新加载页面；



链接加密：`encodeURIComponent`

链接解密：`decodeURIComponent`

作用场景：用于免登录，需要带上redirectUrl，登录之后跳转的地址，建议使用链接加密一下

扩展：

加密汉字：`escape`

解密：`unescape`



解码：

编码ASCII to Base64:  atob
解码Base64 to ASCII:  btoa

## 五、history
`history`：历史页面，拥有的方法如下：

* `back()`；返回上一个；
* `forward()`；返回下一个；forward(前锋);
* `go(num)`；0:当前，-1上一个，1下一个；也可以2或-2；
* `pushState({p: '/b'},null,'/b')`，在网址后面添加b；  不会刷新页面
* `replaceState()`：与pushstate相同，不会保留历史栈
* `listen(location => {})`：监听路由的变化；

`window.onhashchange`，当hash值发生改变时触发，`e.oldURL`,`e.newURL`可以访问





## 六、window页面事件

以下均为window的方法

* `load`：页面加载完成
* `beforeunload`：页面即将离开，页面刷新、页面跳转都会触发；
* `pageshow`：页面显示
* `pagehide`：页面离开
* `popstate`：浏览器前进后退时触发，页面跳转不触发
* `hashchange`：当hash发生改变时触发，`e.oldURL`和`newURL`可以访问；



实践：

监听页面停留时间：可以通过`beforeunload`和`onpageshow`控制；





## 六、navigator

### navigator对象的属性

* `appCodeName`：浏览器代号
* `appName`：服务器名称
* `appVersion`：浏览器版本
* `cookieEnabled`：检测Cookies
* `platform`：硬件平台
* `userAgent`：浏览器信息
* `systemLanguage`：代理语言

```js
window.onload = function () {
    var txt = “<p> 浏览器代号 : “ + navigator.appCodeName + “</p>”;
    txt+= “<p> 浏览器名称 : “ + navigator.appName + “</p>”;
    txt+= “<p> 浏览器版本 : “ + navigator.appVersion + “</p>”;
    txt+= “<p> 启用 Cookies: “ + navigator.cookieEnabled + “</p>”;
    txt+= “<p> 硬件平台 : “ + navigator.platform + “</p>”;
    txt+= “<p> 用户代理 : “ + navigator.userAgent + “</p>”;
    txt+= “<p> 用户代理语言 : “ + navigator.systemLanguage + “</p>”;
    document.getElementById(“example”).innerHTML=txt;
}
```

### navigator对象的方法

* `getBattery`：电池状态
* `vibrate`：设备震动



## 七、设备手机电池状态

`getBattery` 电池状态

```js
navigator.getBattery().then(battery => console.log(battery));
// 返回
{
 charging, // 是否在充电
 chargingTime, // 充满电所需时间
 dischargingTime, // 当前电量可使用时间
 level, 剩余电量

 onchargingchange, // 监听充电状态变化
 onchargingtimechange, // 监听充满电所需时间变化
 ondischargingtimechange, // 监听当前电量可使用时间变化
 onlevelchange // 监听电量变化
}
```
使用场景：提示用户电量已充满，或者为了让用户有安全感，电量低于99%的时候来个弹框提示"该充电啦"✅



## 八、使设备进行震动

vibration
```js
// 震动一次
navigator.vibrate(100);

// 连续震动，震动200ms、暂停100ms、震动300ms
navigator.vibrate([200, 100, 300]);
```
效果如下：不好意思你得用你自己的手握住手机才能感受得到;

使用场景：通过振动来提供感官反馈，比如太久没有触摸屏幕的时候连续震动提醒用户✅



## 九、页面显示隐藏

```js
document.addEventListener("visibilitychange", () => {
    console.log(`页面可见性：${document.visibilityState}`);
    console.log(`页面可见性：${document.hidden}`);
});
```
`document.visibilityState`的状态值：

* 当页面离开时会触发该函数，hidden的属性值

* 当页面显示时，会返回一个visible

`document.hidden`：当页面显示状态返回false；

使用场景：当程序切到后台的时候，如果当前有视频播放或者一些动画执行，可以先暂停✅



## 十、页面方向陀螺仪
deviceOrientation（如果IOS失效，可以将域名协议改为https）

![image](https://notecdn.hrhe.cn//images/docs/javascript/js-10_BOM-01.png)

从左到右分别为alpha、beta、gamma
```js
window.addEventListener("deviceorientation", event => {
let { alpha, beta, gamma } = event;

 console.log(`alpha：${alpha}`);
 console.log(`beta：${beta}`);
 console.log(`gamma：${gamma}`);
});
```
使用场景：页面上的某些元素需要根据手机摆动进行移动，达到视差的效果，比如王者荣耀进入游戏的那个界面，手机转动背景图会跟着动😂



## 十一、notification 桌面通知
PC端的桌面通知，如网页端的微信， 当收到消息时，右下角会出现一个通知（尽管你把浏览器最小化），因为这个通知时独立于浏览器的，是系统的一个原生控件：
```js
const notice = new Notification("前端宇宙情报局", {
    body: "这20个不常用的Web API真的有用吗?，别问，问就是有用🈶",
    icon: "我的掘金头像",
    data: {
        url: "https://www.baidu.com"
    }
});

// 点击回调
notice.onclick = () => {
    window.open(notice.data.url); // 当用户点击通知时，在浏览器打开百度网站
}
```
![image](https://notecdn.hrhe.cn//images/docs/javascript/js-10_BOM-02.png)

注意：想要成功的调起通知，首先要用户的授权✅
```js
Notification.requestPermission(prem => {
    prem == "granted" // 同意
    prem == "denied" // 拒绝
})
```
所以，再调用之前先向用户发起请求
```js
let permission = Notification.permission;

if (permission == "granted") {
// 已同意，开始发送通知
...
} else if (permission == "denied") {
// 不同意，发不了咯
} else {
// 其他状态，可以重新发送授权提示
    Notification.requestPermission();
}
```



## 十二、全屏事件

常用于在后台里面需要点击全屏时的事件
```js
/**
* @method launchFullScreen 开启全屏
* @param {Object} elem = document.documentElement 作用的元素
*/
const launchFullScreen = (elem = document.documentElement) => {
    if(elem.requestFullScreen) {
        elem.requestFullScreen();
    } else if(elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if(elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
    }
}


/**
* @method exitFullScreen 关闭全屏
*/
const exitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}
```


## 十三、orientation

监听用户手机设备的旋转方向变化；
```js
window.addEventListener("orientationchange", () => {
    document.body.innerHTML += `<p>屏幕旋转后的角度值：${window.orientation}</p>`;
}, false);
```
也可以使用媒体查询



## 十四、弹窗
1. `alert("")`； 警告框；
2. `confirm("")`；确认框，返回值布尔型，确认为true，取消为false；
3. `prompt("")`；可以输入信息，返回值输入的信息，第二个参数默认value值；
4. `print()`；打开打印机



## 十五、浏览器位置信息

### 可视距离client

* 元素可视区域：`clientWidth/Height`；     width/height+padding    不包含边框

* 元素的边框值：`clientLeft/Top`；

屏幕可视区域： `document.documentElement.clientWidth/Height` 



### 元素的实际距离offset

* 元素的实际宽高：`offsetWidth/Height`；    width/height+padding+border;   包含边框

* 元素距离body的宽高：`offsetLeft/Top`        如果父元素有定位属性，那么就是离父元素边缘的宽高；

浏览器含滚动条的宽度：`window.innerWidth`  或者  `outerWidth`



### 卷起的距离scroll

元素实际内容的宽高：`scrollWidth/height`；

元素被卷起的宽高：`scrollLeft/Top`；

`元素.scrollIntoView()`  可以滚动到该元素；往括号里面填写对象：{behavior: 'smooth'}可以平滑滚动；

### 屏幕的宽度

`window.screen.width`  



### 总结

* clientWidth ------ padding+content 可视宽
* offsetWidth ------ content + padding + border 占位宽
* scrollWidth ------ 页面内容的实际宽度
* clientTop ------ border
* offsetTop ------ 相对父元素的之间的距离
* scrollTop ------ 被卷起的高度
* document.body.scrollTop || document.documentElement.scrollTop （body）
* document.documentElement.clientWidth -----  屏幕宽


```js
document.documentElement.scrollTop;  //不兼容其他浏览器
兼容办法：
document.documentElement || document.body.parentNode;   //两种方式；兼容

//老版本的谷歌认为滚动条是body，而其他浏览器认为是html,所以做兼容；
//用来获取页面中被卷起的高度、宽度;
```



![image](https://notecdn.hrhe.cn//images/docs/javascript/js-10_BOM-03.png)



**getBoundingClientRect**


```js
元素.getBoundingClientRect()

{
    x: 604.875,
    y: 1312,
    width: 701.625,
    height: 31,
    top: 1312,
    right: 1306.5,
    bottom: 1343,  // 元素bottom到顶部document的值
    left: 604.875
}
```
注意：top是距离文档顶部的距离，y则是距离可视窗口（浏览器屏幕）的顶部距离，如果浏览器滚动，top值不变，y值会变 ✅

![image](https://notecdn.hrhe.cn//images/docs/javascript/js-10_BOM-04.png)



### 浏览器滚动事件

* `window.onscroll=function(){}`   滚动浏览器；

* `window.scrollTo(x,y || options)` 可以传入值也可以传入对象 滚动窗口到指定位置；

  options支持的属性：

  * top：元素要移动的位置横坐标
  * left：元素要移动的位置纵坐标
  * behavior：元素的运动模式，smooth平滑滚动；

* `el.scrollIntoView()` 滚动到可视区；
  * `scrollIntoView(true)`，如果是true则顶端对齐，如果是false，则底端对齐；
  * `scrollIntoView(options)`，包含以下属性对象：
    * behavior：运动模式，smooth，平滑滚动
    * block：垂直对齐方式，值可以是：start、center、end或nearest
    * inline：水平方向对齐方式，值可以是：start、center、end或nearest



**即插即用的滚动代码**

使用的是缓冲运动，算法是：A = A + (B - A) / 2
```js
/**
*@param {Number} A  起始位置
*@param {Number} B  目标位置
*@param {Number} rate  缓动速率
*@param {Function} callback {value,boolean{true: 滚动完成,false: 正在滚动}} 变化位置回调,value变化值;
*/
Math.easeout = function (A, B, rate, callback) {
  if (A == B || typeof A != 'number') {
    return;
  }
  B = B || 0;
  rate = rate || 2;

  var step = function () {
    A = A + (B - A) / rate;
    if (A < B+1) { // 当等于B时也不会触发;
      callback(B, true);
      return;
    }
    callback(A, false);
    // 如果没有滚动完成则继续调用该函数
    requestAnimationFrame(step);
  };
  step();
};

var doc = document.body.scrollTop ? document.body : document.documentElement;
Math.easeout(doc.scrollTop,0,4,function(value){
    //实时更改位置, 位置变化的回调函数;
    doc.scrollTop = value
})
```



## 十五、平滑滚动

1. scroll-behavior: smooth，平滑滚动，给html和body加，或者给滚动的父元素加；
2. scroll-snap属性：

滚动窗口使用的：scroll-snap-type、scroll-padding；

滚动子元素使用的：scroll-snap-align、scroll-snap-stop、scroll-margin；

（1）scroll-snap-type

属性指定能不能去捕捉当前滚动的窗口并让它对齐，以及所执行的方向跟严格程度；

对齐方向属性：
* x ：捕捉 X 轴上的位置
* y ：捕捉 Y 轴上的位置
* block ：捕捉块轴上的位置（逻辑意义上与 y 一样）
* inline ：捕捉内联轴上的位置（逻辑意义上与 x 一样）
* both ：捕捉两个方向上的位置


严格值：

* none ：默认值，Mmmm，啥也不干
* proximity ：一个感性的值，如果元素进入到了容器的捕捉位置范围内，则进行捕捉并滚动，否则就不管，至于这个范围是多少，约莫着 45%的位置吧（手动测的，W3C 没给出具体算法，瞎猜吧，哈哈哈）。
* mandatory ：经常使用的值，强制性的，滚动结束后，一定会强制停在我们指定的地方。


（2）scroll-snap-align属性指定捕捉窗口要捕捉的子元素位置
* none ：默认值，啥也不干 0.0。
* start ：跟开始位置对齐。
* end ：跟结束位置对齐。
* center ：居中对齐。


（3）scroll-snap-stop 用来控制到达这些位置之后是否被捕获，还是到了指定的位置才被捕获；
* normal ：默认值，滚动的时候，可以忽略捕捉位置。
* always ：滚动的时候，不能忽略捕捉位置，还必须定位到第一个捕捉元素的位置。


（4）scroll-margin   简写属性，跟margin一样，可以设置元素跟滚动条之间的外边框大小，可用值四个，scroll-margin-top/bottom/left/right

（5）scroll-padding   跟scroll-margin类似；



## 十六、onresize自适应布局

```js
window.onresize=function(){}  // 当页面窗口发生变化时触发；
```

自适应布局使用；
```js
window.onload = window.onresize = function(){
    console.log(111)   // 通过判断不同的设备,执行不同的页面,通过navigate来判断;
}
```



## 高频面试题

● 什么是 window 对象 ? 什么是 document 对象 ?

● offsetWidth、clientWidth、scrollTop 的区别？

● 如何获取 url 地址中搜索内容？
