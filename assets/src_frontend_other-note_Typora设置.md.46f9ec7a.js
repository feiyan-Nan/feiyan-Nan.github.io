import{_ as n,c as s,o as t,d as a}from"./app.00f96e96.js";const q='{"title":"Typora \u5E38\u7528\u8BBE\u7F6E\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBE\u7F6E\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20github","slug":"\u8BBE\u7F6E\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20github"},{"level":2,"title":"\u914D\u7F6ETypora\u6837\u5F0F\u6587\u4EF6","slug":"\u914D\u7F6Etypora\u6837\u5F0F\u6587\u4EF6"},{"level":2,"title":"\u914D\u7F6E\u81EA\u52A8\u4E0A\u4F20\u5230\u4E03\u725B\u4E91","slug":"\u914D\u7F6E\u81EA\u52A8\u4E0A\u4F20\u5230\u4E03\u725B\u4E91"}],"relativePath":"src/frontend/other-note/Typora\u8BBE\u7F6E.md","lastUpdated":1649840977599}',p={},o=a(`<h1 id="typora-\u5E38\u7528\u8BBE\u7F6E\u9009\u9879" tabindex="-1">Typora \u5E38\u7528\u8BBE\u7F6E\u9009\u9879 <a class="header-anchor" href="#typora-\u5E38\u7528\u8BBE\u7F6E\u9009\u9879" aria-hidden="true">#</a></h1><h2 id="\u8BBE\u7F6E\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20github" tabindex="-1">\u8BBE\u7F6E\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20github <a class="header-anchor" href="#\u8BBE\u7F6E\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20github" aria-hidden="true">#</a></h2><ol><li>\u8F6C\u5230\u6587\u4EF6-&gt;\u504F\u597D\u8BBE\u7F6E-&gt;\u56FE\u50CF</li><li>\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\uFF0C\u9996\u5148\u9009\u597D\u5BF9\u5E94\u7684\u4E0A\u4F20\u670D\u52A1\uFF0C\u4E4B\u540E\u518D\u4E0B\u8F7D\u66F4\u65B0\u6587\u4EF6</li></ol><p><img src="https://notecdn.hrhe.cn/images/Typora%E8%AE%BE%E7%BD%AE-01.png" alt="image"></p><ol start="3"><li>\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\uFF1B <ul><li>repo\u8F93\u5165\u683C\u5F0F\uFF1Aheny/h-note\uFF0C\u524D\u8005\u4E3Agithub\u7528\u6237\u540D, \u540E\u8005\u4E3A\u76EE\u5F55\u540D</li><li>path\u8DEF\u5F84\u4E3A \u56FE\u7247\u4E0A\u4F20\u7684\u8DEF\u5F84\uFF0C\u4E0B\u5217\u8868\u793A\u5728\u5F53\u524D\u76EE\u5F55\u7684img\u76EE\u5F55\u4E0B</li></ul></li></ol><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;picBed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;github&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;repo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${github-username/github-repo}&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${github-token}&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;img/&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;customUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;branch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;uploader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;picgoPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u8FDB\u5165github\uFF0C\u6309\u7167\u4EE5\u4E0B\u64CD\u4F5C <ul><li>\u70B9\u51FB\u5934\u50CF--&gt;\u70B9\u51FBsettings--&gt;\u70B9\u51FBDeveloper settings--&gt;\u70B9\u51FBPersonal access tokens--&gt;\u70B9\u51FBcreate new token--&gt;\u8F93\u5165token\u7684\u540D\u5B57--&gt;\u4EC5\u52FE\u9009repo\u9009\u9879\u5373\u53EF\uFF1B</li></ul></li></ol><p><img src="https://notecdn.hrhe.cn/images/Typora%E8%AE%BE%E7%BD%AE-02.png" alt="image"></p><p>\u4E4B\u540E\u70B9\u51FB\u521B\u5EFA\uFF0C\u590D\u5236\u7ED9\u51FA\u7684token\uFF0Ctoken\u5237\u65B0\u4E4B\u540E\u518D\u4E5F\u65E0\u6CD5\u770B\u89C1\uFF0C\u6CE8\u610F\u4FDD\u5B58\u597D\uFF0C\u6700\u540E\u5C06token\u8F93\u5165\u5230\u914D\u7F6E\u6587\u4EF6\u7684\u5BF9\u5E94\u4F4D\u7F6E\u5373\u53EF\uFF1B</p><ol start="5"><li>\u8BBE\u7F6E\u597D\u4E4B\u540E\u70B9\u51FB\u6D4B\u8BD5\u662F\u5426\u53EF\u4EE5\u4E0A\u4F20\u4E86\uFF0C\u53EF\u80FD\u4F1A\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u4EE5\u591A\u8BD5\u51E0\u6B21</li></ol><p>\u6211\u7684\u6700\u7EC8\u914D\u7F6E\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;picBed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;github&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;repo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;heny/h-note&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;e53233d92e704ec4529ba1ec37d34dd43f7f96d7&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;customUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;branch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;uploader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;github&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;picgoPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003\u535A\u5BA2\uFF1A<a href="https://blog.csdn.net/xiaozecheng/article/details/105197126" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/xiaozecheng/article/details/105197126</a></p><h2 id="\u914D\u7F6Etypora\u6837\u5F0F\u6587\u4EF6" tabindex="-1">\u914D\u7F6ETypora\u6837\u5F0F\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6Etypora\u6837\u5F0F\u6587\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u8FDB\u5165\u6587\u4EF6--&gt;\u504F\u597D\u8BBE\u7F6E--&gt;\u5916\u89C2--&gt;\u6253\u5F00\u4E3B\u9898\u6587\u4EF6\u5939</li><li>\u521B\u5EFAbase.user.css\u6587\u4EF6</li><li>\u5728Typora\u5DE5\u5177\u4E2D\uFF0C\u6309shift+f12\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177</li><li>\u4F7F\u7528\u7BAD\u5934\u9009\u4E2D\u5143\u7D20\uFF0C\u590D\u5236\u5BF9\u5E94\u7684\u7C7B\u540D\uFF0C\u4FEE\u6539\u6837\u5F0F\u5373\u53EF</li></ol><h2 id="\u914D\u7F6E\u81EA\u52A8\u4E0A\u4F20\u5230\u4E03\u725B\u4E91" tabindex="-1">\u914D\u7F6E\u81EA\u52A8\u4E0A\u4F20\u5230\u4E03\u725B\u4E91 <a class="header-anchor" href="#\u914D\u7F6E\u81EA\u52A8\u4E0A\u4F20\u5230\u4E03\u725B\u4E91" aria-hidden="true">#</a></h2><p><a href="https://blog.csdn.net/weimeibuqieryu/article/details/105315807" target="_blank" rel="noopener noreferrer">typora+picgo+\u4E03\u725B\u4E91\u5B9E\u73B0\u56FE\u7247\u4E0A\u4F20</a></p>`,17),e=[o];function r(c,l,u,i,k,g){return t(),s("div",null,e)}var d=n(p,[["render",r]]);export{q as __pageData,d as default};
