# Vue3-Vue2不同点

本节只讲在Vue3-API没有的内容

## 片段

template模板在2.x中，必须有一个父节点，3.x中可以不用包裹节点，相对的，$attrs则需要手动指定了

```vue
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

## v-model

### 绑定名字

v-model使用`modelValue`来接收，如果绑定一个变量，则用变量来接收

```html
<my-component v-model="book" v-model:title="bookTitle"></my-component>
```

```js
app.component('custom-form', {
    emits: ['update:modelValue', 'update:title'],
    template: `
		<input @input="$emit('update:title')" />
	`
})
```

### 绑定修饰符

v-model包含内置修饰符：`.trim`、`.number`、`.lazy`

也支持自定义的修饰符，自定义修饰符将传送到`this.modelModifiers`中

如果修饰符带参数，则prop的名称为：`arg + "Modifiers"`

```html
<my-component 
    v-model.capitalize="myText" 
    v-model:description.capitalize="myText"
/>
```

```js
app.component('my-component', {
  props: ['modelValue', 'modelModifiers', 'description', 'descriptionModifiers'],
  emits: ['update:modelValue', 'update:description'],
  template: `
    <input type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
  `,
  created() {
    console.log(this.modelModifiers) // { capitalize: true }
  }
})
```



## 多个应用共享配置

```js
import { createApp } from 'vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const createMyApp = options => {
  const app = createApp(options)
  app.directive('focus' /* ... */)

  return app
}

createMyApp(Foo).mount('#foo')
createMyApp(Bar).mount('#bar')
```



## 按键修饰符

vue2.x支持keyCodes作为v-on的一种方式

```html
<input v-on:keyup.112="" />
```

vue3.x不再支持，现在建议对任何要用作修饰符的键使用 kebab-cased (短横线) 名称。

```html
<!-- Vue 3 在 v-on 上使用按键修饰符 -->
<input v-on:keyup.page-down="nextPage">

<!-- 同时匹配 q 和 Q -->
<input v-on:keypress.q="quit">
```

语法的限制导致某些特定字符无法被匹配，比如 `"`、`'`、`/`、`=`、`>` 和 `.`。对于这些字符，你应该在监听器内使用 `event.key` 代替。



## EventBus

vue2.x中支持的eventBus也不再被支持，vue3.x移除了 `$on`、`$off` 和 `$once` 方法，`$emit` 仍然包含于现有的 API 中，因为它用于触发由父组件声明式添加的事件处理函数。

**更换策略**

事件总线模式可以被替换为使用外部的、实现了事件触发器接口的库，例如 [mitt](https://github.com/developit/mitt) 或 [tiny-emitter](https://github.com/scottcorgan/tiny-emitter)。

```js
// eventBus.js
import emitter from 'tiny-emitter/instance'

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
}
```



## 过滤器

vue2.x中的过滤器，3.x不再支持，建议直接使用`computed`即可，或者在绑定到根组件

```js
// main.js
const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}
```







