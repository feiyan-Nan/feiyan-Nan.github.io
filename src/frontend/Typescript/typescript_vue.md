# ts-Typescript and Vue

## 一、vue文件写法

```vue
<template>
  <div class="todo-page">
    <ul>
      <todo-item 
        v-for='(item, index) in list' 
        :key='index'
        :isEdittingIndex='isEdittingIndex'
        :item='item'
      ></todo-item>
    </ul>
  </div>
</template>

<script lang='ts'>
// 需要指定lang=ts
import { Component, Vue} from 'vue-property-decorator';
import TodoItem from '../components/todo-item';

// 使用装饰器修饰类, 组件相关的内容在里面写入
@Component({
  name: 'todo-page',
  components: {
    TodoItem,
  },
})
// 实例上的属性和方法在类里面定义
export default class Todo extends Vue {
  public isEdittingIndex = 0;
  public list = [
    {
      text: 'Vue全面解读课程',
      complete: false,
    }
  ];
}
</script>

```

## 二、vue-property-decorator

### 可用的装饰器

* `@Prop`
* `@PropSync`
* `@Model`
* `@Watch`
* `@Provide`
* `@Inject`
* `@ProvideReactive`
* `@InjectReactive`
* `@Emit`
* `@Ref`
* `Mixins`
* `@Component` 由vue-class-component提供

### @Prop用法

```tsx
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class YourComponent extends Vue {
    // 写了undefined类型不需要写断言!
    @Prop(Number) readonly propA: number | undefined;
    @Prop({default: 'default value'}) readonly propB!: string
    @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
}
```







### 连接vuex

1. 安装插件：`vuex-class`

2. 使用方法

```tsx
import {State, Mutation, Action, Getter} from 'vuex-class'
export default class Todo extends Vue {
    // 括号填写state中的名字，后面为实例的属性名字
    @State('list') public list
    @Mutation('setIncrement') public setIncrement
}
```

3. 使用计算属性，使用`get`和`set`函数；

```tsx
export default class Todo extends Vue {
    get formatList () {}
    set formatList (val) {}
}
```





## 三、tsx写法

```tsx
import { Component, Prop, Vue, Emit, Watch} from 'vue-property-decorator';
interface Item {
  text: string;
  complete: boolean;
}
@Component({
  name: 'todo-item',
})
// 导出需要继承vue
export default class TodoItems extends Vue {
  // 传入的为当前属性的类型;
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number·) public isEdittingIndex!: number;

  // 监听一个值的变化, 传入需要监听的值
  @Watch('index', {immediate: true, deep: true})
  public indexChange(){}

  // 触发一个事件, 直接传入事件
  @Emit('on-save')
  public save(){}

  // 触发事件的第二种写法
  @Emit()
  public onSave(){} // 事件名需要和派发的名字相同

  // render修饰符使用protected
  protected render() {
    return (<li></li>);
  }
}

```



## 四、框架推荐

建议使用`ant-design-vue`的框架，该框架对`ts`封装处理的特别好，将`ant-design`react的组件封装了一遍；



## 五、给Vue扩展原型属性

* 创建src/types/vue.d.ts

```ts
import Vue from 'vue'
import {Message} from 'ant-design-vue/types/message'
declare module 'vue/types/vue' {
    interface Vue {
        $message: Message
    }
}
```

