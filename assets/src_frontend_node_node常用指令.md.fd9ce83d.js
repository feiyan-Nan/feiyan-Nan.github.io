import{_ as s,c as n,o as a,d as e}from"./app.7277c524.js";const h='{"title":"node\u5E38\u7528\u6307\u4EE4","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/node/node\u5E38\u7528\u6307\u4EE4.md","lastUpdated":1649840977598}',o={},t=e(`<h1 id="node\u5E38\u7528\u6307\u4EE4" tabindex="-1">node\u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#node\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h1><p><code>child_process</code>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;child_process&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start http://localhost:3000&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u8BE5\u6761</span>
c<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&#39;start http://localhost:3000&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u8BE5\u6761\u547D\u4EE4</span>
</code></pre></div><p>\u53D6\u547D\u4EE4\u884C\u53C2\u6570\uFF1A<code>process.argv</code></p><p>\u9000\u51FA\u5F53\u524D\u7A0B\u5E8F\uFF1A<code>process.exit(0)</code></p><p>\u5207\u6362\u76EE\u5F55\uFF1A<code>process.chdir</code></p><p>\u5F53\u524D\u5DE5\u4F5C\u6839\u76EE\u5F55\uFF1A<code>process.cwd()</code>\uFF1B</p><p>\u83B7\u53D6\u7528\u6237\u6839\u76EE\u5F55\uFF1A<code>require(&#39;os&#39;).homedir()</code></p>`,8),c=[t];function p(d,r,i,l,_,u){return a(),n("div",null,c)}var f=s(o,[["render",p]]);export{h as __pageData,f as default};
