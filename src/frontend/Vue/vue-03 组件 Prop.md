# Vue-03 组件、Props

## 一、组件

1. 概念：包含了View、Model、Methods等完整的具有独立功能的自定义元素
2. 组件是vue框架核心内容，是重点
3. 组件是可利用的Vue实例，所以组件与new Vue接收相同的选项，比如data、computed、methods等
4. 每个组件都会各自独立维护它自己的变量，每使用一次组件，就会有一个它的新实例被创建
   - 比如：创建一个按钮，点击一次加一，使用多个按钮，它们的计数是不一样的



## 二、全局和局部注册组件

> 创建好的组件名直接作为标签名放在挂载的元素内

### 全局注册

* 所有挂载了Vue根实例的标签都可以使用该组件

```js
Vue.component('组件名', {
      template: '标签'
})
```

### 局部注册

* 只能在当前Vue实例挂载元素内使用

```js
new Vue(
    el:'#app',
    components:{
        custom:{
            template:''
        }
    }
)
```



## 三、组件名的命名方式

1. 建议使用带中划线的名字，可以避免关键字出错；
2. 当命名为驼峰命名时，在使用组件时需要转写成中划线，否则报错
3. 组件名带中划线必须加引号
4. 强烈推荐遵循w3c规范中的自定义组件名（字母全小写且必须包含一个连字符），会避免html元素相冲突



## 四、组件的特点

### 单个根元素

1. 只能有一个根节点，最外层只能是一个标签（对于注释节点、文本节点都不行）
2. 建议每次创建组件时，可以先写一个div包裹

### data必须是一个函数

> 创建的组件当中，使用data时，不能像之前那样直接点，因为每个组件返回的数据都应该是独立的，隔离的；

```js
data(){
    return {
        count:0;
    }
}
```



## 五、组件嵌套

* 可以无穷的套components，组件嵌套需要将子组件放在父组件当中，将父组件放在挂载点中


```js
parent:{
    template:`<div>
        <child></child>
    </div>`
    components:{
        child:{
            template:'<b></b>'
        }
    }
}
```

* 内部组件也可以拿出来写

```js
var child = {
    template:'<b></b>'
}
parent:{
    template:'<div>
        <child></child>
    </div>'
    components:{
        child
    }
}
```



## 六、Prop

> 在组件当中，数据是不互通的，需要经过prop进行数据传递
>

### Props命名

* prop命名使用驼峰命名时，在html中需要转为减号分开

```html
props:[myMessage] ----> <child my-message='hello'>
```

* 在声明props的时候，其命名应该始终使用camelCase，而在模板和JSX中应该始终使用kebab-case
* 在javascript中更自然的是camelCase，而在html中则是kebab-case



### Props传递

* 组件可以有任意数量的prop，在template里面像访问data值一样取值

```html
Vue.component('blog-post', {
      props: ['title'],
      template: '<h3>{{ title }}</h3>'
})
<blog-post title="My journey with Vue"></blog-post>
```

* 动态的props，当使用动态的props时，需要v-bind绑定属性

```html
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
<blog-post v-for="post in posts" :key="post.id" :title="post.title"></blog-post>
```

* 传递一个对象

```html
<blog-post v-bind='post' />
post:{name: 'hh',id: 18}

<!-- 等价于 -->
<blog-post :name='post.hh' :id='post.id'/>
```



### props类型判断

* 当props需要限制时，传入的数据需要写成对象形式；如果不需要传入数据，可以写default默认数据，在传入prop也可以给定一个default的值，以防没有传入值，对于公共组件有很大的作用

```js
// 仅指定类型
props:{
    msg: String,
    title: String,
    num: Number,
    propA: [String,Number]
}
// 指定其他
prop:{
    message:{
        type:String,  //检测类型必须是字符串类型
        required:true   //true为必须传递该属性;
        default: 'hello'  //如果没有传入的数据，则使用默认值;
        // 当传入的是对象或数组时
        default: function(){
            return {message: 'hello'}
        }
        // 自定义验证
        default: function(value){
            return ['success','warrning'].indexOf(value) !== -1
        }
    }
}
```

* 如果传入的默认值是对象或数组时，default需要是一个工厂函数

```js
default: function(){return {message: 'hello'}}
```





### 单向数据流

所有的prop都使得其父子prop之间形成了一个单向下行绑定，父级prop的更新会向下流动到子组件上，但是反过来则不行，每次父组件更新时，子组件中所有的prop都将会刷新最新的值；



注意：在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身**将会**影响到父组件的状态。





## 七、递归组件

* 组件在它的模板内可以递归的调用自己，只要给组件设置name组件就可以了
* 需要注意的是，递归必须有一个条件来限制数量
* 常用场景：联级选择器和树形控件

```vue
<template>
  <div v-for="(item,index) in treeArr"> {{index}} <br/>
      <tree :item="item.arr" v-if="item.flag"></tree>
  </div>
</template>
<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: 'tree',
  data(){
    return {}
  },
  // 接收外部传入的值
  props: {
     item: {
      type:Array,
      default: ()=>[]
    }
  }
}
</script>
```

