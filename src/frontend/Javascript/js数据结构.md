# js数据结构

**什么是数据结构**：数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关；



## 栈（Stack）

**什么是栈**：栈是一种高效的数据结构（后进先出(LIFO)原则的有序集合），因为数据只能在栈顶添加或删除，所以这样的操作很快，而且容易实现。

场景：编程语言中的编译器、计算机内存存储变量和方法调用，浏览器的后退功能等等；

Stack包含以下方法

* **push**(e)：将新添加的元素添加至堆栈的顶部
* **pop**()：删除栈顶的元素，同时返回已删除的元素
* **peek**()：返回堆栈的顶部元素
* **isEmpty**()：判断堆栈是否为空，如果为空返回true
* **clear**()： 清空堆栈所有的元素
* **size**()： 返回堆栈元素的数量，类似数组的长度
* **toArray**()：以数组的形式返回堆栈的元素
* **toString**()： 以字符串的形式输出堆栈的内容；



由于数组是有序数组，如果存储大数据内容过多的话，会消耗更多的计算机内存，算法的复杂度就会增加，为了解决此类问题，建议使用对象的形式；

```js
export default class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    clear() {
        /* while (!this.isEmpty()) {
            this.pop();
          } */
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
```

以上方法在Stack类中声明的items和count属性是不受保护的，可以使用symbol数据类型作为对象的属性具有私有性的特点，改变以上属性；

```js
const _items = Symbol('stack')
class Stack{
    constructor(){this[_items]=[]}
    push(element){this[_items].push(element)}
    pop(){return this[_items].pop()}
    peek(){return this[_items][this[_items].length-1]}
    isEmpty(){return this[_items].length === 0}
    size(){return this[_items].length}
    clear(){this[_items] = []}
    toString(){return this[_items].toString()}
}
```

实际应用举例
实现一个十进制转换二进制的功能，在与计算机进行通信必须使用二进制的功能，如果需要转换2进制需要将转换的数字除以2，再将结果除以2，如此循环，直到结果为0为止；

```js
function decimalToBinary(decNumber){
    const remStack = new Stack()
    let number = decNumber
    let rem;
    let binaryString = ''
    while(number > 0){
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number/2)
    }
    while(!remStack.isEmpty()){   // 如果不为空则会一直循环;
        binaryString += remStack.pop().toString()   
        // 将数取出来并添加进去;
    }
    return binaryString
}
```



## 链表（Linked List）

链表是一个线性结构，同时也是一个天然的递归结构，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理，但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大；

为何要使用链表：因为数组有缺陷，增删元素时往往需要移动元素，而链表在内存中的放置并不是连续的，元素通过next属性指向下个元素，所以链表增删元素，不需要移动元素，只需要更改next的指向即可；

使用场景：在javascript中，最重要的链：作用域链和原型链；

链表的创建：

首先创建一个用来保存链表里的数据

```js
/**
* Node用来表示节点
* element 用来保存节点上的数据;
* next 用来保存指向下一个节点的链接;
*/
function Node(element){ 
    this.element = element;
    this.next = null 
}
```

链表的方法：

* `append`(element)：向链表尾部添加一个新的元素
* `insert`(position,element)：向链表特定位置插入元素
* `remove`(element)： 从链表移除一项
* `indexOf`(element)： 返回链表中某元素的索引，如果没有返回-1
* `removeAt`(position)：从特定位置移除一项
* `isEmpty`()： 判断链表是否为空，如果为空返回true
* `size`()： 返回链表包含的元素个数
* `toString`()：重写继承Object类的tostring方法，因为我们使用了Node类；

