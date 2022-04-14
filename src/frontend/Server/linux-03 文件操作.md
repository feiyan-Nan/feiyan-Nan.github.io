# linux-03 文件操作

## 一、 文件操作命令

> 命令格式：`命令 [-选项] [参数]`

### 创建

* 创建目录：`mkdir` (-p可以递归创建)

* 创建文件：`touch`

* 生成链接文件：`ln -s [old][new]  -s`生成软链接；

  类似window快捷方式；软链接的文件权限都是rwxrwxrwx；



### 删除

* 删除空目录：`rmdir`

* 删除文件：`rm -rf` 文件或目录  

  `r` 强行删除，`f` 强制执行；

`shopt -s extglob`执行之后可以执行：`rm -rf !(排除的某个文件不被删除)`

`shopt -s` ，查看`extglob`是否为on



### 复制

* 复制：`cp -rp [old][new]`   

  `r` 复制    `p` 保留文件属性；

* 剪切或重命名：`mv [old][new]`





### 查看文件

* `cd` 切换目录；
* `pwd` 显示当前目录
* `ls` 显示所有文件
* `ll` 显示所以文件包含文件属性；



## 三、显示文件内容

* `cat` 正序显示； -n显示行号；
* `tac` 反向列示
* `more` 分页显示（f或空格翻页，enter换行，q或Q退出）
* `less` 分页显示，可以向上翻页；
* `head` 显示文件前面几行；（在文件前面添加-n，指定行数）
* `tail` 显示文件后面几行（-n，指定行数），-f 支持动态查看，文件刷新即持续更新




## 四、权限管理命令

1. `chmod`：改变文件或目录权限（/bin/chmod）

   `chmod [{ugoa}{+-=}{rwx}] [文件或目录]`

   `[mode=421] [文件或目录]`

   `-R` 递归修改；

2. 权限的数字表示：r=4  w=2 x=1； 示例：rwxrw-r--   764

   示例：`chmod g+w testfile`    赋予testfile文件所属组添加写权限

   `chmod -R 777 testdir`    修改testdir目录下所有文件具有全部权限；

3. `chown`：改变文件或目录的所有者（/bin/chown）

   `chown [用户] [文件或目录]`

4. `chgrp`：改变文件或目录的所属组（/bin/chgrp）

   `chgrp [用户组] [文件或目录]`

5. `umask`：显示、设置文件的缺省权限（shell内置）

   `umask [S]`    -S以 rwx形式显示新建文件缺省权限



## 五、压缩解压

### gzip文件

* `gzip [文件]` 压缩文件，压缩后格式.gz；

* `gunzip [压缩文件]`  解压压缩.gz的文件；



### tar.gz文件

`tar [-zcf] [压缩后文件名] [目录]`    打包目录，格式.tar.gz

 * `-c`  创建tar包，
 * `-x` 解包
* `-v`  显示详细信息
* `-f`  指定文件名
* `-z`  通过gzip压缩或解压
* `-t`  不解压查看包内容

```bash
#解压：x 解包，z解压缩，-f，-v；
# 压缩: 
tar -zcvf build.tar.gz ./build
# 解压:
tar -zxvf build.tar.gz

# 打包当前文件夹所有文件
tar -cvf build.tar *

# 查看当前包的内容
tar -tvf build.tar
```

**注意**：添加了z，手动打开压缩包看到的只是一个文件，该文件需要再次解压，如果是直接输入zxvf命令解压则不用在意；

```bash
# 下载包rar, 并安装
wget http://www.rarlab.com/rar/rarlinux-x64-5.3.0.tar.gz
tar -xf rarlinux-x64-5.3.0.tar.gz
cd rar
# 制作
make
```

**排除某个文件夹**

* `--exclude=dir`

```bash
# 不使用排除压缩
tar -zcvf build.gz *
# 使用排除压缩
tar -zcvf build.gz --exclude=node_modules *
```





### zip文件

`zip [-r] [压缩后的文件名] [文件或目录]`        压缩文件或目录，格式zip；

* `-r` 压缩目录；

  解压：`unzip [压缩文件]`



### bzip2文件

`bzip2 [-k] [文件]`                          压缩后格式.bz2；-k产生压缩文件后保留原文件；

解压：`bunzip2 [-k] [压缩文件]`     `-k` 解压缩后保留原文件；

`tar -xjf Japan.tar.bz2`    j可以解压bzip2的文件；



### rar文件

解压rar文件

压缩: `rar a 压缩文件 ./*`

解压: 

* `rar x etc.rar`
* `unrar -e etc.tar`



## 六、搜索

1. `find`：文件搜索（/bin/find）

   find [搜索范围] [匹配条件]

2. `find /etc -name init`

   在目录etc查找文件init    -iname可以不区分大小写

3. `find / -size +204800`

   在根目录下查找大于100M的文件    +n 大于 -n 小于 n 等于

4. `find /home -user shenchao`

   在根目录下查找所有者为shencao的文件    -group根据所属组找

5. `find /etc -cmin -5`

   在etc下查找5分钟内被修改过属性的文件和目录

   `-amin` 访问时间    `-cmin` 文件属性    `-mmin` 文件内容

6. `find /etc -size +163840 -a -size -204800`

   查找大于80MB小于100MB文件      -a 两个条件同时满足    -o满足一个

7. `find /etc -name inittab -exec ls -l {} \`;

   查找initab文件并显示其详细信息        -exec/-ok  命令    {} \对搜索结果执行操作

8. `-type` 根据文件类型查找；  f文件 d目录 l软链接
   `-inum` 根据i节点查找；

9. `locate`：在文件资源库中查找（/usr/bin/locate）

   `locate 文件名`

10. `grep`：在文件中搜寻字串匹配的行并输出

    `grep -iv [指定字串] [文件]`     -i不区别大小写 -v排队指定字串

    `grep Vue app.js` 在app.js中查找Vue字符串;
    
    文档：[linux中grep命令的用法](https://www.cnblogs.com/flyor/p/6411140.html)

