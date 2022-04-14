import{_ as n,c as s,o as a,d as p}from"./app.7277c524.js";const g='{"title":"CSS \u9884\u5904\u7406\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001SCSS","slug":"\u4E00\u3001scss"},{"level":3,"title":"\u5B9A\u4E49\u53D8\u91CF","slug":"\u5B9A\u4E49\u53D8\u91CF"},{"level":3,"title":"&\u5F15\u7528\u81EA\u8EAB","slug":"\u5F15\u7528\u81EA\u8EAB"},{"level":3,"title":"@mixin\u6DF7\u5408\u5668","slug":"mixin\u6DF7\u5408\u5668"},{"level":3,"title":"\u9009\u62E9\u5668\u7EE7\u627F","slug":"\u9009\u62E9\u5668\u7EE7\u627F"},{"level":3,"title":"\u63D2\u503C\u8BED\u53E5\uFF1A#{}","slug":"\u63D2\u503C\u8BED\u53E5\uFF1A"},{"level":3,"title":"\u63A7\u5236\u8BED\u53E5","slug":"\u63A7\u5236\u8BED\u53E5"},{"level":3,"title":"@each","slug":"each"},{"level":3,"title":"@while","slug":"while"},{"level":2,"title":"\u5E38\u7528\u5DE5\u5177\u51FD\u6570","slug":"\u5E38\u7528\u5DE5\u5177\u51FD\u6570"},{"level":2,"title":"\u4E8C\u3001Stylus","slug":"\u4E8C\u3001stylus"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":3,"title":"\u4F7F\u7528\u53D8\u91CF","slug":"\u4F7F\u7528\u53D8\u91CF"},{"level":3,"title":"\u4F7F\u7528\u51FD\u6570","slug":"\u4F7F\u7528\u51FD\u6570"},{"level":3,"title":"\u4F7F\u7528\u9009\u62E9\u5668","slug":"\u4F7F\u7528\u9009\u62E9\u5668"},{"level":3,"title":"\u4F7F\u7528\u63D2\u503C","slug":"\u4F7F\u7528\u63D2\u503C"},{"level":3,"title":"\u6761\u4EF6\u5224\u65AD","slug":"\u6761\u4EF6\u5224\u65AD"},{"level":3,"title":"\u5BFC\u5165\u6587\u4EF6","slug":"\u5BFC\u5165\u6587\u4EF6"},{"level":3,"title":"\u7A7F\u900F","slug":"\u7A7F\u900F"}],"relativePath":"src/frontend/html5/CSS \u9884\u7F16\u8BD1\u5668.md","lastUpdated":1649840977577}',t={},o=p(`<h1 id="css-\u9884\u5904\u7406\u5668" tabindex="-1">CSS \u9884\u5904\u7406\u5668 <a class="header-anchor" href="#css-\u9884\u5904\u7406\u5668" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001scss" tabindex="-1">\u4E00\u3001SCSS <a class="header-anchor" href="#\u4E00\u3001scss" aria-hidden="true">#</a></h2><h3 id="\u5B9A\u4E49\u53D8\u91CF" tabindex="-1">\u5B9A\u4E49\u53D8\u91CF <a class="header-anchor" href="#\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>   <span class="token comment">// \u5728scss\u4E2D\u4F7F\u7528$\u7B26\u5B9A\u4E49\u53D8\u91CF</span>
<span class="token selector">.txt</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5F15\u7528\u81EA\u8EAB" tabindex="-1">&amp;\u5F15\u7528\u81EA\u8EAB <a class="header-anchor" href="#\u5F15\u7528\u81EA\u8EAB" aria-hidden="true">#</a></h3><blockquote><p>\u5BF9\u4E8EBEM\u89C4\u8303\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528</p></blockquote><div class="language-scss"><pre><code><span class="token selector">.test</span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>__name</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//\u76F8\u5F53\u4E8E.test__name</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="mixin\u6DF7\u5408\u5668" tabindex="-1">@mixin\u6DF7\u5408\u5668 <a class="header-anchor" href="#mixin\u6DF7\u5408\u5668" aria-hidden="true">#</a></h3><blockquote><p>\u590D\u7528\u4EE3\u7801</p></blockquote><p>\u4F7F\u7528<code>@mixin</code>\u5B9A\u4E49\uFF0C\u4F7F\u7528<code>@include</code>\u4F7F\u7528\uFF1B</p><div class="language-scss"><pre><code><span class="token comment">// \u666E\u901A\u4F7F\u7528</span>
<span class="token keyword">@mixin</span> <span class="token selector">danger</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.notice</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> danger
<span class="token punctuation">}</span>

<span class="token comment">// \u4F20\u53C2\u4F7F\u7528</span>
<span class="token keyword">@mixin</span> <span class="token function">danger</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$col</span></span><span class="token punctuation">:</span>#e22<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$col</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.notice</span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">danger</span><span class="token punctuation">(</span>#d33<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u4E2A\u53C2\u6570\u65F6</span>
<span class="token keyword">@mixin</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$text</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token variable">$border</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text</span><span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$background</span><span class="token punctuation">;</span>
 <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token property"><span class="token variable">$values</span></span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">,</span> #00ff00<span class="token punctuation">,</span> #0000ff<span class="token punctuation">;</span>
<span class="token selector">.primary </span><span class="token punctuation">{</span>
 <span class="token keyword">@include</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$values</span>...<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">.primary </span><span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span>
 <span class="token property">border-color</span><span class="token punctuation">:</span> #0000ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53C2\u6570\u4F7F\u7528...\u5168\u90E8\u4F7F\u7528\uFF0C</span>
<span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
 <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
 <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.shadows </span><span class="token punctuation">{</span>
 <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">.shadowed </span><span class="token punctuation">{</span>
 <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
 <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
 <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u9009\u62E9\u5668\u7EE7\u627F" tabindex="-1">\u9009\u62E9\u5668\u7EE7\u627F <a class="header-anchor" href="#\u9009\u62E9\u5668\u7EE7\u627F" aria-hidden="true">#</a></h3><p>\u5BF9\u4E8E<code>mixin</code>\u4F7F\u7528\u7684\uFF0C\u4F1A\u5728\u6BCF\u4E2A\u4F7F\u7528\u4E86<code>mixin</code>\u7684css\u91CC\u9762\u90FD\u6DFB\u52A0\u5BF9\u5E94\u7684\u6837\u5F0F\uFF0C\u5BF9\u4E8E@extend\u7EE7\u627F\u7684\uFF0C\u5219\u662F\u5C06\u9700\u8981\u7EE7\u627F\u7684\u7C7B\u6DFB\u52A0\u5230\u4E00\u8D77\uFF0C\u6210\u4E3A\u7FA4\u7EC4\u9009\u62E9\u5668</p><p>\u5360\u4F4D\u7B26\u8F93\u51FA\u4E0D\u4F1A\u5305\u542B\u5B9A\u4E49\u7684\u7C7B\uFF1B</p><div class="language-scss"><pre><code><span class="token comment">// \u76F4\u63A5\u4F7F\u7528</span>
<span class="token selector">.note</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.danger</span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .note<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA\uFF1A.note, .danger{}</span>

<span class="token comment">// \u5360\u4F4D\u7B26</span>
<span class="token selector"><span class="token placeholder">%note</span></span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token selector">.danger</span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%note</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA\uFF1A.danger {}</span>
</code></pre></div><h3 id="\u63D2\u503C\u8BED\u53E5\uFF1A" tabindex="-1">\u63D2\u503C\u8BED\u53E5\uFF1A#{} <a class="header-anchor" href="#\u63D2\u503C\u8BED\u53E5\uFF1A" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>
<span class="token selector">p.<span class="token variable">#{$name}</span></span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">p.foo</span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u63A7\u5236\u8BED\u53E5" tabindex="-1">\u63A7\u5236\u8BED\u53E5 <a class="header-anchor" href="#\u63A7\u5236\u8BED\u53E5" aria-hidden="true">#</a></h3><h4 id="if-\uFF0C\u53EA\u80FD\u4F7F\u7528-\uFF1B" tabindex="-1">@if()\uFF0C\u53EA\u80FD\u4F7F\u7528==\uFF1B <a class="header-anchor" href="#if-\uFF0C\u53EA\u80FD\u4F7F\u7528-\uFF1B" aria-hidden="true">#</a></h4><div class="language-scss"><pre><code><span class="token selector">p </span><span class="token punctuation">{</span>
 <span class="token keyword">@if</span> <span class="token selector">1 + 1 == 2 </span><span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span> <span class="token punctuation">}</span>
 <span class="token keyword">@if</span> <span class="token selector">5 &lt; 3 </span><span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span> <span class="token punctuation">}</span>
 <span class="token keyword">@if</span> <span class="token selector">null  </span><span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 3px double<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// @else</span>
<span class="token property"><span class="token variable">$type</span></span><span class="token punctuation">:</span> monster<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == ocean </span><span class="token punctuation">{</span>

   <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == matador </span><span class="token punctuation">{</span>

   <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="for" tabindex="-1">@for <a class="header-anchor" href="#for" aria-hidden="true">#</a></h4><p>\u683C\u5F0F\uFF1A<code>@for $var from &lt;start&gt; through &lt;end&gt;</code></p><p>\u6216\uFF1A<code>@for $var from &lt;start&gt; to &lt;end&gt;</code></p><p>\u4F7F\u7528through\u548Cto\u7684\u533A\u522B\uFF1A * through\u5305\u542Bstart\u548Cend\u7684\u503C * to\u53EA\u5305\u542Bstart\u7684\u503C\uFF0C\u4E0D\u5305\u542Bend\u7684\u503C\uFF0Cto\u6BD4through\u5C11\u6267\u884C\u4E00\u6B21\uFF1B</p><div class="language-scss"><pre><code><span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
    <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="each" tabindex="-1">@each <a class="header-anchor" href="#each" aria-hidden="true">#</a></h3><p>\u683C\u5F0F\uFF1A<code>$var in &lt;list&gt;</code></p><div class="language-scss"><pre><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$animal</span> in puma,sea-slug,egret </span><span class="token punctuation">{</span>
    <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
       <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/#{animal}.png&#39;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">.puma-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/puma.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/sea-slug.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.egret-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/egret.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.salamander-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/salamander.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">// \u5F53\u591A\u4E2A\u53D8\u91CF\u6570\u7EC4\u65F6</span>
<span class="token keyword">@each</span> <span class="token variable">$animal</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$cursor</span> in <span class="token punctuation">(</span>puma<span class="token punctuation">,</span> black<span class="token punctuation">,</span> default<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                 <span class="token punctuation">(</span>sea-slug<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> pointer<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                 <span class="token punctuation">(</span>egret<span class="token punctuation">,</span> white<span class="token punctuation">,</span> move<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
   <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span> 2px solid <span class="token variable">$color</span><span class="token punctuation">;</span>
   <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token variable">$cursor</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">.puma-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/puma.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
 <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.sea-slug-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/sea-slug.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid blue<span class="token punctuation">;</span>
 <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.egret-icon </span><span class="token punctuation">{</span>
 <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/egret.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token property">border</span><span class="token punctuation">:</span> 2px solid white<span class="token punctuation">;</span>
 <span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">// \u591A\u91CD\u8D4B\u503C\u65F6</span>
<span class="token keyword">@each</span> <span class="token variable">$header</span><span class="token punctuation">,</span> <span class="token variable">$size</span> in <span class="token punctuation">(</span><span class="token property">h1</span><span class="token punctuation">:</span> 2em<span class="token punctuation">,</span> <span class="token property">h2</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">,</span> <span class="token property">h3</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token selector"><span class="token variable">#{$header}</span> </span><span class="token punctuation">{</span>
   <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1</span>
<span class="token selector">h1 </span><span class="token punctuation">{</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">h2 </span><span class="token punctuation">{</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">h3 </span><span class="token punctuation">{</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u793A\u4F8B\uFF1A\u95F4\u9694\u7C7B\u540D</p><div class="language-scss"><pre><code><span class="token keyword">@each</span> <span class="token variable">$name</span><span class="token punctuation">,</span><span class="token variable">$prop</span> in <span class="token punctuation">(</span><span class="token property">p</span><span class="token punctuation">:</span>padding<span class="token punctuation">,</span><span class="token property">pt</span><span class="token punctuation">:</span>padding-top<span class="token punctuation">,</span><span class="token property">pr</span><span class="token punctuation">:</span>padding-right<span class="token punctuation">,</span><span class="token property">pb</span><span class="token punctuation">:</span>padding-bottom<span class="token punctuation">,</span><span class="token property">pl</span><span class="token punctuation">:</span>padding-left<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 0 <span class="token keyword">through</span> <span class="token selector">30 </span><span class="token punctuation">{</span>
    <span class="token selector">.<span class="token variable">#{$name}</span><span class="token variable">#{$i}</span></span><span class="token punctuation">{</span>
     <span class="token property"><span class="token variable">#{$prop}</span></span><span class="token punctuation">:</span> <span class="token variable">#{$i}</span>px<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1(\u53EF\u4EE5\u53BBhttps://www.sassmeister.com/\u67E5\u770B)</span>
<span class="token selector">p</span><span class="token punctuation">{</span><span class="token property">padding</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="while" tabindex="-1">@while <a class="header-anchor" href="#while" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$i</span> &gt; 0 </span><span class="token punctuation">{</span>
    <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u7528\u5DE5\u5177\u51FD\u6570" tabindex="-1">\u5E38\u7528\u5DE5\u5177\u51FD\u6570 <a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$base_width</span></span><span class="token punctuation">:</span> 750<span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u8BA1\u7A3F\u5BBD\u5EA6</span>
<span class="token property"><span class="token variable">$actual-max-width</span></span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span> <span class="token comment">// \u5B9E\u9645\u6700\u5927\u5BBD\u5EA6</span>

<span class="token comment">/* \u6839\u636E\u8BBE\u8BA1\u7A3F\u4E2D\u63D0\u4F9B\u7684\u5BBD\u5EA6\uFF0C\u8BA1\u7B97\u51FA\u9700\u8981\u7684 vw */</span>
<span class="token keyword">@function</span> <span class="token function">px2vw</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> #<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token variable">$px</span>/<span class="token variable">$base_width</span><span class="token punctuation">)</span> <span class="token operator">*</span> 100<span class="token punctuation">}</span>vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u7531\u4E8E\u9650\u5236\u4E86\u6700\u5927\u5BBD\u5EA6\uFF0C\u6240\u4EE5\u5728\u91C7\u7528vw\u5E03\u5C40\u65F6\uFF0C\u9700\u8981\u9650\u5236\u6700\u5927\u9AD8\u5EA6 */</span>
<span class="token keyword">@function</span> <span class="token function">getMaxHeight</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> #<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token variable">$actual-max-width</span>/<span class="token variable">$base_width</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$px</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u6CE8\u610F\u4E8B\u9879</strong></p><ul><li>\u7528_\u5F00\u5934\u7684scss\u6587\u4EF6\u65F6\uFF0C\u8868\u793A\u544A\u8BC9scss\u4E0D\u8981\u5C06\u5176\u7F16\u8BD1\u5230css\u6587\u4EF6\u4E2D\uFF0C\u5728\u5BFC\u5165\u8BED\u53E5\u65F6\uFF0C\u4E0D\u9700\u8981\u52A0\u4E0B\u5212\u7EBF\uFF1B</li></ul><h2 id="\u4E8C\u3001stylus" tabindex="-1">\u4E8C\u3001Stylus <a class="header-anchor" href="#\u4E8C\u3001stylus" aria-hidden="true">#</a></h2><p>Stylus\u662F\u4E00\u4E2ACSS\u9884\u5904\u7406\u5668\u3002\u5BCC\u4E8E\u8868\u73B0\u529B\u3001\u52A8\u6001\u7684\u3001\u5065\u58EE\u7684 CSS</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p><code>npm install stylus \u2013save</code></p><p><code>npm install stylus-loader --save</code></p><h3 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h3><p>\u5192\u53F7\u53EF\u6709\u53EF\u65E0 \u5206\u53F7\u53EF\u6709\u53EF\u65E0 \u9017\u53F7\u53EF\u6709\u53EF\u65E0 \u62EC\u53F7\u53EF\u6709\u53EF\u65E0</p><p>\u5168\u9760\u7A7A\u683C\u548C\u7F29\u8FDB\u6765\u533A\u5206</p><h3 id="\u4F7F\u7528\u53D8\u91CF" tabindex="-1">\u4F7F\u7528\u53D8\u91CF <a class="header-anchor" href="#\u4F7F\u7528\u53D8\u91CF" aria-hidden="true">#</a></h3><p>$\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u52A0\u4E0A\u53EF\u4EE5\u5F88\u9192\u76EE\u7684\u77E5\u9053\u5B83\u662F\u4E2A\u53D8\u91CF</p><p>$font-size = 14px</p><div class="language-css"><pre><code>body
   font font-size Arial<span class="token punctuation">,</span> sans-seri
</code></pre></div><h3 id="\u4F7F\u7528\u51FD\u6570" tabindex="-1">\u4F7F\u7528\u51FD\u6570 <a class="header-anchor" href="#\u4F7F\u7528\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-less"><pre><code><span class="token selector">fontS()</span><span class="token punctuation">{</span>
   font<span class="token operator">-</span>size 30px
   font<span class="token operator">-</span>style normal
   color #00ff00
   font<span class="token operator">-</span>weight 400
<span class="token punctuation">}</span>

h1
   <span class="token function">fontS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   background $bgColor<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4F7F\u7528\u9009\u62E9\u5668" tabindex="-1">\u4F7F\u7528\u9009\u62E9\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u9009\u62E9\u5668" aria-hidden="true">#</a></h3><div class="language-less"><pre><code>textarea
input
   color #A7A7A7
   &amp;<span class="token punctuation">:</span>hover
       color #000
   \u7B49\u540C\u4E8E\uFF1Atextarea<span class="token punctuation">,</span>input
</code></pre></div><h3 id="\u4F7F\u7528\u63D2\u503C" tabindex="-1">\u4F7F\u7528\u63D2\u503C <a class="header-anchor" href="#\u4F7F\u7528\u63D2\u503C" aria-hidden="true">#</a></h3><div class="language-less"><pre><code><span class="token selector">vendor(prop, args)
   -webkit-</span><span class="token punctuation">{</span>prop<span class="token punctuation">}</span> <span class="token selector">args
   -moz-</span><span class="token punctuation">{</span>prop<span class="token punctuation">}</span> <span class="token selector">args</span>
   <span class="token punctuation">{</span>prop<span class="token punctuation">}</span> args

<span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">vendor</span><span class="token punctuation">(</span><span class="token string">&#39;border-radius&#39;</span><span class="token punctuation">,</span> 50%<span class="token punctuation">)</span>
<span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">vendor</span><span class="token punctuation">(</span><span class="token string">&#39;box-shadow&#39;</span><span class="token punctuation">,</span> 5px 5px red<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6761\u4EF6\u5224\u65AD" tabindex="-1">\u6761\u4EF6\u5224\u65AD <a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a></h3><div class="language-less"><pre><code><span class="token function">box</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>margin<span class="token operator">-</span>only=false<span class="token punctuation">)</span>
if margin<span class="token operator">-</span>only
    margin x y
else
    padding x y
p
<span class="token function">box</span><span class="token punctuation">(</span>5px<span class="token punctuation">,</span>10px<span class="token punctuation">,</span>true<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5BFC\u5165\u6587\u4EF6" tabindex="-1">\u5BFC\u5165\u6587\u4EF6 <a class="header-anchor" href="#\u5BFC\u5165\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u65B9\u6848</p><p>\u516C\u5171\u7684\u6837\u5F0F\u6587\u4EF6\u5982reset.css\u4F7F\u7528JS\u65B9\u5F0F\u5BFC\u5165\u5728App.vue\u4E2D,\u6240\u6709\u7EC4\u4EF6\u5171\u4EAB\uFF01</p><p>\u516C\u5171\u7684.styl\u6587\u4EF6\u901A\u8FC7@import \u201Cxx.styl\u201D \u6DFB\u52A0\u5230\u9700\u8981\u7684Vue\u6587\u4EF6\u4E2D\u5355\u72EC\u4F7F\u7528!</p><h3 id="\u7A7F\u900F" tabindex="-1">\u7A7F\u900F <a class="header-anchor" href="#\u7A7F\u900F" aria-hidden="true">#</a></h3><p>\u4EC5\u652F\u6301stylus\u4F7F\u7528\uFF1B</p><p>\u5F53\u9047\u5230\u65E0\u6CD5\u4FEE\u6539\u7684\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528&gt;&gt;&gt;\u8FDB\u884C\u7A7F\u900F\uFF1B</p><p><code>.btn &gt;&gt;&gt; .swiper-tab-tem{}</code>\uFF1B\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u6BD4important\u8FD8\u9AD8\uFF1B</p><p>\u7236\u5143\u7D20\u4E0B\u7684\u5B50\u5143\u7D20\u989C\u8272\u65E0\u6CD5\u4FEE\u6539\u65F6\u4F7F\u7528\uFF1B</p>`,65),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var b=n(t,[["render",c]]);export{g as __pageData,b as default};
