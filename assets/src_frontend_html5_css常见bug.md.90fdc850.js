import{_ as n,c as s,o as a,d as p}from"./app.00f96e96.js";const f='{"title":"css\u5E38\u89C1bug","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u56FE\u7247\u51FA\u73B0\u95F4\u8DDD\u89E3\u51B3\u65B9\u6848","slug":"\u56FE\u7247\u51FA\u73B0\u95F4\u8DDD\u89E3\u51B3\u65B9\u6848"},{"level":2,"title":"\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u50CF\u7D20\u95EE\u9898","slug":"\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u50CF\u7D20\u95EE\u9898"},{"level":2,"title":"ios\u7AEF\u51FA\u73B0\u4E0B\u56FE\u95EE\u9898","slug":"ios\u7AEF\u51FA\u73B0\u4E0B\u56FE\u95EE\u9898"},{"level":2,"title":"\u89E3\u51B3\u79FB\u52A8\u7AEF\u62A5\u7EA2","slug":"\u89E3\u51B3\u79FB\u52A8\u7AEF\u62A5\u7EA2"},{"level":2,"title":"\u89E3\u51B3ios\u6EDA\u52A8\u5361\u7684\u95EE\u9898","slug":"\u89E3\u51B3ios\u6EDA\u52A8\u5361\u7684\u95EE\u9898"},{"level":2,"title":"\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\u5BC6\u7801\u989C\u8272","slug":"\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\u5BC6\u7801\u989C\u8272"}],"relativePath":"src/frontend/html5/css\u5E38\u89C1bug.md","lastUpdated":1649840977579}',t={},o=p(`<h1 id="css\u5E38\u89C1bug" tabindex="-1">css\u5E38\u89C1bug <a class="header-anchor" href="#css\u5E38\u89C1bug" aria-hidden="true">#</a></h1><h2 id="\u56FE\u7247\u51FA\u73B0\u95F4\u8DDD\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u56FE\u7247\u51FA\u73B0\u95F4\u8DDD\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u56FE\u7247\u51FA\u73B0\u95F4\u8DDD\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6Efont-size: 0;</p><h2 id="\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u50CF\u7D20\u95EE\u9898" tabindex="-1">\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u50CF\u7D20\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u50CF\u7D20\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-css"><pre><code>$<span class="token property">borderColor</span><span class="token punctuation">:</span> #E1E0DF<span class="token punctuation">;</span>

<span class="token selector">.border-1px, .border-1px-t, .border-1px-b, .border-1px-tb, .border-1px-l, .border-1px-r</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px-t</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px-b</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px-tb</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px-l</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.border-1px-r</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u4F7F\u7528scss <code>#include</code>\u53D8\u91CF</li></ul><div class="language-css"><pre><code><span class="token comment">/* \u6839\u636E\u6761\u4EF6\uFF0C\u8F93\u51FA 1px \u8FB9\u6846\uFF08top or bottom\uFF09 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == top</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 top<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 top<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == bottom</span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 bottom<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 bottom<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6839\u636E\u6761\u4EF6\uFF0C\u8F93\u51FA 1px \uFF08left or right\uFF09 */</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == left</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == right</span> <span class="token punctuation">{</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">background</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* \u8F93\u51FA 1px \u8FB9\u6846\uFF1A
  ## \u4E00\u3001\u5BF9\u4E8E\u4E00\u4E2A\u5143\u7D20\uFF0C\u53EA\u80FD\u8F93\u51FA\u4E24\u4E2A\u8FB9\u6846\uFF08top bottom \u4E8C\u9009## \u4E00\u3001left right \u4E8C\u9009\u4E00\uFF09
  ## \u4E8C\u3001\u5982\u679C\u8981\u8F93\u51FA 4 \u6761\u8FB9\u6846\uFF0C\u8003\u8651\u4F7F\u7528\u4E24\u4E2A\u5143\u7D20\u5D4C\u5957
*/</span>
<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">get-1px-border</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == top</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == bottom</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


  <span class="token atrule"><span class="token rule">@if</span> $position == left</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> $position == right</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="ios\u7AEF\u51FA\u73B0\u4E0B\u56FE\u95EE\u9898" tabindex="-1">ios\u7AEF\u51FA\u73B0\u4E0B\u56FE\u95EE\u9898 <a class="header-anchor" href="#ios\u7AEF\u51FA\u73B0\u4E0B\u56FE\u95EE\u9898" aria-hidden="true">#</a></h2><p>\u7ED9input\u6846\u8BBE\u7F6E\uFF1Abackground-color: transparent;</p><p><img src="https://notecdn.hrhe.cn/images/css%E5%B0%8F%E6%96%B9%E6%B3%95-10.png" alt="image"></p><h2 id="\u89E3\u51B3\u79FB\u52A8\u7AEF\u62A5\u7EA2" tabindex="-1">\u89E3\u51B3\u79FB\u52A8\u7AEF\u62A5\u7EA2 <a class="header-anchor" href="#\u89E3\u51B3\u79FB\u52A8\u7AEF\u62A5\u7EA2" aria-hidden="true">#</a></h2><p><img src="https://notecdn.hrhe.cn/images/css%E5%B0%8F%E6%96%B9%E6%B3%95-11.png" alt="image"></p><p>\u7531\u4E8E\u6CA1\u6709e.preventDefalt\u5F15\u8D77\u7684\uFF0C\u7ED9\u89E6\u6478\u8303\u56F4\u7684\u5143\u7D20\u6DFB\u52A0css\u5C5E\u6027</p><div class="language-css"><pre><code><span class="token property">touch-action</span><span class="token punctuation">:</span> pan-y<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u89E3\u51B3ios\u6EDA\u52A8\u5361\u7684\u95EE\u9898" tabindex="-1">\u89E3\u51B3ios\u6EDA\u52A8\u5361\u7684\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3ios\u6EDA\u52A8\u5361\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\u5BC6\u7801\u989C\u8272" tabindex="-1">\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\u5BC6\u7801\u989C\u8272 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u81EA\u52A8\u586B\u5145\u5BC6\u7801\u989C\u8272" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">:-webkit-autofill</span><span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 400px #fff inset<span class="token punctuation">;</span> // \u8BBE\u7F6E\u80CC\u666F\u989C\u8272
    <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> //\u8BBE\u7F6E\u5B57\u4F53\u989C\u8272
<span class="token punctuation">}</span>
</code></pre></div>`,18),c=[o];function e(u,l,i,r,k,d){return a(),s("div",null,c)}var b=n(t,[["render",e]]);export{f as __pageData,b as default};
