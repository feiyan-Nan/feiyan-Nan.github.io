---
title: "ORM"
category: "golang"
order: 22
---

开发
SQLBuilder
SQLBuilder是一个用于生成SQL语句的库。
项目：

https://gitee.com/iRainIoT/go-sqlbuilder、https://github.com/parkingwang/go-sqlbuilder
已支持MySQL基本Select/Update/Insert/Delete/Where等语法
目前只支持MySQL语法
未支持多表查询
```go
$ go get -u github.com/parkingwang/go-sqlbuilder
```
https://github.com/huandu/go-sqlbuilder，功能更强
```go
1
```
$ go get github.com/huandu/go-sqlbuilder

package main

2
3

import (

4

"database/sql"

5

"fmt"

6

"log"

7
8

_ "github.com/go-sql-driver/mysql"

9

"github.com/huandu/go-sqlbuilder"

10

)

11
12

var db *sql.DB

13
14

func init() {

15

var err error

16

db, err = sql.Open("mysql", "wayne:wayne@/test")

17

if err != nil {

18

log.Panic(err)

19
20

}
}

21
22

// 3 定义结构体

23

type Emp struct { // 和字段对应的变量或结构体定义，最好和数据库中字段顺序对应

24

emp_no

25

first_name string

26

last_name

string

27

gender

byte

28

birth_date string

29

// hire_date

30

}

int

string

31
32

func main() {

33

query := sqlbuilder.

34

Select("emp_no", "first_name", "last_name", "gender", "birth_date").

35

From("employees").

36

Where("emp_no > 10015"). // 试一试Where("emp_no > ?")

37

Offset(2).Limit(2).

38

OrderBy("emp_no").Desc(). // 按照什么字段排序，降序

39

String()

40

fmt.Println(query)

// 输出为字符串，底层调用Build()

41
42

rows, err := db.Query(query)

43

if err != nil {

44

log.Fatal(err)

45

}

46

for rows.Next() {

47

var emp Emp

48

err = rows.Scan(&emp.emp_no, &emp.first_name, &emp.last_name,
&emp.gender, &emp.birth_date) // 字段顺序和select的字段投影顺序一致

49
50

if err != nil {

51

log.Fatal(err)

52

}

53

fmt.Println(emp)

54
55

}
}

56
57

SELECT emp_no, first_name, last_name, gender, birth_date FROM employees
WHERE emp_no > 10015 ORDER BY emp_no DESC LIMIT 2 OFFSET 2

本质上sqlbuilder就是在生成SQL语句字符串。
args参数化
```go
builder := sqlbuilder.Select("emp_no", "first_name", "last_name", "gender",
"birth_date").
From("employees")
builder.Where(
builder.In("emp_no", 10008, 10010, 10020), // 参数化
)
query, args := builder.Build()
fmt.Printf("%s\n%v\n", query, args) // args是参数
SELECT emp_no, first_name, last_name, gender, birth_date FROM employees
WHERE emp_no IN (?, ?, ?)
[10008 10010 10020]
rows, err := db.Query(query, args...) // 这样使用
```
ORM
对象关系映射（Object Relational Mapping，ORM）。指的是对象和关系之间的映射，使用面向对象的
方式操作数据库。
```go
关系模型和Go对象之间的映射
table
```
=> struct

，表映射为结构体

3

row

=> object

，行映射为实例

4

column => property

，字段映射为属性

举例，有表student，字段为id int，name varchar，age int
```go
type Student struct {
id
name string
age
int
int
```
}

6
7

Student{100, "Tom", 20}

8

Student{101, "Jerry", 18}

可以认为ORM是一种高级抽象，对象的操作最终还是会转换成对应关系数据库操作的SQL语句，数据库
操作的结构会被封装成对象。

GORM
GORM是一个友好的、功能全面的、性能不错的基于Go语言实现的ORM库。
安装
gorm.io/driver/mysql依赖github.com/go-sql-driver/mysql，可以认为它是对驱动的再封装。
```go
$ go get -u github.com/go-sql-driver/mysql
$ go get -u gorm.io/gorm
$ go get -u gorm.io/driver/mysql
```
文档
英文 https://gorm.io/docs/
中文 https://gorm.io/zh_CN/docs/index.html

