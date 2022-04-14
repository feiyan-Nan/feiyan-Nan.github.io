# js-09 DOM
## 一、DOM
`DOM (document object model)`  文档对象模型，是W3C组织推荐的处理可扩展标记语言的标准编程接口；`node`（节点）；

元素节点（标签） 文本节点（换行或者文字）  注释节点（注释）



## 二、获取子节点：

1. `父元素.children`；(常用)（非标准属性）获取只有元素节点；类数组
2. `父元素.childNodes`；（标准属性）所有子节点，包括文本、空格、标签、注释；

类数组：有长度，可以通过下标获取元素，但是不能使用数组的方法；



## 三、节点类型：

`nodeType`   `nodeName`   `nodeValue`；

1. `nodeType`：返回1-12的数字，分别表示不同的节点；

    1：标签节点；2：属性节点；3：文本节点；   8：注释节点； 9：文档节点；

2. `nodeName`：返回节点的名字；

   文本：#text；注释：#comment；标签：大写的标签名；

3. `nodeValue`：认为只有文本才有内容，元素的节点为空null；获取的标签的文本节点使用innerHTML修改会将标签也替换掉，这个可以只修改文本内容；

      `li.firstChild.nodeValue`；才能获取到li里面的文本内容；

      `nodeValue = "新内容"`；   可以设置新内容；



## 四、元素的父元素；

1. `parentNode`；直接父元素，`parentNode.parentNode`；父元素的父元素；（常用）
2. `offsetParent`；返回离元素最近的有定位的父级，如果没有定位的父级，则返回body；



## 五、其他节点(了解)；
父元素的子节点；

1. `firstChild`；父元素的第一个子节点；
2. `firstElementChild`；父元素的第一个子元素节点；
3. `lastChild`；父元素的最后一个子节点；
4. `lastElementChild`；父元素的最后一个子元素节点；
    以上不常用，推荐做法：

  第一个：`li[0]`，

  最后一个：`li[li.length-1]`;


  兄弟元素节点；

5. `previousSibling`；上一个兄弟子节点；（包括文本注释）
6. `previousElementSibling`；上一个兄弟元素节点；
7. `nextSibling`；下一个兄弟子节点；
8. `nextElementSibling`；下一个兄弟元素节点；

拓展：带Element的 标准浏览器支持的，返回元素节点，不带的是ie8及以下支持的，可能返回文本节点；





## 六、在IE8及以下中兼容问题；
1. `children`：还可以获取到注释；
2. `childNodes`：不能获取到换行；
3. `firstChild`：不能获取到换行；
4. `firstElementChild`：带Element的不能识别，返回值undefined；

解决兼容办法：

```js
var first = ul.firstElementchild ? ul.firstChild : firstElementChild;
```



## 七、属性操作(常用)；
1. 获取：`getAttribute(属性名)`；属性名用在ie里面需要写className；

2. 设置：`setAttribute(属性名,属性值)`；直接是修改hdml标签里面的；

3. 删除：`removeAttribute(属性名)`；直接删除属性；括号里面需要加引号；

4. 检查：`hasAttribute(属性名)`，检查是否有指定属性名

特点：可以操作元素原生的属性，也可以操作自定义属性，并且在html上可见没有兼容性问题；


以下不能操作自定义属性

点的形式：

box.title = "abc";



## 八、类名操作
1. `元素.classList`；兼容ie11+；
2. 可用属性：length  返回类名的长度；
3. 方法：

（1）`add(class1,class2...)`   添加一个或多个类名，如果存在则不会添加

（2）`contains(class)`    返回布尔值，判断元素是否有该类名；

（3）`item(index)`      返回元素索引值对应的类名；

（4）`remove(class1,class2...)`        移除类名；

（5）`toggle(class,[true|false])`；    切换类名，第二个参数可选，强制移除false或添加true；




## 九、创建添加
1. 创建元素节点：`document.createElement("新标签")`；创建的想要放进去，需要使用添加

2. 创建文本节点：`document.createTextNode("文本内容")`；不常用,使用innerHTML；

   获取节点内容：元素.textContent

   设置节点内容：元素.textContent = ''；

3. 添加文本节点：`appendChild(创建的标签)`；在结束标签之前添加；只能放到一个标签里，不能重复放；

    可以直接放到body里面： 获取body标签：body = document.body；

