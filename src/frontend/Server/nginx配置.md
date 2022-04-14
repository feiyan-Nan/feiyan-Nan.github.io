# nginx配置

## 搭建静态站点

```nginx
# 虚拟主机server块
server {
    # 端口
    listen   80;
    # 匹配请求中的host值
    server_name  www.heny.vip;
    
    # 监听请求路径
    location / {
        # return 503; # 可以直接指定返回的code
        # 查找目录
        root /source;
        # 默认查找
        index index.html index.htm;
    }
}
```

配置完之后执行`nginx -t`查看是否有错误，如果看到下面的就是成功了

如果封装的docker执行：

* 执行`docker ps` 查看`nginx`名字
* `docker exec -it data_nginx_1 nginx -t`
* 进入nginx容器：`docker exec -it data_nginx_1 bash`；

```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```



## 配置参数

```nginx
server 		# 配置虚拟主机的相关参数，可以有多个 
server_name # 通过请求中的host值 找到对应的虚拟主机的配置 
location 	# 配置请求路由，处理相关页面情况 
root 		# 查找资源的路径
```



## 常用指令

```bash
nginx -t 		# 检查配置文件是否有语法错误 
nginx -s reload # 向主进程发送信号，重新加载配置文件 
nginx -s stop 	# 快速关闭 
nginx -s quit	# 等待工作进程处理完成后关闭
```






## 配置文件

```nginx
# 定义 nginx 运行的用户和用户组
# user  nginx;
# CPU 总核心数
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
# 进程文件
pid        /var/run/nginx.pid;


events {
    # 最大访问量
    worker_connections  1024;
}

http: {
  upstream jsanntq {
    # upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。
    server 192.168.1.20:80 weight=3;
    server 192.168.1.21:80 weight=2;
    server 192.168.1.22:80 weight=3;
  }
  upstream jsanntqAdmin{
    # 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。
    backup;
    # 保持会话，保证同一客户端始终访问一台服务器。
    ip_hash;
    # 优先分配最少连接数的服务器，避免服务器超载请求过多。
    least_conn;
    # 设置服务器的权重，默认为1，权重大的会被优先分配。
    server 192.168.1.20:80 weight=3;
  }
  server {
    # 端口
    # 如果 Host 头部不匹配任何一个 server_name ,Nginx 将请求路由到默认虚拟服务器。
    # 默认虚拟服务器是指：nginx.conf 文件中第一个 server 或者 显式用 default_server 声明
    listen      80 default_server;
    #域名
    server_name www.jsanntq.cn
    # 开启gzip 压缩
    gzip on;
    # 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）
    gzip_http_version 1.1;
    # 设置压缩级别，压缩级别越高压缩时间越长  （1-9）
    gzip_comp_level 4;
    # 设置压缩的最小字节数， 页面Content-Length获取
    gzip_min_length 1000;
    # 设置压缩文件的类型  （text/html)
    gzip_types text/plain application/javascript text/css;

    location / {
        # 查找目录
        root /data/www/blog;
        # vue-router history模式配置
        try_files $uri $uri/ /admin/index.html;
    }

    location /blog {
        # 代理 proxy_pass指令的参数为：协议+主机名+端口号
        # jsanntq对应upstream后定义的名称
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Scheme $scheme;
        proxy_pass http://jsanntq;

        try_files $uri $uri/ /blog/index.html;
    }

    location /admin/ {
      proxy_pass http://jsanntqAdmin;
      try_files $uri $uri/ /admin/index.html;
    }
  }
  # 多服务配置 用于配置多个项目
  server {
    listen      80;
    #多域名
    server_name ts.jsanntq.cn blog.jsanntq.cn
    location / {
        proxy_pass http://localhost:8080;
    }
  }
}
```



## 配置gzip压缩

```nginx
# 开启gzip 压缩
gzip on;
# 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）
gzip_http_version 1.1;
# 设置压缩级别，压缩级别越高压缩时间越长  （1-9）
gzip_comp_level 4;
# 设置压缩的最小字节数， 页面Content-Length获取
gzip_min_length 1000;
# 设置压缩文件的类型  （text/html)
gzip_types text/plain application/javascript text/css;
```

添加到对应的`conf`文件`server`下面，或者添加到全局的`nginx`配置`http`下面；



## 代理node项目

