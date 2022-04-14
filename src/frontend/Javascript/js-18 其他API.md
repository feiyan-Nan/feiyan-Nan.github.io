# js-18 其他API
## 一、IntersectionObserver
判断元素是否在可视区域

1. 用法

   ```js
   let io = new IntersectionObserver(callback[,option])
   // 开始观察
   io.observe(document.querySelector('.example'))
   // 停止观察
   io.unobserve(element)
   // 关闭观察
   io.disconnect()
   
   // 返回所有监听的目标元素集合
   io.takeRecords()
   ```

   （1）callback可见性变化时的回调函数，options是参数配置对象，可选

   （2）如果需要观察多个节点，直接调用多次observe即可；

2. callback参数用法

   目标元素的可见性变化时就会立即调用该函数

   一般触发两次callback，一次是目标元素进入视口，一次是完全离开视口

   ```js
   var io = new IntersectionObserver(entries => {
       console.log(entries)
   })
   ```

   （1）监听一个

   ```js
   var io = new IntersectionObserver(entries => {
       let item = entries[0] // 是一个数组, 只有一个元素
   
       // 添加最后一个元素
       if(item.isIntersecting){
           console.log(滚动到底部了, 可以请求数据了)
       }
   }).observe(document.querySelector('.reference')) // 参照元素
   ```

3. `IntersectionObserverEntry`对象属性

   * `boundingClientRect` 目标元素的矩形信息
   * `intersectionRatio` 相交区域和目标元素的比例值 intersectionRect/boundingClientRect 不可见时小于等于0
   * `intersectionRect` 目标元素和视窗（根）相交的矩形信息 可以称为相交区域
   * `isIntersecting` 目标元素当前是否可见 Boolean值 可见为true
   * `rootBounds` 根元素的矩形信息，没有指定根元素就是当前视窗的矩形信息
   * `target` 观察的目标元素
   * `time` 返回一个记录从IntersectionObserver的时间到交叉被触发的时间的时间戳

   `intersectionRatio`和isIntersecting用来判断元素是否在可视区域

4. options对象的配置

   （1）`root：null`    观察根元素，默认浏览器视口，指定元素的时候用于观察元素必须是指定元素的子元素

   （2）`threshold`:[0,0.5,1]    一个数组，触发callback的时机

   （3）`rootMargin`: '30px 100px 20px'；   用来扩大或者缩小视察的大小，使用css的定义方法

5. 兼容性

官方polyfill： [https://github.com/w3c/IntersectionObserver/tree/master/polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)





## 二、MutationObserver 监视DOM变动

### 作用

* 监视dom发生变动时，MutationObserver将收到通知并触发事先设定好的回调函数；
* MutationObserver是异步触发的，为了避免dom频繁变动导致回调函数被频繁调用，造成浏览器卡顿；



### MutationObserver

```js
var observer = new MutationObserver(callback);
callback接收两个参数，第一个参数包含了所有mutationRecord对象的数组，第二个是MutationObserver实例本身；

var observer = new MutationObserver(function(mutations, observer){
    mutations.forEach(function(mutation){
        console.log(mutation, 'mutation')
    })
})
```
### 实例方法

**observe**

* 第一个参数：所要观察的dom节点
* 第二个参数：一个配置对象，指定所要观察的特定变动

	* childList：子节点的变动（新增、删除或更改）
	* attributes：属性的变动；
	* characterData：节点内容或节点文本的变动；
	* subtree：是否监听该节点的所有后代节点
	* attributeOldValue：观察attributes变动时，是否需要记录变动前的值；
	* characterDataOldValue：观察characterData时，是否需要记录变动前的值；
	* attributeFilter：数组，表示需要观察特定的属性（如：['class', 'src']）


```js
var article = document.querySelector('article')
var options = {
    childList: true,
    attributes: true
}
observer.observe(article, options)
```
注意：childList、attributes、characterData三者必须选其一或多个，否则报错；

对节点添加了observe就像添加了addEventListener一样，当添加不同的options时，可以触发多次；

* **disconnect**：用来停止观察，调用该方法后，dom再发生变动，也不会触发观察器；

* **takeRecords**：用来清除变动记录，即不再处理未处理的变动，该方法返回变动记录的数组；

### MutationRecord

dom每次发生变化时，就会生成一条变动记录（MutationRecord实例），该实例包含了与变动相关的所有信息，mutation observer处理的就是一个个mutationrecord实例所组成的数组；

mutationRecord对象包含了dom的相关信息：

* `type`：观察的变动类型（attribute、characterData或者childList）。
* `target`：发生变动的DOM节点。
* `addedNodes`：新增的DOM节点。
* `removedNodes`：删除的DOM节点。
* `previousSibling`：前一个同级节点，如果没有则返回null。
* `nextSibling`：下一个同级节点，如果没有则返回null。
* `attributeName`：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。
* `oldValue`：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。



## 三、DocumentFragment

1. nodeType值为11；
2. documentFragment是一个文档片段，一种'轻量级节点'；
3. 通常作为仓库使用，不存在DOM树上，是一种游离态，主要是优化页面性能；
4. 用途：当使用js创建很多dom节点时，在加入节点到dom树上时，节点需要一个个渲染，这样节点数较多时会影响浏览器的渲染效率，这个时候我们将创建的节点都放在documentFragment这样的节点上，然后把documentFragment加入到DOM，只需要完成一次渲染就可以达到之前很多次渲染的效果；

```js
var ul = document.createElement('ul');
var flag = document.createDocumentFragment();
for(var i=1; i<101;i++){
     var li = document.createElement('li')
     var liText = document.createTextNode(i);
     li.appendChild(liText);
     flag.appendChild(li);
}
ul.appendChild(flag);
document.body.appendChild(ul);
```



## 四、requestAnimationFrame

> 用来调节重新渲染，大副提高网页性能；

1. 类似定时器，与setTimeout相比，它的最大优势是由系统来决定回调函数的执行时机，不需要设置时间间隔，

2. 刷新频率：如果屏幕刷新率是60HZ，那么回调函数就每16.7ms被执行一次，如果是75hz，就是1000/75=13.3ms执行一次，它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次， 这样不会引起丢帧现象， 也不会导致动画出现卡顿的问题；

3. requestAnimationFrame的基本思想是 让页面重绘的频率和刷新频率保持同步；

4. 优势

（1）cpu节能：如果使用setTimeout实现的动画，即使切换了窗口，后台仍在执行动画，而requestAnimationFrame则不会执行，当出现在视口内，则开始执行；

（2）函数节流： 在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有意义的，因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。

5. 执行 `requestAnimationFrame`会返回一个定时器编号，传递给 `cancelAnimationFrame`用于取消这个函数；编号一般是1；

```js
let count = 0;
function requestAnimation(){
    if(count < 100){   // 作一下判断
        count++
        console.log(count)
        // 需要在函数里面调用该事件;
        requestAnimationFrame(requestAnimation);
    }
}
requestAnimationFrame(requestAnimation)  
 // 页面打开加载这个函数
cancelAnimationFrame(id)   取消requestAnimationFrame
```



## 五、requestIdleCallback

> 另一个用来调节重新渲染的函数，将任务放置后台处理

将在浏览器的空闲时段内调用函数排队，使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件

当一帧的末尾有空闲时间，才会执行回调函数；

```js
var handle = window.requestIdleCallback(callback[,options])
// 结束回调
window.cancelIdleCallback(handle)
```

options参数：timeout：指定毫秒数，将在指定的毫秒数执行函数；

参考地址：

* [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)

* [阮一峰-网页性能优化](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

