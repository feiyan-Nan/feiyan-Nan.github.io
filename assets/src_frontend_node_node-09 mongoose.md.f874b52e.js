import{_ as n,c as s,o as a,d as p}from"./app.00f96e96.js";const h='{"title":"node-09 mongoose","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001mongoose","slug":"\u4E00\u3001mongoose"},{"level":2,"title":"\u4E8C\u3001Model.find()\u65B9\u6CD5","slug":"\u4E8C\u3001model-find-\u65B9\u6CD5"},{"level":2,"title":"\u4E09\u3001Model.update()\u65B9\u6CD5","slug":"\u4E09\u3001model-update-\u65B9\u6CD5"},{"level":2,"title":"\u56DB\u3001\u67E5\u8BE2\u6761\u6570","slug":"\u56DB\u3001\u67E5\u8BE2\u6761\u6570"},{"level":2,"title":"\u4E94\u3001Model.remove()\uFF1B","slug":"\u4E94\u3001model-remove-\uFF1B"},{"level":2,"title":"\u516D\u3001findByIdAndUpdate","slug":"\u516D\u3001findbyidandupdate"},{"level":2,"title":"\u4E03\u3001\u6587\u6863\u5BF9\u8C61","slug":"\u4E03\u3001\u6587\u6863\u5BF9\u8C61"}],"relativePath":"src/frontend/node/node-09 mongoose.md","lastUpdated":1649840977597}',o={},e=p(`<h1 id="node-09-mongoose" tabindex="-1">node-09 mongoose <a class="header-anchor" href="#node-09-mongoose" aria-hidden="true">#</a></h1><p>\u6587\u6863\uFF1A<a href="https://itbilu.com/nodejs/npm/B1FfBss6X.html" target="_blank" rel="noopener noreferrer">https://itbilu.com/nodejs/npm/B1FfBss6X.html</a></p><h2 id="\u4E00\u3001mongoose" tabindex="-1">\u4E00\u3001mongoose <a class="header-anchor" href="#\u4E00\u3001mongoose" aria-hidden="true">#</a></h2><ol><li><p>\u539F\u751Fmongodb:</p><p>\u53EF\u4EE5\u5B89\u88C5\uFF1Anpm i mongodb\uFF08\u539F\u751F\u7684mongodb\u5199\u6CD5\uFF09</p><p>\u73B0\u5728\u90FD\u662F\u4F7F\u7528mongoose\uFF0C\u5C01\u88C5\u7684mongodb\uFF1B</p></li><li><p>mongoose\u5B89\u88C5</p><p>npm i mongoose\uFF1B\u5B89\u88C5\u5230\u9879\u76EE\u6587\u4EF6\u5939\uFF1B</p></li><li><p>mongoose\u5BF9\u8C61\uFF1A</p><p>\uFF081\uFF09<code>Schema</code>\uFF1A\u7EA6\u675F\uFF08\u8BBE\u8BA1\u96C6\u5408[\u8868]\u7ED3\u6784\u7684\u540C\u65F6\u7EA6\u675F\u6570\u636E\u7C7B\u578B\uFF09\uFF1B</p><p>\uFF082\uFF09<code>Model</code>\uFF1A\u6A21\u578B | \u8868 | \u96C6\u5408\uFF0C\u7528\u6765\u64CD\u4F5C\u5177\u4F53\u7684\u6570\u636E\uFF1B</p><p>\uFF083\uFF09<code>document</code>\uFF1A\u4E00\u6761\u4E00\u6761\u7684\u8BB0\u5F55</p></li><li><p>mongoose\u64CD\u4F5Cmongodb\u7684\u6B65\u9AA4</p></li></ol><p>\uFF081\uFF09\u5F00\u542F\u670D\u52A1</p><div class="language-js"><pre><code>   <span class="token comment">//  \u5E76\u5F15\u5165mongoose</span>
<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>\uFF1B

   <span class="token comment">// \u8FDE\u63A5\u6570\u636E\u5E93</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>&#39;mongodb<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">27017</span><span class="token operator">/</span>test<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\uFF1B
    <span class="token comment">//test\u4E3A\u6570\u636E\u5E93\u540D\uFF0C27017\u7AEF\u53E3\u53EF\u4EE5\u7701\u7565\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u662F27017\uFF1B</span>

    <span class="token comment">// \u5B9A\u4E49Schema</span>

</code></pre></div><p>\uFF085\uFF09\u6839\u636ESchema\u521B\u5EFAModel\u5BF9\u8C61\uFF08\u521B\u5EFA\u6570\u636E\u5E93\u540D\uFF09</p><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49Schemas</span>
<span class="token keyword">let</span> Schemas <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>
<span class="token comment">//\u6570\u636E\u5E93\u540D\u9700\u8981\u52A0s\uFF0C\u4F1A\u8F6C\u53D8\u526F\u8BCD\uFF0C\u81EA\u52A8\u52A0s\uFF1B</span>
<span class="token keyword">let</span> userModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Schemas</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">uname</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;\u7537&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u901A\u8FC7Model\u5BF9\u8C61\u8FDB\u884CCRUD\u64CD\u4F5C\uFF08\u9700\u8981\u521B\u5EFA\u591A\u4E2A\u53EF\u4EE5\u5199\u5165\u4E00\u4E2A\u6570\u7EC4\uFF09</span>
userModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">uname</span><span class="token operator">:</span><span class="token string">&#39;hny&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>\uFF1B
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E8C\u3001model-find-\u65B9\u6CD5" tabindex="-1">\u4E8C\u3001Model.find()\u65B9\u6CD5 <a class="header-anchor" href="#\u4E8C\u3001model-find-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>Model.find(conditions[,projection][,options][,callback])</code>; \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF1B</p><ul><li><p><code>conditions</code>\uFF1Afind\u6761\u4EF6\uFF0C\u67E5\u8BE2\u7684\u6761\u4EF6\u503C\u53EF\u4EE5\u4E3A\u6B63\u5219\uFF1B</p></li><li><p><code>projection</code>\uFF1A\u8981\u5C55\u793A\u7684\u5B57\u6BB5\uFF0C0\u4E3A\u4E0D\u663E\u793A\uFF0C1\u4E3A\u663E\u793A\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5199null\uFF1B</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\uFF0C\u7528\u7A7A\u683C\u5206\u5F00\uFF0C\u4E0D\u663E\u793A\u7684\u7528-\u51CF\u53F7\uFF1B</p><p>\u793A\u4F8B\uFF1A<code>model.find({name:/li/i},&#39;name -_id&#39;,()=&gt;{})</code>\uFF1B</p></li><li><p><code>options</code>\uFF1A\u67E5\u8BE2\u9009\u9879\uFF0Csort(\u6392\u5E8F)\uFF0Climit(\u9650\u5236)\uFF0Cskip(\u8DF3\u8FC7)\uFF1B</p></li><li><p><code>callback</code>\uFF1A\u56DE\u8C03\u51FD\u6570\uFF0C\u67E5\u627E\u5230\u7684\u7ED3\u679C\uFF0C\u4ECE\u56DE\u8C03\u51FD\u6570\u4E2D\u83B7\u53D6\u6240\u4EE5\u51FD\u6570\u9700\u8981\u4E24\u4E2A\u5F62\u53C2(err,docs)\uFF1B</p><p>\u793A\u4F8B\uFF1A<code>model.find({name:&#39;hny&#39;},null,{skip:5},(err,dosc)=&gt;{})</code>\uFF1B</p><p>\u5982\u679C\u4E0D\u4F20\u9012\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4E0D\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C\u8FD4\u56DE\u4E00\u4E2Aquery\u5BF9\u8C61\uFF0C\u9700\u8981\u8C03\u7528exec()\u65B9\u6CD5\u624D\u80FD\u6267\u884C\uFF1B</p><p>\u63A8\u8350\u4F7F\u7528\u4E0D\u4F20\u9012\u56DE\u8C03\u51FD\u6570\uFF0C\u65B9\u4FBF\u524D\u8005\u6307\u5B9A\u590D\u6742\u7684\u6761\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u94FE\u5F0F\u8C03\u7528\uFF1B</p></li></ul><div class="language-js"><pre><code>exports<span class="token punctuation">.</span><span class="token function-variable function">findApiList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">conditions<span class="token punctuation">,</span> projection<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Models<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>conditions<span class="token punctuation">,</span> projection<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">results</span><span class="token operator">:</span> val<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> err<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001model-update-\u65B9\u6CD5" tabindex="-1">\u4E09\u3001Model.update()\u65B9\u6CD5 <a class="header-anchor" href="#\u4E09\u3001model-update-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>model.update(\u6761\u4EF6,\u4FEE\u6539\u7684\u5185\u5BB9[,options][,callback])</code>\uFF1B</p><p>\u4FEE\u6539\u591A\u6761\u9700\u8981\u52A0<code>{multi:true}</code>\uFF1B</p><p>\u4E0D\u5EFA\u8BAE\u4F7F\u7528update(),\u5EFA\u8BAE\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6CD5</p><ul><li><code>model.updateOne()</code>\uFF1B</li><li><code>model.updateMany()</code>\uFF1B</li></ul><h2 id="\u56DB\u3001\u67E5\u8BE2\u6761\u6570" tabindex="-1">\u56DB\u3001\u67E5\u8BE2\u6761\u6570 <a class="header-anchor" href="#\u56DB\u3001\u67E5\u8BE2\u6761\u6570" aria-hidden="true">#</a></h2><p><code>model.countDocuments({\u6761\u4EF6},(err,cont)=&gt;{})</code>\uFF1B</p><h2 id="\u4E94\u3001model-remove-\uFF1B" tabindex="-1">\u4E94\u3001Model.remove()\uFF1B <a class="header-anchor" href="#\u4E94\u3001model-remove-\uFF1B" aria-hidden="true">#</a></h2><ul><li><p><code>model.remove(\u6761\u4EF6,fn)\uFF1B</code></p></li><li><p><code>model.deleteOne()</code></p></li><li><p><code>model.deleteMany()\uFF1B</code></p></li></ul><h2 id="\u516D\u3001findbyidandupdate" tabindex="-1">\u516D\u3001findByIdAndUpdate <a class="header-anchor" href="#\u516D\u3001findbyidandupdate" aria-hidden="true">#</a></h2><p><code>findByIdAndUpdate(&#39;\u6761\u4EF6&#39;,&#39;\u4FEE\u6539\u5185\u5BB9&#39;,&#39;\u9650\u5236&#39;,fn)</code>\uFF1B</p><p>\u901A\u8FC7id\u4FEE\u6539\u5185\u5BB9</p><h2 id="\u4E03\u3001\u6587\u6863\u5BF9\u8C61" tabindex="-1">\u4E03\u3001\u6587\u6863\u5BF9\u8C61 <a class="header-anchor" href="#\u4E03\u3001\u6587\u6863\u5BF9\u8C61" aria-hidden="true">#</a></h2><ol><li><p>\u6DFB\u52A0\u6570\u636E\uFF1A<code>cur = model({})\uFF1Bcur.save()</code>\uFF1B\u76F4\u63A5\u4F7F\u7528model\u521B\u5EFA\u6570\u636E\uFF0C\u4E4B\u540E\u4FDD\u5B58\uFF1B</p><p>\u4E0D\u9700\u8981\u8C03\u7528<code>model.create</code>\u5C31\u53EF\u4EE5\u521B\u5EFA\u6570\u636E\uFF1B</p></li><li><p>find\u67E5\u627E\u5230\u6570\u636E\u4E4B\u540E\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u67E5\u627E\u5230\u7684\u6570\u636E\uFF0C\u4E4B\u540E\u8C03\u7528save()\u4E00\u4E0B\uFF1B</p></li></ol><div class="language-js"><pre><code>model<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>docs</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lishi&#39;</span><span class="token punctuation">;</span>
    docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u53EF\u4EE5\u901A\u8FC7<code>docs.toObject()</code>\u8F6C\u6210\u666E\u901A\u5BF9\u8C61\uFF0C\u4E4B\u540E\u662F\u4E0D\u7B49\u4E8Edocs\u7684\uFF1B</li></ol>`,28),t=[e];function c(l,i,u,r,d,k){return a(),s("div",null,t)}var g=n(o,[["render",c]]);export{h as __pageData,g as default};
