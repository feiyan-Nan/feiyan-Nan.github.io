import{_ as e,c as a,o as n,d as t}from"./app.7277c524.js";const y='{"title":"jq-01 \u4EC0\u4E48\u662FjQuery","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u4EC0\u4E48\u662FjQuery","slug":"\u4E00\u3001\u4EC0\u4E48\u662Fjquery"},{"level":2,"title":"\u4E8C\u3001jQuery\u7684\u4F18\u70B9","slug":"\u4E8C\u3001jquery\u7684\u4F18\u70B9"},{"level":2,"title":"\u4E09\u3001\u4E0B\u8F7DjQuery","slug":"\u4E09\u3001\u4E0B\u8F7Djquery"},{"level":2,"title":"\u56DB\u3001jQuery \u5E93\u7C7B\u578B\u8BF4\u660E","slug":"\u56DB\u3001jquery-\u5E93\u7C7B\u578B\u8BF4\u660E"},{"level":2,"title":"\u4E94\u3001jQuery\u7248\u672C\uFF1A","slug":"\u4E94\u3001jquery\u7248\u672C\uFF1A"},{"level":2,"title":"\u516D\u3001\u5F15\u5165\u65B9\u5F0F","slug":"\u516D\u3001\u5F15\u5165\u65B9\u5F0F"},{"level":2,"title":"\u4E03\u3001jQuery\u4E0E$\u7684\u5173\u7CFB","slug":"\u4E03\u3001jquery\u4E0E-\u7684\u5173\u7CFB"},{"level":2,"title":"\u516B\u3001\u9875\u9762\u52A0\u8F7D","slug":"\u516B\u3001\u9875\u9762\u52A0\u8F7D"},{"level":2,"title":"\u4E5D\u3001\u5143\u7D20","slug":"\u4E5D\u3001\u5143\u7D20"},{"level":2,"title":"\u5341\u3001\u8F6C\u6362\u5143\u7D20","slug":"\u5341\u3001\u8F6C\u6362\u5143\u7D20"},{"level":2,"title":"\u5341\u4E00\u3001\u548C\u5176\u4ED6\u6846\u67B6\u51B2\u7A81","slug":"\u5341\u4E00\u3001\u548C\u5176\u4ED6\u6846\u67B6\u51B2\u7A81"}],"relativePath":"src/frontend/jQuery/jq-01 \u4EC0\u4E48\u662FjQuery.md","lastUpdated":1649840977592}',r={},s=t(`<h1 id="jq-01-\u4EC0\u4E48\u662Fjquery" tabindex="-1">jq-01 \u4EC0\u4E48\u662FjQuery <a class="header-anchor" href="#jq-01-\u4EC0\u4E48\u662Fjquery" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u4EC0\u4E48\u662Fjquery" tabindex="-1">\u4E00\u3001\u4EC0\u4E48\u662FjQuery <a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662Fjquery" aria-hidden="true">#</a></h2><p>\u200B jQuery \u662F\u4E00\u4E2A\u4F18\u79C0\u7684 JavaScript \u5E93\uFF0C\u662F\u4E00\u4E2A\u7531 John Resig \u521B\u5EFA\u4E8E 2006 \u5E74 1 \u6708\u7684\u5F00\u6E90\u9879\u76EE\u3002\u73B0\u5728\u7684 jQuery \u56E2\u961F\u4E3B\u8981\u5305\u62EC\u6838\u5FC3\u5E93\u3001UI\u3001\u63D2\u4EF6\u548C jQuery Mobile \u7B49\u5F00\u53D1\u4EBA\u5458\u4EE5\u53CA\u63A8\u5E7F\u548C\u7F51\u7AD9\u8BBE\u8BA1\u3001\u7EF4\u62A4\u4EBA\u5458\u3002</p><p>\u200B jQuery \u51ED\u501F\u7B80\u6D01\u7684\u8BED\u6CD5\u548C\u8DE8\u5E73\u53F0\u7684\u517C\u5BB9\u6027\uFF0C\u6781\u5927\u5730\u7B80\u5316\u4E86 JavaScript \u5F00\u53D1\u4EBA\u5458\u904D\u5386HTML \u6587\u6863\u3001\u64CD\u4F5CDOM\u3001\u5904\u7406\u4E8B\u4EF6\u3001\u6267\u884C\u52A8\u753B\u548C\u5F00\u53D1 ajax \u7684\u64CD\u4F5C\u3002\u603B\u4E4B\uFF0C\u65E0\u8BBA\u662F\u7F51\u9875\u8BBE\u8BA1\u5E08\u3001\u540E\u53F0\u5F00\u53D1\u8005\u3001\u4E1A\u4F59\u7231\u597D\u8005\u8FD8\u662F\u9879\u76EE\u7BA1\u7406\u8005\uFF0C\u4E5F\u65E0\u8BBA\u662F JavaScript \u521D\u5B66\u8005\u8FD8\u662F JavaScript\u9AD8\u624B\uFF0C\u90FD\u6709\u8DB3\u591F\u591A\u7684\u7406\u7531\u53BB\u5B66\u4E60 jQuery\u3002</p><h2 id="\u4E8C\u3001jquery\u7684\u4F18\u70B9" tabindex="-1">\u4E8C\u3001jQuery\u7684\u4F18\u70B9 <a class="header-anchor" href="#\u4E8C\u3001jquery\u7684\u4F18\u70B9" aria-hidden="true">#</a></h2><p>jQuery\u5F3A\u8C03\u7684\u7406\u5FF5\u662F\u5199\u5F97\u5C11\uFF0C\u505A\u5F97\u591A\uFF08write less, do more\uFF09\uFF0CjQuery\u72EC\u7279\u7684\u9009\u62E9\u5668\u3001\u94FE\u5F0F\u64CD\u4F5C\u3001\u4E8B\u4EF6\u5904\u7406\u673A\u5236\u548C\u5C01\u88C5\u5B8C\u5584\u7684 ajax \u90FD\u662F\u5176\u4ED6\u5E93\u671B\u5C18\u83AB\u53CA\u7684\u3002\u6982\u62EC\u8D77\u6765\uFF0CjQuery\u6709\u4EE5\u4E0B\u4F18\u52BF\u3002</p><ol><li>\u8F7B\u91CF\u7EA7\u3002</li><li>\u5F3A\u5927\u7684\u9009\u62E9\u5668\u3002</li><li>\u51FA\u8272\u7684 DOM \u64CD\u4F5C\u7684\u5C01\u88C5\u3002</li><li>\u53EF\u9760\u7684\u4E8B\u4EF6\u5904\u7406\u673A\u5236\u3002</li><li>\u5B8C\u5584\u7684 ajax\u3002</li><li>\u4E0D\u6C61\u67D3\u9876\u7EA7\u53D8\u91CF\u3002</li><li>\u51FA\u8272\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u3002</li><li>\u94FE\u5F0F\u64CD\u4F5C\u65B9\u5F0F\u3002</li><li>\u9690\u5F0F\u8FED\u4EE3\u3002</li><li>\u884C\u4E3A\u5C42\u548C\u7ED3\u6784\u5C42\u5206\u79BB\u3002</li><li>\u4E30\u5BCC\u7684\u63D2\u4EF6\u652F\u6301\u3002</li><li>\u5B8C\u5584\u7684\u6587\u6863\u3002</li><li>\u5F00\u6E90\u3002</li></ol><h2 id="\u4E09\u3001\u4E0B\u8F7Djquery" tabindex="-1">\u4E09\u3001\u4E0B\u8F7DjQuery <a class="header-anchor" href="#\u4E09\u3001\u4E0B\u8F7Djquery" aria-hidden="true">#</a></h2><ol><li>\u53BB\u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D\uFF1A<a href="http://jquery.com/" target="_blank" rel="noopener noreferrer">http://jquery.com/</a></li><li>\u53BB CDN \u4E0B\u8F7D\uFF1A<a href="https://www.bootcdn.cn/jquery/" target="_blank" rel="noopener noreferrer">https://www.bootcdn.cn/jquery/</a></li></ol><h2 id="\u56DB\u3001jquery-\u5E93\u7C7B\u578B\u8BF4\u660E" tabindex="-1">\u56DB\u3001jQuery \u5E93\u7C7B\u578B\u8BF4\u660E <a class="header-anchor" href="#\u56DB\u3001jquery-\u5E93\u7C7B\u578B\u8BF4\u660E" aria-hidden="true">#</a></h2><p>jQuery\u5E93\u7684\u7C7B\u578B\u5206\u4E3A\u4E24\u79CD\uFF0C\u5206\u522B\u662F\u751F\u4EA7\u7248\u672C\uFF08\u6700\u5C0F\u5316\u548C\u538B\u7F29\u7248\uFF09\u548C\u5F00\u53D1\u7248\uFF08\u672A\u538B\u7F29\u7248\uFF09\uFF0C</p><p>\u5B83\u4EEC\u7684\u533A\u522B\u662F\uFF1A</p><p>\u200B \u5F00\u53D1\u7248\uFF1A\u5B8C\u6574\u65E0\u538B\u7F29\u7248\u672C\uFF0C\u4E3B\u8981\u7528\u4E8E\u6D4B\u8BD5\u3001\u5B66\u4E60\u3001\u548C\u5F00\u53D1\uFF1B</p><p>\u200B \u751F\u4EA7\u7248\uFF1A\u7ECF\u8FC7\u5DE5\u5177\u538B\u7F29\u6216\u7ECF\u8FC7\u670D\u52A1\u5668\u5F00\u542F Gzip \u538B\u7F29\uFF0C\u4E3B\u8981\u5E94\u7528\u4E8E\u4EA7\u54C1\u548C\u9879\u76EE\uFF1B</p><p><img src="https://notecdn.hrhe.cn/images/jq-01_%E4%BB%80%E4%B9%88%E6%98%AFjQuery-01.png" alt="image"></p><h2 id="\u4E94\u3001jquery\u7248\u672C\uFF1A" tabindex="-1">\u4E94\u3001jQuery\u7248\u672C\uFF1A <a class="header-anchor" href="#\u4E94\u3001jquery\u7248\u672C\uFF1A" aria-hidden="true">#</a></h2><p>jQuery \u5E93\u5206\u4E3A 1.x \u7684\u7248\u672C\u548C 2.x\u30013.x \u7684\u7248\u672C\uFF0C1.x \u7684\u7248\u672C\u517C\u5BB9 IE678\uFF0C\u800C 2.x\u30013.x\u7684\u7248\u672C\u4E0D\u517C\u5BB9 IE678\u3002</p><p>\u56FD\u5185\u591A\u6570\u7F51\u7AD9\u8FD8\u5728\u4F7F\u75281.x\u7684\u7248\u672C</p><h2 id="\u516D\u3001\u5F15\u5165\u65B9\u5F0F" tabindex="-1">\u516D\u3001\u5F15\u5165\u65B9\u5F0F <a class="header-anchor" href="#\u516D\u3001\u5F15\u5165\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>jQuery \u4E0D\u9700\u8981\u5B89\u88C5\uFF0C\u4ED6\u5C31\u662F\u4E00\u4E2A js \u6587\u4EF6\uFF0C\u628A\u4E0B\u8F7D\u7684 jQuery \u653E\u5230\u4E00\u4E2A\u516C\u5171\u7684\u4F4D\u7F6E\uFF0C\u60F3\u8981\u5728\u67D0\u4E2A\u9875\u9762\u4E0A\u4F7F\u7528 jQuery \u65F6\uFF0C\u53EA\u9700\u8981\u5728\u76F8\u5173\u7684 HTML \u6587\u6863\u4E2D\u5F15\u5165\u8BE5\u5E93\u6587\u4EF6\u5373\u53EF\u3002</p><p>\u4E00\u822C\u53EF\u4EE5\u653E\u5728 head \u6807\u7B7E\u4E2D\u6216\u8005 <code>&lt;/body&gt;</code> \u6807\u7B7E\u524D\u9762\uFF0C\u4F46\u662F\u4E00\u5B9A\u8981\u6CE8\u610F\uFF0C\u8981\u5728\u5176\u5B83 js \u6587\u4EF6\u524D\u9762\u5F15\u5165 jQuery \u5E93\u3002</p><p>\u5F53\u6211\u4EEC\u9700\u8981\u4F7F\u7528 jQuery \u7684\u65F6\u5019\uFF0C\u4F1A\u5728 HTML \u6587\u6863\u4E2D\u5F15\u5165 jquery.js, \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u5F15\u5165\uFF1A</p><p>\u25CF CDN \u5F15\u5165\uFF08CDN \u7684\u5168\u79F0\u662F Content Delivery Network\uFF0C\u5373\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC\uFF09 \u25CF \u672C\u5730 jQuery \u6587\u4EF6\u5F15\u5165</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u65B9\u5F0F\u4E00\uFF1A\u5F15\u5165 CDN \u670D\u52A1 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201Dhttps://cdn.bootcss.com/jquery/1.7.1/jquery.min.js\u201D</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u65B9\u5F0F\u4E8C\uFF1A\u5F15\u7528\u672C\u5730\u6587\u4EF6 --&gt;</span>
<span class="token comment">&lt;!-- &lt;script src=\u201Djs/jquery.min.js\u201D&gt;&lt;/script&gt; --&gt;</span>
</code></pre></div><p>\u6CE8\uFF1A\u5F15\u5165jquery\u5FC5\u987B\u653E\u5728\u6240\u6709\u5176\u4ED6script\u6807\u7B7E\u4E4B\u524D\uFF1B</p><p>jquery\u4E2D2.0\u4EE5\u4E0A\u7684\u7248\u672C\u4E0D\u517C\u5BB9ie6,7,8\uFF1B</p><h2 id="\u4E03\u3001jquery\u4E0E-\u7684\u5173\u7CFB" tabindex="-1">\u4E03\u3001jQuery\u4E0E$\u7684\u5173\u7CFB <a class="header-anchor" href="#\u4E03\u3001jquery\u4E0E-\u7684\u5173\u7CFB" aria-hidden="true">#</a></h2><p>$ \u5C31\u662F jQuery \u7684\u4E00\u4E2A\u7B80\u5199\u5F62\u5F0F\uFF0C $(\u2018#f00\u2019) \u548C jQuery(\u2018#foo\u2019) \u662F\u7B49\u4EF7\u7684\uFF0C$.ajax \u548C jQuery.ajax \u662F\u7B49\u4EF7\u7684\u3002</p><h2 id="\u516B\u3001\u9875\u9762\u52A0\u8F7D" tabindex="-1">\u516B\u3001\u9875\u9762\u52A0\u8F7D <a class="header-anchor" href="#\u516B\u3001\u9875\u9762\u52A0\u8F7D" aria-hidden="true">#</a></h2><ol><li><code>$(document).ready(function(){})</code>;</li><li><code>$(function(){})</code>\uFF1B\u7B80\u5199\uFF1B</li></ol><p>\u548C\u539F\u751F\u6587\u6863\u52A0\u8F7D\u5B8C\u7684\u533A\u522B\uFF1A</p><p>\u2460\u539F\u751F\uFF1A\u5FC5\u987B\u628A\u6240\u6709\u7684\u5143\u7D20\u90FD\u52A0\u8F7D\u5B8C\uFF08\u5305\u62EC\u56FE\u7247\uFF09\uFF0C\u5E76\u4E14\u53EA\u80FD\u5199\u4E00\u4E2Aonload\uFF1B</p><p>\u2461jquery\uFF1A\u53EA\u628A\u9875\u9762\u7684\u7ED3\u6784\u52A0\u8F7D\u5B8C\uFF0C\u8BFB\u53D6\u5230\u6807\u7B7E\u5C31\u53EF\u4EE5\u4E86\uFF0C\u53EF\u4EE5\u5199\u591A\u4E2A\uFF1B</p><ol start="3"><li><p>$(document).ready() \u540C window.onload \u7684\u533A\u522B\uFF1A</p><pre><code> 1. \u6267\u884C\u65F6\u673A\u4E0D\u540C\uFF0Cwindow.onload \u5FC5\u987B\u7B49\u5F85\u7F51\u9875\u4E2D\u6240\u6709\u7684\u5185\u5BB9\u52A0\u8F7D\u5B8C\u6BD5\u540E\uFF08\u5305\u62EC\u56FE\u7247\uFF09\u624D\u80FD\u6267\u884C\uFF0C\u800C $(document).ready() \u662F\u7F51\u9875\u4E2D\u6240\u6709 DOM \u7ED3\u6784\u7ED8\u5236\u5B8C\u6BD5\u5C31\u6267\u884C\uFF0C\u53EF\u80FD DOM \u5143\u7D20\u5173\u8054\u7684\u4E1C\u897F\u5E76\u6CA1\u6709\u52A0\u8F7D\u5B8C\u3002
 2. window.onload \u53EA\u80FD\u5199\u4E00\u4E2A , \u591A\u4E2A\u65F6\u540E\u9762\u7684\u4F1A\u8986\u76D6\u6389\u524D\u9762\u7684\uFF0C\u800C $(document).ready() \u53EF\u4EE5\u5199\u591A\u4E2A\uFF0C\u4E0D\u4F1A\u8986\u76D6\u3002
 3. window.onload\u6CA1\u6709\u7B80\u5199\u5F62\u5F0F\uFF0C\u800C$(document).ready()\u53EF\u4EE5\u7B80\u5199\u6210$(function (){})\u3002
</code></pre></li></ol><h2 id="\u4E5D\u3001\u5143\u7D20" tabindex="-1">\u4E5D\u3001\u5143\u7D20 <a class="header-anchor" href="#\u4E5D\u3001\u5143\u7D20" aria-hidden="true">#</a></h2><ol><li>dom\u5143\u7D20\uFF1A\u539F\u751F\u83B7\u53D6\u7684\u5C31\u662Fdom\u5143\u7D20\uFF08[HTMLCollection]\uFF09\uFF1B</li><li>jquery\u5143\u7D20\uFF1Ak.fn.init\u7684\u5143\u7D20\u5C31\u662Fjquery\u5143\u7D20\uFF08k.fn.init\uFF09;</li></ol><h2 id="\u5341\u3001\u8F6C\u6362\u5143\u7D20" tabindex="-1">\u5341\u3001\u8F6C\u6362\u5143\u7D20 <a class="header-anchor" href="#\u5341\u3001\u8F6C\u6362\u5143\u7D20" aria-hidden="true">#</a></h2><p>\u4F7F\u7528jquery\u5143\u7D20\u4E0D\u80FD\u4F7F\u7528\u539F\u751F\u7684\u65B9\u6CD5\uFF0C\u4E0D\u80FD\u6DF7\u7740\u7528\uFF0C\u53EF\u4EE5\u8F6C\u6362\u5143\u7D20\u4F7F\u7528\uFF1B</p><ol><li>$(li)\uFF0C\u5C06\u4F7F\u7528dom\u83B7\u53D6li\u53D8\u91CF\u7684\u5143\u7D20\u8F6C\u6362\u4E3Ajquery\u7684\u5143\u7D20\uFF1B</li><li>jquery\u8F6Cdom\uFF1A\u2460$(&quot;li&quot;).get(\u4E0B\u6807)\uFF0C\u2461$(&quot;li&quot;)[\u4E0B\u6807] \u8F6Cdom\u52A0\u4E0B\u6807\uFF0C\u8F6Cjquery\u52A0$\uFF1B</li></ol><h2 id="\u5341\u4E00\u3001\u548C\u5176\u4ED6\u6846\u67B6\u51B2\u7A81" tabindex="-1">\u5341\u4E00\u3001\u548C\u5176\u4ED6\u6846\u67B6\u51B2\u7A81 <a class="header-anchor" href="#\u5341\u4E00\u3001\u548C\u5176\u4ED6\u6846\u67B6\u51B2\u7A81" aria-hidden="true">#</a></h2><p>jQuery\u4F7F\u7528$\u7B26\u53F7\u7684\u65B9\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528jQuery\uFF1B</p><ol><li>\u8BA9\u6E21\uFF1AjQuery.noConflict();<br> \u5C06$\u7B26\u8BA9\u7ED9\u5176\u4ED6\u7684\u5E93\u4F7F\u7528\uFF0C\u81EA\u5DF1\u8FD8\u53EF\u4EE5\u4F7F\u7528jQuery\u6765\u4EE3\u66FF$\uFF1B \u5982\u679CjQuery\u5E93\u8FD8\u60F3\u4F7F\u7528$\u7B26,\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\uFF0C\u5C06jQuery\u4F5C\u4E3A\u5B9E\u53C2\uFF0C$\u4F5C\u4E3A\u5F62\u53C2\uFF1B</li></ol><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>    \u4F7F\u7528$\u4F5C\u4E3A\u5F62\u53C2\u4F7F\u7528\uFF1B
</code></pre></div><ol start="2"><li>\u6539\u53D8\uFF1A<code>var j = jQuery.noConflict()</code>\uFF1B\u58F0\u660E\u4EFB\u610F\u53D8\u91CF\u6765\u66FF\u6362$\u7B26\uFF1B\u6539\u53D8\u4E4B\u540E\u4E0D\u80FD\u518D\u4F7F\u7528$\uFF1B</li></ol>`,44),l=[s];function i(o,p,u,c,d,j){return n(),a("div",null,l)}var q=e(r,[["render",i]]);export{y as __pageData,q as default};
