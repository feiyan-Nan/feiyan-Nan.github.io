import{_ as n,c as a,o as s,d as t}from"./app.7277c524.js";const f='{"title":"animate.css\u4F7F\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5F15\u5165","slug":"\u4E00\u3001\u5F15\u5165"}],"relativePath":"src/frontend/other-note/animate.css\u4F7F\u7528\u65B9\u6CD5.md","lastUpdated":1649840977599}',p={},e=t(`<h1 id="animate-css\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">animate.css\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#animate-css\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5F15\u5165" tabindex="-1">\u4E00\u3001\u5F15\u5165 <a class="header-anchor" href="#\u4E00\u3001\u5F15\u5165" aria-hidden="true">#</a></h2><ol><li><p>\u5B98\u7F51\uFF1A <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">https://daneden.github.io/animate.css/</a>\uFF1B</p></li><li><p>\u5B98\u65B9cdn</p></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>\u4F7F\u7528\u65B9\u6CD5</li></ol><p>\u6253\u5F00\u5B98\u7F51\uFF0C\u67E5\u770B\u9700\u8981\u7684\u52A8\u753B\u540D\u79F0\uFF0C\u4E0A\u9762\u7684\u540D\u79F0\u5C31\u662F\u52A8\u753B\u7684\u7C7B\u540D\uFF0C\u76F4\u63A5\u5199\u4E0A\u7C7B\u540D\u548Canimated\u7C7B\u540D\u5373\u53EF\uFF1B</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>animated bounce<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="4"><li>\u53EF\u7528\u7684\u7C7B\u540D infinite\uFF0C\u65E0\u9650\u5FAA\u73AF\uFF1B</li></ol><p>delay-2s\uFF1B\u4FEE\u6539\u52A8\u753B\u7684\u5EF6\u8FDF\u51FA\u73B0\u7684\u65F6\u95F4\uFF1B</p><p>delay-2s/3s/4s/5s\uFF1Banimate\u5B9A\u4E49\u7684\u5EF6\u8FDF\u7C7B\u540D\uFF1B\u9700\u8981\u81EA\u5B9A\u4E49\u5EF6\u8FDF\u53EF\u4EE5\u6DFB\u52A0\u5230css\u91CC\u9762\uFF1B</p><p>\u63A7\u5236\u52A8\u753B\u901F\u5EA6\uFF1A.slow(2s)\uFF0C.slower(3s)\uFF0C.fast(800ms)\uFF0C.faster(500ms)\uFF1B\uFF08\u5C0F\u62EC\u53F7\u662F\u8BF4\u660E\uFF0C\u4E0D\u8981\u52A0\u5C0F\u62EC\u53F7\uFF09</p><ol start="5"><li>\u7ED9\u52A8\u753B\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationed&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A8\u753B\u5B8C\u6210&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="6"><li>\u4F7F\u7528\u4E0B\u9762\u51FD\u6570\u8FDB\u884C\u7B80\u5355\u6DFB\u52A0\u5220\u9664\u52A8\u753B</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">animateCSS</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> animationName<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
    node<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;animated&#39;</span><span class="token punctuation">,</span> animationName<span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">handleAnimationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;animated&#39;</span><span class="token punctuation">,</span> animationName<span class="token punctuation">)</span>
        node<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationend&#39;</span><span class="token punctuation">,</span> handleAnimationEnd<span class="token punctuation">)</span>


        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationend&#39;</span><span class="token punctuation">,</span> handleAnimationEnd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\u65F6\uFF1AanimateCSS(&#39;div&#39;,&#39;fadeIn&#39;,function(){alert(&#39;\u52A8\u753B\u5B8C\u6210&#39;)})\uFF1B\u56DE\u8C03\u51FD\u6570\u53EF\u5199\u53EF\u4E0D\u5199\uFF1B</p>`,16),o=[e];function c(l,i,u,k,r,d){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