连接
https://gorm.io/zh_CN/docs/connecting_to_the_database.html#MySQL
```go
package main
import (
"fmt"
"log"
// _ "github.com/go-sql-driver/mysql" // 不要驱动了吗？
"gorm.io/driver/mysql"
"gorm.io/gorm"
)
var db *gorm.DB
func init() {
var err error
// dsn := "wayne:wayne@/test"
dsn := "wayne:wayne@tcp(localhost:3306)/test?charset=utf8mb4"
db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{}) // 不要用:=
if err != nil {
log.Panicln(err)
}
fmt.Println(db)
}
```
以上代码难道不需要使用驱动吗？
在"gorm.io/driver/mysql/mysql.go"中
import了 "github.com/go-sql-driver/mysql"，也就是说驱动也导入了
Dialector的Initialize方法中使用了sql.Open

模型定义
https://gorm.io/zh_CN/docs/models.html
GORM 倾向于约定优于配置
约定使用名为ID的属性会作为主键
约定使用snake_cases作为表名
结构体命名为employee，那么数据库表名就是employees
约定使用snake_case作为字段名，字段首字母大写采用大驼峰
属性名为FirstName，默认对应数据库表的字段名为first_name
如果不遵从以上约定就要自定义配置
```go
// 不符合约定的定义，很多都需要配置，直接用不行
type Emp struct { // 默认表名emps
emp_no
first_name string // 首字母未大写，也需要配置
last_name
```
string

6

gender

byte

7

birth_date string

8

int

// 不是ID为主键，需要配置

3

}

9
10

// 符合约定的定义如下

11

type student struct { // 默认表名students

12

ID

13

Name string // 字段首字母要大写

14
15

Age
}

int
int

// Id也可以

表名配置
```go
// 表名并没有遵守约定
func (Emp) TableName() string {
return "employees"
}
```
字段配置
```go
package main
import (
"fmt"
"log"
"gorm.io/driver/mysql"
"gorm.io/gorm"
"gorm.io/gorm/logger"
)
var db *gorm.DB
func init() {
var err error
// dsn := "wayne:wayne@/test"
dsn := "wayne:wayne@tcp(localhost:3306)/test?charset=utf8mb4"
db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
Logger: logger.Default.LogMode(logger.Info), // 日志级别，默认为Silent
即打印慢SQL和错误
}) // 不要用:=
if err != nil {
log.Panicln(err)
}
fmt.Println(db)
}
type Emp struct { // 默认表名emps
EmpNo
FirstName string // 首字母大写，对应字段first_name
LastName
```
string

31

Gender

byte

32

BirthDate string

33

int

`gorm:"primaryKey"` // 不是ID为主键

28

}

34
35

// 表名并没有遵守约定

36

func (Emp) TableName() string {

37
38

return "employees"
}

39
40

func main() {

41

var e Emp

42

result := db.Take(&e) // 等价于Limit 1，取1条

43

fmt.Println(result)

44

fmt.Println(result.Error)

45

fmt.Println(e)

46

}

使用 gorm:"primaryKey" 来指定字段为主键，默认使用名为ID的属性作为主键。primaryKey是tag名，
大小写不敏感，但建议小驼峰。
列名
如果未按照约定定义字段，需要定义结构体属性时指定数据库字段名称是什么。
BirthDate string `gorm:"column:birth_date"` // 可以使用column指定数据库表中的对应

```go
字段名
Xyz string `gorm:"column:birth_date"` // 字段名可以不符合约定，但字段名首字母一定要
大写
```
迁移
https://gorm.io/zh_CN/docs/migration.html#%E8%A1%A8
下面，新建一个students表，来看看结构体中属性类型和数据库表中字段类型的对应关系
```go
// 迁移后，主键默认不为空，其他字段默认都是能为空的
type Student struct {
ID
```
int

// 缺省主键bigint AUTO_INCREMENT

4

Name

string

`gorm:"not null;type:varchar(48);comment:姓名"`

5

Age

byte

// byte=>tinyint unsigned

6

Birthday time.Time // datetime

7
8

Gender

byte

`gorm:"type:tinyint"`

}

9
10

// db.Migrator().DropTable(&Student{})

11

db.Migrator().CreateTable(&Student{})

12
13

