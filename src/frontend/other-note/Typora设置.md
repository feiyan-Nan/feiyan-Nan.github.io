# Typora 常用设置选项



## 设置图片自动上传github

1. 转到文件->偏好设置->图像
2. 按照以下示例，首先选好对应的上传服务，之后再下载更新文件

![image](https://notecdn.hrhe.cn/images/Typora设置-01.png)

3. 打开配置文件；
   * repo输入格式：heny/h-note，前者为github用户名, 后者为目录名
   * path路径为 图片上传的路径，下列表示在当前目录的img目录下

```js
{
  "picBed": {
    "github": {
      "repo": "${github-username/github-repo}",
      "token": "${github-token}",
      "path": "img/",
      "customUrl": "",
      "branch": "master"
    },
    "current": "github",
    "uploader": "github"
  },
  "picgoPlugins": {}
}
```

4. 进入github，按照以下操作
   * 点击头像-->点击settings-->点击Developer settings-->点击Personal  access tokens-->点击create new token-->输入token的名字-->仅勾选repo选项即可；

![image](https://notecdn.hrhe.cn/images/Typora设置-02.png)

之后点击创建，复制给出的token，token刷新之后再也无法看见，注意保存好，最后将token输入到配置文件的对应位置即可；

5. 设置好之后点击测试是否可以上传了，可能会上传失败，可以多试几次

我的最终配置：

```js
{
  "picBed": {
    "github": {
      "repo": "heny/h-note",
      "token": "e53233d92e704ec4529ba1ec37d34dd43f7f96d7",
      "path": "image/",
      "customUrl": "",
      "branch": "master"
    },
    "current": "github",
    "uploader": "github"
  },
  "picgoPlugins": {}
}
```

参考博客：[https://blog.csdn.net/xiaozecheng/article/details/105197126](https://blog.csdn.net/xiaozecheng/article/details/105197126)



## 配置Typora样式文件

1. 进入文件-->偏好设置-->外观-->打开主题文件夹
2. 创建base.user.css文件
3. 在Typora工具中，按shift+f12打开开发者工具
4. 使用箭头选中元素，复制对应的类名，修改样式即可



## 配置自动上传到七牛云

[typora+picgo+七牛云实现图片上传](https://blog.csdn.net/weimeibuqieryu/article/details/105315807)

