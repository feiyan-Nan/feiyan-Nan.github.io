# Mac使用技巧

## Mac常用设置

### 三指拖动

甩开鼠标的必需设置，复制、拖动窗口直接使用三指即可

设置  -> 辅助功能 -> 鼠标与触控版 -> 触控版选项 -> 三指拖动



## 开发环境配置

### 安装brew

使用国内的cdn地址安装

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

后续出现的内容输入 1 和 y 即可；

具体参考文章：[HomebrewCN安装，国内镜像，快得一匹](https://www.jianshu.com/p/1265310832e6)



### 安装git

```bash
brew install git
```

官方网站：https://git-scm.com/download/mac



### 安装items2

官网直接下载：https://iterm2.com/downloads.html

参考网站：[HomebrewCN安装，国内镜像，快得一匹](https://www.jianshu.com/p/1265310832e6)



### 配置items2

#### 安装oh my zsh（国内gitee）

使用ohmyzsh之后，可以配置喜欢的主题，默认的终端在git项目文件夹是不会显示当前分支的，配置之后可以显示分支

```bash
sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"
```

安装完成后，默认Shell的~/.bash_profile文件默认不再加载，替代的是~/.zshrc。如果在~/.bash_profile里配置了某些设置，需要复制到~/.zshrc中



终端输入：vim ~/.zshrc， 这里可以配置主题，可以去github找自己喜欢的主题，主题集地址：https://github.com/ohmyzsh/ohmyzsh/wiki/themes

![img](http://notecdn.hrhe.cn/images/mac%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7_01.png)





#### 配置代码高亮和代码补齐

下面的brew为代码高亮，代码没有输出完，显示的switchhost为代码补齐，只有输过的内容才会补齐

![img](http://notecdn.hrhe.cn/images/mac%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7_02.png)

1. 打开vim ~/.zshrc，编辑最后两行，将**高亮**跟**补齐**开起来，并修改source的文件夹为~/zsh-plugins，配置补齐之后可能不会显示出来，下面的可以将修改提示字符颜色打开

![img](http://notecdn.hrhe.cn/images/mac%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7_03.png)



2. 到~/zsh-plugins克隆下面的内容

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
git clone https://github.com/zsh-users/zsh-autosuggestions.git
```



#### 配置solarized主题

1. 克隆主题

```bash
git clone git://github.com/altercation/solarized.git
```

1. 进入克隆的主题文件夹，打开iterm2-colors-solarized，之后随意单击一个主题即可
2. 进入itemrs2，按 commond + ,  打开设置

1. 依次进入：Profiles - colors - color presets ，选择solarized主题即可

![img](http://notecdn.hrhe.cn/images/mac%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7_04.png)



#### 配置vim solarized主题

vim默认没有主题，任何语言输入没有颜色，配置之后就会有颜色了

1. 打开终端，进入solarized目录
2. 创建文件夹以及复制

```bash
mkdir -p ~/.vim/colors  # 递归创建vim/colors文件夹
cd solarized    # 进入solarized目录
cp vim-colors-solarized/colors/solarized.vim ~/.vim/colors   #复制到该目录
```

1. 写入主题 vim ~/.vimrc

```bash
syntax enable
# set background=light
set background=dark
colorscheme solarized
```



### 配置nvm

nvm用来管理node版本

1. 安装nvm

   ```bash
   export NVM_DIR="$HOME/.nvm" && (
     git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
     cd "$NVM_DIR"
     git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
   ) && \. "$NVM_DIR/nvm.sh"
   ```

3. 配置vim ~/.zshrc，将下面内容添加进去即可

   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   ```

4. 切换源

   ```bash
   export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
   export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
   ```

5. 更新配置文件或者重启终端都可以生效

   ```bash
   # 更新配置文件
   source ~/.zshrc
   ```

   配置文件根据终端不同使用的文件也不同

   bash： `source ~/.bashrc`

   zsh：`source ~/.zshrc`

   ksh：`. ~/.profile`





## 常用快捷键

- `command + ,`   打开软件偏好设置，所有的软件都可以用
- `command + q`    退出软件

- `control + command + q`  锁定屏幕
- `command + option + esc`   打开强制退出窗口

- `control + command + d`  选中单词使用该快捷键可以唤醒默认翻译
- `command + c` 复制

- `command + v` 粘贴
- `command + options + v`  将复制的文件直接剪切

- `command + m`  最小化当前窗口
- `command + option + d`  隐藏扩展坞

- `command + shift + 5` 使用自带的截屏或录屏
- `command + shift + 4`   选择区域屏幕截图

- `command + shift + 3` 截取全屏
- `command + space` 打开搜索

- `command + shift + g`  在坊达窗口输入，可以跳转输入路径



## 软件推荐

- `Rectangle`  桌面吸附软件，brew安装
- `switchhosts`   切换host软件，brew安装，下载比较慢

- `bob`  翻译软件，可以截图翻译，支持配置多种翻译源
- `超级右键`   可以右键直接创建，在appstore下载

- `go2shell`   访达添加终端表情，使用brew安装
- `copyless`  复制插件   appStore下载

- `ishot`   长截图软件  appStore下载
- `movist`   最好的视频播放软件

- `permute`  格式转换
- `downie` 视频下载

- `哈利路亚输入法`   英文单词带提示输入法
- `istat menus`  监控数据神器

- `appCleaner`  软件彻底卸载
- `handshaker`  手机与mac连接神器

- `ezip`   压缩软件
- `keka`   压缩软件

- `QSpace`   访达替代品，支持多窗口
- `gif berwery`  gif录制工具

- `Synergy`   win本和mac放一起时，使用一套键鼠操作

更全的mac推荐软件：[https://github.com/jaywcjlove/awesome-mac/blob/master/README-zh.md](https://github.com/jaywcjlove/awesome-mac/blob/master/README-zh.md)

### 破解软件下载网址

- [MacWk](https://www.macwk.com/)
- [精品Mac应用分享](https://xclient.info/)

- [未来Mac下载](https://mac.orsoon.com/)
- [MacSKY苹果软件园](https://www.macsky.net/)