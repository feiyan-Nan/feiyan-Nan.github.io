# node-10 websocket
## 一、http
HTTP无状态的，服务器不能发送请求给客户端，需要客户端发送请求之后服务端返回响应给客户端，之后会直接断开，不能实现实时推送技术；

现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源


## 二、websocket
1. websocket：双向通讯，客户端可以给服务端，服务端可以给客户端发送消息；
2. 下载第三方包：npm i socket.io到项目目录；



websocket使用场景

1. 社交订阅
2. 多玩家游戏
3. 协同合作
4. 点击流数据
5. 股票基金等实时报价
6. 体育实况更新
7. 基于位置的应用
8. 在线教育
9. 多媒体聊天



## 三、搭建websocket服务器；

```js
const express = require('express');
let app = express();

//创建websocket服务
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//监听与客户端的连接事件;
io.on('connection',socket=>{  //这个socket是前端传入的变量名;
    console.log('服务端连接成功');
});  //io连接事件可以随意放置; 监听到事件则会给出应答;

//这里要用server去监听端口，app.listen监听不能找到socket.io文件；
server.listen(3000);
```
1. websocket连接成功之后，会自动创建一个隐藏的js文件，路径：/socket.io/socket.io.js；

2. 在静态页面里，创建script标签引入该js文件，引入之后有一个io对象，可以调用一下io对象：let socket = io()；就可以使用socket.emit和socket.on了；

建立的客户端，服务端能记住每个连接成功的客户端，哪个浏览器发送的消息，哪个浏览器接收；



## 四、互发消息
1. `socket.emit()`；只让自己收到消息；
2. `socket.broadcast.emit()`；除了自己其他人都会收到消息，当用户退出最有用，因为不需要给退出的用户得知
3. `io.emit()`；都会收到消息；

第一个参数是方法名，第二个参数是接收到的消息

```js
//前端发送
socket.emit('fasong','hahaha');

//后端接收
socket.on('fasong',data=>{
    socket.emit('huida',data);  //将数据再发给前台;
})

//前端接收
socket.on('huida',data=>{
    console.log(data); //接收到自己发出的消息;
})
```
### 进入一个房间和离开一个房间
```js
io.on('connection', socket => {
    console.log('有人上线了')
    socket.on('subscribe', function(data) {
        // 加入指定的房间
        socket.join(data.room)
        // 用emit来给事件
        io.to(data.room).emit('some event')
        // 进入多个房间
        soket.to('room1').to('room2').emit('hello')
        // or
        socket.to(['room1', 'room2']).emit('hello')
    })
    
    socket.on('unsubscribe', function(data) {
        // 离开一个房间
        soket.leave(data.room[,callback])
    })
})
```

### 在房间内发送消息
```js
// 不包括发送者
soket.broadcast.to('roomA').emit('message','大家好')
// 包括发送者
io.sockets.in('roomA').emit('message','大家好')
```
* 给指定用户发送消息
```js
io.sockets.socket(socketId).emit('message','唯有你')
```

### 离开服务器

```js
io.on('connection', (socket) => {
    socket.on('disconnection', reason => {console.log('有人离开了', reason)} )
})
```



### 如何set和get    socket属性

```js
io.sockets.on('connection', function (socket) {
    // 监听设置nickname事件
    socket.on('set nickname', name => {
        // 将socket的nickname属性设置为传入参数的name
        socket.set('nickname', name, () => {
            socket.emit('ready')
        })
    })
    // 监听获取nickname事件
    socket.on('get nickname', () => {
        socket.get('nickname', (err,name) => {
            console.log('获取用户', name)
        })
    })
})
```

官方文档：[https://socket.io/docs/v4/server-api/#socket-join-room](https://socket.io/docs/v4/server-api/#socket-join-room)



### 官方服务器Socket的demo

```js
import express from 'express';
import socket from 'socket.io';
const server = require('http').createServer(app);
const io = socket(server);

server.listen(port);

io.on('connection', socket => {
  // 处理接收的新消息
  socket.on('new message', data => {
    // 通知其他客户端
    socket.broadcast.emit('new message', {
      id: v4(),
      username: socket.username,
      userId: socket.userId,
      message: data.message,
      type: data.type,
    });
  });
});
```



## 五、聊天室

```js
//前端发送
socket.emit('fasong','您好呀server');
socket.emit('/user/list', list=>{})
socket.emit('user/modify', 'hny', result => {}) // 多个参数发送方式

//后端接收
socket.on('fasong', msg => {
    io.emit('huida', msg)
})
socket.on('user/modify', (name, callback)=>{ // 接收多个参数方式
    user.name = name
    callback('修改成功')
})
socket.on('/user/list', callback => {
    callback('success')
})

//前端展示
socket.on('huida',msg=>{
    document.write(msg+'<br>');
})
```



## 六、react连接socket.io

```jsx
import React from 'react'
import IO from 'socket.io-client'
const Home = () => {
    const socketConnect = () => {
        let socket = IO("ws://localhost:3006", {
            transports: ['websocket']
        })
        
        // 成功时
        socket.on('connect', () => {
            console.log(socket.connected)
        })
        
        // 重连接时出错
        socket.on('reconnect_error', attemptNumber => {
            console.log(attemptNumber)
        })
        
        // 不间断尝试重连接
        socket.on('reconnect_attempt', () => {
            socket.transport = ['websocket', 'polling', 'flash']
        })
        
        // 连接存活验证
        socket.on('ping', error => {
            console.log('ping status')
        })
        
        // 报错时
        socket.on('connect_error', error => {
            console.log(error)
        })
    }
    useEffect(() => {
        socketConnect();
    }, [])
}
socket.close() // 页面关闭时记得断开连接
```



## 七、添加在线人数

```js
// 在线用户存储对象
let onlineUsers = {}
let i = 0
module.exports = function (io) {
    io.on('connection', socket => {
        // 有人上线了
        socket.name = ++i
        onlineUsers[socket.name] = socket
        
        socket.on('disconnect', () => {
            // 有人离开了
            delete onlineUsers[socket.name]
        })

        socket.on('/user/list', callback => {
            callback(Object.keys(onlineUsers).length)
        })

        // 修改昵称
        socket.on('/user/modify', nickName => {
            delete onlineUsers[socket.name]
            socket.name = nickName
            onlineUsers[nickName] = socket
            socket.emit(`修改昵称为：${msg}`)
        })
    })
}
```
