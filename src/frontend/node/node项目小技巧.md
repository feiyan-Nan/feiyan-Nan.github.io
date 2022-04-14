# node项目小技巧

## 其他小方法
1. 向后台传参，可以通过点击按钮，加一个函数，调用这个函数，函数里面调用ajax；
2. 可以使用fileter调用里面的数据，过滤掉其他的；
3. json文件写入需要通过json.stringify()之后写入；
4. 两个相同的路由（一个访问页面，一个调接口），可以再调接口那个传入一个参数，判断是否是传入参数的这个路由，实现两个页面；
5. 后端思想，需要先显示，后修改；
显示：

（1）在点击第一个页面时，将id通过查询字符串的方式传入到后台去（后台的接收地址需要写path路径来接收）；

（2）先将页面用.toString()读取出来，之后再用replace替换掉value值；或使用ejs模板；

（3）res.send输入到替换掉后的html内容；模板使用res.render()；

6. 对于input页面不需要让用户看见或者填写的参数，使用type='hidden'，写入到value里面，这样提交到后台也能看见；
7. 前端调用ajax的时候，可以返回一个对象，对象里面填写flag用于判断；
8. 判断session-id是否存在，可以让sessionid为undefined的时候等于空，就好判断了，就可以给sessionid置空了；

9. http是无状态的（点击跳转没有记忆能力）；
10. 出错时，可以查看页面返回的响应是什么，f12--Network--点击clear按钮(一个斜杠)；之后点击出错的地方，就可以直接在network查看返回的是什么了；
11. 点击ajax给后端给前端传入js事件
```js
//前端  id传入到后台了;与后端交互
    //因为后端传过来的参数是字符串，所以需要eval一下;
$.get(`/user/delete/${id}`,data=>{eval(data)});

//后端 将事件弄到前端去，前端在成功时输出;
if(err) return res.send(`alert('删除失败${err}')`);
res.send(`alert('删除成功');location.reload();`)
```

12. 向前端渲染js

    ```js
    res.send('<script>alert('');location.href="";</script>')
    ```

    

## 前端捕获请求数据404问题

```js
isRunUrl = (url) => {
return new Promise(function (resolve, reject) {
  var _doc = document.getElementsByTagName('head')[0];
  var dom = document.createElement('script');
  dom.setAttribute('type', 'text/javascript');
  dom.setAttribute('src', url);
  _doc.appendChild(dom);
  if (!/*@cc_on!@*/0) { //if not IE
    dom.onload = function () {
      document.head.removeChild(dom);
      resolve();
    }
  } else {
    dom.onreadystatechange = function () {
      if (dom.readyState === 'loaded' || dom.readyState === 'complete') {
        document.head.removeChild(dom);
        resolve();
      }
    }
  }
  dom.onerror = reject;
});
}

isRunUrl("测试地址").then(function(data){
    //处理resolve的代码
    console.log("Promise被置为resolve", data);;
},function(data){
    //处理reject的代码
    console .log("程序被置为了reject",data);
})
```



## 数据统一返回状态

创建一个js文件，专门导出，提供返回接口使用
```js
module.exports = {
  success: (content, message = "") => {
    return {
      status: "success",
      success: true,
      content: content,
      message: message
    }
  },
  fail: (message = "", type = "") => {
    return {
      status: "fail",
      fail: true,
      type: type,
      message: message
    }
  }
}
```