CREATE TABLE `students` (

14

`id` bigint AUTO_INCREMENT,

15

`name` varchar(48) NOT NULL COMMENT '姓名',

16

`age` tinyint unsigned,

17

`birthday` datetime(3) NULL,

18

`gender` tinyint,

19
20

PRIMARY KEY (`id`)
)

由于int => bigint、string => longtext，这些默认转换不符合我们的要求，所以，在tag中使用type指定
字段类型。
属性是用来构建结构体实例的，生成的SQL语句也要使用这些数据。而tag是用来生成迁移
```go
Name
```
string

`gorm:"size:48"` 定义为varchar(48)

2

Age

int

`gorm:"size:32"` 定义为4字节的int

3

Age

int

`gorm:"size:64"` 定义为8字节的bigint

迁移功能用的较少，主要让大家理解其作用。
结构体属性类型用来封装实例的属性数据，Tag中类型指定迁移到数据库表中字段的类型。

新增
参考 https://gorm.io/zh_CN/docs/create.html#%E5%88%9B%E5%BB%BA%E8%AE%B0%E5%BD%9
5
```go
type Student struct {
ID
```
int

// 缺省主键bigint AUTO_INCREMENT

3

Name

string

`gorm:"size:48"` //`gorm:"not

null;type:varchar(48);comment:姓名"`
4

Age

byte

// byte=>tinyint unsigned

5

Birthday *time.Time // datetime

6

Gender

7

byte

//`gorm:"type:tinyint"`

}

8
9

func (s *Student) String() string {

10

return fmt.Sprintf("%d: %s %d", s.ID, s.Name, s.Age)

11

}

```go
// 新增一条
n := time.Now()
s := Student{Name: "Tom", Age: 20, Birthday: &n} // 构建实例
fmt.Println(s)
result := db.Create(&s) // 新增，传入指针
fmt.Println(s) // 注意前后ID的变化
fmt.Println(result.Error)
fmt.Println(result.RowsAffected)
```
```go
// 新增多条
n := time.Now()
s := Student{Name: "Tom", Age: 20, Birthday: &n}
fmt.Println(s)
result := db.Create([]*Student{&s, &s, &s}) // 传入指针的切片
fmt.Println(s)
fmt.Println(result.Error)
fmt.Println(result.RowsAffected)
```
查询一条
Take被转换为Limit 1。
```go
var s Student
fmt.Println(s) // 零值
r := db.Take(&s) // LIMIT 1
fmt.Println(s) // 被填充
fmt.Println(r)
fmt.Println(r.Error)
```
```go
r := db.First(&s) // ORDER BY `students`.`id` LIMIT 1
```
```go
r := db.Last(&s) // ORDER BY `students`.`id` DESC LIMIT 1
```
根据id查，可以使用下面的方式
```go
r := db.First(&s, 15)
```
```go
var s = Student{ID: 16}
r := db.First(&s)
```
时间相关错误
1、时间类型字段
上例错误如下，主要是使用了*time.Time，而不是string。
```go
sql: Scan error on column index 3, name "birthday": unsupported Scan, storing
driver.Value type []uint8 into type *time.Time
[]byte 转 *time.Time失败了
解决方案
在连接字符串中增加parseTime=true，这样时间类型就会自动转化为time.Time类型
1
```
dsn := "wayne:wayne@tcp(localhost:3306)/test?
charset=utf8mb4&parseTime=true"

也可以 Birthday string ，拿到Birthday字符串后，必要时，自行转换成时间类型

2、UTC时间
Create写入的时间，也就是说time.Now()取当前时区时间，但是存入数据库的时间是UTC时间。
Take拿回的时间也是UTC时间，可以通过s.Birthday.Local()转成当前时区时间。
如果想存入的时间或读取的时间直接是当前时区时间，可以使用loc参数loc=Local。
如果loc=Local
存入时，数据库字段中的时间就是当前时区的时间值
读取时，数据库字段中的时间就被解读为当前时区
```go
dsn := "wayne:wayne@tcp(localhost:3306)/test?
charset=utf8mb4&parseTime=true&loc=Local"
// time/zoneinfo.go
func LoadLocation(name string) (*Location, error) {
if name == "" || name == "UTC" {
return UTC, nil
}
if name == "Local" {
return Local, nil
}
...省略
}
```
千万不要存入数据库时采用Local存入，却使用UTC解读时间，会造成时间时区的混乱。应该保证时间存
入、读取时区一致。
一定要统一项目中数据库中时间类型字段的时区。可以考虑统一采用UTC，为了本地化显示转换为当前
时区即可。

