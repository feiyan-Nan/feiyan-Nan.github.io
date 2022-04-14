---
sidebar: auto
---
# git
## 一、配置ssh
1. 设置user name和email
```bash
# 如果需要配置当前项目，则不用加--global
git config --global user.name 'heny'
git config --global user.email 'heny@qq.com'
```
2. 生成SSH密钥过程

（1）查看是否已经有了ssh密钥：cd ~/.ssh

路径：c:/用户/Administrator/.ssh   删除.ssh下面的所有文件

（2）生成密钥

```bash
ssh-keygen -t rsa -C 'heny@qq.com'   // 回车之后记得根据提示按下yes
```
注意：如果提示ssh-keygen不是内部命令或者其他的报错，则需要以下配置

找到git/usr/bin目录下的ssh-keygen.exe，之后配置到Path环境变量;

![image-20200412204637296](https://notecdn.hrhe.cn/images/git-01.png)

3. 生成密钥之后就可以去官网绑定了



### 配置多个ssh

1. 创建ssh key，名字随便写，后面地址记得修改为自己的.ssh地址，mac为~/.ssh，window为c盘下面的用户下面的.ssh

   ```bash
   ssh-keygen -t rsa -C "hny@q.com" -f ~/.ssh/id_rsa_gitlab
   ```

2. 创建一个config文件，没有后缀，编辑以下内容：

   ```bash
   # gitee
   Host gitee.com
   HostName gitee.com
   PreferredAuthentications publickey
   IdentityFile ~/.ssh/id_rsa.gitee
   
   # github
   Host github.com
   HostName github.com
   PreferredAuthentications publickey
   IdentityFile ~/.ssh/id_rsa.github
   
   # gitlab
   Host gitlab.com
   HostName gitlab.com
   PreferredAuthentications publickey
   IdentityFile ~/.ssh/id_rsa.gitlab
   ```

3. 最后进行测试连通性

   ```bash
   ssh -T git@gitlab.com
   ```


**注意**

1. 配置ssh后，拉项目仍然提示无权限，查看是否有`known_hosts`文件存在`.ssh`里面，如果没有的话在拉项目会提示生成，输入yes即可生成，如果回车则不会生成



## 二、项目初始化

1. 在git官网新建一个git仓库之后；

如果没有使用readme初始化，执行以下四步
```bash
git init  # 初始化
git add .   # 添加当前项目文件夹下的所有文件， 如果是./*则是当前文件夹下
git commit -m '描述'   # 给文件添加备注
git remote add origin 地址    # 添加远程仓库地址
git push -u origin master   # 把本地添加的文件上传到git;
```
2. 如果使用了readme初始化；
```bash
git clone 地址  # 克隆只需要操作一次
```
3. 当修改了文件之后想要上传代码
```bash
git add .
git commit -m '添加描述'
git pull   
git push
```
如果git pull拉下来的代码有冲突则需要先解决冲突问题，解决之后需要再次git add 重复第一二次，如果没有则直接git push

注意：push失败的情况

（1）文件为空

（2）创建文件之后没有commit




## 三、分支操作
### 分支常用命令

* `git branch` 查看本地分支
* `git branch -a` 查看所有分支
* `git branch -vv` 查看本地分支写远程分支的对比
* `git checkout <branch>` 切换到一个分支，本地没有的分支远程有的话也可以直接切换
* `git checkout -b dev` 创建一个新分支
* `git checkout -b dev origin/dev`  切换到一个新的分支，并追踪到远程分支上；
* `git push --set-upstream origin dev`  将本地新分支推到远程
* `git fetch` 拉取最新远程信息
* `git merge master` 合并master内容
* `git rebase dev2.0`    融合dev2.0分支最新的内容



### 分支命名规范

* `master`：master分支为主分支，也是用于部署生产环境的分支，master分支一般由其他分支进行合并，任何时间都不能直接修改master分支；
* `develop`：develop-4.0.0；分支为开发分支，一般开发新功能时，feature分支都是基于develop分支创建的；
* `feature`：feature-user；开发新功能时，以develop为基础创建feature分支
* `release`：release-4.0.0；release为预上线分支，发布提测
* `hotfix`：hotfix-***；线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支

![img](https://notecdn.hrhe.cn/images/3412338-53aedee7d8081020.png)

主分支master建议每次上线打上tag

```bash
git tag -a v0.1 -m '部署包版本名'
```



### 清理本地分支

```bash
git remote show origin
git remote prune origin
```



### 删除分支

>  删除不能删除远程的分支

（1）删除单个分支
```bash
git branch -D dev
```
（2）批量删除：删除除去master分支：

```bash
git checkout master
git branch | grep -v 'master' | xargs git branch -D
```



### gitlab分支介绍

所有分支针对`master`做比较，下图中，左边为落后`master`分支数量，右边为超前`master`分支数量；

![image-20200426124513175](https://notecdn.hrhe.cn/images/git-12.png)





### 删除中间的版本

```bash
git rebase -i commit-id
```

执行命令之后会弹出来一个vim编辑器，将要删除的版本的`pick`改为`drop`，之后保存，之后执行`git push -f -u`强制推送远程







### 常见分支问题

1. ignoring broken ref refs问题

    * 找到.git目录下refs/remotes/origin目录（子模块的这个目录是在主模块的.git目录下，因为子模块没有.git目录）
    * 删除里面的HEAD文件或者所有文件
    * 然后运行git fetch –all



## 四、commit

### commit 提交消息类型

- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
- revert：回滚某个更早之前的提交
- chore：不属于以上类型的其他类型



### 重复上次提交信息

`git commit --amend --no-edit`； 一般用于上次commit忘记修改的文件了；







## 四、常用指令

### git rebase

> git rebase会将当前分支的提交复制到指定的分支之上；

`git rebase master`    将master分支的commit合并到当前分支上

rebase可以保留一个漂亮的、线性的git历史记录；



**同一分支的合并**

当拉代码遇到冲突时，需要pull，这时，`git log --oneline --graph` 会发现多出了一个分叉，这时输入`git rebase`即可合并当前的分叉，之后执行push提交代码；

也可以直接：`git pull --rebase`；不需要pull之后再rebase；



**不同分支之间的合并**

```bash
# 当dev1分支修改后, 切换到dev2分支, 并rebase dev1分支
git checkout dev2
git rebase dev1
git checkout dev1
```

如果在rebase时，出现冲突，比如：代码修改

rebase冲突之后：`git rebase --continue`；因为之前的rebase其实只完成了一半；

参考文献：[Git rebase使用](https://www.jianshu.com/p/f7ed3dd0d2d8)



**不关心内容，自己合并冲突，递归解决**

```bash
git rebase -s recursive -X theirs <branch>
```

之后rebase冲突，只需要执行以下命令继续解决：

```bash
git add .
git rebase --continue
```



**产生分叉的条件**

1. 当push时，提示需要拉代码，这时pull之后再push，就会产生分叉，解决办法就是pull之后执行`git rebase`之后再提交即可
2. 基于master拉的dev分支，master提交了新的代码之后再合并dev分支，这时master有个单独的commit，就会产生分叉了，解决办法就是当merge分支代码时，如果出现分叉，尽量使用rebase，而不是使用merge



**分叉时rebase的使用**

当出现分叉时，哪个分支代码落后，就在哪个分支rebase最新的分支

如果代码发生冲突，则会在rebase时，让你解决，

* 冲突解决没有更改：`git rebase --skip`
* 冲突解决有更改：使用`git add .` and `git rebase --continue`

冲突解决完成之后，由于本地的分支与远程不一致，会让pull，这时使用 `git push -f`强制推送，强制推送之前尽量检查下之前的commit代码是否存在；

如果没有出现分叉，使用merge或者rebase都是一样的



**rebase时冲突过多**

检查是否有同一个message重复多次，将重复的message使用`git rebase -i`，之后drop掉重复message的commitId，这样就不会出现冲突了



### git stash
1. 为什么需要暂时：
   * （1）当我们写代码时，发现写错分支了，此时需要将代码保存到暂存区，切换到正确的分支再拉下来
   * （2）当我们修改了一些文件时，想查看修改的文件是否造成了其他问题，可以先保存在暂存区，测试完再拉下来

2. 基础使用
```bash
git stash # 提交到暂存区
git stash pop # 拉下来
```
3. 常用的git stash命令
* `git stash save 'message'`：执行存储时，添加备注，方便查找，git stash不方便查找
* `git stash list` ：查看stash了哪些存储
* `git stash show` ：显示做了哪些改动，默认show第一个存储，
* `git stash show stash@{1}` ： 显示第一个修改文件
* `git stash apply` ： 应用某个存储，但不会把存储从存储列表中删除，默认使用第一个
* `git stash apply stash@{1}` ：应用第一个
* `git stash pop` ： 命令恢复之前的缓存工作目录，将缓存堆栈中的对应stash删除
* `git stash pop stash@{1}`  ：应用指定的stash
* `git stash drop stash@{1}` ：丢弃第几个存储，从列表中删除这个存储
* `git stash clear` ： 删除所有缓存的stash；



注意：新增的文件，直接执行`stash`是不会被存储的，如果有新增文件的时候，需要首先执行git add添加新文件到git库中，不需要提交和`commit`，然后再执行`git stash`即可；



### git cherry-pick

如果需要合并所有的内容，直接使用merge即可，如果只需要部分内容，则使用`git cherry-pick`，需要切换到想要cherry-pick的分支

* 合并单个：`git cherry-pick commitId`  如果跟的是分支名，表示合并分支最新提交
* 合并多个：`git cherry-pick commitIdA commitIdB`
* 合并连续不包含A：`git cherry-pick commitIdA..commitIdB`
* 合并连续包含A：`git cherry-pick commitIdA^..commitIdB`

**其他操作**

* 如果合并过程中发生冲突，待解决冲突之后，执行`git add .`，之后执行`git cherry-pick --continue`
* 冲突之后放弃合并：`git cherry-pick --abort`
* 冲突之后直接退出：`git cherry-pick --quit`



参考地址：[阮一峰 git cherry-pick 教程](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)




## 五、用户管理
`git config --list`   查看git配置



## 六、版本管理

### 状态查看

`git status`  查看文件add的状态，以及远程是否有更新



### 日志查看

* `git log`  #  获取版本id

* `git reflog` # 查看所有的版本id，可以查看到回退之后的之前的版本

reflog可以查看到所有的操作信息，比如push、reset、commit等等；

比如：1-10的版本回退到1-8的版本，git log只能看到最新的8，reflog还可以看到10；



### 回退版本

* 软重置：`git reset --soft HEAD~2`   或id；

执行软重置不会移除提交之后加入的修改，但是会修改git的历史记录，当使用了reset可以使用status查看修改内容，意味着可以重新修改重新提交；

* 硬重置：`git reset --hard id`   不保留提交引入的修改，看不到之前的修改内容；

常用的回退版本命令：

```bash
git reset --hard id   # 回退本地代码库
git push -f -u origin master  # 推送到远程服务器
git pull  # 重新拉取代码
```

回退上一个版本：`git reset --hard head^`



### 添加多个仓库地址

配置远程仓库：`git remote add origin url`

如果不行重命名也可以：`git remote add originOther url`

一次推送到所有仓库：`git push --all` 

**set-url **

设置新的url地址：`git remote set-url origin url`

添加一个新的url地址：`git remote set-url --add origin url`

删除一个url地址：`git remote set-url --delete origin url`

使用set-url添加的新的地址，在push时会同时push两个





### 切换远程仓库地址

```bash
git remote -v # 查看本地仓库远程地址
git remote rm origin # 删除本地远程地址
git remote add origin 地址 # 添加远程仓库地址
git branch --set-upstream-to=origin/master master # 将本地分支追踪到远程master
```



### git项目迁移

```bash
git clone --bare git地址 # 拉下来之后是.git的文件夹
git push --mirror git地址  # 直接push到新的项目仓库
```






## 七、git常见问题
### 描述出错怎么修改描述

**第一种方法：**`git commit --amend`，之后直接修改描述保存即可

**第二种方法：**

2. 通过git log找到上一个提交的commit_id

![image](https://notecdn.hrhe.cn/images/git-02.png)

2. 通过：git reset --soft commit_id，执行一遍，之后就可以重新git commit了；



### 项目名字被修改，地址被更换

```bash
# 第一种
git remote set-url origin url # 重新设置远程地址

# 第二种
git remote rm origin # 删除跟踪远程
git remote add origin url # 重新配置远程地址
```



### 放弃本地修改

没有`git add .`的情况

* 放弃单个文件修改：`git checkout -- readme.md`
* 放弃所有修改：`git checkout .`

有`git add .`的情况

* 放弃单个文件：`git reset HEAD readme.md`
* 放弃所有：`git reset HEAD .`



### 修改错分支

1. 没有提交的情况

   * 无论有没有添加到暂存区都行（暂存区就是有commit代码）

     ```bash
     git checkout -b new_branch # 建立临时分支, 这样改动会被带到新分支
     git stash # 保存在栈区
     git checkout 目标分支
     git pull # 将代码拉下来, 避免解决冲突
     git stash pop # 将栈区内容取出放到当前分支
     ```

2. 已提交

   * 当前分支也需要内容

     ```bash
     git checkout targetBranch
     git cherry-pick commitId
     ```

   * 当前分支不需要内容

     ```bash
     git reset HEAD^ # 撤销最近一次提交
     ```

     

   







## 八、git统计代码量

修改since开始日期，和until到什么日期，如果不修改则是至今

如果单独查询某个用户，修改$name为用户邮箱
```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --since =2020-03-30 --until=2020-04-02 --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```
--since 限制显示输出的范围
* `--since`, `--after` 仅显示指定时间之后的提交
* `--until`, `--before`  仅显示指定时间之前的提交
* `--author` 仅显示指定作者相关的提交


例子：
* `git log --until=1.minute.ago` // 一分钟之前的所有log
* `git log --since=1.day.ago` // 一天之内的log
* `git log --since=1.month.age --until=2.weeks.age` // 一个月之前到半月之前的log



指定时间
```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --since ='2020-04-02 00:00:00' --until='2020-04-02 23:59:59' --numstat | awk '{ add += $1; subs += $2;  loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```



## 九、git其他操作

在一行查看提交日志：`git log --oneline --decorate --graph`

### git rm

* `git rm`：同时从工作区和索引中删除文件

* `git rm -r --cached`：从索引中删除文件，但是本地文件还在

* 常用的删除远程文件命令：

  ```bash
  git rm -r --cached target # 删除target文件
  git commit -m 'delete target'
  git push
  ```


### 打造自己的git bash

[https://blog.csdn.net/Dancer__Sky/article/details/81632640](https://blog.csdn.net/Dancer__Sky/article/details/81632640)



## 常用git命令

- 获取最后一个commitId： `git log -1 --pretty=%H`
- 获取当前远程比本地多几个commit：`git rev-list --count --left-only @{u}...HEAD`
- 获取当前分支：`git rev-parse --abbrev-ref HEAD`



## 十、vscode操作git

### vscode配置git环境
终端直接使用git方式，带有颜色

（1）将以下代码添加到vscode设置里面

路径：点击小齿轮-->设置-->点击以json文件编辑，并添加进去;
```json
"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
```
（2）之后按ctrl+`  可以打开终端;

输入cmd可以转回原生的cmd终端

输入bash可以转回git终端;

### vscode文件后面的字母意思
A: 你本地新增的文件（服务器上没有）.

C: 文件的一个新拷贝.

D: 你本地删除的文件（服务器上还在）.

M: 文件的内容或者mode被修改了.

R: 文件名被修改了。

T: 文件的类型被修改了。

U: 文件没有被合并(你需要完成合并才能进行提交)。

X: 未知状态(很可能是遇到git的bug了，你可以向git提交bug report)。


### vscode上传代码
1. 点击分支

![image](https://notecdn.hrhe.cn/images/git-03.png)

2. 点击对勾，之后弹出提示框，提示输入commit

![image](https://notecdn.hrhe.cn/images/git-04.png)

3. 点击推送，或者推送到（会提示选择分支）；

![image](https://notecdn.hrhe.cn/images/git-05.png)

4. 之后去git里面查看是否已经提交了代码；

![image](https://notecdn.hrhe.cn/images/git-06.png)


### vscode切换分支
![image](https://notecdn.hrhe.cn/images/git-07.png)



## 十一、vscode插件

### gitlens 

使用gitlens使开发更方便，代码管理更容易

1. 搜索：gitlens  并安装，之后在每一行代码后面可以清晰的看见

![image](https://notecdn.hrhe.cn/images/git-08.png)

2. 侧边栏工具使用

![image](https://notecdn.hrhe.cn/images/git-09.png)

![image](https://notecdn.hrhe.cn/images/git-10.png)

3. 右上角实时对比分支修改内容

![image](https://notecdn.hrhe.cn/images/git-11.png)



### git graph

方便查看git分支提交记录，可以直接基于一个log创建一个新的分支、

两种打开方式：

![image-20200729003318782](https://notecdn.hrhe.cn/images/image-20200729003318782.png)![image-20200814102618851](https://notecdn.hrhe.cn/images/image-20200814102618851.png)









## 十二、github搜索技巧

![image](https://notecdn.hrhe.cn/images/image-20200715162848585.png)



## 参考链接

* [您必须知道的Git分支开发规范](https://www.cnblogs.com/hezhiying/p/9292314.html)

