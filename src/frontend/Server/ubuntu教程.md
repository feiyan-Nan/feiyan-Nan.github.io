# ubuntu配置

将包提升到最新：

```bash
sudo apt update && sudo apt upgrade -y
```



## ubuntu系统目录

* 搭建静态网站：`/data/html/` 放置静态文件
* 配置nginx：`/data/config/nginx/conf.d/`
* 配置之后重启docker：`docker restart data_nginx_1`
* 查看错误日志： 
  * `docker logs data_nginx_1`
  * `tail /data/log/nginx/error.log`
* 配置网站的root根路径：`/usr/share/nginx/html` 开头，文件放在`/data/html`下
* 查看对应目录：`cat /data/docker-compose.yml`
* 修改vim配置：`vim /etc/vim/vimrc`





## ubuntu下安装mongodb

1. 安装

   ```bash
   sudo apt install mongodb
   ```

2. 使用命令

   * `sudo systemctl status mongodb`  查看状态 
   * `sudo systemctl stop mongodb`  停止
   * `sudo systemctl start mongodb`  启动
   * `sudo systemctl restart mongodb` 重启

3. 修改是否自动随系统启动（默认启用）

   * `sudo systemctl disable mongodb` 
   * `sudo systemctl enable mongodb`

4. `mongo` 开始使用数据库

5. 卸载

   * `sudo systemctl stop mongodb` 
   * `sudo apt purge mongodb` 
   * `sudo apt autoremove`