import{_ as n,c as s,o as a,d as p}from"./app.7277c524.js";const h='{"title":"\u63D0\u9AD8css\u5F00\u53D1\u6548\u7387","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E05\u9664\u6D6E\u52A8","slug":"\u6E05\u9664\u6D6E\u52A8"},{"level":2,"title":"\u5782\u76F4\u5C45\u4E2D","slug":"\u5782\u76F4\u5C45\u4E2D"},{"level":2,"title":"\u53D8\u70B9\u72B6","slug":"\u53D8\u70B9\u72B6"},{"level":2,"title":"\u6269\u5927\u9009\u533A\u8303\u56F4","slug":"\u6269\u5927\u9009\u533A\u8303\u56F4"}],"relativePath":"src/frontend/html5/\u63D0\u9AD8css\u5F00\u53D1\u6548\u7387.md","lastUpdated":1649840977591}',t={},o=p(`<h1 id="\u63D0\u9AD8css\u5F00\u53D1\u6548\u7387" tabindex="-1">\u63D0\u9AD8css\u5F00\u53D1\u6548\u7387 <a class="header-anchor" href="#\u63D0\u9AD8css\u5F00\u53D1\u6548\u7387" aria-hidden="true">#</a></h1><h2 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1">\u6E05\u9664\u6D6E\u52A8 <a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\00A0&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5782\u76F4\u5C45\u4E2D" tabindex="-1">\u5782\u76F4\u5C45\u4E2D <a class="header-anchor" href="#\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a></h2><p>\uFF081\uFF09\u7EDD\u5BF9\u5B9A\u4F4D\u4E14\u5DF2\u77E5\u5BBD\u9AD8</p><div class="language-css"><pre><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -80px<span class="token punctuation">;</span> <span class="token comment">/* \u5BBD\u5EA6\u7684\u4E00\u534A */</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span> <span class="token comment">/* \u9AD8\u5EA6\u7684\u4E00\u534A */</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09\u7EDD\u5BF9\u5B9A\u4F4D+\u672A\u77E5\u5BBD\u9AD8+translate</p><div class="language-css"><pre><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF083\uFF09\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\u5BBD\u9AD8\u62C9\u5347\u539F\u7406\uFF0C\u4E2D\u5FC3\u5C45\u4E2D\u5143\u7D20</p><div class="language-css"><pre><code><span class="token selector">.middle</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF084\uFF09\u5229\u7528\u76F8\u5BF9\u5B9A\u4F4D\u4E8Ecss3\u4F7F\u5143\u7D20\u5782\u76F4\u5C45\u4E2D</p><div class="language-css"><pre><code><span class="token selector">.v-middle</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">-webkit-translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">-moz-translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token function">-o-translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF085\uFF09\u56FE\u7247\u4E0A\u4E0B\u5DE6\u53F3\u5C45\u4E2D \u5229\u7528table-cell\u8BA9\u5185\u90E8\u7684\u5143\u7D20\u4E0A\u4E0B\u5DE6\u53F3\u5C45\u4E2D\uFF1B</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./4.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u53D8\u70B9\u72B6" tabindex="-1">\u53D8\u70B9\u72B6 <a class="header-anchor" href="#\u53D8\u70B9\u72B6" aria-hidden="true">#</a></h2><ol><li>\u5355\u884C\u53D8\u70B9\u72B6\uFF1A</li></ol><div class="language-css"><pre><code><span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u591A\u884C\u53D8\u70B9\u72B6\uFF1A</li></ol><div class="language-css"><pre><code><span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span>
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6269\u5927\u9009\u533A\u8303\u56F4" tabindex="-1">\u6269\u5927\u9009\u533A\u8303\u56F4 <a class="header-anchor" href="#\u6269\u5927\u9009\u533A\u8303\u56F4" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),c=[o];function e(l,u,i,k,r,d){return a(),s("div",null,c)}var g=n(t,[["render",e]]);export{h as __pageData,g as default};
