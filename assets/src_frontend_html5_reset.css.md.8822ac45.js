import{_ as n,c as s,o as a,d as p}from"./app.7277c524.js";const m='{"title":"normalize.css","description":"","frontmatter":{},"headers":[{"level":2,"title":"normalize.css","slug":"normalize-css"}],"relativePath":"src/frontend/html5/reset.css.md","lastUpdated":1649840977590}',t={},o=p(`<h2 id="normalize-css" tabindex="-1">normalize.css <a class="header-anchor" href="#normalize-css" aria-hidden="true">#</a></h2><p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener noreferrer">https://github.com/necolas/normalize.css</a></p><p>\u6BD4reset\u66F4\u517C\u5BB9\uFF0Creset\u662F\u628A\u9ED8\u8BA4\u6837\u5F0F\u66FF\u6362\u6389\uFF0Cnormalize\u4EC5\u4FEE\u590D\u4E00\u4E9B\u6837\u5F0Fbug\uFF0C\u5E76\u4FDD\u8BC1\u5404\u81EA\u6D4F\u89C8\u5668\u7684\u4E00\u81F4\u6027\uFF1B</p><h1 id="reset-css" tabindex="-1">reset.css <a class="header-anchor" href="#reset-css" aria-hidden="true">#</a></h1><p>\u7F51\u5740\uFF1A<a href="https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/</a></p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">prefers-reduced-motion</span><span class="token punctuation">:</span>reduce<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> 0s<span class="token important">!important</span><span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> 0s<span class="token important">!important</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">*,::after,::before</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block
<span class="token punctuation">}</span>

<span class="token selector">audio,canvas,video</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block
<span class="token punctuation">}</span>

<span class="token selector">audio:not([controls])</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">[hidden]</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">-ms-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">dl,menu,ol,ul</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">dd</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">menu,ol,ul</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">nav ol,nav ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">list-style-image</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">-ms-interpolation-mode</span><span class="token punctuation">:</span> bicubic
<span class="token punctuation">}</span>

<span class="token selector">figure</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">form</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">legend</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> normal
<span class="token punctuation">}</span>

<span class="token selector">button,input,select,textarea</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline
<span class="token punctuation">}</span>

<span class="token selector">button,input</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> normal
<span class="token punctuation">}</span>

<span class="token selector">button,html input[type=button],input[type=reset],input[type=submit]</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer
<span class="token punctuation">}</span>

<span class="token selector">button[disabled],input[disabled]</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> default
<span class="token punctuation">}</span>

<span class="token selector">input[type=checkbox],input[type=radio]</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">input[type=search]</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield
<span class="token punctuation">}</span>

<span class="token selector">input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none
<span class="token punctuation">}</span>

<span class="token selector">button::-moz-focus-inner,input::-moz-focus-inner</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token selector">textarea</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top
<span class="token punctuation">}</span>


// \u81EA\u5236\uFF0C\u9700\u8981scss
<span class="token atrule"><span class="token rule">@each</span> $name<span class="token punctuation">,</span>$prop in <span class="token punctuation">(</span><span class="token property">p</span><span class="token punctuation">:</span>padding<span class="token punctuation">,</span><span class="token property">pt</span><span class="token punctuation">:</span>padding-top<span class="token punctuation">,</span><span class="token property">pr</span><span class="token punctuation">:</span>padding-right<span class="token punctuation">,</span><span class="token property">pb</span><span class="token punctuation">:</span>padding-bottom<span class="token punctuation">,</span><span class="token property">pl</span><span class="token punctuation">:</span>padding-left<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@for</span> $i from 5 through 30</span> <span class="token punctuation">{</span>
    <span class="token selector">.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span><span class="token selector">#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span><span class="token punctuation">{</span>
      <span class="token selector">#</span><span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token selector">: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> // \u66F4\u65B9\u4FBF\u7684\u4F7F\u7528\u95F4\u9694\uFF0C\u5982p10\u7C7B\u540D\uFF0Cpadding\uFF1A10px<span class="token punctuation">;</span>

<span class="token atrule"><span class="token rule">@each</span> $name<span class="token punctuation">,</span>$prop in <span class="token punctuation">(</span><span class="token property">m</span><span class="token punctuation">:</span>margin<span class="token punctuation">,</span><span class="token property">mt</span><span class="token punctuation">:</span>margin-top<span class="token punctuation">,</span><span class="token property">mr</span><span class="token punctuation">:</span>margin-right<span class="token punctuation">,</span><span class="token property">mb</span><span class="token punctuation">:</span>margin-bottom<span class="token punctuation">,</span><span class="token property">ml</span><span class="token punctuation">:</span>margin-left<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@for</span> $i from 5 through 30</span> <span class="token punctuation">{</span>
    <span class="token selector">.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span><span class="token selector">#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span><span class="token punctuation">{</span>
      <span class="token selector">#</span><span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token selector">: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">// \u5C45\u4E2D\u7C7B\u540D
.dibvm:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">// \u5FAA\u73AF\u5B57\u4F53
.f0</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.f10</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> left center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@for</span> $i from 12 through 24</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $i &lt; 16</span> <span class="token punctuation">{</span>
    <span class="token selector">.f#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token selector">font-size: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span> // 12. 13. 14. 15. 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $i % 2 == 0</span> <span class="token punctuation">{</span>
    <span class="token selector">.f#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
      <span class="token selector">font-size: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.cp</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.usn</span> <span class="token punctuation">{</span>
    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
