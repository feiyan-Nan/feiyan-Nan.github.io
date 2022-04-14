# Vue-01 初识Vue

## 一、基础知识

### 引入vue

1. vue.js

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
```

2. vue.min.js

```js
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```



### vue的注意事项

1. 在字符串插值，vue未加载完成时，会出现一闪而过
   - 将vue放在head部分，建议引入vue都将js文件放至head头部，给用户更好的效果
   - 使用v-clock：在css里定义[v-clock]{display:none}；\<div v-clock>\</div>，使用这种方法也会出现一闪的，只是没有了双花括号



### 单页面应用

> vue使用的是SPA(single-page application) 单页面应用

**vue的概念**

让用户不再操作DOM，解放用户的双手，让程序员可以更多的时间在业务逻辑上；使用vue尽量不要使用jquery插件，j代表js，query代表查询，查询dom元素；



### 框架和库的区别

**框架：** 是一套完整的解决方案；对项目的侵入性较大，

​	项目如果需要更换框架，则需要重新架构整个项目。

**库：** 提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。



### 基本结构

```js
new Vue({
    el:'', //挂载app元素,css选择器;
    data:{},  //data里面填写所有数据需要的变量;
    methods:{},   //所有事件函数都写在里面;
    computed:{},  //计算属性,也可以监听事件
    watch:{}  //监听事件
})
```



### SPA单页面优缺点

**优点**

Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是响应的数据变化，MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。

**缺点**

- 不支持低版本的浏览器，最低只支持到IE9；
- 不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；
- 第一次加载首页耗时相对长一些，开销大；
- 前进后退功能： 破坏浏览器的前进后退功能，（由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；）




## 二、字符串插值

* 使用双花括号

> 使用双大括号，中间填写变量

```html
<div id='app'>{{message}}</div>
```

* 只更新一次

> 插值的数据会随着data数据一起更新，只更新一次可以使用v-once

```html
<div v-once>{{msg}}</div>
```

* 使用表达式

```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
<button @click='num++'>{{num}}</button>

<!-- 这是语句，不是表达式 --> 
{{ var a = 1 }} 
<!-- 流控制也不会生效，请使用三元表达式 --> 
{{ if (ok) { return message } }}  // 错误
```

* 使用函数

> 字符串插值也可以是函数，函数必须写小括号执行，需要函数写返回值；return出去；

```html
<span>{{priceAll()}}</span>
```





## 三、文本内容

* 使用双花括号

```html
<div>{{message}}</div>
```

* v-text

```html
<div v-text='message'></div>
```

* v-html

> 与v-text的区别是可以解析标签

```html
<div v-html='message'></div>
```

**注：永远不要在用户提交输入框上面填写v-html，可以解析html标签，很危险，容易遭受XSS攻击，黑客可以写script标签，执行它的代码**

xss攻击：攻击者往web页面里插入恶意html标签或者javascript代码





## 四、属性绑定

### v-bind

> 使用v-bind:title='变量'  需要data里面有的变量名，没有就报错，使用v-bind绑定了事件，就相当于告诉浏览器后面的是javascript表达式，如果不是变量，需要再加一层引号。

```html
<!-- 一个可变的url地址 -->
<div v-bind:href='变量'></div>
```



### 变量属性

```html
<div v-bind:[attrName]='变量'></div>

<!-- 当值为click时，等价于：v-on:click -->
<div v-on:[eventName]='变量'></div>
```



### 属性绑定简写

1. v-bind:href 简写 :href

```html
<div :title='yes'></div>
```

2. v-on:click 简写  @click

```html
<div @click='send'></div>
```





## 五、Vue中的样式

* 直接使用变量

```html
<h1 :class="classObj">这是一个邪恶的H1</h1>
```

* 对象

```html
<h1 :class="{red:true, italic:true, active:true, thin:true}">这是一个邪恶的H1</h1>
```

* 数组

```html
<h1 :class="['red', 'thin']">这是一个邪恶的H1</h1>

<!-- 数组中使用三元表达式 -->
<h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的H1</h1>

<!-- 数组中嵌套对象 -->
<h1 :class="['red', 'thin', {'active': isactive}]">这是一个邪恶的H1</h1>
```

* 行间样式

> 样式可以写驼峰命名法编写，如果不是纯数字的值，一定要加引号，属性名不需要加引号

```html
<div :style="{color:'blue',fontSize:'30px'}"></div>
```







## 六、判断语句

### 判断

  v-if、v-show都可以用来判断


### 多重判断

```html
<div v-if='msg=="A"'></div>
<div v-else-if='msg=="B"'></div>
<!-- 当无法满足时 -->
<div v-else></div>
```

### v-if和v-show的区别

1. 如果值为true，没有任何区别
2. 如果值为false，v-if实际上是对元素的销毁和重建，v-show则是通过display将其隐藏
3. 如果需要频繁切换显示隐藏，建议使用v-show，性能更佳

v-if是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；

v-if是惰性的，如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会开始渲染条件块；

v-show初始都会被渲染，只是简单的切换display none和block；

v-if有更高的切换开销，v-show有更高初始渲染开销；如果需要频繁切换则使用v-show比较好，如果运行条件切换较少，则使用v-if较好

### 添加key值

> vue尽可能高效的更新DOM，建议在v-if和v-else添加key值

```html
<div v-if='err' key='errs'>{{err}}</div>
<div v-else key='noerr'></div>
```





## 七、v-for循环

* 循环数组

```html
<li v-for='todo in todos'></li>

