# hexo搭建个人博客

参考教程：[Hexo+github 搭建博客 (超级详细版，精细入微)](https://yafine-blog.cn/posts/4ab2.html)

## 初始化环境

```bash
npm install hexo-cli -g
hexo init blog
cd blog
npm install
```

### 常用命令

* `hexo s`：本地开发
* `hexo clean`：清空打包文件
* `hexo g`：打包



## 将本地博客发布到github

1. 安装插件

```js
npm install hexo-deployer-git -S
```

2. 修改.config.yml

```yml
type: git
repo: 复制github拉取地址
branch: master
```

