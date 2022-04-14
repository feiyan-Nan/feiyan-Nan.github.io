# Vue项目Bug记录

## 渲染问题

1. 页面渲染会按照静态的数据，之后再渲染请求到的数据，要注意一下顺序的问题；
2. 遇到问题使用debugger试试渲染顺序的问题；
3. 如果遇到页面没有渲染，可以查看network数据有没有请求成功;
4. 出现list undefined但是页面没有出现问题，是因为使用了下标取值时，还没有值的，给父元素加个v-if，判断数组的长度；
5. 使用ui框架没有渲染出来：vue官方提示说过，在html文件不支持写自闭合标签，因此如果没有渲染出来标签可能是写了自闭合标签；
6. 在data数据里面引入图片不起作用的问题，需要在data函数里面require引入才行；



## Element-ui问题

### 输入框@keyup失效

* 加上.native转为原生的就可以解决了；`@keyup.enter.native=''`；

### **遮罩层档住内容层**

* 在el-dialog标签里添加 `:modal-append-to-body='false'`





## Vue项目打包后页面刷新出现404错误

利用nginx配置一下location就可以了

```js
    # 配置404
    location /
    {
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
```

* 宝塔面板配置路径

  ![image-20200406221655304](https://notecdn.hrhe.cn/images/vue%E9%A1%B9%E7%9B%AEbug%E8%AE%B0%E5%BD%95_01.png)



## Test

