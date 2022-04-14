# jq-01 什么是jQuery
## 一、什么是jQuery
​	jQuery 是一个优秀的 JavaScript 库，是一个由 John Resig 创建于 2006 年 1 月的开源项目。现在的 jQuery 团队主要包括核心库、UI、插件和 jQuery Mobile 等开发人员以及推广和网站设计、维护人员。

​    jQuery 凭借简洁的语法和跨平台的兼容性，极大地简化了 JavaScript 开发人员遍历HTML 文档、操作DOM、处理事件、执行动画和开发 ajax 的操作。总之，无论是网页设计师、后台开发者、业余爱好者还是项目管理者，也无论是 JavaScript 初学者还是 JavaScript高手，都有足够多的理由去学习 jQuery。



## 二、jQuery的优点

jQuery强调的理念是写得少，做得多（write less, do more），jQuery独特的选择器、链式操作、事件处理机制和封装完善的 ajax 都是其他库望尘莫及的。概括起来，jQuery有以下优势。



1. 轻量级。
2. 强大的选择器。
3. 出色的 DOM 操作的封装。
4. 可靠的事件处理机制。
5. 完善的 ajax。
6. 不污染顶级变量。
7. 出色的浏览器兼容性。
8. 链式操作方式。
9. 隐式迭代。
10. 行为层和结构层分离。
11. 丰富的插件支持。
12. 完善的文档。
13. 开源。



## 三、下载jQuery

1. 去官方网站下载：[http://jquery.com/](http://jquery.com/)
2. 去 CDN 下载：[https://www.bootcdn.cn/jquery/](https://www.bootcdn.cn/jquery/)



## 四、jQuery 库类型说明

jQuery库的类型分为两种，分别是生产版本（最小化和压缩版）和开发版（未压缩版），



它们的区别是：

​	开发版：完整无压缩版本，主要用于测试、学习、和开发；

​	生产版：经过工具压缩或经过服务器开启 Gzip 压缩，主要应用于产品和项目；

![image](https://notecdn.hrhe.cn/images/jq-01_什么是jQuery-01.png)


## 五、jQuery版本：
jQuery 库分为 1.x 的版本和 2.x、3.x 的版本，1.x 的版本兼容 IE678，而 2.x、3.x的版本不兼容 IE678。

国内多数网站还在使用1.x的版本

## 六、引入方式
jQuery 不需要安装，他就是一个 js 文件，把下载的 jQuery 放到一个公共的位置，想要在某个页面上使用 jQuery 时，只需要在相关的 HTML 文档中引入该库文件即可。

一般可以放在 head 标签中或者 `</body>` 标签前面，但是一定要注意，要在其它 js 文件前面引入 jQuery 库。

当我们需要使用 jQuery 的时候，会在 HTML 文档中引入 jquery.js, 可以通过以下两种方式引入：



● CDN 引入（CDN 的全称是 Content Delivery Network，即内容分发网络）
● 本地 jQuery 文件引入
```html
<!-- 方式一：引入 CDN 服务 -->
<script src=”https://cdn.bootcss.com/jquery/1.7.1/jquery.min.js”></script>
<!-- 方式二：引用本地文件 -->
<!-- <script src=”js/jquery.min.js”></script> -->
```
注：引入jquery必须放在所有其他script标签之前；

jquery中2.0以上的版本不兼容ie6,7,8；



## 七、jQuery与$的关系

$ 就是 jQuery 的一个简写形式，
$(‘#f00’) 和 jQuery(‘#foo’) 是等价的，$.ajax 和 jQuery.ajax 是等价的。



## 八、页面加载

1. `$(document).ready(function(){})`;
2. `$(function(){})`；简写；

和原生文档加载完的区别：

①原生：必须把所有的元素都加载完（包括图片），并且只能写一个onload；

②jquery：只把页面的结构加载完，读取到标签就可以了，可以写多个；

3. $(document).ready() 同 window.onload 的区别：

        1. 执行时机不同，window.onload 必须等待网页中所有的内容加载完毕后（包括图片）才能执行，而 $(document).ready() 是网页中所有 DOM 结构绘制完毕就执行，可能 DOM 元素关联的东西并没有加载完。
        2. window.onload 只能写一个 , 多个时后面的会覆盖掉前面的，而 $(document).ready() 可以写多个，不会覆盖。
        3. window.onload没有简写形式，而$(document).ready()可以简写成$(function (){})。



## 九、元素

1. dom元素：原生获取的就是dom元素（[HTMLCollection]）；
2. jquery元素：k.fn.init的元素就是jquery元素（k.fn.init）;



## 十、转换元素

使用jquery元素不能使用原生的方法，不能混着用，可以转换元素使用；

1. $(li)，将使用dom获取li变量的元素转换为jquery的元素；
2. jquery转dom：①$("li").get(下标)，②$("li")[下标]
转dom加下标，转jquery加$；



## 十一、和其他框架冲突
jQuery使用$符号的方式，还可以直接使用jQuery；
1. 让渡：jQuery.noConflict();   
    将$符让给其他的库使用，自己还可以使用jQuery来代替$；
    如果jQuery库还想使用$符,可以使用闭包，将jQuery作为实参，$作为形参；

```js
(function($){
    $("li");
})(jQuery);    使用$作为形参使用；
```
2. 改变：`var j = jQuery.noConflict()`；声明任意变量来替换$符；改变之后不能再使用$；
