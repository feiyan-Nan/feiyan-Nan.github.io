# linux常用

## 基本操作

* 清空当前屏幕：`clear`
* 直到多少秒：`sleep 60`
* 查看历史命令：`history`，
  * 使用`!n`执行第n条命令，
  * `!!`执行上一条命令
  * `!字串` 执行上一条该字串开头的命令



## linux修改中文系统

1. locale -a查看是否有zh_CN.UTF-8，如果有则进行下一步，没有自行百度安装

2. 使用`vim`打开`locale.conf`文件

   `vim /etc/locale.conf`

3. 编辑文件后保存退出

   ```bash
   LANG="zh_CN.UTF-8" # en_US.UTF-8为英文
   ```

4. 最后重启 `reboot`



## 安装docker并部署nginx

使用docker部署nginx的好处：nginx可以随便创建，不用担心配置出错

### 安装docker

1. 修改镜像源为阿里源：`vim /etc/apt/sources.list`

   ```bash
   deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
   deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
   deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
   deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
   deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
   ```

2. 更新软件索引：

   ```bash
   apt-get update
   ```

3. 安装依赖

   ```bash
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

4. 安装GPG证书

   ```bash
   curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
   ```

5. 添加docker软件信息

   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
   ```

6. 更新并安装docker-ce

   ```bash
   sudo apt-get  update
   sudo apt-get  install docker-ce
   ```

7. 检测安装是否成功：`docker version`

### 部署nginx

1. 下载镜像：`docker pull nginx`

2. 查看本地镜像：`docker images`

3. 运行镜像并复制默认文件

   ```bash
   docker run --name mynginx -d nginx
   # 创建主机挂载配置文件
   mkdir -p ~/docker-nginx/{conf,conf.d,html,logs}
   # 复制默认配置
   docker cp mynginx:/etc/nginx/nginx.conf ~/docker-nginx/conf/nginx.conf
   docker cp mynginx:/etc/nginx/conf.d/default.conf ~/docker-nginx/conf.d/default.conf
   docker cp mynginx:/usr/share/nginx/html/index.html ~/docker-nginx/html/index.html
   ```

   * usr/share/nginx/html/index.html    默认的入口文件，html文件可以放到html这个目录；
   * logs  查看日志的文件，以后nginx错误日志可以直接在这里查看
   * conf.d  配置conf文件的地方

4. 停止删除容器：

   ```bash
   docker stop mynginx
   docker rm -f mynginx
   ```

5. 生成启动文件，记得首先切换到docker-nginx目录（复制配置的目录）

   ```bash
   cat <<EOF > start.sh
   #!/bin/bash
   NGINX_DIR=`pwd`
   docker stop mynginx
   docker rm mynginx
   docker run -d \\
       --restart always \\
       -p 80:80 \\
       --name mynginx \\
       -v \${NGINX_DIR}/html:/usr/share/nginx/html \\
       -v \${NGINX_DIR}/conf/nginx.conf:/etc/nginx/nginx.conf \\
       -v \${NGINX_DIR}/conf.d:/etc/nginx/conf.d \\
       -v \${NGINX_DIR}/logs:/var/log/nginx \\
       nginx
   EOF
   ```

   如果需要映射其他文件，可以直接在-v后面添加参数即可

   * `-d`  后台运行容器
   * `--name` 指定容器名
   * `-p ` 指定服务运行端口
   * `-v` 映射目录或文件

6. 启动nginx：`sh start.sh`



## docker常用命令

* `docker ps` 查看docker容器列表
* `docker-compose up -d jenkins`  更新jenkins的配置



## ranger

