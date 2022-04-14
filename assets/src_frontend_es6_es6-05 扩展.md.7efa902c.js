import{_ as n,c as a,o as s,d as p}from"./app.7277c524.js";const f='{"title":"es6-05 \u6269\u5C55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5B57\u7B26\u4E32\u6269\u5C55","slug":"\u4E00\u3001\u5B57\u7B26\u4E32\u6269\u5C55"},{"level":3,"title":"padStart\u3001padEnd","slug":"padstart\u3001padend"},{"level":2,"title":"\u4E8C\u3001\u6570\u5B57\u7684\u6269\u5C55","slug":"\u4E8C\u3001\u6570\u5B57\u7684\u6269\u5C55"},{"level":2,"title":"\u4E09\u3001\u6570\u7EC4\u6269\u5C55","slug":"\u4E09\u3001\u6570\u7EC4\u6269\u5C55"},{"level":3,"title":"Array.from","slug":"array-from"},{"level":3,"title":"Array.of","slug":"array-of"},{"level":3,"title":"Array.fill","slug":"array-fill"},{"level":2,"title":"\u56DB\u3001\u5BF9\u8C61\u6269\u5C55","slug":"\u56DB\u3001\u5BF9\u8C61\u6269\u5C55"},{"level":3,"title":"Object.is","slug":"object-is"},{"level":3,"title":"\u5BF9\u8C61\u6D45\u62F7\u8D1D","slug":"\u5BF9\u8C61\u6D45\u62F7\u8D1D"},{"level":3,"title":"\u5BF9\u8C61\u6DF1\u62F7\u8D1D","slug":"\u5BF9\u8C61\u6DF1\u62F7\u8D1D"}],"relativePath":"src/frontend/es6/es6-05 \u6269\u5C55.md","lastUpdated":1649840977570}',t={},e=p(`<h1 id="es6-05-\u6269\u5C55" tabindex="-1">es6-05 \u6269\u5C55 <a class="header-anchor" href="#es6-05-\u6269\u5C55" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5B57\u7B26\u4E32\u6269\u5C55" tabindex="-1">\u4E00\u3001\u5B57\u7B26\u4E32\u6269\u5C55 <a class="header-anchor" href="#\u4E00\u3001\u5B57\u7B26\u4E32\u6269\u5C55" aria-hidden="true">#</a></h2><p>\u5305\u542B\u662F\u5426\u7684\u7ED3\u679C\u90FD\u662Ftrue\u6216false\uFF1B</p><ul><li><p><code>includes</code>(str) : \u5224\u65AD\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u5B57\u7B26\u4E32 true|false === indexOf\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u6570\u7EC4\uFF1Bincludes\u662F\u4F7F\u7528\u5168\u7B49\u7684\uFF1B</p></li><li><p><code>startsWith</code>(str) : \u5224\u65AD\u662F\u5426\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32\u5F00\u5934</p></li><li><p><code>endsWith</code>(str) : \u5224\u65AD\u662F\u5426\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32\u7ED3\u5C3E</p></li><li><p><code>repeat</code>(count) : \u91CD\u590D\u6307\u5B9A\u6B21\u6570 \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32</p></li></ul><p>javascript \u5C31\u662F\u7531\u9762\u5411\u5BF9\u8C61\u601D\u60F3\u9020\u51FA\u6765\u7684\u4E00\u4E2A\u4EA7\u54C1 \u8BED\u6CD5\u662FECMAscript</p><div class="language-js"><pre><code><span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token comment">//\u5B57\u9762\u91CF\u5F62\u5F0F\u521B\u5EFA\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E</span>
</code></pre></div><p>\u867D\u7136\u662F\u5B57\u9762\u91CF\u5F62\u5F0F\u521B\u5EFA\u7684\u5B57\u7B26\u4E32\uFF0C\u5B57\u9762\u91CF\u5F62\u5F0F\u521B\u5EFA\u7684\u6570\u636E\u4E5F\u80FD\u7EE7\u627F \u6784\u9020\u51FD\u6570\u521B\u5EFA\u51FA\u6765\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61 \u7684\u7279\u6027</p><p>\u53EA\u6709\u5BF9\u8C61\u624D\u6709\u5C5E\u6027\u548C\u65B9\u6CD5</p><p>\u5B57\u9762\u91CF\u5F62\u5F0F\u521B\u5EFA\u7684\u5B57\u7B26\u4E32 \u672C\u8D28\u4E0A\uFF08\u5E95\u5C42\uFF09\u4E5F\u662F\u7531 new String() \u521B\u5EFA\u51FA\u6765\u7684</p><h3 id="padstart\u3001padend" tabindex="-1">padStart\u3001padEnd <a class="header-anchor" href="#padstart\u3001padend" aria-hidden="true">#</a></h3><p>\uFF081\uFF09\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u6700\u5C0F\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u8865\u5168\u5B57\u7B26\u4E32\uFF1B</p><div class="language-js"><pre><code><span class="token string">&#39;1&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//\u8FD4\u56DE &#39;01&#39;</span>
<span class="token string">&#39;1&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>   <span class="token comment">//\u8FD4\u56DE &#39;10&#39;</span>
</code></pre></div><p>\uFF082\uFF09\u5982\u679C\u539F\u5B57\u7B26\u4E32\u7B49\u4E8E\u6216\u5927\u4E8E\u6307\u5B9A\u7684\u6700\u5C0F\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32\uFF1B</p><div class="language-js"><pre><code><span class="token string">&#39;10&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//\u8FD4\u56DE &#39;10&#39;</span>
</code></pre></div><p>\uFF083\uFF09\u5982\u679C\u539F\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u5C0F\u4E8E\u8865\u5168\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u622A\u53BB\u8D85\u51FA\u4F4D\u6570\u7684\u8865\u5168\u5B57\u7B26\u4E32\uFF1B</p><div class="language-js"><pre><code><span class="token string">&#39;09-12&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;YYYY-09-12&quot;</span>
<span class="token string">&#39;09-12&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;09-12YYYY-&quot;</span>
</code></pre></div><h2 id="\u4E8C\u3001\u6570\u5B57\u7684\u6269\u5C55" tabindex="-1">\u4E8C\u3001\u6570\u5B57\u7684\u6269\u5C55 <a class="header-anchor" href="#\u4E8C\u3001\u6570\u5B57\u7684\u6269\u5C55" aria-hidden="true">#</a></h2><ul><li><p><code>isFinite</code>(i) : \u5224\u65AD\u662F\u5426\u662F\u6709\u9650\u5927\u7684\u6570</p></li><li><p><code>isNaN</code>(i) : \u5224\u65AD\u662F\u5426\u662FNaN\uFF0C\u4E24\u4E2ANaN\u662F\u4E0D\u7B49\u7684\uFF1B</p></li><li><p><code>Number.isInteger</code>(i) : \u5224\u65AD\u662F\u5426\u662F\u6574\u6570</p></li><li><p><code>parseInt</code>(str) : \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u6570\u503C</p></li><li><p><code>Math.trunc</code>(i) : \u76F4\u63A5\u53BB\u9664\u5C0F\u6570\u90E8\u5206\uFF0C\u5FC5\u987B\u662F\u7EAF\u6570\u5B57\uFF0C\u5982\u679C\u6570\u5B57\u5E26\u5355\u4F4D\uFF0C\u5219\u4F1A\u662FNAN</p></li></ul><h2 id="\u4E09\u3001\u6570\u7EC4\u6269\u5C55" tabindex="-1">\u4E09\u3001\u6570\u7EC4\u6269\u5C55 <a class="header-anchor" href="#\u4E09\u3001\u6570\u7EC4\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="array-from" tabindex="-1">Array.from <a class="header-anchor" href="#array-from" aria-hidden="true">#</a></h3><blockquote><p>\u5C06\u4F2A\u6570\u7EC4\u5BF9\u8C61\u6216\u53EF\u904D\u5386\u5BF9\u8C61\u8F6C\u6362\u4E3A\u771F\u6570\u7EC4\uFF0C\u9700\u8981\u4E00\u4E2A\u53D8\u91CF\u6765\u63A5\u6536</p></blockquote><p><code>Array.from(v,[callback])</code></p><p>Array.from\u8F6C\u6362\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u952E\u540D\u5FC5\u987B\u5199\u6570\u5B57\u4E0B\u6807\uFF0C \u5FC5\u987B\u52A0length\u957F\u5EA6\uFF0C\u5426\u5219\u4F1A\u5931\u8D25\uFF1B</p><p>\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\uFF0C\u5FC5\u987B\u8981\u6709length\uFF0C\u5C5E\u6027\u540D\u5FC5\u987B\u662F\u6570\u503C\uFF0C\u5C5E\u6027\u540D\u4F5C\u4E3A\u6570\u7EC4\u7684\u7D22\u5F15\u53F7\uFF0C\u5982\u679C\u4E0D\u5E26length\uFF0Cfrom\u8F6C\u6362\u51FA\u6765\u7684\u5C06\u662F\u7A7A\u6570\u7EC4\uFF1B</p><p>Array.from\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u6307\u5B9A\u8FD4\u56DE\u7684\u6570\u7EC4\u662F\u4EC0\u4E48\u5F62\u5F0F\u7684\uFF0C\u53C2\u6570item,index,arr</p><div class="language-js"><pre><code><span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>cities<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>age<span class="token punctuation">)</span>   <span class="token comment">//[18,20] \u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E00\u9879</span>
<span class="token comment">//{age} \u7B2C\u4E8C\u4E2A\u53C2\u6570\u8FD4\u56DE\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u586B\u5199\uFF1B</span>
</code></pre></div><p>\u5C0F\u62EC\u53F7\u4E2D\u4EE3\u8868\u6BCF\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F7F\u7528\u5BF9\u8C61\u89E3\u6784\uFF0C\u5C06\u5E74\u9F84\u8FD4\u56DE\u51FA\u6765;\u5982\u679C\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u952E\u540D\u9700\u8981\u4EE5[]\u4E2D\u62EC\u53F7\u5F62\u5F0F\u8FD4\u56DE;</p><h3 id="array-of" tabindex="-1">Array.of <a class="header-anchor" href="#array-of" aria-hidden="true">#</a></h3><blockquote><p>\u5C06\u4E00\u7CFB\u5217\u503C\u8F6C\u6362\u6210\u6570\u7EC4\uFF0C\u548Cnew Array\u4F20\u503C\u662F\u4E00\u6837\u7684</p></blockquote><div class="language-js"><pre><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3<span class="token punctuation">)</span>  <span class="token comment">// \u5C06\u4E00\u7CFB\u5217\u503C\u8F6C\u6362\u6210\u6570\u7EC4\uFF0C\u548Cnew Array\u4F20\u503C\u662F\u4E00\u6837\u7684\uFF1B</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// \u8FD9\u4E2A3\u4E0D\u662F\u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF1B</span>
</code></pre></div><h3 id="array-fill" tabindex="-1">Array.fill <a class="header-anchor" href="#array-fill" aria-hidden="true">#</a></h3><blockquote><p>\u4F7F\u7528\u4EC0\u4E48\u6765\u586B\u5145</p></blockquote><div class="language-js"><pre><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06\u6570\u7EC4\u586B\u51455\u4E2A\u7A7A\u5B57\u7B26\u4E32\uFF1Bfill\u586B\u5199\u5B57\u7B26\uFF1B</span>
</code></pre></div><h2 id="\u56DB\u3001\u5BF9\u8C61\u6269\u5C55" tabindex="-1">\u56DB\u3001\u5BF9\u8C61\u6269\u5C55 <a class="header-anchor" href="#\u56DB\u3001\u5BF9\u8C61\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="object-is" tabindex="-1"><a href="http://Object.is" target="_blank" rel="noopener noreferrer">Object.is</a> <a class="header-anchor" href="#object-is" aria-hidden="true">#</a></h3><p><code>Object.is(v1, v2)</code></p><p>\u5224\u65AD2\u4E2A\u6570\u636E\u662F\u5426\u5B8C\u5168\u76F8\u7B49\uFF0C\u4E24\u4E2ANaN\u662F\u76F8\u7B49\u7684\uFF0C\u666E\u901A\u5224\u65AD\u4E24\u4E2ANaN\u662F\u4E0D\u76F8\u7B49\u7684\uFF1B</p><h3 id="\u5BF9\u8C61\u6D45\u62F7\u8D1D" tabindex="-1">\u5BF9\u8C61\u6D45\u62F7\u8D1D <a class="header-anchor" href="#\u5BF9\u8C61\u6D45\u62F7\u8D1D" aria-hidden="true">#</a></h3><p><code>Object.assign(target, source1, source2..)</code></p><p>\u5C06\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u590D\u5236\u5230\u76EE\u6807\u5BF9\u8C61\u8EAB\u4E0A\uFF0Csource\u662F\u6E90\u5BF9\u8C61\uFF1B</p><p>\u6D45\u62F7\u8D1D\u4FEE\u6539\u5C5E\u6027\u503C\u4E4B\u540E\uFF0C\u6E90\u5BF9\u8C61\u7684\u503C\u4E0D\u4F1A\u88AB\u6539\u53D8\uFF0C\u5982\u679C\u662F\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u5219\u4F1A\u88AB\u6539\u53D8\uFF1B</p><p>\u9700\u8981\u58F0\u660E\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u518D\u8FDB\u884C\u62F7\u8D1D\uFF1B</p><p>\u4E5F\u53EF\u4EE5\uFF1A<code>let obj3 = Object.assign({},obj1,obj2...)</code>\u5E38\u7528\u4E8E\u5408\u5E76\u5BF9\u8C61\uFF1B</p><h3 id="\u5BF9\u8C61\u6DF1\u62F7\u8D1D" tabindex="-1">\u5BF9\u8C61\u6DF1\u62F7\u8D1D <a class="header-anchor" href="#\u5BF9\u8C61\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a></h3><p><code>var obj1 = JSON.parse(JSON.stringify(arr/obj)) </code></p><p>\u5C06\u5BF9\u8C61\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u5BF9\u8C61\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u53D8\u91CF\u6765\u63A5\u6536\uFF0C\u5C31\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF1B</p><p>\u6570\u7EC4\u6216\u5BF9\u8C61\u6DF1\u62F7\u8D1D, \u51FD\u6570\u4E0D\u80FD\u62F7\u8D1D\uFF1B</p><p>\u6DF1\u62F7\u8D1D\u539F\u7406\uFF1A\uFF08\u6570\u7EC4\uFF0C\u5BF9\u8C61\u90FD\u53EF\u7528\uFF09\u6D45\u62F7\u8D1D+\u9012\u5F52</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span> <span class="token parameter">obj</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;Object&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;Array&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>  <span class="token comment">//\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7C7B\u578B  \u5982\u679C\u662F\u6570\u7EC4\u5219\u521D\u59CB\u4E00\u4E2A  []  \u5982\u679C\u662F\u4E00\u4E2AObject\u5219\u521D\u59CB\u4E00\u4E2A {}</span>

    <span class="token comment">//\u6D45\u62F7\u8D1D\uFF0C\u4F46\u662F+ \u9012\u5F52\u601D\u60F3\uFF0C\u5C31\u5B9E\u73B0\u4E86\u6DF1\u62F7\u8D1D</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">var</span> attr <span class="token keyword">in</span> obj <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      <span class="token comment">//\u5224\u65AD\u4F20\u5165\u7684\u952E\u503C\u662F\u5426\u662F\u6570\u7EC4\u6216\u5BF9\u8C61</span>
            result<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token punctuation">)</span>  <span class="token comment">//\u5982\u679C\u662F\u5BF9\u8C61\u5219\u518D\u8C03\u7528\u4E00\u6B21\u51FD\u6570; \u5B9E\u73B0\u9012\u5F52;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span>  <span class="token comment">//\u5C06\u6BCF\u4E00\u5929\u6570\u636E\u8F93\u5165\u8FDB\u5BF9\u8C61\u6216\u6570\u7EC4;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>    
</code></pre></div>`,49),o=[e];function c(l,r,u,i,k,d){return s(),a("div",null,o)}var m=n(t,[["render",c]]);export{f as __pageData,m as default};