```nginx
server {
    listen	80;
    server_name	chat-server.heny.vip;
    
    location ~ / {
        # 本地地址不行就填服务器ip地址
        proxy_pass http://127.0.0.1:8888;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**node 项目上传流程**

1. 打包除node_modules所有文件以及文件夹
2. 上传打包文件
3. 解压文件
4. 安装依赖
5. 启动项目



## 配置https

```nginx
server {
    listen	443 ssl;
    ssl_certificate /etc/nginx/crt/3710899_web.heny.vip.pem;
    ssl_certificate_key /etc/nginx/crt/3710899_web.heny.vip.key;
    
    # 如果有
    include /etc/nginx/https-base.conf;
        
    # 强制转发https
    if( $scheme = http ) {
        # 如果$host不行就更换$server_name
        return 301 https://$host$request_uri;
    }
}
```

`/etc/nginx/crt`为代理过的地址，在`/data/docker-compose.yml`查看



## 配置http2.0

1. 在ssl目录下面生成`dhparam.pem`文件

```bash
openssl dhparam -out dhparam.pem 2048
```

2. 新建`conf.d/https-base.conf`文件;

```nginx
listen                  443 ssl http2;
listen                  [::]:443 ssl http2;
# 配置共享会话缓存大小
ssl_session_cache       shared:SSL:10m;
# 配置会话超时时间
ssl_session_timeout     10m;

# 优先采取服务器算法
ssl_prefer_server_ciphers on;
# 使用 DH 文件
ssl_dhparam 			ssl/dhparam.pem;
# 协议版本
ssl_protocols           TLSv1 TLSv1.1 TLSv1.2;
# 定义算法
ssl_ciphers			EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;

# 启用 HSTS 。允许 https 网站要求浏览器总是通过 https 来访问
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains;preload" always;
# 减少点击劫持
add_header X-Frame-Options DENY;
# 禁止服务器自动解析资源类型
add_header X-Content-Type-Options nosniff;
# 防XSS攻擊
add_header X-Xss-Protection 1;
```

3. 之后在需要的文件里面加入即可

```nginx
server {
    include https-base.conf
}
```

4. `[::]:`表示ipv6配置



### nginx不生效问题排查

1. 配置https之后需要放开443端口，首先排查安全组是否放开端口号

2. 查看443端口状态：
   1. ` netstat -ano -p tcp | find "443" >nul 2>nul && echo 443端口已开启 || echo 443端口未开启`
   2. `lsof -i:443`   如果有的话则表示开启了
   3. `telnet 1.1.1.1 443` 如果能连接成功表示通了
3. 如果是docker启动的nginx，docker需要配置443；



## 动态匹配（请求过滤）

> 通常在开发环境或者测试环境的时候呢我们修改了代码，因为浏览器缓存，可能不会生效，需要手动清除缓存，才能看到修改后的效果，这里我们做一个配置让浏览器不缓存相关的资源。





## 配置nginx反向代理

注意api必须加上，检查api的地方，修改之后记得重启nginx服务器；

```nginx
location /api {
    rewrite ^.+api/?(.*)$ /$1 break;
    proxy_pass http://39.107.127.240:3000;
    # 作用和proxyTable差不多  上传时记得删除这句话
}
```



## nginx常用配置

```nginx
server {
    listen 80;
    server_name wyy.heny.vip;

    # 避免非root路径404
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 解决跨域
    location /api {
        proxy_pass http://wyy.heny.vip;
    }
    
    # 不区分大小写, 访问json文件
    location ~.*\.json {
        
    }

    # 为带hash值的文件配置永久缓存
    location ~* \.(?:css|js)$ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public";
    }

    location ~ ^.+\..+$ {
        try_files $uri =404;
    }
}
```



## 常见问题

### 解决socket中nginx转发问题

```nginx
server {
    listen       80;
    server_name  school.godotdotdot.com;
    charset utf-8;

    location ~ / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_connect_timeout 60;
        proxy_read_timeout 600;
        proxy_send_timeout 600;
    }
	error_page  404			/404.html;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```



## nginx重定向

https://www.cnblogs.com/weiyiming007/p/11417320.html



## 参考链接

* [http://jsanntq.cn/2020/04/07/Nginx/](http://jsanntq.cn/2020/04/07/Nginx/)

* [快狗打车前端团队 前端想要了解的Nginx](https://juejin.im/post/5cae9de95188251ae2324ec3)

* [卖好车大前端团队 nginx 配置 https](https://juejin.im/post/5e44a2aa6fb9a07c9f3fd170#heading-15)

  