查询所有
```go
var students []*Student
r := db.Find(&students)
fmt.Println(r)
fmt.Println(r.Error)
fmt.Println(students)
```
distinct
```go
var students []*Student
r := db.Distinct("name").Find(&students) // 投影的字段是什么？
fmt.Println(students) // 容器里每个实例是什么样子？
```
投影
投影是关系模型的操作，就是选择哪些字段。
```go
var students []*Student
r := db.Select("id", "name", "age").Find(&students)
r := db.Select([]string{"id", "name", "age"}).Find(&students)
fmt.Println(students)
```
Limit和Offset
```go
var students []*Student
r := db.Limit(2).Offset(2).Find(&students)
fmt.Println(students) // 容器里每个实例是什么样子？
```
条件查询
1、字符串条件
```go
var students []*Student
r := db.Where("name = ?", "Tom").Find(&students)
r := db.Where("name <> ?", "Tom").Find(&students)
r := db.Where("name in ?", []string{"jerry", "tom"}).Find(&students)
r := db.Where("name like ?", "t%").Find(&students)
r := db.Where("name like binary ?", "T%").Find(&students)
r := db.Where("name like ? and age > ?", "t%", 20).Find(&students)
r := db.Where("id between ? and ?", 15, 17).Find(&students) // id范围[15, 17]
r := db.Where("id = ? or id = ?", 15, 17).Find(&students) // or
```
2、struct或map条件

```go
r := db.Where([]int{14, 16, 17}).Find(&students) // WHERE `students`.`id` IN
(14,16,17)
r := db.Where(&Student{}).Find(&students) // find all
r := db.Where(&Student{ID: 15}).Find(&students)
r := db.Where(&Student{ID: 15, Name: "Tom"}).Find(&students) // and
r := db.Where(map[string]interface{}{"name": "Tom", "id":
16}).Find(&students) // and
```
struct条件中出现了零值，例如 db.Where(&Student{Name: "Tom", Age: 0}) ，Age是零值，就不会
出现在条件中。
```go
r := db.Where(&Student{Name: "Tom", Age: 20}, "name", "age").Find(&students)
// 指定使用结构体里面的name和age字段作为条件，and
```
3、Not
将Where换成Not即可，表示条件取反。
```go
r := db.Not("id = ? or id = ?", 15, 17).Find(&students)
r := db.Not("name = ?", "Tom").Find(&students)
```
4、Or
Or的用法和Where一样。
Where().Where()是And关系，Where().Or()是Or关系。
```go
r := db.Where("name = ?", "Tom").Or("name=?", "Jerry").Find(&students)
r := db.Where("name = ?", "Tom").Or(&Student{Name: "Jerry"}).Find(&students)
```
排序
```go
r := db.Order("id desc").Find(&students) // ORDER BY id desc
r := db.Order("name, id desc").Find(&students)
```
// ORDER BY name,id

desc
4

r := db.Order("name").Order("id desc").Find(&students) // ORDER BY name,id
desc

分组
```go
r := db.Group("id").Find(&students) // GROUP BY `id`
r := db.Group("name").Find(&students) // GROUP BY `name`
r := db.Group("id").Group("name").Find(&students) // GROUP BY `id`,`name`
```
```go
// SELECT name, count(id) as c FROM `students` GROUP BY `name`
r := db.Select("name, count(id) as c").Group("name").Find(&students)
// 但是students中没有属性来保存count的值
```
```go
// 使用Rows()返回所有行，自行获取字段值，但是要用Table指定表名
type Result struct {
name
count int
```
string

5

}

6

var r = Result{}

7

rows, err := db.Table("students").Select("name, count(id) as
c").Group("name").Rows()

8

fmt.Println(err)

9

// 遍历每一行，填充2个属性的结构体实例

10

for rows.Next() {

11

rows.Scan(&r.name, &r.count)

12

fmt.Println(r, "@@@")

13

}

```go
type Result struct { // 和Select的投影字段对应
Name
string
```
Count int

4

}

5

var r = Result{}

6

