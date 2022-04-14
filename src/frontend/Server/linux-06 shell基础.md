# linux-06 shell基础



## 一、shell基础

`echo -e`       支持反斜线控制的字符转换
### 控制字符
* `\\` 输出\本身   
*  `\b` 退格键    
*  `\e`  ESCAPE键    
*  `\f`换页符   
* `\n`换行符
* `\r` 回车符       
*   `\t` 制表符(tab键)    
* `\0nnn` (nnn三位八进制)    
*  `\xhh` 按照十六进制



### 输出颜色    

`echo -e "\e[1;31m abcd \e[0m"`     

30m黑色、31m红色、32m绿色、33m黄色、34m蓝色、35m洋色 、36m青色、37m白色



### 输入内容到文件

* 覆盖：`echo 'content' > a.txt`
* 追加：`echo 'string' >> a.txt`



### 执行shell脚本

* `chmod 755 hello.sh`
* `./hello.sh`
* `bash hello.sh`



### 输出重定向
* `命令 > 文件 2>&1`     以覆盖方式 把正确和错误输入到一个文件
* `命令 >> 文件 2>&`     以追加方式 把正确和错误输入到一个文件
* `命令 &> 文件`              以覆盖方式 把正确和错误输入到一个文件
* `命令 &>> 文件`             以追加方式 把正确和错误输入到一个文件
* `命令>>文件1 2>>文件2`  把正确追加到1 错误追加到2



### 输入重定向
`wc 选项 文件名`   `-c`统计字节 `-w`统计单词 `-l`统计行数



### 多命令顺序

命令 ; 命令 ; 命令          多命令执行

```bash
date ; dd if=输入文件 of=输出文件 bs=字节数 count=个数 ; date 计算复制速度
```

*  `&&`：逻辑与，第一条执行再执行第二条
* `||`：逻辑或 ，第一条错误执行第二条 第一条正确不执行第二条
* 判断命令是否正确：命令 && echo yes || echo no  
* 命令1的正确输出作为命令2的操作对象：命令 | 命令2 



### 通配符

*  `?`单个字符 
* `*`包含任意字符 
* `[a-z]a-z`的字符 
* `[^a-z]`只有数字 没有字母
* `''`没有特殊意义 
* `""`有特殊含义 
* ``直接执行命令 
* `$()`和反引号一样 
* `#`注释 
* `$`调用变量 
* `\`转意符



### 本地变量（只在当前变量生效）
本地变量定义：name=sc        

* 变量叠加   
  *  `aa="$aa"456`
  * `aa=${aa}789`
* `set`            变量查看
* `unset 变量`     变量删除
* `echo $name`     调用变量 变量前加$

如果想获取一条命令的执行结果，需要使用反引号``

```bash
name=`git pull`
echo $name
```



### 环境变量（在所有变量生效）
* `pstree`      查看当前变量等级

* `export age=18`  定义环境变量

* `env`          查看环境变量

* `echo $PATH`    查找系统命令路劲

* `PS1`                 定义系统提示符的变量

  `PS1='[\u@\t \W]\$ '`    -t时间  -u用户 -h主机名 -W显示最后一个目录 \$提示符



### 位置参数变量
* `$n`    $0代表命令本身  $1-$9代表第1-9个参数 十以上的表达${10}
* `$*`    所有参数 看成整个参数
* `$@`    所有参数 看成单个参数
* `$#`    代表多少个参数



### 预定义变量

* `$?`    返回结果0正确执行 返回非0错误执行
* `$$`    当前进程的进程号pid
* `$!`    最后一个进程后台pid

* `&`  放入后台



### 接收键盘输入

read 选项 变量名
          -p "提示信息"    输入提示信息
          -t 秒数
          -n 字符数
          -s 隐藏字符



### 数值运算符
declare [+/-]选项 变量名

* `-`  设定变量属性
* `+`  取消变量属性
* `-i` 声明变量整形
* `-x` 声明环境变量
* `-p` 查看变量类型

```bash
declare -i cc=$aa+$bb
```



### expr或let数值运算工具
```bash
dd=$(expr $aa+$bb)
let hh=$aa+$bb
ff=$(( $aa+$bb ))
gg=$[ $aa+$bb ]

bb=$(( 14%3 )) # 得余数
cc=$(( 1&&0 )) # 逻辑与运算
```



## 二、字符截取命令

student.txt内容如下：

```bash
vi student.txt

ID Name PHP Linux MySQL Average
1 Liming 82 95 86 87.66
2 Sc 74 96 87 85.66
3 Gao 99 83 93 91.66
```



### cut字段提取命令

`cut [选项] 文件名`

* `-f 列号`：提取第几列
* `-d 分隔符`：按照指定分隔符分割列

```bash
cut -f 2 student.txt
cut -f 2,3 student.txt
cut -d ':' -f 1,3 /etc/passwd

#cut命令的局限
df -h | cut -d " " -f 1,3
```



### printf命令

`printf '[输出类型输出格式]' 输出内容` 

