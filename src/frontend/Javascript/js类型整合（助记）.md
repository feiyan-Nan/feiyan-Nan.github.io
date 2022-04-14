# js类型整合（助记）
## 数据类型

基本数据类型：Number、String、Boolean、null、undefined、Symbol、BigInt

基本包装类型：String、Number、Boolean

引用数据类型：Object、Array、Function、RegExp、Date、Error、Math

JS内置对象：Number、String、Boolean、Object、Array、Function、RegExp、Date、Error

Math是全局对象；



## Array方法

修改原数组：push、pop、shift、unshift、splice、sort、reverse

方法：concat、join、slice、indexOf、lastIndexOf、includes、fill、flat、entries

遍历：every、some、map、filter、forEach、find、findIndex、reduce、reduceRight

Array方法：Array.from、Array.isArray、Array.of



## String方法

chartAt、charCodeAt、indexOf、lastIndexOf、slice、substring、substr、split、replace、repeat、toLowerCase、toUpperCase、includes、startsWith、endsWith、padStart、padEnd



## Number方法

Number、parseInt、parseFloat、isFinite、isNaN、isInterger



## Object方法

Object.is、Object.defineProperty、Object.defineProperties、Object.create、Object.setPrototypeOf、Object.isPrototypeOf、Object.assign、Object.keys、Object.values、Object.entries、、obj.hasOwnProperty、valueOf

Object.freeze、Object.isFrozen



## Date对象

getFullYear、getMonth、getDay、getDate、getHours、getMinutes、getSeconds、getMilliseconds、getTime、Date.parse



## Math对象

Math.abs、Math.ceil、Math.floor、Math.round、Math.sqrt、Math.random、Math.trunc、Math.min、Math.max、Math.pow、Math.sin、Math.cos、Math.PI



## RegExp字符串方法

search、replace、match、split、matchAll



## ES6

let、const、globalThis、解构赋值、扩展符...、Set、WeakSet、Map、WeakMap、Proxy、Reflect、Promise、generator、async/await、



## 节点

children、childNodes、nodeType、nodeName、nodeValue、parentNode、offsetParent、createElement、createTextNode、textContent、appendChild、insertBefore、remove、removeChild、replaceChild、cloneNode



## 事件对象

addEventListener、attachEvent、removeEventListener、detachEvent、e.stopPropagation、e.cancelBubble=true、e.target、e.srcElement、e.preventDefault、e.returnValue=false



## 宽高区域

clientWidth/Height、offsetWidth/Height、offsetLeft/Top、scrollLeft/Width、clientTop、scrollTop



## 鼠标事件

onclick、ondblclick、onmouseover、onmouseout、onmouseenter、onmouseleave、onmousemove、onmousedown、onmouseup、oncontextmenu、onmousewheel、DOMMouseScroll



## 其他事件

onscroll、onresize、onsubmit、onreset、onfocus、onblur、onselect、oninput、onchange



## 五种继承

1. 原型链继承
2. 构造函数继承
3. 组合继承
4. 原型式继承
5. 寄生组合式继承



## canvas

fillRect、strokeRect、beginPath、rect、closePath、fill、stoke、clearRect、fillStyle、stokeStyle、lineWidth、moveTo、lineTo、arc、fillText、strokeText、translate、rotate、save、restore、drawImage



## Vue

vue init webpack mydemo

v-once、v-text、v-html、v-bind、v-on、v-if、v-else-if、v-else、v-show、v-for、v-model、computed、watch、Vue.set、Vue.component、keep-alive、slot、Vue.filter

* 事件修饰符

  .stop、prevent、.capture、.self、.once、
  .enter、.tab、.space、.delete、.up、.down、enter.left、.right、
  .ctrl、.alt、.shift、.meta、
  click.left、.middle、.right
  .lazy、.number、.trim
  $refs、$event

* 八种组件通讯

1. props / $emit
2. $children / $parent
3. provide / inject
4. ref / refs
5. eventBus
6. localStorage
7. Vuex
8. $attrs、$listeners

* 自定义指令

  directives、bind、unbind、inserted、update

* 过渡

  v-enter-active、v-leave-active、v-enter、v-leave

before-enter、enter、after-enter、enter-cancelled

* 生命周期

  beforeCreate、created

beforeMount、mounted

beforeUpdate、updated

beforeDestroy、destroyed

activeted、deactiveted

errorCaptured、serverPrefetch


* 路由

  router-link、router-view、active-class、this.$router.push/replace/go、

beforeEach、afterEach

beforeEnter

beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave


* Vuex：state、mutations、actions、getter、model



## React

create-react-app demo

ReactDOM.render()、htmlFor、className、defaultValue、this.change、this.change.bind(this,'')、()=>this.change('')、this.setState

* 生命周期

  constructor、componentWillMount、render()、componentDidMount、shouldcomponentUpdate、componentWillUpdate、componentDidUpdate

* 路由

  Router、NavLink、activeClassName

引入：Switch、Route、Redirect  from react-router-dom

index.js引入：BrowserRouter

this.props.history.push()/replace()/go



## Angular

ng new mydemo

[]='img'、\*ngFor、\*ngIf、(click)=add()、[ngStyle]、[(ngModel)]、

* 路由

  router-outlet、routerLinkActive、



## 小程序

bind、catch、capture-bind、wx:if、wx:elif、wx:else、wx:for、scroll-view、swiper、icon、button、image、view、text、

* 生命周期

  onLoad、onShow、onReady、onHide、onUnload

* 普通事件

  onPullDownRefresh、onReachBottom、onPageScroll、tap、touchstart、touchmove、touchcancel、touchend

* 常用的方法

  wx.navigateTo、wx.showToast、wx.showsModal、wx.showLoadding、wx.request、wx.setStroage、wx.getStorage、wx.removeStroage、wx.celarStorage





## 设计模式

创建型：

工厂模式（简单工厂模式、工厂方法模式、抽象工厂模式）、建造者模式、原型模式、单例模式

结构型：

外观模式、适配器模式、代理模式、装饰者模式、桥接模式、组合模式、享元模式；

行为型：

第一批：模版方法模式、观察者模式、发布-订阅模式、状态模式、策略模式、职责链模式、命令模式、访问者模式

第二批：中介者模式、备忘录模式、迭代器模式、解释器模式

技巧型：链式模式、委托模式、数据访问对象模式、节流模式、简单模板模式；
