import{_ as n,c as s,o as a,d as p}from"./app.7277c524.js";const y='{"title":"TS-01 \u5B9A\u4E49\u57FA\u672C\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5B9A\u4E49\u7C7B\u578B","slug":"\u4E00\u3001\u5B9A\u4E49\u7C7B\u578B"},{"level":3,"title":"\u57FA\u7840\u7C7B\u578B","slug":"\u57FA\u7840\u7C7B\u578B"},{"level":3,"title":"\u6570\u7EC4\u7C7B\u578B","slug":"\u6570\u7EC4\u7C7B\u578B"},{"level":3,"title":"\u5143\u7EC4\u7C7B\u578B","slug":"\u5143\u7EC4\u7C7B\u578B"},{"level":3,"title":"any\u7C7B\u578B\u548Cvoid\u7C7B\u578B","slug":"any\u7C7B\u578B\u548Cvoid\u7C7B\u578B"},{"level":3,"title":"unknown","slug":"unknown"},{"level":3,"title":"null\u548Cundefined","slug":"null\u548Cundefined"},{"level":3,"title":"object\u7C7B\u578B","slug":"object\u7C7B\u578B"},{"level":3,"title":"\u7C7B\u578B\u63A8\u8BBA","slug":"\u7C7B\u578B\u63A8\u8BBA"},{"level":3,"title":"\u7C7B\u578B\u65AD\u8A00","slug":"\u7C7B\u578B\u65AD\u8A00"}],"relativePath":"src/frontend/Typescript/ts-01 \u57FA\u7840\u7C7B\u578B.md","lastUpdated":1649840977555}',t={},e=p(`<h1 id="ts-01-\u5B9A\u4E49\u57FA\u672C\u7C7B\u578B" tabindex="-1">TS-01 \u5B9A\u4E49\u57FA\u672C\u7C7B\u578B <a class="header-anchor" href="#ts-01-\u5B9A\u4E49\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5B9A\u4E49\u7C7B\u578B" tabindex="-1">\u4E00\u3001\u5B9A\u4E49\u7C7B\u578B <a class="header-anchor" href="#\u4E00\u3001\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u7C7B\u578B" tabindex="-1">\u57FA\u7840\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">bool</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//\u5E03\u5C14</span>
<span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">123</span> <span class="token comment">// \u6570\u5B57</span>
<span class="token keyword">let</span> <span class="token literal-property property">str</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span> <span class="token comment">// \u5B57\u7B26\u4E32</span>
</code></pre></div><h3 id="\u6570\u7EC4\u7C7B\u578B" tabindex="-1">\u6570\u7EC4\u7C7B\u578B <a class="header-anchor" href="#\u6570\u7EC4\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">arr1</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// \u6570\u5B57\u6570\u7EC4</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr3</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> number<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u6570\u5B57\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u7EC4, \u68C0\u6D4B\u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">let</span> <span class="token literal-property property">mySons</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hhh&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment">// \u5BF9\u8C61\u6570\u7EC4</span>
</code></pre></div><h3 id="\u5143\u7EC4\u7C7B\u578B" tabindex="-1">\u5143\u7EC4\u7C7B\u578B <a class="header-anchor" href="#\u5143\u7EC4\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u56FA\u5B9A\u957F\u5EA6\uFF0C\u5FC5\u987B\u6309\u7167\u5B9A\u4E49\u7684\u7C7B\u578B\u548C\u957F\u5EA6</p><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">tuple</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> number<span class="token punctuation">,</span> boolean<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>
</code></pre></div><p><strong>\u8D8A\u754C\u5143\u7D20</strong></p><p>\u5982\u679C\u8D85\u8FC7\u957F\u5EA6\u7684\u503C\u53EB\u505A\u8D8A\u754C\u5143\u7D20, 2.6\u7248\u672C\u4E4B\u524D\u8D8A\u754C\u5143\u7D20\u53EA\u8981\u662F\u89C4\u5B9A\u7684\u5176\u4E2D\u4E00\u79CD\u90FD\u884C,2.6\u4E4B\u540E\u4E0D\u80FD\u8D85\u8FC7\u957F\u5EA6\uFF1B</p><h3 id="any\u7C7B\u578B\u548Cvoid\u7C7B\u578B" tabindex="-1">any\u7C7B\u578B\u548Cvoid\u7C7B\u578B <a class="header-anchor" href="#any\u7C7B\u578B\u548Cvoid\u7C7B\u578B" aria-hidden="true">#</a></h3><ol><li>any\u4EFB\u4F55\u7C7B\u578B\uFF0Cany\u7C7B\u578B\u662F\u4E0D\u9650\u5236\u7C7B\u578B</li></ol><blockquote><p>\u4EC0\u4E48\u7C7B\u578B\u90FD\u53EF\u4EE5\u5199\uFF08\u80FD\u4E0D\u7528\u5C3D\u91CF\u4E0D\u7528any\uFF09</p></blockquote><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>
</code></pre></div><ol start="2"><li>void\u7C7B\u578B\uFF0C\u4E0Eany\u7C7B\u578B\u76F8\u53CD\uFF0C\u4EC0\u4E48\u7C7B\u578B\u90FD\u4E0D\u662F</li></ol><blockquote><p>\u7ECF\u5E38\u7528\u4E8E\u4E00\u4E2A\u51FD\u6570\u4E0D\u9700\u8981\u8FD4\u56DE\u503C\uFF0Cundefined\u548Cnull\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9void\u7C7B\u578B\uFF1B\uFF08\u5F53null\u8D4B\u503C\u7ED9void\u65F6\u9700\u8981\u5173\u95EDtsconfig\u7684strict\uFF09</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u53EA\u80FD\u4F20\u5B57\u7B26\u4E32, \u5426\u5219\u62A5\u9519;</span>

<span class="token keyword">let</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
v <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
v <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="unknown" tabindex="-1">unknown <a class="header-anchor" href="#unknown" aria-hidden="true">#</a></h3><blockquote><p>ts3.0\u65B0\u589E\u7684\u4E00\u4E2A<strong>\u9876\u7EA7\u7C7B\u578B</strong>\uFF0C\u76F8\u5BF9\u4E8E<code>any</code>\u6765\u8BF4\u662F\u5B89\u5168\u7684</p></blockquote><ol><li><p>\u4EFB\u4F55\u7C7B\u578B\u7684\u503C\u90FD\u53EF\u4EE5\u8D4B\u503C\u7ED9<code>unknown</code>\u7C7B\u578B</p><div class="language-ts"><pre><code><span class="token keyword">let</span> value1<span class="token operator">:</span> <span class="token builtin">unknown</span>
value1 <span class="token operator">=</span> <span class="token number">1</span>
value1 <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
</code></pre></div></li><li><p><code>never</code>\u662F<code>unknow</code>\u7684\u5B50\u7C7B\u578B</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">type6</span> <span class="token operator">=</span> <span class="token builtin">never</span> <span class="token keyword">extends</span> <span class="token class-name">unknow</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u8FD4\u56DEtrue</span>
</code></pre></div></li></ol><h3 id="null\u548Cundefined" tabindex="-1">null\u548Cundefined <a class="header-anchor" href="#null\u548Cundefined" aria-hidden="true">#</a></h3><blockquote><p>\u5728ts\u4E2D\u5373\u662F\u503C\u4E5F\u662F\u7C7B\u578B</p></blockquote><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
u <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06undefined\u8D4B\u503C\u7ED9num,\u5982\u679C\u5F00\u4E86tsconfig\u7684\u4E25\u683C\u68C0\u67E5\u5219\u4E0D\u80FD\u8D4B\u503C;</span>
</code></pre></div><h3 id="object\u7C7B\u578B" tabindex="-1">object\u7C7B\u578B <a class="header-anchor" href="#object\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">getObj</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> object</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getObj</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hhh&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u53EA\u80FD\u4F20\u5165\u5BF9\u8C61</span>
</code></pre></div><h3 id="\u7C7B\u578B\u63A8\u8BBA" tabindex="-1">\u7C7B\u578B\u63A8\u8BBA <a class="header-anchor" href="#\u7C7B\u578B\u63A8\u8BBA" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">let</span> myNumber <span class="token operator">=</span> <span class="token number">5</span>
myNumber <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token comment">// \u62A5\u9519, \u518D\u7B2C\u4E00\u6B21\u5B9A\u4E49\u65F6\u5DF2\u7ECF\u7ED9\u51FA\u7C7B\u578B\u4E86</span>
</code></pre></div><h3 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1">\u7C7B\u578B\u65AD\u8A00 <a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a></h3><blockquote><p>\u7C7B\u578B\u65AD\u8A00\u50CF\u662F\u4E00\u79CD\u7C7B\u578B\u8F6C\u6362\uFF0C\u5728\u6211\u4EEC\u77E5\u9053\u8BE5\u7C7B\u578B\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u901A\u8FC7\u7279\u5B9A\u8BED\u6CD5\u5F3A\u884C\u8F6C\u6362\u6210\u8BE5\u7C7B\u578B\uFF1B</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">const</span> getLength <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5982\u679C\u76F4\u63A5\u4F7F\u7528target.length\u4F1A\u62A5\u9519, \u56E0\u4E3Anumber\u662F\u6CA1\u6709length\u5C5E\u6027\u7684;</span>
    <span class="token comment">// \u652F\u6301\u4E24\u79CD\u5199\u6CD5\u5B9A\u4E49\u7C7B\u578B;</span>
    <span class="token comment">// jsx\u65F6, \u53EA\u80FD\u4F7F\u7528as\u8BED\u6CD5\u65AD\u8A00, \u56E0\u4E3A\u524D\u8005\u4F1A\u88AB\u8BC6\u522B\u4E3A\u6807\u7B7E</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token punctuation">(</span>target <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>1\u3001<code>&lt;string&gt;target</code> \u65AD\u8A00</p><p>2\u3001<code>(target as string).length</code> \u65AD\u8A00</p><p>3\u3001\u975E\u7A7A\u65AD\u8A00</p><p>\u975E\u7A7A\u65AD\u8A00 \u4F7F\u7528!\u540E\u7F00\uFF0C\u65AD\u8A00\u503C\u4E0D\u662Fundefined\u6216null \u5982: <code>let x = name!</code> \u51FD\u6570\u8C03\u7528\u65F6: <code>cb!()</code></p><p>4\u3001\u786E\u5B9A\u8D4B\u503C\u65AD\u8A00 \u5148\u58F0\u660E\u7C7B\u578B\u540E\u65AD\u8A00\uFF0C\u6709\u65F6\u4F7F\u7528\u65F6\u68C0\u6D4B\u5230\u672A\u8D4B\u503C\u5C31\u4F7F\u7528\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u8BE5\u65AD\u8A00 <code>let a!: number;</code></p><p>5\u3001 const\u65AD\u8A00 \u5C06\u503C\u9501\u4E3A\u6B7B\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528as const\u6216\u8005<code>&lt;const&gt;</code>\u6765\u65AD\u8A00</p><div class="language-ts"><pre><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">;</span> <span class="token comment">// x: &#39;x&#39;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">;</span> <span class="token comment">// y: string; \u8FD9\u91CC\u7684y\u4E3Astring\u7C7B\u578B\u4E0D\u4E3A\u6B7B\u503C</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token string">&#39;y&#39;</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span> <span class="token comment">// y: string;</span>

<span class="token comment">// \u5BF9\u8C61\u65F6</span>
<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">const</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;SET_VALUE&#39;</span><span class="token punctuation">,</span>
    payload<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
</code></pre></div><p>\u5728\u8BBF\u95EEwindow\u4E0A\u7684\u5C5E\u6027\u5E76\u8D4B\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528as any\u6765\u65AD\u8A00</p><div class="language-TS"><pre><code><span class="token punctuation">(</span>window <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>\u603B\u7ED3\u7C7B\u578B\uFF1A</p><ul><li><code>string</code>\u3001<code>number</code>\u3001<code>boolean</code></li><li><code>number[]</code>\u3001<code>Array&lt;string&gt;</code>\u3001<code>(string|number)[]</code></li><li><code>void</code>\u3001<code>never</code></li><li><code>unknown\u3001undefined</code>\u3001<code>null</code></li><li><code>(&lt;string&gt;target)</code></li><li><code>(target as string)</code></li><li><code>(window as any)</code></li></ul>`,42),o=[e];function c(l,r,k,u,i,d){return a(),s("div",null,o)}var m=n(t,[["render",c]]);export{y as __pageData,m as default};
