import{_ as n,c as s,o as a,d as p}from"./app.00f96e96.js";const y='{"title":"Webpack-04  \u4F18\u5316\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u591A\u7EBF\u7A0B\u6253\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5206\u6790\u5305\u5185\u5BB9","slug":"\u4E00\u3001\u5206\u6790\u5305\u5185\u5BB9"},{"level":2,"title":"\u4E8C\u3001\u4F18\u5316","slug":"\u4E8C\u3001\u4F18\u5316"},{"level":2,"title":"\u4E09\u3001dllplugin \u52A8\u6001\u94FE\u63A5\u5E93","slug":"\u4E09\u3001dllplugin-\u52A8\u6001\u94FE\u63A5\u5E93"},{"level":2,"title":"\u56DB\u3001\u591A\u7EBF\u7A0B\u6253\u5305","slug":"\u56DB\u3001\u591A\u7EBF\u7A0B\u6253\u5305"},{"level":2,"title":"\u4E94\u3001webpack\u5185\u7F6E\u4F18\u5316\u9879","slug":"\u4E94\u3001webpack\u5185\u7F6E\u4F18\u5316\u9879"}],"relativePath":"src/frontend/Webpack/webpack-04  \u4F18\u5316\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u591A\u7EBF\u7A0B\u6253\u5305.md","lastUpdated":1649840977569}',t={},e=p(`<h1 id="webpack-04-\u4F18\u5316\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u591A\u7EBF\u7A0B\u6253\u5305" tabindex="-1">Webpack-04 \u4F18\u5316\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u591A\u7EBF\u7A0B\u6253\u5305 <a class="header-anchor" href="#webpack-04-\u4F18\u5316\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u591A\u7EBF\u7A0B\u6253\u5305" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5206\u6790\u5305\u5185\u5BB9" tabindex="-1">\u4E00\u3001\u5206\u6790\u5305\u5185\u5BB9 <a class="header-anchor" href="#\u4E00\u3001\u5206\u6790\u5305\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u67E5\u770B\u54EA\u4E2A\u5305\u5360\u7528\u5185\u5BB9\u591A\u5927</p><ol><li>\u5B89\u88C5\uFF1A<code>webpack-bundle-analyzer</code></li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> webpack-bundle-analyzer -S
// or
<span class="token function">yarn</span> <span class="token function">add</span> -D webpack-bundle-analyzer
</code></pre></div><ol start="2"><li>\u914D\u7F6Ewebpack.js</li></ol><div class="language-js"><pre><code><span class="token comment">// \u5206\u6790\u5305\u5185\u5BB9 </span>
<span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span> 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token comment">// \u5F00\u542F BundleAnalyzerPlugin </span>
    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
 <span class="token punctuation">]</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E8C\u3001\u4F18\u5316" tabindex="-1">\u4E8C\u3001\u4F18\u5316 <a class="header-anchor" href="#\u4E8C\u3001\u4F18\u5316" aria-hidden="true">#</a></h2><ol><li><code>noParse</code></li></ol><p>\u7531\u4E8E\u5305\u6CA1\u6709\u5F15\u7528\u5176\u4ED6\u6A21\u5757\uFF0C\u56E0\u6B64\u4F7F\u7528\u8BE5\u65B9\u6CD5\uFF0C\u4E0D\u53BB\u89E3\u6790\u67D0\u4E2A\u5305\uFF0C\u6BD4\u5982jquery</p><div class="language-js"><pre><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">jquery</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5F53\u5F15\u5165jquery\u65F6\uFF0C\u4E0D\u53BB\u89E3\u6790</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li><code>exclude &amp; include</code></li></ol><p>exclude\u4E0D\u5305\u542B\u67D0\u4E2A\u6587\u4EF6\u5939\uFF0Cinclude\u5305\u542B\u67D0\u4E2A\u6587\u4EF6\u5939\uFF0C\u4E00\u822C\u4E24\u8005\u4F7F\u7528\u5176\u4E00\u5373\u53EF\uFF0C</p><p>\u4E00\u822C\u89E3\u6790js\u6587\u4EF6\u65F6\uFF0C\u4E5F\u4F1A\u627Enode_module\uFF0C\u56E0\u6B64\u9700\u8981\u52A0\u4E0Aexclude</p><div class="language-js"><pre><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_module</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li><code>webpack.IgnorePlugin</code></li></ol><p>\u5FFD\u7565\u5305\u5185\u90E8\u5F15\u5165\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u4F7F\u7528IgnorePlugin\u914D\u7F6E</p><p>\u5F53\u5F15\u5165moment\u65F6\uFF0C\u4F1A\u9ED8\u8BA4\u52A0\u8F7D\u6240\u6709\u7684locale\u6587\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u5FFD\u7565\u6389\uFF0C\u53EA\u5F15\u5165zh-cn\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token operator">/</span>\\<span class="token punctuation">.</span>\\<span class="token operator">/</span>locale<span class="token comment">//, /moment/) // \u7B2C\u4E00\u4E2A\u5FFD\u7565\u8C01, \u7B2C\u4E8C\u4E2A\u5F15\u5165\u4EC0\u4E48\u7684\u65F6\u5019</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001dllplugin-\u52A8\u6001\u94FE\u63A5\u5E93" tabindex="-1">\u4E09\u3001dllplugin \u52A8\u6001\u94FE\u63A5\u5E93 <a class="header-anchor" href="#\u4E09\u3001dllplugin-\u52A8\u6001\u94FE\u63A5\u5E93" aria-hidden="true">#</a></h2><p>\u7531\u4E8E\u6BCF\u6B21\u6253\u5305\u5F88\u6162\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u90FD\u5728\u5BF9react\u5E93\u91CD\u65B0\u8FDB\u884C\u6253\u5305\uFF0C\u56E0\u6B64\u9700\u8981\u63D0\u53D6\u4E00\u4E0B</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684js\u6587\u4EF6\uFF0C\u5E76\u6253\u5305\u4E00\u6B21</li></ol><p>\uFF081\uFF09\u5B89\u88C5clean-webpack-plugin\u63D2\u4EF6\uFF0C\u7528\u4E8E\u6E05\u9664\u4E4B\u524D\u5197\u4F59\u7684dll\u6587\u4EF6</p><p>\uFF081\uFF09<code>webpack.config.other.js</code> \u540D\u5B57\u968F\u610F</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;react&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u8FD9\u91CC\u5199\u5165\u4E00\u4E9B\u63D0\u53D6\u7684js</span>
    <span class="token literal-property property">others</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;js-cookie&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u5176\u4ED6\u7684js, \u6570\u7EC4\u91CC\u9762\u7684\u503C\u8D8A\u591A, js\u6587\u4EF6\u8D8A\u5927, \u5982\u679C\u592A\u591A\u53EF\u4EE5\u5206\u5F00\u5199, \u518D\u5355\u72EC\u5199\u4E00\u4E2A\u6587\u4EF6</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;_dll_[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;_dll_[name]&#39;</span> <span class="token comment">//\u63D0\u53D6\u540D\u5B57, \u76F4\u63A5\u53D6entry\u7684\u540D\u5B57react</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u6E05\u9664\u4E4B\u524D\u7684dll\u6587\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;_dll_[name]&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u548Clibrary\u540D\u5B57\u4E00\u6837</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09\u5199\u5B8C\u4E4B\u540E\u5C31\u53EF\u4EE5\u8FD0\u884C<code>npx webpack --config webpack.config.other.js</code> \u6253\u5305\u4E00\u6B21</p><p>\uFF083\uFF09\u6253\u5305\u4E4B\u540E\u4F1A\u770B\u5230dist\u76EE\u5F55\u4E0B\u9762\u5DF2\u7ECF\u6709\u4E86\uFF0C\u5728\u6A21\u677Findex.html\u6587\u4EF6\u91CC\u9762\u5F15\u5165\uFF0C\u8FD9\u4E2A\u662F\u9700\u8981\u5199\u6B7B\u7684\uFF0C\u6709\u591A\u5C11\u5199\u591A\u5C11</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/_dll_react.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/_dll_other.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="2"><li>\u4FEE\u6539webpack.config.js\u6587\u4EF6</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">manifest</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;manifest.json&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6458\u6284\uFF1A <a href="https://blog.csdn.net/janyxh/article/details/100131082" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/janyxh/article/details/100131082</a></p><h2 id="\u56DB\u3001\u591A\u7EBF\u7A0B\u6253\u5305" tabindex="-1">\u56DB\u3001\u591A\u7EBF\u7A0B\u6253\u5305 <a class="header-anchor" href="#\u56DB\u3001\u591A\u7EBF\u7A0B\u6253\u5305" aria-hidden="true">#</a></h2><p>\u5F53\u9879\u76EE\u6BD4\u8F83\u5927\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528happypack\u6253\u5305\uFF0C\u5982\u679C\u9879\u76EE\u6BD4\u8F83\u5C0F\uFF0C\u4F7F\u7528happypack\u6253\u5305\u4E0D\u5982\u539F\u6765\u7684\u6253\u5305\u901F\u5EA6\u66F4\u5FEB</p><ol><li>\u5B89\u88C5\uFF1A<code>yarn add happypack</code></li><li>\u66FF\u6362rules\u91CC\u9762\u7684use\u89C4\u5219</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> Happypack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;happypack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;Happypack/loader?id=js&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06js\u4F20\u5165</span>
            <span class="token punctuation">{</span><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;Happypack/loader?id=css&#39;</span><span class="token punctuation">}</span> <span class="token comment">// \u5982\u679C\u662Fcss\u6253\u5305</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">Happypack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5C06use\u4EE5\u524D\u7684\u914D\u7F6E\u653E\u5728\u8FD9\u91CC</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@babel/preset-react&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u591A\u4E2A\u518Dnew\u4E00\u6B21</span>
        <span class="token keyword">new</span> <span class="token class-name">Happypack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://upload-images.jianshu.io/upload_images/1967135-2edd36749223cd32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/416/format/webp" alt="img"></p><p>\u4EE5\u4E0A\u663E\u793A3\u4E2A\u8FDB\u7A0B\u4E3A\u5DF2\u7ECF\u5F00\u542F\u4E86\u6253\u5305\uFF1B</p><h2 id="\u4E94\u3001webpack\u5185\u7F6E\u4F18\u5316\u9879" tabindex="-1">\u4E94\u3001webpack\u5185\u7F6E\u4F18\u5316\u9879 <a class="header-anchor" href="#\u4E94\u3001webpack\u5185\u7F6E\u4F18\u5316\u9879" aria-hidden="true">#</a></h2><ol><li><code>tree-shaking</code> \u6447\u6643\u6811</li></ol><p>import\u5F15\u5165\u7684\u4EE3\u7801\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u4F1A\u81EA\u52A8\u53BB\u9664\u6389\u6CA1\u7528\u7684\u4EE3\u7801\uFF0C\u7B80\u79F0tree-shaking\uFF0C\u6447\u6643\u6811</p><ol start="2"><li><code>scope hosting</code> \u4F5C\u7528\u57DF\u63D0\u5347</li></ol><p>\u5728webpack3\u4EE5\u4E0A\uFF0C\u4F1A\u81EA\u52A8\u7B80\u5316\u4EE3\u7801\uFF0C\u5982\u679C\u58F0\u660E\u7684\u8FC7\u4E8E\u7B80\u6D01\uFF0C\u6BD4\u5982\u5355\u4E2A\u6570\u5B57\uFF0Cwebpack\u4F1A\u76F4\u63A5\u7701\u7565\u6389</p>`,42),o=[e];function c(l,r,u,i,k,d){return a(),s("div",null,o)}var m=n(t,[["render",c]]);export{y as __pageData,m as default};
