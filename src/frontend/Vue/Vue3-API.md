# Vue3 - API

## 在线测试

* [Vue SFC Playground](https://sfc.vuejs.org/) (官方，基于最新的提交)
* [VueUse Playground](https://play.vueuse.org/)
* [Vue on CodeSandbox](https://codesandbox.io/s/vue-3)
* [Vue on Repl.it](https://replit.com/@templates/VueJS-with-Vite)
* [Vue on Codepen](https://codepen.io/pen/editor/vue)
* [Vue on StackBlitz](https://stackblitz.com/fork/vue)
* [Vue on Components.studio](https://components.studio/create/vue3)
* [Vue on WebComponents.dev](https://webcomponents.dev/create/cevue)



## 安装

```bash
npm install -g @vue/cli
vue create hello-vue
```

vscode安装插件： [Volar](https://github.com/johnsoncodehk/volar)

vue2使用的Vetur需要禁用或者卸载掉，否则会有很多未使用的变量出现





## 应用配置

1. 注册应用将暴露出app函数，在该app下面处理，不再使用Vue直接处理了；

```js
const app = createApp({})
// 应用配置对象
app.config 
 // 处理错误
app.config.errorHandler = (err, vm, info) => {}
 // 处理warn
app.config.warnHandler = (msg, vm, trace) => {}

// 添加全局属性,2.6为Vue.prototype.$http;
app.config.globalProperties.$http = {}; 

// 注册组件
app.component('my-component', {}) 
// 注册指令
app.directive('my-directive', {})
// mixin
app.mixin({})
// 挂载组件
app.mount('#app')
// provide/inject
app.provide('user', 'administrator')
// 卸载组件
app.unmount()
// 注册插件
app.use(MyPlugin)
```



## 全局API

### defineComponent
vue3和vue2不同，使用defineComponent对于写ts时，有更好的提示和类型推导

```js
import { defineComponent, ref } from 'vue'
export default defineComponent({
    data: _=>({}),
    methods: {}
})

// or
export default defineComponent(function(){
    const count = ref(0);
    return { count }
})
```

### defineAsyncComponent
defineAsyncComponent 可以异步注册组件

```js
import { createApp, defineAsyncComponent } from 'vue'
// 更高级的用法参考：https://v3.cn.vuejs.org/api/global-api.html#defineasynccomponent
createApp({
    components: {
        AsyncComponent: defineAsyncComponent(() => import('./*.vue'))
    }
}) 
```

### nextTick

```js
import { createApp, nextTick } from 'vue'

const app = createApp({
  setup() {
    const message = ref('Hello!')
    const changeMessage = async newMessage => {
      message.value = newMessage
      await nextTick()
      console.log('Now DOM is updated')
    }
  }
})
```



### resolveComponent

只能在`render`或`setup`函数中使用

按照名字，解析组件，如果没有找到，则返回参数名字

```js
const app = createApp({})
app.component('MyComponent', {
  /* ... */
})
```

```js
import { resolveComponent } from 'vue'
render() {
  const MyComponent = resolveComponent('MyComponent')
  return h(MyComponent)
}
```



### resolveDirective

解析一个directive，找不到返回`undefined`

```js
const app = createApp({})
app.directive('highlight', {})
```

```js
import { resolveDirective } from 'vue'
render () {
  const highlightDirective = resolveDirective('highlight')
}
```





### mergeProps

```js
import { h, mergeProps } from 'vue'
export default {
    inheritAttrs: false,
    render() {
        const props = mergeProps({class: 'active'}, this.$attrs)
        return h('div', props)
    }
}
```

### useCssModule

```vue
<script>
import { h, useCssModule } from 'vue'
export default {
  setup() {
    const style = useCssModule()
    return () => h('div', {class: style.success}, 'Task complete!')
  }
}
</script>
<style module>
.success {
  color: #090;
}
</style>
```

## 组件选项

### Data

#### data

data、computed、对象，有一个vm参数可以取this；

```js
export default defineComponent({
    data: vm => ({a: vm.myProps}),
    computed: { aDuble: vm => vm.a * 2 }
})
```

#### emits

可以是数组也可以是对象

当值为对象时，是一个函数，可以验证参数

```js
const app = createApp({})
app.component('todo-item', {
    emits: ['check']
})

app.component('todo-item', {
    emits: {
        check: (payload) => {
            if(payload.email && payload.password) return true;
            return false;
        }
    }
})
```

#### expose

将暴露在公共组件实例上的property列表

```js
export default {
  // increment 将被暴露，
  // 但 count 只能被内部访问
  expose: ['increment'],

  data: _=>({count: 0}),

  methods: {
    increment() {
      this.count++
    }
  }
}
```

#### inheritAttrs

当没有使用props接收的prop，会被绑定到元素上，将inheritAttrs设置为false（默认为true），则可以阻止绑定到元素上；



### 生命周期

* `beforeDestroy`更名为 `beforeUnmount`
* `destroyed` 更名为`unmounted`
* 新增`renderTracked` 组件第一次渲染时调用
* 新增`renderTriggered` 当虚拟DOM重新渲染触发时调用

组件上的@hook也修改为vnode，并支持驼峰

```vue
<!-- 2.x -->
<child-component @hook:updated="onUpdated">

<!-- 3.x -->
<child-component @vnode-updated="onUpdated">
```





### 指令

#### v-pre

跳过元素和编译过程，加快编译

#### v-memo

通过传入依赖数组，只在依赖数组改变时重新渲染

```vue
<template>
    <div v-memo="[value, valueB]"></div>
</template>
```

v-memo和v-for一起使用时，确保绑定到同一元素上，如果v-memo是v-for的内部，则不生效

### teleport

vue3新增的标签，to必须传入有效的查询选择器或HTMLElement

```vue
<template>
	<teleport to="body"></teleport>
</template>
```



## Refs

### ref

接受一个内部值，并返回一个响应式且可变的ref对象，使用`.value`访问值

```js
const count = ref(0);
console.log(count.value) // 0
```

如果值为对象，则被`reactive`处理为深层的响应式对象

ts的类型声明

```ts
interface Ref<T>{
    value: T
}
function ref<T>(value: T): Ref<T>;
```

```ts
import {Ref} from 'vue';
export default {
    setup(){
        const style: Ref<CSSProperties> = ref({})
    }
}
```

### unref

如果传入ref，返回内部值，如果不是，返回本身，是`val = isRef(val) ? val.value : val`的语法糖

### toRef

用来将对象上的某个property创建一个ref，当对创建上的ref更改时，源对象也会被更改

```js
const state = reactive({foo: 1})
const fooRef = toRef(state, 'foo')
fooRef.value++ // 2
state.foo++ // 3
```

### toRefs

将响应式对象转换为普通对象，里面的每个property都指向原始对象的property，通过解构也不会丢失响应式性了

```ts
const state = reactive({
    foo: 1,
    bar: 2
})
const { foo, bar } = toRefs(state);
foo.value++
bar.value++
console.log(state) // { foo: 2, bar: 3 }
```

### isRef

检查是否为ref对象

### customRef

创建一个自定义的ref，需要一个工厂函数，该函数接收`track`和`trigger`作为参数，并返回一个带有`get`和`set`的对象

```js
import { customRef } from 'vue'
function useText(value) {
    return customRef(function(track, trigger) {
        return {
            get() {
                track();
                return value
            },
            set(newValue) {
                value = newValue;
                trigger();
            }
        }
    })
}
export default {
    setup() {
        const text = useText(123)
        return { text }
    }
}
```

### shallowRef

浅层的响应式，如果值是对象，对象的值改变，不会被触发

```js
const shallow = shallowRef({ foo: 1 })
watchEffect(() => {
    console.log(shallow.value.foo) // 1
})
// 不会触发watch
shallow.value.foo++;

// 添加triggerRef会触发watch
triggerRef(shallow)
```

### triggerRef

手动执行与`shallowRef`关联的任何作用



## Reactive

### reactive

返回对象的响应式副本，返回的proxy是不等于原始对象的，`reactive`传入对象；

`reactive`将解包所有深层的refs，同时维持ref的响应性

```js
const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 它会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 它也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
```

### readonly

`readonly`可以传入ref对象，也可以传入普通对象

```js
const original = reactive({ count: 0 })
const copy = readonly(original)

// 警告
copy.count++ 
```

`readonly`代理ref之后，也会直接解包

```js
const raw = {count: ref(123)}
const copy = readonly(raw)
console.log(raw.count.value) // 123
console.log(copy.count) // 123
```

### isProxy

检查对象是否由`reactive`或`readonly`创建的proxy

### isReactive

检查是否由`reactive`创建的

如果对象是由`readonly`的普通对象创建的，则返回false，如果是`reactive`对象创建的`readonly`，则返回true

### isReadonly

检查对象是否由`readonly`创建的

### toRaw

返回`reactive`或`readonly`代理的原始对象

```js
const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true
```

### markRaw

标记一个对象，使其永远不会转换为proxy

```js
const foo = markRaw({})
console.log(isReactive(reactive(foo))) // false

const bar = reactive({foo})
console.log(isReactive(bar.foo)) // false
```

### shallowReactive

创建响应式对象，但是**深层对象不被响应式转换**

```js
const state = shallowReactive({
    foo: 1,
    nested: { bar: 2 }
})
// 可以被响应
state.foo++
// 不被响应
state.nested.bar++
```

如果foo使用ref创建的，需要使用.value访问，不会被解构

### shallowReadonly

与`shallowReactive`一致，创建只读的proxy，**深层proxy无法创建只读**，可以被更改







## Computed 与 watch

### computed

接收一个函数或者`get`和`set`函数的对象，返回一个**不可变**的响应式ref对象

```js
const count = ref(1);

const plusOne = computed(() => count.value + 1)

plusOne.value++; // 错误
```

```js
const count = ref(1);
const plusOne = computed({
    get: () => count.value + 1,
    set: val => {
        count.value = val - 1
    }
})
plusOne.value = 1;
console.log(count.value) // 0
```

调试Computed，第二个参数接收一个对象，包含`onTrack`和`onTrigger`，仅在开发模式下生效

```js
const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 作为依赖被追踪时触发
    debugger
  },
  onTrigger(e) {
    // 当 count.value 被修改时触发
    debugger
  }
})
// 访问 plusOne，应该触发 onTrack
console.log(plusOne.value)
// 修改 count.value，应该触发 onTrigger
count.value++
```



### watchEffect

当内部使用的值发生改变，会重新执行该函数，可以调用返回的值停止监听

```js
const count = ref(0)
const stop = watchEffect(() => {
    console.log(count.value)
})
stop();
```

**清除watch副作用**

支持一个`onInvalidate`函数，该函数会在`watchEffect`重新执行时触发，或者组件卸载时

```js
watchEffect(onInvalidate => {
  const token = performAsyncOperation(id.value)
  onInvalidate(() => {
    token.cancel()
  })
})
```

如果在`watchEffect`函数中请求接口，需要将`onInvalidate`写在接口之前，因为请求往往是异步的，写在之后改变的话，还未注册

**第二个参数**

* flush
  * `pre` 默认值，在初始时会执行，更新时执行
  * `post`  仅在更新时执行，别名方法`watchPostEffect`
  * `sync` 强制效果始终同步触发，别名方法`watchSyncEffect`，该方法很少被使用
* onTrack   依赖发生改变时调用，仅在开发生效
* onTrigger   副作用被触发时调用，仅在开发生效

### watch

与`this.$watch`等效，与`watchEffect`不同的是：

- 惰性地执行副作用；
- 更具体地说明应触发侦听器重新运行的状态；
- 访问被侦听状态的先前值和当前值。

```js
const state = reactive({ count: 0 })
watch(() => state.count, (count, prevCount) => {})

// 也可以直接监听整个ref
watch(count, (count,prevCount) => {})
```



`watch`与`this.$watch`新增支持同时监听多个源

```js
watch([fooRef, barRef], ([fooRef, barRef], [prevFoo, prevBar]) => {})
```



`watch`监听函数的第三个参数是`onInvalidate`，与`watchEffect`功能相同

### effectScope

是一个高阶的API，主要服务于库作者

创建一个effect作用域对象，可以同时处理作用域的所有effect

```js
const scope = effectScope()

scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})

// 处理该作用域内的所有 effect
scope.stop()
```

### getCurrentScope

返回当前活跃的effect作用域

### onScopeDispose

在当前活跃的effect作用域上注册一个回调

## 组合式API

### setup

vue3的新特性，是内部使用组合式API的入口点

setup返回的对象，会传到template模板中使用，也可以在其他地方通过this访问

```vue
<template>
  <div>{{ count }} {{ object.foo }}</div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const object = reactive({ foo: 'bar' })
      // 暴露到template中
      return {count,object}
    }
  }
</script>
```

setup返回的refs不需要使用`.value`，会自动解包，函数则需要解包

```js
import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })

    return () => h('div', [count.value, object.foo])
  }
}
```

**setup参数**

* 第一个参数为props
  * **props不能解构使用**，否则会失去响应式
  * **props不能进行更改**
* 第二个参数为context
  * 参数为：`attrs`、`slots`、`emit`、`expose`，等同于`$attrs`、`$slots`、`$emit`，可以解构使用
  * expose 是一个函数，传入一个对象，可供公共使用，通过$refs访问

执行`setup`时，组件实例尚未被创建，所以不能访问`refs`、`data`、`computed`、`methods`

在`setup`内，`this`不是当前的实例的引用



检测一个可选的props是否传入，可以将默认值设置一个symbol

```js
const isAbsent = Symbol();
export default {
    props: { foo: { default: isAbsent} },
    setup(props) {
        if(props.foo === isAbsent) {
            // 没有被传入
        }
    }
}
```

### 生命周期

通过在生命周期加“on”即可使用，比如：`onMounted`

```js
export default {
    setup(){
        onMounted(() => {
            console.log('Component is mounted')
        })
    }
}
```

组合式API的生命周期中没有`onBeforeCreate`、`onCreated`，因为在setup执行的函数，是围绕这两个生命周期运行的，可以直接使用setup

### Provide / Inject

```js
import { provide, inject } from 'vue'
const dataSymbol = Symbol();

export default {
    setup() {
        provide(dataSymbol, { name: '' })
        const data = inject(dataSymbol, defaultValue)
    }
}
```

响应式provide/inject

```js
import { provide, reactive, readonly, ref } from 'vue'
export default {
    setup() {
        const location = ref('North Pole')
        const geolocation = reactive({
            longitude: 90,
            latitude: 135
        })
        
        //建议在只provide的组件内部更新响应式
        const updateLocation = () => {
            location.value = 'South Pole'
        }
        
        // 添加readonly防止后面的组件更改
        provide('location', readonly(location));
        provide('geolocation', readonly(geolocation))
        provide('updateLocation', updateLocation)
    }
} 
```

### getCurrentInstance

支持访问内部组件实例，不建议将它当作组合式API中获取this的替代方案使用

```js
import { getCurrentInstance } from 'vue'

const MyComponent = {
  setup() {
    const internalInstance = getCurrentInstance()

    internalInstance.appContext.config.globalProperties // 访问 globalProperties
  }
}
```

只能在setup和生命周期钩子使用

```js
import { getCurrentInstance } from 'vue'

const MyComponent = {
  setup() {
    const instance = getCurrentInstance() // 有效
    const id = useComponentId() // 有效
    
	const demo = () => {
        getCurrentInstance(); // 无效
        useComponentId() // 无效
    }
    
    onMounted(() => {
        getCurrentInstance()  // 有效
    })
  }
}

function useComponentId() {
    return getCurrentInstance().id
}
```



## \<script setup\>

### 变量声明

1. 内部声明的变量，可以直接在template模板中使用
2. 响应式状态的变量需要使用响应式API

### 组件引入

import的组件可以直接在template中使用，建议直接使用PascalCase格式而不是kebab-case格式

### 自定义指令

自定义指令时，声明需要以`vNameOfDirective`的形式

```vue
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

### 命名空间组件

可以使用带点的组件标记，例如`<Button.Group>`来引用嵌套在对象属性中的组件

```js
import Form from './form'
import Input from './form-input'
import Label from './form-label'
const Form = Object.assign(Form, {Input, Label})
```

```vue
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```



### 其他选项

`props` --> `defineProps`

`emits` --> `defineEmits`

`expose` --> `defineExpose`

`attrs`  --> `useAttrs`

`slots` --> `useSlots`



**仅限Typescript**

props和emits都可以传递字面量类型的纯类型语法作为参数给`defineProps`和`defineEmits`

```tsx
const props = defineProps<{
  foo: string
  bar?: number
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```



**使用类型声明时的默认props值**

需要借助函数来声明默认值

```ts
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```





### 与普通`<script>`一起使用

一个文件可以包含`<script setup>`和`<script>`标签，但是不能再使用render函数了

以下情况可能共同使用

* 无法在 `<script setup>` 声明的选项，例如 `inheritAttrs` 或通过插件启用的自定义的选项。
* 声明命名导出。
* 运行副作用或者创建只需要执行一次的对象。



### 其他特性

1. 标签内可以直接使用`await`
2. 带setup的标签不能添加src属性



## 规范

### 自动name推断

name会根据文件名字来推断，如果递归组件调用自己，可以直接使用文件名

### 预处理

```vue
<script lang=ts></script>
<template lang="pug"></template>
<style lang='scss'></style>
```

基于不同的工具链，预处理的集成不同



## \<style\>

### 选择器

```vue
<style scoped>
    /* 深度选择器 */
    ::v-deep(.foo) {}
    /* 缩写 */
	.a :deep(.b) {}
    
    /* 插槽选择器 */
    ::v-slotted(.foo) {}
    /* 缩写 */
    :slotted(div) {}
    
    /* 全局选择器, vue2版本是重新创建script标签 */
    ::v-global(.foo) {}
    /* 缩写 */
    :global(.red) {}
</style>
```

### css module

```vue
<style module>
    .red{}
</style>
<template>
	<div :class="$style.red"></div>
</template>
```

module也可以直接等于一个名字

```vue
<style module="parent">
    .red{}
</style>
<template>
	<div :class="parent.red"></div>
</template>
```



### 组合式API

通过css module绑定的，可能通过`useCssModule`获取

```js
// 默认, 返回 <style module> 中的类
useCssModule()

// 命名, 返回 <style module="classes"> 中的类
useCssModule('classes')
```



### 状态css

通过`v-bind`可以获取组件中的css

```vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```



