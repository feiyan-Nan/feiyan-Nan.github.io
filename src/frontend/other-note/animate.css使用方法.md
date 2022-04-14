# animate.css使用方法
## 一、引入
1. 官网： [https://daneden.github.io/animate.css/](https://daneden.github.io/animate.css/)；

2. 官方cdn

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
```
3. 使用方法

打开官网，查看需要的动画名称，上面的名称就是动画的类名，直接写上类名和animated类名即可；
```html
<div class='animated bounce'></div>
```
4. 可用的类名
infinite，无限循环；

delay-2s；修改动画的延迟出现的时间；

delay-2s/3s/4s/5s；animate定义的延迟类名；需要自定义延迟可以添加到css里面；

控制动画速度：.slow(2s)，.slower(3s)，.fast(800ms)，.faster(500ms)；（小括号是说明，不要加小括号）


5. 给动画添加回调函数
```js
const element = document.querySelector('div');
element.addEventListener('animationed',function(){
    alert('动画完成')
})
```
6. 使用下面函数进行简单添加删除动画
```js
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)


        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
```
使用时：animateCSS('div','fadeIn',function(){alert('动画完成')})；回调函数可写可不写；