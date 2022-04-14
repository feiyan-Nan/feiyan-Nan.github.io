# linux-05 系统管理

## 一、rpm包

* 安装：`rpm -ivh 包全名`
  * `-i`     安装
  * `-v`     显示详细信息
  * `-h`     显示进度

* 升级：`rpm -Uvh  包全名`
* 卸载：`rpm -e  包名`    

* 查询包：rpm -q     已安装加包名  未安装加包全名
  * `-qa`                   查询所有安装包
  * `-qi`                    包名详细信息
  * `-qp`                   查询未安装包名
  * `-ql`                    查询包名安装位置 -p查询未安装
  *  `-qf` 系统文件名  查询系统文件属于哪个软件包
  * `-qR 包名`           -R查询软件包依赖性 -p查询未安装

* 检验包：`rpm-V`    校验指定rpm包中的文件是否做了修改

* rpm2cpio 包全名| \ cpio -idv .文件绝对路径 提取安装包中的系统文件



## 二、yum包
设置网络：

`vim /etc/sysconfig/network-scripts/ifcfg-eth0`
把`ONBOOT=no` 改为yes   启动网卡service network restart

`vim /etc/yum.repos.d/CentOS-Base.repo`  网络yum源配置地址
`enabled=1` 生效

* 获取可用软件列表：`yum list`
* 搜索：`yum search`
* 安装：`yum -y install ` 
* 升级：`yum -y update`
* 卸载：`yum -y remove` 
* 可用软件组：`yum grouplist` 
* 安装软件组：`yum groupinstall` 
* 卸载软件组：`yum groupremove` 



/etc/rc.d/init.dtpd star 启动服务
/usr/local/apache2/bin/apache1 start 源码包启动
service httpd restart  启动服务

源码包保存位置   /usr/localc/
软件包安装位置   /usr/local/
./configure --prefix=/usr/local/apache2   指定安装目录
make       检测产生Makefile  如果没产生 执行make clean
make install 
源码包卸载  直接删除文件夹



## 三、用户组管理
### 用户信息

`/etc/passwd`     
         用户名称:密码标识:UID:GID初始组:用户说明:家目录:shell目录
        uid： 0超级用户 1~499 系统用户（伪用户）  500-65535 普通用户

### 查看密码文件

`/etc/shadow`
         1用户名:2加密密码(!!或*没有密码):3密码最后修改日期1970.1.1后的多少 
         天:4两次密码修改间隔:5密码有效期:6密码到期前提示:7密码过期宽限天数
         (0过期立即失效 -1永不失效):8账号失效时间(时间戳表示):9保留
date -d "1970-01-01 16066 days" 换算时间
echo $(($(date --date="2014/01/06" +%s)/86400+1)) 换算时间戳
/etc/group   组名:组密码:GID:附加用户
/etc/gshadow 组名:组密码:组管理员名:组附加用户

/home/用户  普通用户家目录 700
/root/用户  超级用户家目录 550
ar/spool/mail/用户名/  用户的邮箱
/etc/skel/  用户模板目录 创建新用户默认将模板目录文件拷贝到家用户文件下


useradd -u UID -G附加组 -c 说明 -d 家目录 -s /bin/bash登录shell 用户名
/etc/default/useradd  用户默认值文件
/etc/login.defs   用户默认值密码文件
passwd -S 用户名  查询用户密码状态
passwd -l 锁定用户名 -u 解锁用户名
echo "123" |passwd --stdin lamp 指定lamp设置123密码
usermod   修改已有用户信息 -c修改说明 -G附加组 -L 锁定用户 -U 解锁用户
chage -l 列出用户详细密码状态 chage -d 0 hny 将密码修改时间为0 重新修改密码
userdel -r hny 删除用户同时删除家目录
id 用户  查看用户id
su - root  切换超级用户
su - root -c "命令"  执行一个root命令

groupadd  添加组 
groupmod  修改组 -n新组名 -g 修改组id（尽量删除重建组）
groupdel  删除组

