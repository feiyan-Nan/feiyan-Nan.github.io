# Vue-05 过渡效果、生命周期

## 一、过渡效果

* 定义动画 类

```css
/* 定义进入和离开时候的过渡状态 */
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
/* 定义进入过渡的开始状态和离开过渡的结束状态 */
.v-enter, .v-leave-to {
  opacity: 0;
}
```

* 使用vue内置的transition标签把需要动画控制的元素包裹起来

```html
<transition>
    <div v-if='show'></div>
</transition>
```

![image](https://notecdn.hrhe.cn/images/vue-05_过渡_生命周期-01.png)

图中可见：

v-enter和v-leave-to的样式是一样的，可以写成一组样式

v-enter-to和v-leave的样式是一样的，可以写成一组样式



* 四个时间点
  * v-enter：进入之前元素的起始状态，还没进入
  * v-enter-to：定义进入过渡结束状态
  * v-leave：定义离开过渡的开始状态；
  * v-leave-to：离开之后离开的终止状态，动画已经结束了；
* 两个时间段，在时间段设置过渡等等
  * v-enter-active：进入动画的时间段发生的事情
  * v-leave-active：离开动画的时间段发生的事情



### 列表渲染

在使用v-for循环时，需要使用transition-group标签包裹li，如果要为v-for循环动画时，必须为每一个元素

```html
<ul>
    <transition-group>
        <li v-for='...'></li>
    </transition-group>
</ul>
```

为列表删除定义移除的动画（固定写法）

```css
.v-move{
    transition:all .6s ease;
}
.v-leave-active{
    position: absolute;
}
```

给transition-group添加appear属性，实现页面刚展示出来的入场动画；因为transition-group标签被渲染成了span标签，可以添加一个tag转换ul标签包裹；

```html
<transition-group appear tag='ul'></..>
```







## 过渡的自定义

### 自定义前缀

* 定义样式中v是css中定义样式名字的开头，使用时在transition标签写上name名字
* 前缀的作用：区分不同组件的动画；不同的组件使用不同的动画

```html
<transition name='fade'></transition>
.fade-enter,.fade-leave-to{
	opacity: 0
}
```



### 自定义过渡类名

* enter-class
* enter-active-class
* enter-to-class
* leave-class
* leave-active-class
* leave-to-class



## 动画钩子

使用类名的动画都无法设置半场的动画，需要用到动画钩子，使用动画钩子不需要再设置样式，在methods里面定义；

**半场动画：**

原来动画分为进入和离开，两场动画，半场动画只有进入的状态就消失了，每次点一下就显示隐藏了



每个钩子对应一个事件，事件的第一个参数：el，表示要执行动画的那个dom元素；js原生的dom元素；动画钩子事件添加到transition标签里

* @before-enter='beforeEnter' 进入之前，

  动画尚未开始，可以在这里设置元素动画之前的起始样式；

* @enter='enter'  进入

  这里可以设置动画起始完成之后的状态，enter和leave事件过渡的时候，回调函数必须有第二个参数，done，

* @after-enter='afterEnter'  进入之后

  动画完成之后执行的函数，该函数执行有延迟，需要在上一个函数进入调用一次；

* @enter-cancelled='enterCancelled' 进入取消（一般用不到）；

v-on:before-leave='beforeleave'

v-on:leave='leave'

v-on:after-ente='afterleave'

v-on:leave-cancelled='leaveCancelled'



### 简单的例子

```js
beforeEnter (el) {
    el.style.transform='translate(0,0)';
}
enter (el, done) {
    el.offsetWidth  //如果没有动画效果，设置这行代码，可以进行动画，或offsetHeight/top/right都行;
    el.style.transform='translate(0,0)';
    el.style.transition = 'all 1s ease';
    done()  //必须要调用一次，否则会出现延迟的情况; 相当于afterenter事件,立即调用最后一个事件;
}
afterEnter (el) {
    this.flag = !this.flag;  //进入之后让元素隐藏;
}
```



## 使用animate.css动画库

* 引入animate.css文件
* 直接在transition标签上写动画名称

```html
<transition 
    leave-active-class='animated fadeOutDown' 
    enter-active-class='animated flipInX'>
          <a href="" v-show="isShow">Baidu</a> 
</transition>
```

* 使用animate动画库时，只需要定义两个时间段即可
* animate必须带一个animted的类名



## 生命周期

### 什么是生命周期

* 通常叫作生命周期钩子函数，在经过它的阶段则会触发
  * 什么是生命周期：从vue实例创建、运行、到销毁期间的过程统称为生命周期；
  * 生命周期钩子：就是生命周期事件的别名；
  * 生命周期钩子=生命周期函数=生命周期事件；

### 生命周期的状态

* 创建期间的生命周期函数

  * `beforeCreate`：实例刚在内存中被创建出来，此时，还没有初始化好data和methods属性；

  * `created`：实例已经在内存中创建ok，此时data和methods已经创建ok，还没编译模板，此时还没有el元素；

  * `beforeMount`：已经完成了模板的编译，可以访问$el，页面还没渲染；

  * `mounted`：已挂载，页面被渲染；一般在这里调取接口，ajax或axios等等；

    mounted执行完成不一定页面全部被渲染，可以在mounted里面使用this.$nextTick(()=>{})函数，页面渲染完成时执行；

* 运行期间的生命周期函数

  * `beforeUpdate`：数据更新时调用，页面还是旧数据，data里是新数据
  * `updated`：组件DOM已经更新；updated不一定页面全部被重绘，可以使用this.$nextTick
  * `activated`：keep-alive组件激活时被调用
  * `deactivated`：keep-alive组件停用时被调用；

* 销毁期间的生命周期函数

  * `beforeDestroy`：实例销毁之前调用，在这一步，实例仍然可用
  * `destroyed`：实例被销毁后调用； 调用后，当前Vue实例与挂载元素断开了，组件中的所有方法都不可用了；

一般不会自动调用销毁事件，如果需要调用销毁事件，可以写一个按键，定义一个函数，在函数内部调用this.$destroy()，进行手动销毁；尽量避免销毁，一般用不上，如果需要销毁，可以手动调用销毁；

捕获错误：`errorHandler`

![image](https://notecdn.hrhe.cn/images/vue-05_过渡_生命周期-02.png)

生命周期图解：

在创建之前Vue初始化，没有其他操作；

在创建之间，依然是初始化，这个时候没有出现el元素，可以访问data；

在创建和挂载之间，做了大量的事情；

首先判断是否有el元素，如果没有，分两个步骤：

* 没有：那生命周期就结束；

* 手动调取$mount()这个方法，去挂载el元素，生命周期继续；

如果有el元素，这个时候我们要判断是否有render()这个函数，如果有，优先去渲染它，如果没有，就找template模板对象，如果有就渲染模板内容，如果没有就去找outerHtml，如果都没有就空白；

渲染优先级：reder()函数>template>outerHtml

在挂载之前，出现了el元素，这个时候的dom结构是虚拟dom结构，进行了占位；

在挂载的时候，出现了el元素dom结构内容，替换成了实体内容；



**当有子组件时的生命周期**（了解之后对数据获取很重要）

父组件created->父组件beforeMounte->子组件created->子组件mounted->父组件mounted



**父组件通过异步获取数据，在子组件拿到数据的方法：**

1. 在父组件渲染子组件时添加判断，有数据再渲染子组件
2. 通过computed事件来处理



**清除定时器或者事件监听**

由于项目中有些页面难免会碰到需要定时器或者事件监听。但是在离开当前页面的时候，定时器如果不及时合理地清除，会造成业务逻辑混乱甚至应用卡死的情况，这个时就需要清除定时器事件监听，即在页面卸载（关闭）的生命周期函数里，清除定时器。

```js
methods:{
  resizeFun () {
    this.tableHeight = window.innerHeight - document.getElementById('table').offsetTop - 128
  },
  setTimer() {
    this.timer = setInterval(() => { })
  },
  clearTimer() {    //清除定时器
        clearInterval(this.timer)
    this.timer = null
    }
},
mounted() {
  this.setTimer()
  window.addEventListener('resize', this.resizeFun)
},
beforeDestroy() {
  window.removeEventListener('resize', this.resizeFun)
  this.clearTimer()
}
```



## 脚手架工具Vue-cli

* 安装：npm i -g @vue/cli

* 生成包
  * 使用图形界面安装：vue ui
  * 使用cmd安装：vue create demo

由于安装node-sass时，会卡住，建议设置下环境

```js
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```

* 执行vue serve运行起来
* 脚手架规范；
  * 组件名字首字母必须大写
  * 冒号后面必须有一个空格
  * 函数名和括号和大括号之间必须有一个空格
  * 每一个文件最后面必须保留一个空行
  * js中要使用单引号，否则报错
  * 一行结尾不应该有分号
  * 判断条件不能使用==，需要使用===
  * 双斜杠注释后面必须留有一个空格

* 脚手架目录结构