<!-- 也可以使用for..of -->
<li v-for='todo of todos'></li>

<!-- 如果需要下标 -->
<li v-for='(item,index) in todos'></li>
```

* 循环数字

```html
<!-- 打印1-10 -->
<li v-for='n in 10'>{{n}}</li>
```

* 循环对象

> value为数据，name为键名，index为下标

```html
<li v-for='(value,name,index) in Object'></li>
```



### 注意

> 不推荐在同一元素上使用v-if和v-for，v-for比v-if优先级更高，如果需要同时使用，建议填写在computed里面，也可以将v-if填写在ul上，在li使用v-for

```js
computed{
    activeUsers(){
        return this.users.filter(user=>user.isActive)
    }
}
```



### key值

1. 使用v-for循环，必须加入一个key属性
2. key的值必须是唯一的，最好是遍历的id，或者是index也行

**作用：** 主要是为了高效的更新虚拟DOM，更好的区分每个组件

```html
<li v-for="item in items" :key="item.id">...</li>
```





## 八、watch监听

> 用来监听某个数据的变化
>
> 当监听的事件发生改变时，则响应函数内的内容，watch函数可以接收两个参数，一个新值，一个旧值

当watch监听的名字是对象形式的时候，支持三个参数:

- **deep**：深度监听，watch默认只能监听基本类型的值，如果是引用类型需要加入该属性
- **immediate**：是否立即执行，一般watch监听只会在页面渲染之后变化才会执行，加上之后可以跟着生命周期一起执行
- **handler**：回调函数，也可以是字符串，指向methods里面的函数

### 浅监听

> 针对于第一层数据，无法监听对象里面的对象

```js
data:{a:5};
watch:{
    a(val,old){
        console.log(val,old)
    }
}
// 如果放在外面写：
vm.$watch('a',function(val,old){
    console.log(val,old)
})
```

### 深监听

> 对于多层包含的数据被改变时；用于对象数组的监听；

```js
data:{a:{user='zs',age=18}}
监听：
watch:{
    a:{
        deep:true,
        handler(val){
            console.log(val,old)
        }
    }
}
```

**注意：** 对于数组监听：只能监听push、pop、unshift、shift、splice的方法，中括号修改不能被监听





## 九、computed 计算属性

> 不修改原始数据，同时还能通过运算，添加自己另外的东西，处理给页面呈现多种结果

```js
<li v-for="num in number2">{{ num }}</li>
data:{
    number:[1,2,3,4,5]
}

computed:{
    number2(){
        return this.number.filter(item=>item%2==0)
    }
}
```

2. 计算属性是通过函数进行处理返回的结果，需要return，并在页面使用该函数进行渲染；

```js
<div v-for='item in list2'>
computed:{
    list2(){
        return //需要return值，对原数据修改;
    }
}
```

3. computed也是响应式的，也监听了data里面的值，原始数据被修改，computed也会随着一起修改；computed是基于watcher实现的

4. 不修改原始数据，返回过滤后的新数据方法：当computed计算属性不适用时，也可以使用v-for循环嵌套方法

```js
<li v-for="n in even(numbers)">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even(list) {
    return list.filter(item=>item%2==0);
  }
}
```

5. watch、computed的对比

**相同点：** watch和计算属性都是函数；

**不同点：** 计算属性无论如何都要return一个值，watch不需要return值；

watch 必须要在data属性中定义，而computed不需要，computed中会有大量的数据计算，最后return出去；（最重要的区别）

computed属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算，主要当作属性来使用；





## 十、外部访问

1. 所有的vue的实例可以直接代理data，在内部访问时，使用this直接.data里面的属性；

2. 外部访问vue中除data外的属性，需要带上$符：vm.$el，vm.$methods；

3. 在实例化里面，this指的vue的实例；

4. vue是响应式的，如果data里面的数据修改了，浏览器页面的数据则自动修改；



## 十一、视图更新

1. 变异方法：会触发视图更新，push()、pop()、unshift()、shift()、splice()、sort()、reverse()；
2. 非变异方法：不会改变原始数组，会返回一个新数组，filter()、concat()、slice()，在使用非变异方法时，可以将新数组赋值给旧数组；



## 十二、Vue.set

this.$set是全局Vue.set的别名，使用this.$set方法，同时也可以使用Vue.set

vue不能检测索引修改数组项和长度，不会实时更新，因为不是响应式的；可以使用以下两种方法

### 操作数组

```js
this.$set(this.list, 下标, 新数据)
this.lists.splice(下标, 1, 新数据)   // 删除并添加
```

修改数组的长度可以使用：this.items.splice(newLength)；



### 操作对象

1. 添加单个对象数据

```js
this.$set(this.person,'age',18);
```

2. 添加多个对象

```js
this.userProfile = Object.assign({}, this.userProfile, { 
    age: 27, 
    favoriteColor: 'Vue Green'
})
```



## 补充

1. vscode的插件：vetur，可以自动补全，高亮提示；
2. 谷歌插件：vue

- 谷歌插件需要到扩展管理开启本地网页访问；
- 如果使用缩小版的js文件，控制台也不会显示；

- 去掉烦人提示：

```html
<script>Vue.config.productionTip=false</script>
```

