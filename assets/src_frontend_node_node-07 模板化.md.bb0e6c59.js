import{_ as s,c as n,o as a,d as e}from"./app.00f96e96.js";const b='{"title":"node-07 \u6A21\u677F\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001CommonJS\u89C4\u8303","slug":"\u4E00\u3001commonjs\u89C4\u8303"},{"level":2,"title":"\u4E8C\u3001es6\u4E2D\u7684\u6A21\u5757\u5316\uFF1A","slug":"\u4E8C\u3001es6\u4E2D\u7684\u6A21\u5757\u5316\uFF1A"},{"level":2,"title":"\u4E09\u3001\u6D4F\u89C8\u5668\u4F7F\u7528nodejs\u7684\u6A21\u5757","slug":"\u4E09\u3001\u6D4F\u89C8\u5668\u4F7F\u7528nodejs\u7684\u6A21\u5757"},{"level":2,"title":"\u56DB\u3001ES6\u8F6CES5","slug":"\u56DB\u3001es6\u8F6Ces5"},{"level":2,"title":"\u4E94\u3001amd\u3001cmd\uFF1B","slug":"\u4E94\u3001amd\u3001cmd\uFF1B"}],"relativePath":"src/frontend/node/node-07 \u6A21\u677F\u5316.md","lastUpdated":1649840977597}',p={},o=e(`<h1 id="node-07-\u6A21\u677F\u5316" tabindex="-1">node-07 \u6A21\u677F\u5316 <a class="header-anchor" href="#node-07-\u6A21\u677F\u5316" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001commonjs\u89C4\u8303" tabindex="-1">\u4E00\u3001CommonJS\u89C4\u8303 <a class="header-anchor" href="#\u4E00\u3001commonjs\u89C4\u8303" aria-hidden="true">#</a></h2><ol><li><p>commonjs\u4E3B\u8981\u662F\u4E3A\u4E86\u5B9E\u73B0\u4EE3\u7801\u91CD\u7528\uFF0Ccommonjs\u662F\u540C\u6B65\u52A0\u8F7D\u7684\uFF1B</p></li><li><p>\u5728commonjs\u89C4\u8303\u4E2D\uFF1A</p><ul><li>\u4E00\u4E2Ajs\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u62E5\u6709\u5355\u72EC\u7684\u4F5C\u7528\u57DF\uFF1B</li><li>\u666E\u901A\u65B9\u5F0F\u5B9A\u4E49\u7684\u53D8\u91CF\u3001\u51FD\u6570\u3001\u5BF9\u8C61\u90FD\u5C5E\u4E8E\u8BE5\u6A21\u5757\u5185\uFF1B</li><li>\u901A\u8FC7require\u6765\u52A0\u8F7D\u6A21\u5757\uFF1B</li><li>\u901A\u8FC7exports\u548Cmodule.exports\u6765\u66B4\u9732\u6A21\u5757\u4E2D\u7684\u5185\u5BB9\uFF1B</li></ul></li></ol><p>\u5355\u4E2A\u66B4\u9732\uFF1A<code>exports.fn = function(){}</code></p><p>\u4E00\u8D77\u66B4\u9732\uFF1A<code>module.exports = {}</code></p><ol start="3"><li><p>\u6240\u6709\u4EE3\u7801\u90FD\u8FD0\u884C\u5728\u6A21\u5757\u4F5C\u7528\u57DF\u4E2D\uFF0C\u907F\u514D\u5168\u5C40\u53D8\u91CF\u6C61\u67D3\uFF0C\u6A21\u5757\u52A0\u8F7D\u4E00\u6B21\u5C31\u5728\u7F13\u5B58\u91CC\u9762\u4E86\uFF0C\u591A\u6B21\u52A0\u8F7D\u90FD\u662F\u8BFB\u53D6\u7F13\u5B58\u7684\uFF0C\u6A21\u5757\u662F\u6309\u987A\u5E8F\u540C\u6B65\u52A0\u8F7D\u7684\uFF1B</p></li><li><p>require\uFF08\u540C\u6B65\u52A0\u8F7D\uFF09\u7684\u529F\u80FD\uFF1A\u8BFB\u53D6\u5E76\u6267\u884C\u4E00\u4E2Ajs\u6587\u4EF6\uFF0C\u7136\u540E\u8FD4\u56DE\u8BE5\u6A21\u5757\u7684exprots\u5BF9\u8C61\uFF0C\u5982\u679C\u6CA1\u6709\u8BE5\u6A21\u5757\u5C31\u4F1A\u62A5\u9519\uFF1B</p></li></ol><p>\u6A21\u5757\u5316\u7684\u597D\u5904\uFF1A\u6A21\u5757\u5316\u662F\u6307\u89E3\u51B3\u4E00\u4E2A\u590D\u6742\u95EE\u9898\u65F6\u81EA\u9876\u5411\u4E0B\u9010\u5C42\u628A\u7CFB\u7EDF\u5212\u5206\u6210\u82E5\u5E72\u6A21\u5757\u7684\u8FC7\u7A0B\uFF0C\u6709\u591A\u79CD\u5C5E\u6027\uFF0C\u5206\u522B\u53CD\u6620\u5176\u5185\u90E8\u7279\u6027\u3002\u6A21\u5757\u5316\u662F\u4E00\u79CD\u5904\u7406\u590D\u6742\u7CFB\u7EDF\u5206\u89E3\u4E3A\u66F4\u597D\u7684\u53EF\u7BA1\u7406\u6A21\u5757\u7684\u65B9\u5F0F\u3002</p><h2 id="\u4E8C\u3001es6\u4E2D\u7684\u6A21\u5757\u5316\uFF1A" tabindex="-1">\u4E8C\u3001es6\u4E2D\u7684\u6A21\u5757\u5316\uFF1A <a class="header-anchor" href="#\u4E8C\u3001es6\u4E2D\u7684\u6A21\u5757\u5316\uFF1A" aria-hidden="true">#</a></h2><p>\u5982\u679C\u53EA\u66B4\u9732\u4E00\u4E2A\u5C31\u4F7F\u7528export default\uFF0Cimport\u65F6\u4E0D\u9700\u8981\u82B1\u62EC\u53F7\uFF1B</p><ol><li>export\u66B4\u9732\uFF08\u6A21\u5757\uFF09\uFF1A \uFF081\uFF09\u5355\u4E2A\u66B4\u9732\uFF1A</li></ol><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09\u6574\u4F53\u66B4\u9732</p><div class="language-js"><pre><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">,</span>fn<span class="token punctuation">}</span>
</code></pre></div><p>\uFF083\uFF09\u9ED8\u8BA4\u66B4\u9732</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E00\u822C\u9002\u7528\u4E8E\u4E00\u4E2A\u53C2\u6570\u65F6\uFF1B</p><ol start="2"><li>import\uFF08\u5165\u53E3\u6587\u4EF6\uFF09\uFF1A</li></ol><p>\u666E\u901A\u66B4\u9732\u8BED\u6CD5\uFF1A import { \u5C5E\u6027\u540D... } from &#39;filePath&#39;</p><p>\u9ED8\u8BA4\u66B4\u9732\u8BED\u6CD5\uFF1Aimport \u5C5E\u6027\u540D from &#39;filePath&#39;\uFF1B</p><p>\u6709\u66B4\u9732\u7684\u5730\u65B9\u624D\u80FD\u5199\u5165\uFF1B</p><h2 id="\u4E09\u3001\u6D4F\u89C8\u5668\u4F7F\u7528nodejs\u7684\u6A21\u5757" tabindex="-1">\u4E09\u3001\u6D4F\u89C8\u5668\u4F7F\u7528nodejs\u7684\u6A21\u5757 <a class="header-anchor" href="#\u4E09\u3001\u6D4F\u89C8\u5668\u4F7F\u7528nodejs\u7684\u6A21\u5757" aria-hidden="true">#</a></h2><ol><li><p>browserify\u5B98\u7F51\uFF1A<a href="http://browserify.org" target="_blank" rel="noopener noreferrer">browserify.org</a></p></li><li><p>\u5B89\u88C5\uFF1Anpm install -g browserify</p></li><li><p>\u7528\u6CD5\uFF1Abrowserify \u6E90\u6587\u4EF6 -o \u76EE\u6807\u6587\u4EF6</p><p>\u5B9E\u4F8B\uFF1Abrowserify ./src/app.js -o ./dist/bundle.js</p></li><li><p>browserify\u6253\u5305\u6210\u529F\u4EE5\u540E\u6CA1\u6709\u63D0\u793A\uFF0C\u5982\u679C\u6CA1\u6709\u6587\u4EF6\u5939\u4F1A\u81EA\u52A8\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u91CD\u590D\u5219\u81EA\u52A8\u8986\u76D6\uFF1B</p></li></ol><h2 id="\u56DB\u3001es6\u8F6Ces5" tabindex="-1">\u56DB\u3001ES6\u8F6CES5 <a class="header-anchor" href="#\u56DB\u3001es6\u8F6Ces5" aria-hidden="true">#</a></h2><ol><li>\u4ECB\u7ECD\uFF1A</li></ol><p>\u4E3B\u8981\u662F\u7528\u6765\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u7684\uFF1B</p><p>babel\u5B98\u7F51\uFF1A<a href="http://www.babeljs.cn" target="_blank" rel="noopener noreferrer">www.babeljs.cn</a></p><p>babel\u7684\u529F\u80FD\uFF1A\u5C06es6\u8BED\u6CD5\u8F6C\u6210es5\u8BED\u6CD5\u3001\u8FD8\u80FD\u64CD\u4F5Cjsx\u8BED\u6CD5(react)\u7B49 2. \u5B89\u88C5</p><p>\u5B89\u88C5babel-cli, babel-preset-es2015\u548Cbrowserify:</p><p>(1)\u3001npm install babel-cli browserify -g (2)\u3001npm install babel-preset-es2015 --save-dev</p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><p>--save \u9879\u76EE\u4F9D\u8D56\uFF08\u771F\u6B63\u4E0A\u7EBF\uFF0C\u4E5F\u9700\u8981\uFF09</p><p>--save-dev \u5F00\u53D1\u4F9D\u8D56\uFF08\u5F00\u53D1\u9636\u6BB5\u9700\u8981\uFF0C\u4E0A\u7EBF\u4E0D\u9700\u8981[\u56E0\u4E3A\u5DF2\u8F6C\u6362\u597D\u4E86]\uFF09</p><p>presets \u9884\u8BBE(\u5C06es6\u8F6C\u6362\u6210es5\u7684\u6240\u6709\u63D2\u4EF6\u6253\u5305)</p><p>\uFF13\u3001\u5728\u9879\u76EE\u4E2D\u5B9A\u4E49babel\u914D\u7F6E\u6587\u4EF6\uFF1A.babelrc\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A { &quot;presets&quot;: [&quot;es2015&quot;] }</p><p>\uFF14\u3001\u7F16\u8BD1</p><p>\u4F7F\u7528Babel\u5C06ES6\u7F16\u8BD1\u4E3AES5\u4EE3\u7801(\u4F46\u5305\u542BCommonJS\u8BED\u6CD5) : babel ./src -d ./dist</p><p>\u524D\u7AEF\u4F7F\u7528\u7684\u8BDD\u5C31\u4F7F\u7528Browserify\u7F16\u8BD1js : browserify ./dist/app.js -o ./dest/bundle.js</p><p>\uFF15\u3001npm run [package.json\u6587\u4EF6\u4E2D\u7684scripts:\u53C2\u6570]</p><p>npm run start | npm start \u9664\u4E86start\u53EF\u4EE5\u7701\u7565run\uFF0C\u5176\u5B83\u90FD\u4E0D\u80FD\u7701\u7565</p><p>&quot;start&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;build&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;dev&quot;:&quot;browserify ./dist/app.js -o ./dest/bundle.js&quot; \uFF1B</p><h2 id="\u4E94\u3001amd\u3001cmd\uFF1B" tabindex="-1">\u4E94\u3001amd\u3001cmd\uFF1B <a class="header-anchor" href="#\u4E94\u3001amd\u3001cmd\uFF1B" aria-hidden="true">#</a></h2><ol><li><p>amd:\u89C4\u8303</p><p>requirejs \u5B9E\u73B0\u7684amd\u89C4\u8303\uFF1B</p></li><li><p>cmd:\u89C4\u8303</p><p>seajs \u5B9E\u73B0\u7684cmd\u89C4\u8303\uFF1B</p></li></ol>`,44),t=[o];function l(r,i,c,d,u,m){return a(),n("div",null,t)}var f=s(p,[["render",l]]);export{b as __pageData,f as default};
