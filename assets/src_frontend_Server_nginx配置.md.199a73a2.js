import{_ as n,c as s,o as a,d as e}from"./app.7277c524.js";const v='{"title":"nginx\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u642D\u5EFA\u9759\u6001\u7AD9\u70B9","slug":"\u642D\u5EFA\u9759\u6001\u7AD9\u70B9"},{"level":2,"title":"\u914D\u7F6E\u53C2\u6570","slug":"\u914D\u7F6E\u53C2\u6570"},{"level":2,"title":"\u5E38\u7528\u6307\u4EE4","slug":"\u5E38\u7528\u6307\u4EE4"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u914D\u7F6Egzip\u538B\u7F29","slug":"\u914D\u7F6Egzip\u538B\u7F29"},{"level":2,"title":"\u4EE3\u7406node\u9879\u76EE","slug":"\u4EE3\u7406node\u9879\u76EE"},{"level":2,"title":"\u914D\u7F6Ehttps","slug":"\u914D\u7F6Ehttps"},{"level":2,"title":"\u914D\u7F6Ehttp2.0","slug":"\u914D\u7F6Ehttp2-0"},{"level":3,"title":"nginx\u4E0D\u751F\u6548\u95EE\u9898\u6392\u67E5","slug":"nginx\u4E0D\u751F\u6548\u95EE\u9898\u6392\u67E5"},{"level":2,"title":"\u52A8\u6001\u5339\u914D\uFF08\u8BF7\u6C42\u8FC7\u6EE4\uFF09","slug":"\u52A8\u6001\u5339\u914D\uFF08\u8BF7\u6C42\u8FC7\u6EE4\uFF09"},{"level":2,"title":"\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406","slug":"\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406"},{"level":2,"title":"nginx\u5E38\u7528\u914D\u7F6E","slug":"nginx\u5E38\u7528\u914D\u7F6E"},{"level":2,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898"},{"level":3,"title":"\u89E3\u51B3socket\u4E2Dnginx\u8F6C\u53D1\u95EE\u9898","slug":"\u89E3\u51B3socket\u4E2Dnginx\u8F6C\u53D1\u95EE\u9898"},{"level":2,"title":"nginx\u91CD\u5B9A\u5411","slug":"nginx\u91CD\u5B9A\u5411"},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5"}],"relativePath":"src/frontend/Server/nginx\u914D\u7F6E.md","lastUpdated":1649840977554}',t={},p=e(`<h1 id="nginx\u914D\u7F6E" tabindex="-1">nginx\u914D\u7F6E <a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="\u642D\u5EFA\u9759\u6001\u7AD9\u70B9" tabindex="-1">\u642D\u5EFA\u9759\u6001\u7AD9\u70B9 <a class="header-anchor" href="#\u642D\u5EFA\u9759\u6001\u7AD9\u70B9" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token comment"># \u865A\u62DF\u4E3B\u673Aserver\u5757</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u7AEF\u53E3</span>
    <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u5339\u914D\u8BF7\u6C42\u4E2D\u7684host\u503C</span>
    <span class="token directive"><span class="token keyword">server_name</span>  www.heny.vip</span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u76D1\u542C\u8BF7\u6C42\u8DEF\u5F84</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment"># return 503; # \u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u8FD4\u56DE\u7684code</span>
        <span class="token comment"># \u67E5\u627E\u76EE\u5F55</span>
        <span class="token directive"><span class="token keyword">root</span> /source</span><span class="token punctuation">;</span>
        <span class="token comment"># \u9ED8\u8BA4\u67E5\u627E</span>
        <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u5B8C\u4E4B\u540E\u6267\u884C<code>nginx -t</code>\u67E5\u770B\u662F\u5426\u6709\u9519\u8BEF\uFF0C\u5982\u679C\u770B\u5230\u4E0B\u9762\u7684\u5C31\u662F\u6210\u529F\u4E86</p><p>\u5982\u679C\u5C01\u88C5\u7684docker\u6267\u884C\uFF1A</p><ul><li>\u6267\u884C<code>docker ps</code> \u67E5\u770B<code>nginx</code>\u540D\u5B57</li><li><code>docker exec -it data_nginx_1 nginx -t</code></li><li>\u8FDB\u5165nginx\u5BB9\u5668\uFF1A<code>docker exec -it data_nginx_1 bash</code>\uFF1B</li></ul><div class="language-bash"><pre><code>nginx: the configuration <span class="token function">file</span> /etc/nginx/nginx.conf syntax is ok
nginx: configuration <span class="token function">file</span> /etc/nginx/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre></div><h2 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1">\u914D\u7F6E\u53C2\u6570 <a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code>server 		<span class="token comment"># \u914D\u7F6E\u865A\u62DF\u4E3B\u673A\u7684\u76F8\u5173\u53C2\u6570\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A </span>
server_name <span class="token comment"># \u901A\u8FC7\u8BF7\u6C42\u4E2D\u7684host\u503C \u627E\u5230\u5BF9\u5E94\u7684\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E </span>
location 	<span class="token comment"># \u914D\u7F6E\u8BF7\u6C42\u8DEF\u7531\uFF0C\u5904\u7406\u76F8\u5173\u9875\u9762\u60C5\u51B5 </span>
root 		<span class="token comment"># \u67E5\u627E\u8D44\u6E90\u7684\u8DEF\u5F84</span>
</code></pre></div><h2 id="\u5E38\u7528\u6307\u4EE4" tabindex="-1">\u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>nginx -t 		<span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u6709\u8BED\u6CD5\u9519\u8BEF </span>
nginx -s reload <span class="token comment"># \u5411\u4E3B\u8FDB\u7A0B\u53D1\u9001\u4FE1\u53F7\uFF0C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6 </span>
nginx -s stop 	<span class="token comment"># \u5FEB\u901F\u5173\u95ED </span>
nginx -s quit	<span class="token comment"># \u7B49\u5F85\u5DE5\u4F5C\u8FDB\u7A0B\u5904\u7406\u5B8C\u6210\u540E\u5173\u95ED</span>
</code></pre></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token comment"># \u5B9A\u4E49 nginx \u8FD0\u884C\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4</span>
<span class="token comment"># user  nginx;</span>
<span class="token comment"># CPU \u603B\u6838\u5FC3\u6570</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>
<span class="token comment"># \u8FDB\u7A0B\u6587\u4EF6</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u6700\u5927\u8BBF\u95EE\u91CF</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http:</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">upstream</span> jsanntq</span> <span class="token punctuation">{</span>
    <span class="token comment"># upstream \u7684\u8D1F\u8F7D\u5747\u8861\uFF0Cweight \u662F\u6743\u91CD\uFF0C\u53EF\u4EE5\u6839\u636E\u673A\u5668\u914D\u7F6E\u5B9A\u4E49\u6743\u91CD\u3002weigth \u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927\u3002</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.20:80 weight=3</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.21:80 weight=2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.22:80 weight=3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">upstream</span> jsanntqAdmin</span><span class="token punctuation">{</span>
    <span class="token comment"># \u6807\u8BB0\u4E3A\u5907\u4EFD\u670D\u52A1\u5668\u3002\u5F53\u4E3B\u670D\u52A1\u5668\u4E0D\u53EF\u7528\u65F6\uFF0C\u5C06\u4F20\u9012\u4E0E\u5907\u4EFD\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u3002</span>
    <span class="token directive"><span class="token keyword">backup</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u4FDD\u6301\u4F1A\u8BDD\uFF0C\u4FDD\u8BC1\u540C\u4E00\u5BA2\u6237\u7AEF\u59CB\u7EC8\u8BBF\u95EE\u4E00\u53F0\u670D\u52A1\u5668\u3002</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u4F18\u5148\u5206\u914D\u6700\u5C11\u8FDE\u63A5\u6570\u7684\u670D\u52A1\u5668\uFF0C\u907F\u514D\u670D\u52A1\u5668\u8D85\u8F7D\u8BF7\u6C42\u8FC7\u591A\u3002</span>
    <span class="token directive"><span class="token keyword">least_conn</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u670D\u52A1\u5668\u7684\u6743\u91CD\uFF0C\u9ED8\u8BA4\u4E3A1\uFF0C\u6743\u91CD\u5927\u7684\u4F1A\u88AB\u4F18\u5148\u5206\u914D\u3002</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.20:80 weight=3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u7AEF\u53E3</span>
    <span class="token comment"># \u5982\u679C Host \u5934\u90E8\u4E0D\u5339\u914D\u4EFB\u4F55\u4E00\u4E2A server_name ,Nginx \u5C06\u8BF7\u6C42\u8DEF\u7531\u5230\u9ED8\u8BA4\u865A\u62DF\u670D\u52A1\u5668\u3002</span>
    <span class="token comment"># \u9ED8\u8BA4\u865A\u62DF\u670D\u52A1\u5668\u662F\u6307\uFF1Anginx.conf \u6587\u4EF6\u4E2D\u7B2C\u4E00\u4E2A server \u6216\u8005 \u663E\u5F0F\u7528 default_server \u58F0\u660E</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>
    <span class="token comment">#\u57DF\u540D</span>
    <span class="token directive"><span class="token keyword">server_name</span> www.jsanntq.cn
    <span class="token comment"># \u5F00\u542Fgzip \u538B\u7F29</span>
    gzip <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6Egzip\u6240\u9700\u7684http\u534F\u8BAE\u6700\u4F4E\u7248\u672C \uFF08HTTP/1.1, HTTP/1.0\uFF09</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u7EA7\u522B\uFF0C\u538B\u7F29\u7EA7\u522B\u8D8A\u9AD8\u538B\u7F29\u65F6\u95F4\u8D8A\u957F  \uFF081-9\uFF09</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">4</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u7684\u6700\u5C0F\u5B57\u8282\u6570\uFF0C \u9875\u9762Content-Length\u83B7\u53D6</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u6587\u4EF6\u7684\u7C7B\u578B  \uFF08text/html)</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript text/css</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u67E5\u627E\u76EE\u5F55</span>
        <span class="token directive"><span class="token keyword">root</span> /data/www/blog</span><span class="token punctuation">;</span>
        <span class="token comment"># vue-router history\u6A21\u5F0F\u914D\u7F6E</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /admin/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /blog</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u4EE3\u7406 proxy_pass\u6307\u4EE4\u7684\u53C2\u6570\u4E3A\uFF1A\u534F\u8BAE+\u4E3B\u673A\u540D+\u7AEF\u53E3\u53F7</span>
        <span class="token comment"># jsanntq\u5BF9\u5E94upstream\u540E\u5B9A\u4E49\u7684\u540D\u79F0</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://jsanntq</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /blog/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /admin/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span> http://jsanntqAdmin</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /admin/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment"># \u591A\u670D\u52A1\u914D\u7F6E \u7528\u4E8E\u914D\u7F6E\u591A\u4E2A\u9879\u76EE</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token comment">#\u591A\u57DF\u540D</span>
    <span class="token directive"><span class="token keyword">server_name</span> ts.jsanntq.cn blog.jsanntq.cn
    location /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u914D\u7F6Egzip\u538B\u7F29" tabindex="-1">\u914D\u7F6Egzip\u538B\u7F29 <a class="header-anchor" href="#\u914D\u7F6Egzip\u538B\u7F29" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token comment"># \u5F00\u542Fgzip \u538B\u7F29</span>
<span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment"># \u8BBE\u7F6Egzip\u6240\u9700\u7684http\u534F\u8BAE\u6700\u4F4E\u7248\u672C \uFF08HTTP/1.1, HTTP/1.0\uFF09</span>
<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
<span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u7EA7\u522B\uFF0C\u538B\u7F29\u7EA7\u522B\u8D8A\u9AD8\u538B\u7F29\u65F6\u95F4\u8D8A\u957F  \uFF081-9\uFF09</span>
<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">4</span></span><span class="token punctuation">;</span>
<span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u7684\u6700\u5C0F\u5B57\u8282\u6570\uFF0C \u9875\u9762Content-Length\u83B7\u53D6</span>
<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
<span class="token comment"># \u8BBE\u7F6E\u538B\u7F29\u6587\u4EF6\u7684\u7C7B\u578B  \uFF08text/html)</span>
<span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript text/css</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6DFB\u52A0\u5230\u5BF9\u5E94\u7684<code>conf</code>\u6587\u4EF6<code>server</code>\u4E0B\u9762\uFF0C\u6216\u8005\u6DFB\u52A0\u5230\u5168\u5C40\u7684<code>nginx</code>\u914D\u7F6E<code>http</code>\u4E0B\u9762\uFF1B</p><h2 id="\u4EE3\u7406node\u9879\u76EE" tabindex="-1">\u4EE3\u7406node\u9879\u76EE <a class="header-anchor" href="#\u4EE3\u7406node\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>	<span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>	chat-server.heny.vip</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> ~ /</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u672C\u5730\u5730\u5740\u4E0D\u884C\u5C31\u586B\u670D\u52A1\u5668ip\u5730\u5740</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8888</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&#39;upgrade&#39;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_bypass</span> <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>node \u9879\u76EE\u4E0A\u4F20\u6D41\u7A0B</strong></p><ol><li>\u6253\u5305\u9664node_modules\u6240\u6709\u6587\u4EF6\u4EE5\u53CA\u6587\u4EF6\u5939</li><li>\u4E0A\u4F20\u6253\u5305\u6587\u4EF6</li><li>\u89E3\u538B\u6587\u4EF6</li><li>\u5B89\u88C5\u4F9D\u8D56</li><li>\u542F\u52A8\u9879\u76EE</li></ol><h2 id="\u914D\u7F6Ehttps" tabindex="-1">\u914D\u7F6Ehttps <a class="header-anchor" href="#\u914D\u7F6Ehttps" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>	<span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/nginx/crt/3710899_web.heny.vip.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/crt/3710899_web.heny.vip.key</span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u5982\u679C\u6709</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/https-base.conf</span><span class="token punctuation">;</span>
        
    <span class="token comment"># \u5F3A\u5236\u8F6C\u53D1https</span>
    <span class="token directive"><span class="token keyword">if(</span> <span class="token variable">$scheme</span> = http )</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u5982\u679C$host\u4E0D\u884C\u5C31\u66F4\u6362$server_name</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>/etc/nginx/crt</code>\u4E3A\u4EE3\u7406\u8FC7\u7684\u5730\u5740\uFF0C\u5728<code>/data/docker-compose.yml</code>\u67E5\u770B</p><h2 id="\u914D\u7F6Ehttp2-0" tabindex="-1">\u914D\u7F6Ehttp2.0 <a class="header-anchor" href="#\u914D\u7F6Ehttp2-0" aria-hidden="true">#</a></h2><ol><li>\u5728ssl\u76EE\u5F55\u4E0B\u9762\u751F\u6210<code>dhparam.pem</code>\u6587\u4EF6</li></ol><div class="language-bash"><pre><code>openssl dhparam -out dhparam.pem <span class="token number">2048</span>
</code></pre></div><ol start="2"><li>\u65B0\u5EFA<code>conf.d/https-base.conf</code>\u6587\u4EF6;</li></ol><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">listen</span>                  <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">listen</span>                  [::]:443 ssl http2</span><span class="token punctuation">;</span>
<span class="token comment"># \u914D\u7F6E\u5171\u4EAB\u4F1A\u8BDD\u7F13\u5B58\u5927\u5C0F</span>
<span class="token directive"><span class="token keyword">ssl_session_cache</span>       shared:SSL:10m</span><span class="token punctuation">;</span>
<span class="token comment"># \u914D\u7F6E\u4F1A\u8BDD\u8D85\u65F6\u65F6\u95F4</span>
<span class="token directive"><span class="token keyword">ssl_session_timeout</span>     <span class="token number">10m</span></span><span class="token punctuation">;</span>

<span class="token comment"># \u4F18\u5148\u91C7\u53D6\u670D\u52A1\u5668\u7B97\u6CD5</span>
<span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment"># \u4F7F\u7528 DH \u6587\u4EF6</span>
<span class="token directive"><span class="token keyword">ssl_dhparam</span> 			ssl/dhparam.pem</span><span class="token punctuation">;</span>
<span class="token comment"># \u534F\u8BAE\u7248\u672C</span>
<span class="token directive"><span class="token keyword">ssl_protocols</span>           TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
<span class="token comment"># \u5B9A\u4E49\u7B97\u6CD5</span>
<span class="token directive"><span class="token keyword">ssl_ciphers</span>			EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span class="token punctuation">;</span>

<span class="token comment"># \u542F\u7528 HSTS \u3002\u5141\u8BB8 https \u7F51\u7AD9\u8981\u6C42\u6D4F\u89C8\u5668\u603B\u662F\u901A\u8FC7 https \u6765\u8BBF\u95EE</span>
<span class="token directive"><span class="token keyword">add_header</span> Strict-Transport-Security <span class="token string">&quot;max-age=31536000; includeSubDomains;preload&quot;</span> always</span><span class="token punctuation">;</span>
<span class="token comment"># \u51CF\u5C11\u70B9\u51FB\u52AB\u6301</span>
<span class="token directive"><span class="token keyword">add_header</span> X-Frame-Options DENY</span><span class="token punctuation">;</span>
<span class="token comment"># \u7981\u6B62\u670D\u52A1\u5668\u81EA\u52A8\u89E3\u6790\u8D44\u6E90\u7C7B\u578B</span>
<span class="token directive"><span class="token keyword">add_header</span> X-Content-Type-Options nosniff</span><span class="token punctuation">;</span>
<span class="token comment"># \u9632XSS\u653B\u64CA</span>
<span class="token directive"><span class="token keyword">add_header</span> X-Xss-Protection <span class="token number">1</span></span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u4E4B\u540E\u5728\u9700\u8981\u7684\u6587\u4EF6\u91CC\u9762\u52A0\u5165\u5373\u53EF</li></ol><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    include https-base.conf
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li><code>[::]:</code>\u8868\u793Aipv6\u914D\u7F6E</li></ol><h3 id="nginx\u4E0D\u751F\u6548\u95EE\u9898\u6392\u67E5" tabindex="-1">nginx\u4E0D\u751F\u6548\u95EE\u9898\u6392\u67E5 <a class="header-anchor" href="#nginx\u4E0D\u751F\u6548\u95EE\u9898\u6392\u67E5" aria-hidden="true">#</a></h3><ol><li><p>\u914D\u7F6Ehttps\u4E4B\u540E\u9700\u8981\u653E\u5F00443\u7AEF\u53E3\uFF0C\u9996\u5148\u6392\u67E5\u5B89\u5168\u7EC4\u662F\u5426\u653E\u5F00\u7AEF\u53E3\u53F7</p></li><li><p>\u67E5\u770B443\u7AEF\u53E3\u72B6\u6001\uFF1A</p><ol><li><code> netstat -ano -p tcp | find &quot;443&quot; &gt;nul 2&gt;nul &amp;&amp; echo 443\u7AEF\u53E3\u5DF2\u5F00\u542F || echo 443\u7AEF\u53E3\u672A\u5F00\u542F</code></li><li><code>lsof -i:443</code> \u5982\u679C\u6709\u7684\u8BDD\u5219\u8868\u793A\u5F00\u542F\u4E86</li><li><code>telnet 1.1.1.1 443</code> \u5982\u679C\u80FD\u8FDE\u63A5\u6210\u529F\u8868\u793A\u901A\u4E86</li></ol></li><li><p>\u5982\u679C\u662Fdocker\u542F\u52A8\u7684nginx\uFF0Cdocker\u9700\u8981\u914D\u7F6E443\uFF1B</p></li></ol><h2 id="\u52A8\u6001\u5339\u914D\uFF08\u8BF7\u6C42\u8FC7\u6EE4\uFF09" tabindex="-1">\u52A8\u6001\u5339\u914D\uFF08\u8BF7\u6C42\u8FC7\u6EE4\uFF09 <a class="header-anchor" href="#\u52A8\u6001\u5339\u914D\uFF08\u8BF7\u6C42\u8FC7\u6EE4\uFF09" aria-hidden="true">#</a></h2><blockquote><p>\u901A\u5E38\u5728\u5F00\u53D1\u73AF\u5883\u6216\u8005\u6D4B\u8BD5\u73AF\u5883\u7684\u65F6\u5019\u5462\u6211\u4EEC\u4FEE\u6539\u4E86\u4EE3\u7801\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u53EF\u80FD\u4E0D\u4F1A\u751F\u6548\uFF0C\u9700\u8981\u624B\u52A8\u6E05\u9664\u7F13\u5B58\uFF0C\u624D\u80FD\u770B\u5230\u4FEE\u6539\u540E\u7684\u6548\u679C\uFF0C\u8FD9\u91CC\u6211\u4EEC\u505A\u4E00\u4E2A\u914D\u7F6E\u8BA9\u6D4F\u89C8\u5668\u4E0D\u7F13\u5B58\u76F8\u5173\u7684\u8D44\u6E90\u3002</p></blockquote><h2 id="\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406" tabindex="-1">\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406 <a class="header-anchor" href="#\u914D\u7F6Enginx\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a></h2><p>\u6CE8\u610Fapi\u5FC5\u987B\u52A0\u4E0A\uFF0C\u68C0\u67E5api\u7684\u5730\u65B9\uFF0C\u4FEE\u6539\u4E4B\u540E\u8BB0\u5F97\u91CD\u542Fnginx\u670D\u52A1\u5668\uFF1B</p><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^.+api/?(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://39.107.127.240:3000</span><span class="token punctuation">;</span>
    <span class="token comment"># \u4F5C\u7528\u548CproxyTable\u5DEE\u4E0D\u591A  \u4E0A\u4F20\u65F6\u8BB0\u5F97\u5220\u9664\u8FD9\u53E5\u8BDD</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="nginx\u5E38\u7528\u914D\u7F6E" tabindex="-1">nginx\u5E38\u7528\u914D\u7F6E <a class="header-anchor" href="#nginx\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> wyy.heny.vip</span><span class="token punctuation">;</span>

    <span class="token comment"># \u907F\u514D\u975Eroot\u8DEF\u5F84404</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># \u89E3\u51B3\u8DE8\u57DF</span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://wyy.heny.vip</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># \u4E0D\u533A\u5206\u5927\u5C0F\u5199, \u8BBF\u95EEjson\u6587\u4EF6</span>
    <span class="token directive"><span class="token keyword">location</span> ~.*\\.json</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment"># \u4E3A\u5E26hash\u503C\u7684\u6587\u4EF6\u914D\u7F6E\u6C38\u4E45\u7F13\u5B58</span>
    <span class="token directive"><span class="token keyword">location</span> ~* \\.(?:css|js)$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> =404</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ~ ^.+\\..+$</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> =404</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u89E3\u51B3socket\u4E2Dnginx\u8F6C\u53D1\u95EE\u9898" tabindex="-1">\u89E3\u51B3socket\u4E2Dnginx\u8F6C\u53D1\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3socket\u4E2Dnginx\u8F6C\u53D1\u95EE\u9898" aria-hidden="true">#</a></h3><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  school.godotdotdot.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> ~ /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:3000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">600</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">600</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">error_page</span>  <span class="token number">404</span>			/404.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="nginx\u91CD\u5B9A\u5411" tabindex="-1">nginx\u91CD\u5B9A\u5411 <a class="header-anchor" href="#nginx\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h2><p><a href="https://www.cnblogs.com/weiyiming007/p/11417320.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/weiyiming007/p/11417320.html</a></p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1">\u53C2\u8003\u94FE\u63A5 <a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><p><a href="http://jsanntq.cn/2020/04/07/Nginx/" target="_blank" rel="noopener noreferrer">http://jsanntq.cn/2020/04/07/Nginx/</a></p></li><li><p><a href="https://juejin.im/post/5cae9de95188251ae2324ec3" target="_blank" rel="noopener noreferrer">\u5FEB\u72D7\u6253\u8F66\u524D\u7AEF\u56E2\u961F \u524D\u7AEF\u60F3\u8981\u4E86\u89E3\u7684Nginx</a></p></li><li><p><a href="https://juejin.im/post/5e44a2aa6fb9a07c9f3fd170#heading-15" target="_blank" rel="noopener noreferrer">\u5356\u597D\u8F66\u5927\u524D\u7AEF\u56E2\u961F nginx \u914D\u7F6E https</a></p></li></ul>`,47),o=[p];function c(l,i,r,k,d,u){return a(),s("div",null,o)}var m=n(t,[["render",c]]);export{v as __pageData,m as default};
