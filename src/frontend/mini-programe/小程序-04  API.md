# 小程序-04  API
## 一、路由跳转
1. wx.redirectTo(object)：重定向，对tabBar不管用；
2. wx.navigateTo() 打开新页面，保留当前页面（有返回按钮），对tabBar不管用；
3. wx.navigateBack()；返回；不需要写参数；
4. wx.switchTab()；tab切换，只能切换tabBar页面；
5. wx.reLaunch()   关闭所有页面，重定向，可以打开任意页面

属性：url ，路径填写pages下的组件；记得带上/；如：/pages/info/info；

events，页面通过接口，当数据过多时，可以使用；

查看官网地址：[https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)



getCurrentPages()  获取当前页面路由；

注意：调用页面路由带的参数可以在onLoad中获取；



## 二、界面
1. wx.showToast({})   显示消息提示框，会自动消失
* title： 提示的内容
* icon： 图标
* image： 自定义图标的本地路径
* duration： 提示的延迟时间


2. showLoading({})    显示loading提示框，需调用wx.hideLoading()才能关闭；

3. wx.showsModal({})   显示模态对话框  有确定取消按钮
* title： 提示标题
* content： 提示内容
* success： 接口调用成功的回调



4. wx.showActionSheet   显示操作菜单
* itemList： 数组或字符串，按钮的文字数组，最多6个；
* itemColor： 文字颜色
* success：成功的回调；res返回用户点击的按钮序号；
* fail： 用户点击取消触发；




## 三、数据缓存
1. 设置

wx.setStorage({})  设置缓存   以key，data存取；success为成功的回调；

wx.setStoargeSync(key,value)    同步设置  如果错误使用try,catch；



2. 获取

wx.getStorage({})  获取缓存  没有设置好也会调用，调用key获取

wx.getStoargeSync()    同步获取



3. 移除

wx.removeStorage({})  传入key，success为成功回调；

wx.removeStorageSync(key)    从本地缓存移除指定key



4. 清除

wx.clearStorageSync()  同步清除缓存

wx.clearStorage();



## 四、请求网络

1. wx.request()    微信请求需要开启详情里面的不校验开启，上线需要在后台开发设置添加合法域名，线上请求地址必须是https；
* url： 请求地址；
* data： 一个对象，将需要传入的参数写入，也可以直接在url后面填写
* success： 请求成功回调，注意this指向，可以在外面保留一下；
* fail： 请求失败参数
* method： get/post



技巧：减少请求的次数

（1）将请求的数据存放在Storage里面，做判断，将Storage赋为一个空，之后判断storage是否为空，如果为空则获取数据，并存入数据，如果不为空，则不获取；
```js
let arr = wx.getStorage() || []
if(arr){
    wx.request(....)
} else {}
```
（2）新建一个目录，放js文件，将json数据复制到一个变量上，将这个变量导出；之后在需要的目录下引入该文件；引入必须填写相对路径；



## 五、微信分享

1. 链接：[https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
