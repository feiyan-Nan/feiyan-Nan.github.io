# linux-02 基本操作

## 一、常用快捷键

* `ctrl+c`  强制终止
* `ctrl+l`   清屏
* `ctrl+u`   删除或剪切之前命令
* `ctrl+y`   粘贴
* `ctrl+r`    搜索历史命令并执行
* `ctrl+d`    退出当前终端



## 二、ls命令

1. ls：显示目录文件（/bin/ls），选项[-ald] [文件或目录]

   例：ls -a /home

   `-a` 显示所有文件，包括隐藏文件

   `-l` 详细信息显示

   `-d` 查看目录属性；

2. 基本属性

   文件类型：（`-` 文件 `d` 目录 `l` 软链接文件）

   `u` 所有者 `g`所属组 `o`其他人；

   `r` 读 `w` 写 `x`执行；  x执行：可以执行文件或进入目录等；




## 三、帮助命令

1. `which` 命令                        搜索命令所在目录及别名信息；
2. `whereis [命令名称]`            搜索命令所在目录及帮助文档路径；
3. `man [命令或配置文件]`        获得帮助信息；
4. `help` 命令                           获得内置shell命令的帮助信息；
5. `whatis`                                 查看命令的简短信息
6. `apropos`                                 查看配置文件的简短信息
7. `info`                             等同于man命令



## 四、用户管理命令

1. `useradd 用户名`            添加新用户，root用户执行；
2. `passwd 用户名`             设置用户密码；
3. `who`                             查看登录用户信息；
4. `w`                                 查看登录用户详细信息；





## 五、网络命令

1. `write  用户名`          给用户发信息，以ctrl+d保存结束；

2. `wall  [message]`     发广播信息，给广播发信息；

3. `ping [-c] ip地址`     测试网络连通性，-c指定发送次数；

4. `mail [用户名]`         查看发送电子邮件

   `mail` 回车    读取信息（`h` 查看列表， `d[序列号]`删除邮件）

5. `ifconfig`               查看设置网卡信息

6. `last`                        查看目前与过去登入系统的用户信息；

7. `lastlog`                   检查某特定用户上次登录的时间

   `lastlog -u 500`；      通过uid查看指定用户的登录信息；

8. `traceroute 地址`          显示数据包到主机间的路径；

9. `netstat [选项]`             显示网络相关信息；

   `-t` TCP协议；`-u` UDP协议；`-l` 监听；`-r` 路由 `-n` 显示ip地址和端口号

   示例：

   * `netstat -tlun` 查看本地监听的端口
   * `netstat -an`   查看本机所有的网络连接；
   *  `netstat -rn`   查看本机路由表；

10. `setup`        配置网络；`service network restart`重启网络配置才会生效

11. `mount [-t文件系统] 设备文件名` 挂载点

    ```bash
    mount -t iso9660 /dev/sr0 /mnt/cdrom
    ```


12. `unmount`   卸载    `umount /mnt/cdrom` 卸载光盘

13. `curl [options] [url]` 

    常用options：

    * `-o` 把输出写到该文件中
    * `-I` 仅仅返回header

    常用的场景：

    * `curl localhost:2222/getlist`：调试请求
    * `curl -I www.taobao.com`：查看头部信息
    * `curl -o index.html www.baidu.com`：抓取网页，会将index.html下载下来



## 六、系统管理

### kill 杀死进程

通过ps指令或jobs指令查看pid，获取pid之后杀死进程

* `-15`：终止程序
* `-9`：尝试强制删除程序

也可以直接使用`kill pid码`



### top 实时显示进程动态

`top	[-pid] id` 指定进入id



### alias 别名配置

`alias[别名]=[指令名称]`   修改别名

`vi /root/.bashrc`   定义别名永久生效

`unalias 别名`	    删除别名



### history 历史命令

`history`          显示历史命令         

​				 `-c`清楚  `-w`把缓存命令写进`.bash_history`
`/etc/profile`   修改历史命令条数
`/root/.bash_history`    保存在家目录下
调用历史命令  

* `!n`   重复第几条命令   
* `!!`   重复执行上一条    
* `!字串` 重复执行含有该字串的命令





## 七、关机开机

* 服务器连续运行时间：  `uptime`          
* 重启：`rebort`
* 关机：`shutdown`
  * `now`  现在关机 `shutdown -h now` 现在关机
  * `-h`  指定时间关机  `shutdown -h 20:30` 八点半关机
  * `-r`  重启
  * `-c` 取消前一个关机 

* 系统运行级别  

  `0`关机 `1`单用户 `2`不完全多用户 `3`字符界面 `4`未分配 `5`图形界面 `6`重启
  `id:3:initdefault:`   修改系统默认运行级别
  `runlevel`             查询当前运行级别
  `logout`               退出登录