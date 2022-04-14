import{_ as s,c as a,o as n,d as e}from"./app.00f96e96.js";const g='{"title":"js-13 cookie","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001cookie","slug":"\u4E00\u3001cookie"},{"level":3,"title":"cookie\u673A\u5236","slug":"cookie\u673A\u5236"},{"level":3,"title":"\u64CD\u4F5C\u65B9\u5F0F","slug":"\u64CD\u4F5C\u65B9\u5F0F"},{"level":3,"title":"cookie\u548Csession\u7684\u533A\u522B","slug":"cookie\u548Csession\u7684\u533A\u522B"},{"level":3,"title":"session\u4E0Ecookie\u7684\u8054\u7CFB","slug":"session\u4E0Ecookie\u7684\u8054\u7CFB"},{"level":2,"title":"\u4E8C\u3001js-cookie\u64CD\u4F5C\u65B9\u5F0F","slug":"\u4E8C\u3001js-cookie\u64CD\u4F5C\u65B9\u5F0F"},{"level":2,"title":"\u4E09\u3001web Storage\uFF08HTML5\uFF09","slug":"\u4E09\u3001web-storage\uFF08html5\uFF09"},{"level":3,"title":"\u533A\u522B","slug":"\u533A\u522B"},{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":3,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":2,"title":"\u9AD8\u9891\u9762\u8BD5\u9898","slug":"\u9AD8\u9891\u9762\u8BD5\u9898"}],"relativePath":"src/frontend/Javascript/js-13 cookie.md","lastUpdated":1649840977533}',o={},t=e(`<h1 id="js-13-cookie" tabindex="-1">js-13 cookie <a class="header-anchor" href="#js-13-cookie" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001cookie" tabindex="-1">\u4E00\u3001cookie <a class="header-anchor" href="#\u4E00\u3001cookie" aria-hidden="true">#</a></h2><p>\u4FDD\u5B58\u9875\u9762\u4E2D\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\u7B49\uFF1B\u6BD4\u8F83\u5C0F\uFF0C\u53EA\u67094kb\uFF1B</p><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u7684cookie\u662F\u4E0D\u76F8\u901A\u7684\uFF1B</p><p>\u8C37\u6B4C\u6D4F\u89C8\u5668\u7684cookie\u4E0D\u5141\u8BB8\u8BBF\u95EE\u672C\u5730\u7684cookie\uFF0C\u53EA\u5141\u8BB8\u8BBF\u95EE\u7F51\u4E0A\u7684\uFF0C\u800C\u706B\u72D0\u548Cie\u53EF\u4EE5\u8BBF\u95EE\u672C\u5730\u7684\uFF1B</p><h3 id="cookie\u673A\u5236" tabindex="-1">cookie\u673A\u5236 <a class="header-anchor" href="#cookie\u673A\u5236" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4E0D\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0Ccookie\u88AB\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u751F\u547D\u5468\u671F\u968F\u6D4F\u89C8\u5668\u7684\u5173\u95ED\u800C\u7ED3\u675F\uFF0C\u8FD9\u79CDcookie\u7B80\u79F0\u4F1A\u8BDDcookie\u3002</p><p>\u5982\u679C\u8BBE\u7F6Ecookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0Ccookie\u88AB \u4FDD\u5B58\u5728\u786C\u76D8\u4E2D\uFF0C\u5173\u95ED\u6D4F\u89C8\u5668\u540E\uFF0Ccookie\u6570\u636E\u4ECD\u7136\u5B58\u5728\uFF0C\u76F4\u5230\u8FC7\u671F\u65F6\u95F4\u7ED3\u675F\u624D\u6D88\u5931\u3002</p><h3 id="\u64CD\u4F5C\u65B9\u5F0F" tabindex="-1">\u64CD\u4F5C\u65B9\u5F0F <a class="header-anchor" href="#\u64CD\u4F5C\u65B9\u5F0F" aria-hidden="true">#</a></h3><ul><li>\u5B58\u50A8\uFF1A<code>document.cookie = &quot;key=value&quot;;</code> \u8BBE\u7F6E\u4E34\u65F6\u5B58\u50A8\uFF0C\u952E\u503C\u5BF9\uFF1B</li></ul><div class="language-js"><pre><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;key=12;expires=&quot;</span> <span class="token operator">+</span> \u5B57\u7B26\u4E32\u683C\u5F0F\u65F6\u95F4\uFF1B\u6709\u8FC7\u671F\u65F6\u95F4\uFF1B
</code></pre></div><p>date.setSeconds()\uFF1B\u8BBE\u7F6E\u79D2\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6240\u6709\u65F6\u95F4\uFF1B</p><ul><li><p>\u8BFB\u53D6\uFF1A<code>document.cookie</code>\uFF1B\u83B7\u53D6\u7684\u662F\u5B57\u7B26\u4E32\uFF0C\u4E2D\u95F4\u7528\u5206\u53F7\u548C\u7A7A\u683C\u5206\u5F00\u7684\uFF1B</p></li><li><p>\u5220\u9664\uFF1A\u5C06\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u6210\u8D1F\u6570\uFF1B</p></li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
date<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBE\u7F6E10\u5929\u4EE5\u540E\u8FC7\u671F\uFF1B</span>
date<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10\u5929\u4EE5\u540E\u7684\u5B57\u7B26\u4E32\u683C\u5F0F\u65F6\u95F4</span>
</code></pre></div><h3 id="cookie\u548Csession\u7684\u533A\u522B" tabindex="-1">cookie\u548Csession\u7684\u533A\u522B <a class="header-anchor" href="#cookie\u548Csession\u7684\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>\uFF081\uFF09(\u5931\u6548) Session \u4F1A\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u4E4B\u540E\u5931\u6548\uFF0CCookie \u5219\u53EF\u4EE5\u5728\u7406\u8BBA\u4E0A\u6C38\u4E45\u6709\u6548(\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4)\u3002</li><li>\uFF082\uFF09(\u5B58\u653E) Cookie \u6570\u636E\u5B58\u653E\u5728\u5BA2\u6237\u7684\u6D4F\u89C8\u5668\u4E0A\uFF0C Session \u6570\u636E\u5B58\u653E\u5728\u670D\u52A1\u5668\u4E0A\u3002</li><li>\uFF083\uFF09(\u9ED1\u5BA2) Cookie \u4E0D\u5B89\u5168\uFF0C\u9ED1\u5BA2\u53EF\u4EE5\u5206\u6790\u672C\u5730\u7684 Cookie, \u5E76\u8FDB\u884C Cookie \u6B3A\u9A97\u3002 \u800C Session \u4FDD\u5B58\u5728\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\uFF0C\u76F8\u5BF9\u5B89\u5168\uFF08\u91CD\u8981\u7684\u4FE1\u606F\u5E94\u8BE5\u5B58\u5728session\uFF09;</li><li>\uFF084\uFF09(\u9650\u5236) Cookie\u6709\u5927\u5C0F\u9650\u5236\uFF0C\u4E00\u822C\u662F4KB\u3002 \u57DF\u540D20-50\u4E2A\u4EE5\u5185\uFF0CSession \u5219\u6CA1\u6709\u8FD9\u65B9\u9762\u7684\u9650\u5236\u3002</li><li>\uFF085\uFF09(\u7981\u7528) \u6D4F\u89C8\u5668\u7684\u8BBE\u7F6E\u53EF\u80FD\u7981\u7528 Cookie\uFF0C\u8FD9\u65F6\u6240\u6709\u5173\u4E8E Cookie \u7684\u5E94\u7528\u90FD\u5C06\u5931\u8D25\uFF0C\u4F46\u662F Session \u5374\u6C38\u8FDC\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u95EE\u9898\uFF1B</li></ul><h3 id="session\u4E0Ecookie\u7684\u8054\u7CFB" tabindex="-1">session\u4E0Ecookie\u7684\u8054\u7CFB <a class="header-anchor" href="#session\u4E0Ecookie\u7684\u8054\u7CFB" aria-hidden="true">#</a></h3><p>\u200B Session \u4F9D\u8D56 cookie\uFF0C\u56E0\u4E3A session id \u5B58\u5728\u5BA2\u6237\u7AEF\u3002</p><h2 id="\u4E8C\u3001js-cookie\u64CD\u4F5C\u65B9\u5F0F" tabindex="-1">\u4E8C\u3001js-cookie\u64CD\u4F5C\u65B9\u5F0F <a class="header-anchor" href="#\u4E8C\u3001js-cookie\u64CD\u4F5C\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\uFF1A<code>npm i js-cookie</code></li><li>\u7528\u6CD5\uFF1A</li></ol><p>\u5728\u9879\u76EE\u4E2D\u5F15\u5165\uFF1Aimport Cookie from &#39;js-cookie&#39;</p><p>\uFF081\uFF09<code>Cookie.set(&#39;name&#39;,&#39;value&#39;, {expires: 7\uFF0C path:&#39;&#39;})</code>\uFF0Cname\u548Cvalue\u4E0D\u53EF\u5C11</p><p>\uFF082\uFF09<code>Cookie.get(&#39;name&#39;, {domain: &#39;sub.example.com&#39;})</code>\uFF0Cname\u4E0D\u53EF\u5C11</p><p>\uFF083\uFF09<code>Cookie.remove(&#39;name&#39;, {path: &#39;&#39;,domain: &#39;&#39;})</code>\uFF0Cname\u4E0D\u53EF\u5C11</p><ol start="3"><li>\u89E3\u51B3\u547D\u540D\u7A7A\u95F4\u51B2\u7A81\u95EE\u9898</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> Cookies2 <span class="token operator">=</span> Cookies<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Cookies2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u5B89\u5168</li></ol><div class="language-js"><pre><code><span class="token comment">// \u9700\u8981\u4F7F\u7528https\u624D\u6709\u6548</span>
Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="5"><li>\u8BBE\u7F6E\u9ED8\u8BA4\u503C</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> api <span class="token operator">=</span> Cookies<span class="token punctuation">.</span><span class="token function">withAttributes</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">&#39;.example.com&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="6"><li>\u63A7\u5236\u8BFB\u5199</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> cookie <span class="token operator">=</span> Cookies<span class="token punctuation">.</span><span class="token function">withConverter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// \u8BFB</span>
    <span class="token function-variable function">read</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;escaped&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> Cookies<span class="token punctuation">.</span>converter<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5199</span>
    <span class="token function-variable function">write</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E4B\u540E\u4F7F\u7528cookie\u5BF9\u8C61\u6765\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C</span>
</code></pre></div><h2 id="\u4E09\u3001web-storage\uFF08html5\uFF09" tabindex="-1">\u4E09\u3001web Storage\uFF08HTML5\uFF09 <a class="header-anchor" href="#\u4E09\u3001web-storage\uFF08html5\uFF09" aria-hidden="true">#</a></h2><h3 id="\u533A\u522B" tabindex="-1">\u533A\u522B <a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a></h3><p><code>localStorage</code>\u7684\u50A8\u5B58\u6CA1\u6709\u65F6\u95F4\u9650\u5236\uFF0C\u6C38\u4E45\u4FDD\u5B58\uFF0C\u9664\u975E\u4E3B\u52A8\u5220\u9664\uFF1B</p><p><code>sessionStorage</code>\u7528\u4E8E\u4E34\u65F6\u4FDD\u5B58\u540C\u4E00\u7A97\u53E3(\u6216\u6807\u7B7E\u9875)\u7684\u6570\u636E\uFF0C\u5728\u5173\u95ED\u7A97\u53E3\u4E4B\u540E\u5C06\u4F1A\u5220\u9664\u8FD9\u4E9B\u6570\u636E\uFF1B</p><p>\u517C\u5BB9\uFF1Aie8+</p><h3 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h3><p>\uFF081\uFF09\u751F\u547D\u5468\u671F\uFF1A</p><ul><li><p>localStorage\uFF1A\u6C38\u4E45\u7684\uFF0C\u5173\u95ED\u6D4F\u89C8\u5668\u90FD\u4E0D\u4F1A\u6D88\u5931\uFF0C\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E\uFF1B</p></li><li><p>sessionStorage\uFF1A\u4EC5\u5728\u5F53\u524D\u4F1A\u8BDD\u4E0B\u6709\u6548\uFF0C\u53EA\u8981\u7A97\u53E3\u6CA1\u5173\u95ED\uFF0C\u6570\u636E\u6C38\u8FDC\u5B58\u5728\uFF0C\u5237\u65B0\u9875\u9762\u90FD\u5728\uFF1B\u4E24\u4E2A\u7A97\u53E3\u7684sessionStorage\u6570\u636E\u662F\u4E0D\u4E00\u6837\u7684\uFF1B</p></li></ul><p>\uFF082\uFF09\u5B58\u50A8\u5927\u5C0F\uFF1A\u4E24\u8005\u90FD\u662F5MB\uFF1B</p><p>\uFF083\uFF09\u5B58\u50A8\u4F4D\u7F6E\uFF1A\u90FD\u4FDD\u5B58\u5728\u5BA2\u6237\u7AEF\uFF0C\u4E0D\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u4EA4\u4E92\u901A\u4FE1\uFF1B</p><p>\uFF084\uFF09\u5B58\u50A8\u7C7B\u578B\uFF1A\u4EC5\u652F\u6301\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5BF9\u8C61\u6570\u7EC4\u9700\u8981\u4F7F\u7528JSON\u5BF9\u8C61\u7684stringify\u548Cparse\u5904\u7406\uFF1B</p><p>\uFF085\uFF09\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>localStorage\uFF1A\u5E38\u7528\u4E8E\u957F\u671F\u767B\u5F55\uFF0C\u9002\u5408\u957F\u671F\u4FDD\u5B58\u5728\u672C\u5730\u7684\u6570\u636E\uFF1B</li><li>sessionStorage\uFF1A\u654F\u611F\u8D26\u53F7\u4E00\u6B21\u6027\u767B\u5F55\uFF1B</li></ul><h3 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h3><p>localStorage\u548CsessionStorage\u4F7F\u7528\u65B9\u6CD5\u4E00\u81F4\uFF1B</p><ol><li>\u50A8\u5B58\uFF1A<code>setItem(key, value)</code></li><li>\u83B7\u53D6\uFF1A<code>getItem(key)</code></li><li>\u5220\u9664\uFF1A<code>removeItem(key)</code></li><li>\u6E05\u7A7A\uFF1A<code>clear()</code>\uFF1B</li><li>\u7D22\u5F15\uFF1A<code>key(index)</code> \u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\uFF1B</li></ol><p>\u9664\u4E86\u4EE5\u4E0A\u65B9\u5F0F\uFF0C\u8FD8\u652F\u6301\u70B9\u7684\u65B9\u5F0F\u6216\u4E2D\u62EC\u53F7\u65B9\u5F0F\uFF1A</p><p>\u8BBE\u7F6E\uFF1AlocalStorage.age = 18</p><p>\u83B7\u53D6\uFF1AlocalStorage.age</p><p>\u5F53\u50A8\u5B58\u7684\u503C\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u65F6\uFF1A</p><p>\u50A8\u5B58\uFF1A<code>localStorage.setItem(&#39;test&#39;,JSON.stringify({id:1,age:18})</code>\uFF1B</p><p>\u53D6\u503C\uFF1A<code>JSON.parse(localStorage.getItem(&#39;test&#39;)</code>\uFF1B</p><h2 id="\u9AD8\u9891\u9762\u8BD5\u9898" tabindex="-1">\u9AD8\u9891\u9762\u8BD5\u9898 <a class="header-anchor" href="#\u9AD8\u9891\u9762\u8BD5\u9898" aria-hidden="true">#</a></h2><p>\u25CF \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u9A8C\u8BC1\u90AE\u7BB1\u3002</p><p>\u25CF \u8BF7\u7528 js \u53BB\u9664\u5B57\u7B26\u4E32\u7A7A\u683C var str = \u201C fdf er re545 6565 2fdfd \u201D</p><p>\u25CF \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F\u8FD9\u6837\u7EC4\u6210\u7684\u3002\u7B2C\u4E00\u4E2A\u5B57\u7B26\u5FC5\u987B\u662F\u5B57\u6BCD\uFF0C\u540E\u9762\u53EF\u4EE5\u662F\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\uFF0C\u603B\u957F\u5EA6 5-20\u3002</p><p>\u25CF cookie \u7684\u5229\u5F0A\uFF1F</p><p>\u25CF \u5C01\u88C5\u4E00\u4E2A\u83B7\u53D6 cookie \u7684\u51FD\u6570\u3002</p>`,60),p=[t];function c(i,l,r,u,k,d){return n(),a("div",null,p)}var m=s(o,[["render",c]]);export{g as __pageData,m as default};
