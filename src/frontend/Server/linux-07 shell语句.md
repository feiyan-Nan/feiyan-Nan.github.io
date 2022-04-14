# linux-07 shell语句

## 一、条件语句

### 根据文件类型进行判断

以下命令都需要进行判断文件是否存在，并且为描述文件，命令后面跟文件名

* `-b`：块设备文件
* `-c`：字符设备文件
* `-d`：目录文件
* `-e`：仅判断文件是否存在
* `-f`：普通文件
* `-L`：符号链接文件
* `-p`：管道文件
* `-s`：非空
* `-S`：套接字文件

**两种判断格式**

```bash
# 第一种
test -e /root/install.log
# 第二种
[ -e /root/install.log ] 
[ -d /root ] && echo "yes" || echo "no" # 判断同时输出
```

`[]` 单中括号和双中括号的区别：

双中括号支持输入正则表示式，中括号前后必须有空格



### 按照文件权限进行判断

以下命令都需要判断文件是否存在，并且为描述文件，命令后面跟文件名

* `-r`：拥有读权限
* `-w`：拥有写权限
* `-x`：拥有执行权限
* `-u`：拥有SUID权限
* `-g`：拥有SGID权限
* `-k`：拥有SBit权限

```bash
[ -w student.txt ] && echo "yes" || echo "no"
```



### 两个文件之间进行比较

* `文件1 -nt 文件2`：判断文件1的修改时间是否比文件2的新
* `文件1 -ot 文件2`：判断文件1的修改时间是否比文件2的旧
* `文件1 -ef 文件2`：判断文件1是否和文件2的Inode号一致，可以理解为两个文件是否同一个文件，这个判断用于判断硬链接是很好的方法

```bash
#创建硬链接
ln /root/student.txt /tmp/stu.txt
# 测试下
[ /root/student.txt -ef /tmp/stu.txt ] && echo "yes" || echo "no"
```



### 两个整数之间比较

* `整数1 -eq 整数2`：判断整数1是否和整数2相等
* `-ne`：不相等
* `-gt`：大于
* `-lt`：小于
* `-ge`：大于等于
* `-le`：小于

```bash
[ 23 -ge 22 ] && echo "yes" || echo "no"
```



### 字符串的判断

* `-z 字符串`：判断字符串是否为空
* `-n 字符串`：非空
* `字串1 == 字串2`：是否相等
* `字串1 != 字串2`：是否不等

```bash
name=sc
# 判断name变量是否为空
[ -z "$name" ] && echo "yes" || echo "no"
```



### 多重条件判断

* `判断1 -a 判断2`：逻辑与，判断1和判断2都成立，最终结果为真
* `判断1 -o 判断2`：逻辑或，判断1和判断2有一个成立，最终结果为真
* `! 判断`：逻辑非，使原始的判断式取反

```bash
aa=11
[ -n "$aa" -a "$aa" -gt 23 ] && echo "yes" || echo "no"
```



## 文件比较符

```bash
-e 判断对象是否存在
-d 判断对象是否存在，并且为目录
-f 判断对象是否存在，并且为常规文件
-L 判断对象是否存在，并且为符号链接
-h 判断对象是否存在，并且为软链接
-s 判断对象是否存在，并且长度不为0
-r 判断对象是否存在，并且可读
-w 判断对象是否存在，并且可写
-x 判断对象是否存在，并且可执行
-O 判断对象是否存在，并且属于当前用户
-G 判断对象是否存在，并且属于当前用户组
-nt 判断file1是否比file2新  [ "/data/file1" -nt "/data/file2" ]
-ot 判断file1是否比file2旧  [ "/data/file1" -ot "/data/file2" ]
```



## 二、if流程控制语句

### 单分支if条件语句

```bash
if [[ 条件判断式 ]];then
	程序
fi
# or
if [[ 条件判断式 ]]
then
		程序
fi
```

注意：

* if语句使用fi结尾，和一般语言使用大括号结尾不同
* [ 条件判断式 ]就是使用test命令判断，所以中括号和条件判断式之间必须有空格
* then后面跟符合条件之后执行的程序，可以放在[]之后，用';'分割，也可以换行写入，就不需要';'了

例子：判断分区使用率

```bash
# 把根分区使用率作为变量值赋予变量rate
rate=$(df -h | grep "/dev/sda3" | awk '{print $5}' | cut -d "%" -f1)
if [ $rate -ge 80 ]
	then
		echo "warning! /dev/sda3 is full!!"
    fi
```



### 双分支if条件语句

```bash
if [ 条件判断式 ]
	then
		#条件成立时，执行的程序
    else
    	#条件不成立时，执行的另一个程序
fi
```



### 多分支if条件语句

```bash
if [ 条件判断式1 ]
	then
		# 当条件1成立时，执行程序1
elif [ 条件判断2 ]
	then 当条件判断2成立时，执行程序2
#...省略更多条件..
else
	# 当所有条件都不成立时，最后执行此程序
fi
```



## 三、case流程控制语句

多分支case条件语句

case语句和if...elif...else语句一样都是多分支条件语句，不过和if多分支条件语句不同的是，case语句只能判断一种条件关系，而if语句可以判断多种关系

```bash
case $变量名 in
	"值1")
		# 如果变量的值等于1，则执行
		;;
    "值2")
    	# 条件2
    	;;
    *)
    	# 最后的条件
    	;;
esac
```



## 四、for流程控制语句

语法一

```bash
for 变量 in 值1 值2 值3...
	do
		#程序
    done
```

例子：批量解压缩脚本

```bash
#!/bin/bash
cd /lamp
ls *.tar.gz > ls.log
for i in $(cat ls.log)
	do
		tar -zxf $i &>/dev/null
    done
rm -rf /lamp/ls.log
```



语法二

```bash
for ((初始值;循环控制条件;变量变化))
	do
		程序
    done
```

例子：从1加到100

```bash
s=0
for((i=1;i<=10;i=i+1))
	do
		s=$(($s+$i))
    done
echo "The sum of 1+2+..+100 is: $s"
```



## 五、while循环

while循环是不定循环，也称作条件循环，只要条件判断式成立，循环就会一直继续，直到条件判断式不成立，循环才会停止，这就和for的固定循环不太一样了；

```bash
while [ 条件判断式 ]
	do
		#程序
    done
```

例子：1加到100

```bash
i=1
s=0
while [ $i -le 100 ]
	do
		s=$(( $s+$i ))
		i=$(( $i+1 ))
    done
echo "the sum is:$s"
```



## 六、until循环

until循环和while循环相反，until循环时只要条件判断式不成立则进行循环，并执行循环程序，一旦循环条件成立，则终止循环

```bash
until [ 条件判断式 ]
	do
		# 程序
    done
```



## 七、shell函数

https://www.runoob.com/linux/linux-shell-func.html

```shell
#!/bin/bash
funWithParam(){
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73
```