gpasswd -a 加到用户组 -d删除用户组  （直接改文件更好）



## 四、权限管理
mount -o remount,acl/  临时把根目录重新挂载支持acl权限
/etc/fstab   修改默认文件支持acl权限

setfacl -m 添加acl权限  u:用户名:权限 目录  (u用户g组)
getfacl 文件名 查看支持哪些权限acl命令

setfacl -m m:rx 文件名  mask修改最大权限

setfacl -x u:用户名  删除某个用户名acl权限
setfacl -x g:用户组  删除某个组acl权限
setfacl -b 文件名    删除整个文件夹acl权限

setfacl -m u:用户名:权限 -R 文件名   递归acl权限 针对现有的目录和目录下子文件
setfacl -m d:u:用户名:权限 -R 文件名    默认acl权限 只能赋予目录 不能赋予文件

设定setuid （只有能执行包含x权限的文件才能设置）针对二进制文件
             普通用户使用该二进制文件会赋予root权限
             chmod 4755 文件名
             chmod u+s  文件名
取消setuid
             chmod 755 文件名
             chmod u-s 文件名

设定setgid 针对文件和目录
             文件会变成root组  新建目录会变成目录自己所属组
             chmod 4755 文件名
             chmod g+s  文件名
取消setuid
             chmod 755 文件名
             chmod g-s 文件名


设置黏着位   (只有执行和写入才能设置)针对目录
             谁创建的谁才能修改删除 别人无法删除只能读
             chmod 1755
             chmod o+t
取消黏着位
             chmod 755
             chmod o-t

chattr权限
`chattr [+-=][选项]`  文件或目录  误保险操作
            +增加权限 -删除权限 =赋予权限
      -i 文件:不允许添加修改 目录:只能修改目录下文件数据 不能添加修改(锁起来)
      -a 文件:可以增加 不能删除  目录:只能建立修改 不能删除(保护现有数据)
            只能通过echo 内容 >> 文件    写入数据
lsattr 选项 文件名  -a 显示所有 -d显示目录



## 五、sudo使用

visudo
用户 被管理地址=命令的绝对路劲
普通用户  sudo -l 查看可以用的sudo命令
          sudo 命令绝对路劲  执行赋予的命令



## 六、文件系统查看命令

df   (文件+程序占用)

df 选项 挂载点        `-a` 显示所有 `-h`人性化 `-T`显示文件类型 `-m`以M单位  `-k`以kb单位

统计目录文件大小     (文件占用)
du                          -a显示每个子文件 -h人性化 -s统计占用量
 fsck 选项 设备文件名           -a不用显示用户自动修复  -y自动修复
 dumpe2fs 分区设备文件名   显示磁盘状态



## 七、查询于挂载

`mount -l` 显示已经挂载的设备  -l显示卷标
`mount -a` 依据/etc/fstab的内容自动挂载
mount -t -L -o 设备文件名 挂载点     -t文件类型 -L卷标名  -o特殊选项  exec/noexec 执行 不执行 remount重新挂载 

挂载光盘
mount /dev/sr0 /mnt/cdrom
umount 设备文件名或挂载点

挂载u盘
mount -t vfat /dev/sdb1 /mnt/usb

fdisk 设备文件绝对路劲             开始分区
d 删除分区 l显示分区文件类型 n新建分区  q不保存退出  w保存退出
partprobe            重新读取分区表信息
mkfs -t ext4 /dev/sdb1          格式化分区
mount /dev/sdb1 /disk1/       建立挂载点

vi /etc/fstab      修改自动挂载文件
mount -o remount,rw     /etc/fstab文件重新挂载读写权限

新建swap分区    修改分区  fdisk /dev/sdb
新建一个swap分区之后按t修改文件类型为82
mkswap /dev/sdb1 格式话swap分区
swapon /dev/sdb1   加入swap分区
swapoff /dev/sdb1   取消swap分区
vim /etc/fstab   /dev/sdb1    swap   swap    defaults   0  0

free 命令   查看内存于swap分区使用状况