> ranger 一个文件管理器，终端最好用的文件管理器，可以直接进github了解
>
> github：[https://github.com/ranger/ranger](https://github.com/ranger/ranger)

### 安装ranger

1. 更新存储库：`sudo apt-get update -y`

2. 安装make：`sudo apt-get install make`

3. 下载ranger资源库：

   ```bash
   git clone https://github.com/hut/ranger.git
   ```

4. 安装ranger，安装之后直接运行`ranger`即可查看

   ```bash
   cd ranger
   sudo make install
   ranger
   ```

5. 复制ranger配置文件

   ```bash
   ranger --copy-config=all
   ```

   复制之后去`~/.config/ranger`查看即可

### ranger快捷键

* ranger操作
  * q    退出
  * shift + s  进入当前目录(会退出当前ranger)
  * zh     显示隐藏文件
  * zp     打开文件预览
  * zP     打开目录预览

* 文件操作

  * cw  重命名文件
  * A   在当前名称基础上重命名
  * yy   复制文件
  * dd  剪切文件
  * pp   粘贴文件
  * dD  删除文件

* 文件选择

  * space  多选
  * v    反选/全选
  * /  搜索(tab切换下一个)
  * du   显示大小

* 书签

  * m    新建书签    (按下之后随便按一个键保留当前书签名字)
  * `     打开书签
  * um    删除书签  (之后按书签名字即可)

* 标签

  * gn / ctrl + n   新建标签
  * tab    切换标签
  * gc     关闭标签

* 文件排序

  * on     根据文件名
  * oc      根据改变时间
  * os      根据文件大小
  * ot       根据后缀名
  * oa       根据访问时间
  * om      根据修改进行排序

  






## 本地直接连接linux

```bash
ssh root@39.107.82.176
```



## 使用xshell上传网站

1. 安装：`yum install lrzsz -y`
2. 检查安装是否完成：`rpm -qa | grep lrzsz`
3. 基本操作：

* 上传：`rz` 直接弹出上传窗口
* 下载：`sz` 直接弹出下载窗口



## 本地cmd直接操作文件上传

```bash
# 下载文件
scp build.gz root@107.172.27.254:/home/test.txt
# 上传文件
scp test.txt root@107.172.27.254:/home    
# 下载目录
scp -r dist root@107.172.27.254:/home/test   
# 上传目录
scp -r dist root@107.172.27.254:/home    
# 上传当前目录所有文件和目录到远程
scp -r * root@39.107.82.176:/home
```



## 本地直接打包加上传

```bash
# 切换到build目录里
$ cd ./build
$ tar -cvf build.gz *
# 上传到www/wwwroot/chart目录
$ scp build.gz root@39.107.82.176:/www/wwwroot/chart
# 连接到linux,并输入密码
$ ssh root@39.107.82.176

#  服务器的操作
# 切换到www/wwwroot/chart目录
cd /www/wwwroot/chart && ls
# 解压
tar -xvf build.gz
```



## 解决scp不需要输入密码直接上传

1. 在linux输入

```bash
ssh-keygen -t rsa
cd /root/.ssh
```

2. 在本地执行以下命令，并一路回车创建ssh密钥

```bash
ssh-keygen -t rsa
```

之后到`C:\Users\Administrator\.ssh`，输入以下命令，复制到你的ssh目录下

```bash
scp id_rsa.pub root@39.107.82.176:/root/.ssh
```

3. 文件上传之后到linux输入命令

```bash
cd /root/.ssh
cat id_rsa.pub >> authorized_keys
```

4. 已经可以测试不输入密码直接上传了





## 填写脚本自动上传

1. 本地脚本，在项目根目录创建文件夹delony.sh，只要是sh后缀都行
```bash
#!/bin/bash
npm run build
cd ./build
tar -cvf build.gz *
scp build.gz root@39.107.82.176:/www/wwwroot/chart
ssh root@39.107.82.176
```
2. 运行之后会直接到服务器
```bash
touch delony.sh
chmod 777 delony.sh
vim delony.sh

# 写入以下代码
#!/bin/bash
cd /www/wwwroot/chart
tar -xvf build.gz
rm -rf build.gz
```

3. 之后点击一下delony.sh，之后在到服务器运行：sh ./delony.sh即可



## node项目保持后台运行

### pm2

文档：[https://pm2.keymetrics.io/docs/usage/quick-start/](https://pm2.keymetrics.io/docs/usage/quick-start/)

1. 全局安装：`npm install pm2@latest -g`

2. 基本命令：

   * 启动：`pm2 start app.js`
   * 重启：`pm2 restart app_name`
   * 停止：`pm2 stop app_name`
   * 删除：`pm2 delete app_name` 
   * 应用列表：`pm2 [list|ls|status]`
   * 查看日志：`pm2 logs`
   * 清空所有日志文件：`pm2 flush`
   * 查看实时仪表板：`pm2 monit`
   * web界面查看仪表板：`pm2 plus`  推荐使用

3. pm2 支持的一些参数

   ```bash
   # 指定app_name, pm2一般通过app_name管理应用
   --name <app_name> 
   
   # 往script脚本传递参数
   -- arg1 arg2 arg3
   
   # 文件改变自动重启
   --watch
   # 忽略文件
   --watch --ignore-watch="node_modules"
   
   # 指定日志文件
   --log <log_path>
   
   # 日志以时间为前缀, 默认日志不带前缀
   --time
   ```

   常用参数：` pm2 start app.js --time --name myService -- -p 8866`

   在启动时建议直接指定appName，下次启动即可直接输入app_name启动

4. 创建生态系统文件配置，下次直接启动文件可同时启动多个node应用

   命令：`pm2 ecosystem`

   执行之后会生成`ecosystem.config.js`文件：

   ```bash
   module.exports = {
     apps : [{
       name: "app",
       script: "./app.js",
       env: {
         NODE_ENV: "development",
       },
       env_production: {
         NODE_ENV: "production",
       }
     }, {
        name: 'worker',
        script: 'worker.js'
     }]
   }
   ```

   启动时：`pm2 start ecosystem.config.js`

   

### forever

forever也是一种保持后台运行的插件，建议使用pm2就可以了，监听更方便

1. 全局安装：`npm install forever -g`

2. 启动某个项目：forever start 文件名

   ![image](https://notecdn.hrhe.cn/images/server-03_linux常用-02.png)

3. 查看后台运行的项目：forever list

   ![image](https://notecdn.hrhe.cn/images/server-03_linux常用-03.png)

4. 停止某个项目：forever stop [pid]

   ![image](https://notecdn.hrhe.cn/images/server-03_linux常用-04.png)

5. 停止所有项目：forever stopall

6. 重新启动项目：forever restart 文件名（重新启动不需要再传入参数了）





## nohup后台运行sh程序及查看

1. 后台执行.sh文件（使用nohup和&命令）

   ```bash
   nohup ./a.sh &
   ```

   * nohup：加在一个命令的最前面，表示不挂断的运行命令
   * &：加在一个命令的最后面，表示这个命令放在后台运行；

   执行之后会增加一个`nohup.out`文件查看执行日志

   注意：在执行该.sh文件出错时，建议可以先手动运行一下sh文件有没有错误

2. 查看后台运行的命令（使用ps和jobs）

   * `jobs`：只能查看当前终端后台执行的任务，换了终端就看不见了

     ```bash
     [1]- 运行中        nohup ./one.sh &
     [2]+ 运行中        nohup ./a.sh &
     ```

     `-` 表示之前的任务，`+`表示最近的任务，`[1]`代表jobnum是1；

   * `ps`：可以查看别的终端的任务

     ```bash
     [root@heny test]ps -aux | grep a.sh # 将a.sh的任务过滤出来
     root     15208  0.0  0.0 113176  1404 pts/1    S    16:02   0:00 /bin/bash ./one.sh
     root     16413  0.0  0.2 151752  5356 pts/1    S+   16:11   0:00 vim one.sh
     root     19902  0.0  0.0 112724  1000 pts/5    R+   16:31   0:00 grep --color=auto one.sh
     ```

     参数：`a` 显示所有程序    `u` 以用户为主的格式显示   `x` 显示所有的程序，不以终端机来区分

     第二列为PID；

3. 关闭当前后台运行的程序（使用kill）

   （1）通过jobs命令查看jobnum，然后执行`kill jobnum`

   （2）通过ps命令查看进程号PID，然后执行`kill PID`

   （3）当前的前台的进程按`ctrl+c`就可以终止了

4. 前后台进程的切换与控制

   （1）`fg`命令

   将后台中的命令调至前台继续运行；

   如果后台有多个命令，可以使用jobs查看Jobnum，然后使用fg %jobnum将选中的命令调出；

   （2）`ctrl + z`命令

   将一个正在前台执行的命令放到后台，并且处于暂停状态

   （3）`bg` 命令

   将一个在后台暂停的命令，变成在后台继续执行；

   如果多个命令使用jobs查看，之后bg %jobnum；



## ubuntu下使用nvm

1. 从github克隆过来

   需要先创建~/git目录，之后将git的东西放在里面；还需要`apt install git`；

   ```bash
   $ cd ~/git
   $ git clone https://github.com/creationix/nvm.git
   ```

2. 配置终端启动时自动执行 source ~/git/nvm/nvm.sh,

   在 ~/.bashrc, ~/.bash_profile, ~/.profile, 或者 ~/.zshrc 文件添加以下命令:

   ```bash
   source ~/git/nvm/nvm.sh
   ```

3. 重新打开

4. 配置nvm环境变量

   添加到上面一样的文件里面

   ```bash
   # nvm
   export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
   source ~/git/nvm/nvm.sh
   ```

5. 之后就可以使用nvm来安装各版本的node了







## jenkins常用命令

**jenkins目录**

jenkins安装目录：/var/lib/jenkins

jenkins日志目录：/var/log/jenkins/jenkins.log

jenkins默认配置：/etc/default/jenkins

jenkins默认工作区：/var/lib/jenkins/workspace/

**jenkins常用命令**

* 启动：`service jenkins start`
* 重启：`service jenkins restart`
* 停止：`service jenkins stop`
* 启动之后检查jenkins：`ps -def | grep java`

**浏览器进入jenkins**

* 登录：localhost:8080
* 关闭：localhost:8080/exit
* 重启：localhost:8080/restart
* 重新加载配置：localhost:8080/reload





## 部署在线版VScode

`code-server`官网链接：[https://github.com/cdr/code-server/releases](https://github.com/cdr/code-server/releases)

### 拉取代码

直接放linux后台拉取（可以输入ll即时查看文件大小）：

```bash
wget -bc -t 20 https://www.ivdone.top/wordpress/pic/p662/code-server-3.2.0-linux-x86_64.tar.gz

# 之后解压
tar -zxvf code-server-3.2.0-linux-x86_64.tar.gz
# 进入该目录
cd code-server-3.2.0-linux-x86_64/
```

### 设置密码

```bash
# 设置web登录密码
vi ~/.bashrc
# 在该文件的末端导出环境变量，xxxxxx为你自己设置的登录密码，保存
export PASSWORD="xxxxxx"
# 更新环境变量
source ~/.bashrc
```

### 运行

```bash
# 检查端口是否被占用，注意Linux防火墙要开放该端口
lsof -i:8080
# 前台运行，使能了登录密码
./code-server --host 0.0.0.0 --port 8080 --auth password
# 后台运行
nohup ./code-server --host 0.0.0.0 --port 8080 --auth password &
```

之后可以直接访问了，然后部署nginx即可；



## 本地vscode直接访问服务器

下载remote-ssh插件即可