# React面试

1. [https://zhuanlan.zhihu.com/p/143570474](https://zhuanlan.zhihu.com/p/143570474)



## fiber

由于render函数递归执行，如果项目变得庞大后，会有卡顿，`requestIdleCallback`可以利用浏览器的业余时间，把任务分成一个个的小任务，然后利用浏览器空闲时间来做diff，如果当前有任务来了，比如用户的点击或者动画，会先执行，然后空闲后，回到当前任务继续执行未完成的任务；



### fiber数据结构

fiber遍历过程：自上而下，自左至右；

先找子元素 -> 再找兄弟元素 -> 再找父元素；



## redux面试相关

### redux由以下组件组成：

Action：这是一个用来描述发生了什么事情的对象；

Reducer：这是一个确定状态将如何变化的地方

Store：整个程序的状态/对象树保存在Store中；

### 解释reducer的作用

reducers是纯函数，它规定应用程序的状态怎样因响应Action而改变，reducers通过接受先前的状态和action来工作，然后它返回一个新的状态，它根据操作的类型确定需要执行哪种更新，然后返回新的值，如果不需要完成任务，它会返回原来的状态；

### Store在redux中的意义是什么

Store是一个javascript对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器，应用程序的整个状态/对象树保存在单一存储中，因此，redux非常简单且是可预测的，我们可以将中间件传递到store来处理数据，并记录改变存储状态的各种操作，所有操作都通过reducer返回一个新状态；

### Redux与Flux有何不同？

1. Flux的Store包含状态和更改逻辑，Redux中Store和更改逻辑是分开的；
2. flux中有多个store，redux只有一个store；
3. flux中所有store都互不影响且是平级的，redux带有分层reducer的单一store；
4. flux有单一调度器，redux没有调度器的概念；
5. flux中react组件订阅store，