* `%ns`：输出字符串，n指代输出几个字符
* `%ni`：输出整数n指代输出几个字符
* `%m.nf`：输出浮点数，m和n是数字，指代输出的整数和小数，%8.2f代表共输出8位数，2位小数，6位整数；

输出格式：

* `\a`：输出警告声音
* `\b`：输出退格键
* `\f`：清除屏幕
* `\n`：换行
* `\r`：回车
* `\t`：水平输出退格，tab键
* `\v`：垂直输出退格，tab键

```bash
printf '%s %s %s \n' 1 2 3 4 5 6
```

在awt命令的输出中支持print和printf命令：

* print：print会在每个输出之后自动加入一个换行符（linux默认没有print命令）
* printf：printf是标准格式输出命令，并不会自动加入换行符，如果需要换行需要手工加入换行符；



### awk命令

`awk '条件1{动作1} 条件2{动作2}...' 文件名` 

条件：一般使用关系表达式作为条件

* x > 10 ：判断变量x是否大于10
* x >= 10
* x <= 10

动作：

* 格式化输出
* 流程控制语句

```bash
awk '{printf $2 "\t" $6 "\n"}' student.txt
df -h | awk '{print $1 "\t" $3}'
```

BEGIN

```bash
awk 'BEGIN{printf "This is a transcript \n"} {printf $2 "\t" $6 "\n"}' student.txt
```

END

```bash
awk 'END{printf "the end \n"}{printf $2 "\t" $6 "\n"}' student.txt
```

FS内置变量

```bash
cat /etc/passwd | grep "/bin/bash" | \
awk 'BEGIN {FS=":"} {printf $1 "\t" $3 "\n"}'
```

关系运算符

```bash
cat student.txt | grep -v Name | \
awk '$6 >= 87 {printf $2 "\n"}'
```



### sed命令

sed是一种几乎包括在所有UNIX平台（包括Linux）的轻量级流编辑器，sed主要是用来将数据进行选取、替换、删除、新增的命令

`sed [选项] '[动作]' 文件名`

* `-n`：一般sed命令会把所有的数据都输出到屏幕，如果加入此选择，则只会把经过sed命令处理的行输出到屏幕
* `-e`：允许对输入数据应用多条sed命令编辑
* `-i`：用sed的修改结果直接修改读取数据的文件，而不是屏幕输出

动作：

* `a \`： 追加，在当前行后添加一行或多行。添加多行时，除最后 一行
  外，每行末尾需要用“\”代表数据未完结。
* `c \`： 行替换，用c后面的字符串替换原数据行，替换多行时，除最
  后一行外，每行末尾需用“\”代表数据未完结。
* `i \`： 插入，在当期行前插入一行或多行。插入多行时，除最后 一行
  外，每行末尾需要用“\”代表数据未完结。
* `d`： 删除，删除指定的行。
* `p`： 打印，输出指定的行。
* `s`： 字串替换，用一个字符串替换另外一个字符串。格式为“行范
  围s/旧字串/新字串/g”（和vim中的替换格式类似） 

学生成绩表

```bash
vi student.txt
ID Name PHP Linux MySQL Average
1 Liming 82 95 86 87.66
2 Sc 74 96 87 85.66
3 Gao 99 83 93 91.66
```

行数据操作

```bash
# 查看第2行
sed '2p' student.txt
sed -n '2p' student.txt

# 删除第二行到第四行的数据，但不修改文件本身
sed '2,4d' student.txt

# 在第二行后追加hello
sed '2a hello' student.txt

# 在第二行前插入两行数据
sed '2i hello world' student.txt

# 数据替换
sed '2c Nosuch person' student.txt

# sed操作的数据直接写入文件
sed -i '3s/74/99/g'  student.txt

#同时把“ Liming ”和“ Gao ”替换为空
sed -e 's/Liming//g ; s/Gao//g' student.txt
```



## 三、字符处理命令

### 排序命令sort

`sort [选项] 文件名`

* `-f`： 忽略大小写
* `-n`： 以数值型进行排序，默认使用字符串型排序
* `-r`： 反向排序
* `-t`： 指定分隔符，默认是分隔符是制表符
* `-k n[,m]`： 按照指定的字段范围排序。从第n字段开始，
  m字段结束（默认到行尾

```bash
sort /etc/passwd
sort -r /etc/passwd

# 指定分隔符是“：”，用第三字段开头，第三字段结尾排序，就是只用第三字段排序
sort -t ":" -k 3,3 /etc/passwd
```



### 统计命令wc

`wc [选项] 文件名`

* `-l`：  只统计行数
* `-w`：  只统计单词数
* `-m`：  只统计字符数



### 判断字符串是否包含

1. 利用字符串运算符

   ```bash
   strA="helloworld"
   strB="low"
   if [[ $strA =~ $strB ]]
   then
     echo "包含"
   else
     echo "不包含"
   fi
   ```

2. 利用通配符

   ```bash
   A="helloworld"
   B="low"
   if [[ $A == *$B* ]]
   then
     echo "包含"
   else
     echo "不包含"
   fi
   ```