4. 添加到指定元素前面：`父元素.insertBefore（new,old）`；new新标签，old指定标签；

    在IE9及以上，如果第二个参数不存在，则以appendChild添加，在IE8及以下，则报错；

```js
// 解决兼容问题：
if(ul.children[0]){
    ul.insertBefore()
}else{
    ul.appendChild(i)
}；
```

js原生是没有insertAfter的，需要手动实现

```js
// 插入到节点之后
function insertAfter(newDom, oldDom) {
  const parentDom = oldDom.parentNode
  // 判断是否是最后一个节点
  if(parentDom.lastChild === oldDom) {
    parentDom.appendChild(newDom)
  } else {
  	parentDom.insertBefore(newDom, oldDom.nextElementSibling)    
  }
}
```



技巧：

.link可以快速创建a标签



## 十、删除替换克隆

1. 删除：`remove()`；谁调用的就删除谁，ie8及以下不兼容；

		`父元素.removeChild(子元素)`；将子元素从父元素中删除；
    
2. 替换：`父元素.replaceChild(新标签，旧标签)`；
3. 克隆：`元素.cloneNode()`；true，内容标签一起克隆，false,克隆标签；
4. 包含：`父元素.contains(子元素)`



## 十一、insertAdjacentHTML

1. `element.insertAdjacentHTML(position, text)`，将text解析为html或xml，并将结果节点插入到DOM树中的指定位置，该方法比直接操作innerHTML操作更快

2. position是相对于元素的位置，必须是以下字符串之一

	* `beforebegin`：元素自身的前面。

	* `afterbegin`：插入元素内部的第一个子节点之前。

	* `beforeend`：插入元素内部的最后一个子节点之后。

	* `afterend`：元素自身的后面。


```js
<!-- beforebegin -->
<div>
  <!-- afterbegin -->
  <p>Hello World</p>
  <!-- beforeend -->
</div>
<!-- afterend -->
```
示例：
```js
var list = document.querySelector('ul');
list.insertAdjacentHTML('afterbegin', '<li id="first-item">First</li>');
```



## 十二、元素的其他获取方式；

1. `querySelector(css选择器)`；选择第一个直接是元素；

2. `querySelectorAll(css选择器)`；选择所有的，结果是类数组

3. `元素.closest(css选择器)`，返回当前节点最近匹配选择符的父元素，如果选择到自己相同的元素，则返回自己




## 十三、表格的获取方式；

1. 获取表头：`table.tHead`；

2. 获取表尾：`table.tFoot`；

3. 获取主体：`table.tBodies[0]`；类数组，需要加下标；

4. 获取行：`table.rows`；获取table下所有的tr；

    `table.tBodies`；获取主体下的所有的tr；

5. 获取单元格：`table.rows[0].cells`；需要通过行来获取td；




## 十四、表单的获取方式

### 表单获取属性：

通过form.name名 直接获取到某个标签；



### 表单事件：
`form.onsubmit`；点击提交按钮事件时触发；

`form.onreset`；表单重置事件；

`form.user.onfocus`；输入框获得焦点时触发；

`form.user.onblur`；输入框失去焦点时触发；提示输入完验证是否合格；

`form.user.onchange`；当按下回车或失焦时触发，且内容与上次按下回车或失焦不同；

`form.user.oninput`： 用户输入时触发；




### 表单方法：
`return false`；阻止表单提交，判断是否有内容，没有则阻止提交；

`form.submit()`；调用提交方法；常用于button；

`form.reset()`；调用重置方法；

`form.user.focus()`；输入框获得焦点；

`form.user.blur()`；输入框失去焦点；

`form.user.select()`；直接选中输入框的内容并获得焦点；


当输入框改动时，执行这个函数，每按下一次都会执行；

`input.oninput = function(){}`，比onkeyup先触发；



### 焦点事件
`focus`：获得焦点，不支持冒泡；

`blur`：失去焦点，不支持冒泡

`focusin`：获得焦点，支持冒泡；

`focusout`：失去焦点，支持冒泡；

`input.focus()`   会自动滚动到获取焦点的地方，如果不希望滚动到获取焦点的地方，可以使用以下的代码

```js
// 下面代码ie不兼容
ipt.focus({
    preventScroll: true
})
```



## 高频面试题

● DOM 怎样添加、移除、移动、复制、创建和查找节点




