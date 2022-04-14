# steam打开epic游戏

1. 下载地址：https://github.com/derrod/legendary

   下载`legendary`和`legendary.exe`两个文件

2. 常用命令：

   ```bash
   # 授权，需要退出科学上网
   legendary auth
   
   # 显示游戏列表
   legendary list-games
   
   # 安装游戏，需要跟游戏列表的app name
   legendary install appName
   
   # 从已安装目录导入游戏
   legendary import-game appName filePath
   
   # 查看已安装的游戏列表，加check-updates可以验证游戏更新
   legendary list-installed --check-updates
   ```

3. steam添加非steam游戏，并添加`legendary.exe`文件

4. 之后右键游戏属性，更改名字和图标，启动选项输入`launch appName`即可

4. 游戏美化图标网址：[https://www.steamgriddb.com/](https://www.steamgriddb.com/)