# Vue-02 修饰符、表单

## 一、事件修饰符

> 修饰符是以.点指明特殊后缀，用于指出一个指令应该以特殊方式绑定

* `stop` 阻止事件冒泡

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
```

* `prevent` 阻止事件默认行为

```html
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
```

* `capture` 事件捕获，改变事件流

默认是先触发子元素的事件，再触发父元素的事件，当给父元素添加了`capture`，则先触发父元素的事件，再触发子元素的事件

```html
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
```

* `self` 只触发当前元素自身

在父子元素中，有事件冒泡，点击子元素也会触发父元素的事件，这时，可以给父元素添加.self，点击子元素不再触发父元素的事件

```html
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

* `once` 只执行一次操作

* 修饰符也可以串联使用

```html
<a v-on:click.stop.prevent="doThat"></a>
```

* 只有修饰符

```html
<form v-on:submit.prevent></form>
```

**注意：** 

* 使用修饰符时，**顺序**很重要，相应的代码会以同样的顺序产生；`@click.prevent.self` 会阻止所有点击，`@click.self.prevent`只会阻止对元素自身的点击

* 在组件上面使用修饰符时，需要使用`.native`，原生dom元素可以不用写`.native`，

  ```html
  <!-- 组件 -->
  <van-checkbox @click.stop.native />
  <!-- 原生dom -->
  <div @click.stop ></div>
  ```

* 针对对组件添加事件最好都添加上`.native`；

**jsx阻止事件冒泡写法**

```jsx
// 不带参数, 直接接收事件对象
handler(event) {}
// 带参数, 再最后接收事件对象
handler(index, event){}
<div onClick={() => this.handler(index)}></div>
```



## 二、按键修饰符

```html
<!-- 按下回车则调用:vm.submit -->
<input v-on:keyup.enter='submit'>
```

1. 使用keyup.13也是允许的，因为ie9中，有不同的key值，建议使用按键修饰符
2. 常用的按键修饰符：`enter`、`tab`、`esc`、`space`、`delete`(删除和退格)、`up`、`down`、`left`、`right`
3. 自定义按键修饰符：Vue.config.keyCodes.f1 = 112



## 三、系统修饰键

1. 常用的：`ctrl`、`alt`、`shift`、`meta`    `meta`是window键

```html
<!--Alt+C-->
<input @keyup.alt.67='clear'>

<!--ctrl+click-->
<div @click.ctrl = 'doSomething'></div>
```

**注意：** 修饰键与常规按键不同，在和keyup一起使用时，事件触发时，修饰键必须处于按下状态；如果想单单释放ctrl键，需要将ctrl换为：keyup.17



## 四、鼠标按钮修饰符

click事件的鼠标常用修饰符：left、right、middle



## 五、表单修饰符

* `lazy`  绑定v-model时，数据是实时的，使用.lazy会让数据在按下回车键或失去焦点发生变化

```html
<input type="text" v-model.lazy='lazs'>
```

* `number`  自动将用户输入的值转为数字类型，比较有用，因为即使是type=number，输入的元素值也会返回字符串

```html
<input v-model.number="age" type="number">
```

* `trim` 过滤掉用户输入的首尾空白字符



## 六、获取文本框的内容

* $refs

```html
输入：<input ref='good'>
取值：this.$refs.good.value
```

**注意：** $refs获取的是DOM元素的标签，也可以是其他标签使用ref

* $event

```html
输入：<input @keyup='play($event)'>；
取值：e.target.value;
```

* v-model  双向数据绑定

```html
输入：<input v-mode='user'>
取值：在data里面定义，取data数据
```

单向：Model-->View；

双向：Model<-->View



## 七、v-model

1. 使用v-model指令与Input、select、textarea创建双向数据绑定
2. v-mode会忽略所有表单元素的checked、value、seleced特性的初始值，可以在data里面修改初始值
3. data里面的数据与元素进行绑定，实现双向控制数据；其中任意一方修改数据，都会被修改
4. 如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示

```js
父组件：
<ModelChild v-model="message"></ModelChild>
子组件：
<div>{{value}}</div>
props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
}
```

5. 可以通过model对象来修改v-model绑定props的默认value

```js
export default {
    name: 'App',
    model: {
        prop: 'show', // 为了和v-model区分默认value, 将prop改为自定义的名称
        event: 'click' // 修改自定义的触发事件, 默认是input事件名
    },
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        }
    }
}
```



### Vue实现双向数据绑定的原理

vue.js 是采用数据劫持结合发布者-订阅者的方式，通过Object.defineProperty()来劫持各个属性的getter，setter，在数据变动时发布消息给订阅者，触发相应的监听回调。



具体步骤：

第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:

1. 在自身实例化时往属性订阅器(dep)里面添加自己
 	2. 自身必须有一个update()方法
 	3. 待属性变动dep.notifce()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。




## 八、多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>

<textarea v-model="message" placeholder="add multiple lines"></textarea>

//white-space:pre-line   保留换行
//原来的textarea是不能换行的，加上之后就可以换行了
```



## 九、复选框

1. 单个复选框可以定义变量是布尔值
2. 多个复选框绑定到一个数组，使用相同的v-model

```html
<input type='checkbox' name='hobby' value='学习' v-model='hobby'>
<input type='checkbox' name='hobby' value='睡觉' v-model='hobby'>
JS:   hobby:[]  //需要默认选中可以直接在数组里写value值
```

3. 动态的复选框选项

```html
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" >
当选中时：toggle为yes，当没有选中时，toggle为no;
提交表单时：没有选中是不会被提交到后台的，选中之后是提交：toggle=on
```



## 十、单选框

1. 绑定到相同的v-model

```html
<input type="radio" id="one" value="One" v-model="picked">
<input type="radio" id="two" value="Two" v-model="picked">
JS:  picked: '';
```

2. 动态的单选框时

```html
<input type="radio" v-model="pick" v-bind:value="a">
当选中时：vm.pick === vm.a
```



## 十一、选择框

1. 单选时，推荐添加一个禁用的按钮

```html
<select v-model="selected">
    <option disabled value="">请选择</option>   //带value=''，否则不显示当前项
    <option>A</option>
    <option>B</option>
</select>
JS:  selected:'';
```

2. 多选时

```html
<select v-model="selected" multiple style="width: 50px;">
    <option>A</option> 
    <option>B</option> 
    <option>C</option>
</select>
JS:  selected:[];
```

3. 使用v-for渲染动态选项

```html
<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
JS:  selected: 'A',
options: [ { text: 'One', value: 'A' }, { text: 'Two', value: 'B' }, { text: 'Three', value: 'C' } ];
```

4. 动态的多选框

```html
<select v-model="selected"> 
    <!-- 内联对象字面量 --> 
    <option v-bind:value="{ number: 123 }">123</option> 
</select>

// 当选中时 
typeof vm.selected // => 'object' 
vm.selected.number // => 123
```