rows, err := db.Table("students").Select("name, count(id) as
c").Group("name").Having("c > 3").Rows()

7

fmt.Println(err)

8

// 遍历每一行，填充2个属性的结构体实例

9

for rows.Next() {

10

rows.Scan(&r.Name, &r.Count)

11

fmt.Println(r, "@@@")

12

}

13
14

// 使用Scan填充容器，注意字段名要大写开头

15

type Result struct {

16

Name string

17

C

int // 或Count int `gorm:"column:c"`

18

}

19

var rows = []*Result{}

20

db.Table("students").Select("name, count(id) as c").Group("name").Having("c
> 3").Scan(&rows)

21

for i, r := range rows {

22
23

Join

fmt.Printf("%d, %T %#[2]v\n", i, r)
}

```go
SELECT
employees.emp_no,
employees.first_name,
employees.last_name,
salaries.salary
FROM
employees
INNER JOIN
salaries
ON
1
```
employees.emp_no = salaries.emp_no

type Result struct {

2

EmpNo

3

FirstName string

4

LastName

string

Salary

int

5
6

int

}

7
8

rows, err := db.Table("employees as e").Select("e.emp_no, first_name,
last_name, salary").

9

Joins("join salaries as s on e.emp_no = s.emp_no").Rows()

10

fmt.Println(err)

11

var r Result

12

for rows.Next() {

13

rows.Scan(&r.EmpNo, &r.FirstName, &r.LastName, &r.Salary)

14

fmt.Println(r, "###")

15

}

```go
type Result struct {
EmpNo
FirstName string
```
int

4

LastName

string

5

Salary

int

6

}

7

var results = []*Result{}

8

r := db.Table("employees as e").Select("e.emp_no, first_name, last_name,
salary").

9

Joins("join salaries on e.emp_no = salaries.emp_no").Find(&results)

10

fmt.Println(r)

11

fmt.Println(r.Error)

12

fmt.Println(r.RowsAffected)

13

fmt.Println("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

14

for i, row := range results {

15
16

fmt.Println(i, row)
}

```go
type Result struct {
EmpNo
FirstName string
LastName
```
string

Salary

int

5
6

int

}

7
8

var results = []*Result{}

9

db.Table("employees as e").Select("e.emp_no, first_name, last_name,
salary").

10

Joins("join salaries as s on e.emp_no = s.emp_no").Scan(&results)

11

for i, r := range results {

12
13

fmt.Println(i, r)
}

更新
https://gorm.io/zh_CN/docs/update.html
先查后改：先查到一个实例，对这个实例属性进行修改，然后调用db.Save()方法保存。
db.Save()方法会保存所有字段，对于没有主键的实例相当于Insert into，有主键的实例相当于Update。
```go
// 先查
var student Student
db.First(&student)
fmt.Println(student)
student.Age += 10
student.Name = "Sam"
// 后修改
db.Save(&student)
fmt.Println(student)
```
Update单个字段
```go
r := db.Model(&Student{ID: 13}).Update("age", 11) // 更新符合条件的所有记录的一个
字段
// UPDATE `students` SET `age`=11 WHERE `id` = 13
r := db.Model(&Student{}).Update("age", 11) // 没有指定ID或Where条件，是全表更新
age字段，这是非常危险的
fmt.Println(r.Error) // 会报WHERE conditions required错误，更新失败，这是一种保护
```
Updates更新多列
多个键值对，使用map或结构体实例传参。
同样，没有指定ID或Where条件，是全表更新age字段，这是非常危险的，报WHERE conditions
required错误

```go
r := db.Model(&Student{}).Where("age < ?", 20).Updates(map[string]interface{}
{"name": "John", "age": 23})
fmt.Println(r.Error)
```
```go
r := db.Model(&Student{}).Where("age < ?", 24).Updates(Student{Name: "John",
Age:18})
fmt.Println(r.Error)
```
删除
https://gorm.io/zh_CN/docs/delete.html
删除操作是危险的，慎重操作！
```go
result := db.Delete(&Student{})
fmt.Println(result.Error)
// 报WHERE conditions required错误，这是全表删除，危险
```
```go
result := db.Delete(&Student{}, 15) // 指定主键
fmt.Println(result.Error)
db.Delete(&Student{}, []int{15, 16, 18}) // DELETE FROM `students` WHERE
`students`.`id` IN (15,16,18)
```
```go
result := db.Where("id > ?", 15).Delete(&Student{}) // 删除符合条件的一批
fmt.Println(result.Error)
```
