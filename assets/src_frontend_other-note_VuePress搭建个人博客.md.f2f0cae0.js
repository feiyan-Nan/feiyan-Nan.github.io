import{_ as s,c as n,o as a,d as p}from"./app.7277c524.js";const h='{"title":"VuePress\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u5B89\u88C5vuepress","slug":"\u5168\u5C40\u5B89\u88C5vuepress"},{"level":2,"title":"\u521B\u5EFAvuepress\u76EE\u5F55","slug":"\u521B\u5EFAvuepress\u76EE\u5F55"},{"level":2,"title":"\u914D\u7F6Epackage.json","slug":"\u914D\u7F6Epackage-json"},{"level":2,"title":"\u914D\u7F6E\u9ED8\u8BA4\u4E3B\u9898","slug":"\u914D\u7F6E\u9ED8\u8BA4\u4E3B\u9898"},{"level":2,"title":"\u521B\u5EFA\u65B0\u9875\u9762","slug":"\u521B\u5EFA\u65B0\u9875\u9762"},{"level":2,"title":"\u914D\u7F6Econfig.js","slug":"\u914D\u7F6Econfig-js"},{"level":2,"title":"\u5E38\u7528\u7684\u51E0\u4E2AYAML\u8BED\u6CD5","slug":"\u5E38\u7528\u7684\u51E0\u4E2Ayaml\u8BED\u6CD5"},{"level":2,"title":"\u4FA7\u8FB9\u680F\u589E\u5F3A","slug":"\u4FA7\u8FB9\u680F\u589E\u5F3A"},{"level":2,"title":"\u5206\u7EC4\u5BFC\u822A\u680F","slug":"\u5206\u7EC4\u5BFC\u822A\u680F"},{"level":2,"title":"\u65B0\u589Emarkedown\u7528\u6CD5","slug":"\u65B0\u589Emarkedown\u7528\u6CD5"},{"level":2,"title":"vuepress\u4E2D\u6CE8\u518C\u7EC4\u4EF6","slug":"vuepress\u4E2D\u6CE8\u518C\u7EC4\u4EF6"},{"level":2,"title":"vuepress\u4F7F\u7528vue\u6587\u4EF6","slug":"vuepress\u4F7F\u7528vue\u6587\u4EF6"},{"level":2,"title":"\u4F7F\u7528element\u7EC4\u4EF6","slug":"\u4F7F\u7528element\u7EC4\u4EF6"},{"level":2,"title":"\u90E8\u7F72github","slug":"\u90E8\u7F72github"},{"level":2,"title":"\u8F6C\u53D1\u57DF\u540D","slug":"\u8F6C\u53D1\u57DF\u540D"},{"level":2,"title":"\u9047\u5230\u7684\u95EE\u9898\u603B\u7ED3","slug":"\u9047\u5230\u7684\u95EE\u9898\u603B\u7ED3"}],"relativePath":"src/frontend/other-note/VuePress\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2.md","lastUpdated":1649840977599}',e={},t=p(`<h1 id="vuepress\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2" tabindex="-1">VuePress\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2 <a class="header-anchor" href="#vuepress\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2" aria-hidden="true">#</a></h1><h2 id="\u5168\u5C40\u5B89\u88C5vuepress" tabindex="-1">\u5168\u5C40\u5B89\u88C5vuepress <a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5vuepress" aria-hidden="true">#</a></h2><p><code>yarn global add vuepress</code></p><h2 id="\u521B\u5EFAvuepress\u76EE\u5F55" tabindex="-1">\u521B\u5EFAvuepress\u76EE\u5F55 <a class="header-anchor" href="#\u521B\u5EFAvuepress\u76EE\u5F55" aria-hidden="true">#</a></h2><p><code>.vuepress</code>\u53EF\u4EE5\u4F7F\u7528cmd\u6765\u521B\u5EFA\uFF0C<code>mkdir docs\\.vuepress</code>\uFF0C \u8BB0\u5F97docs\u4E5F\u5E26\u4E0A\uFF1B</p><div class="language-"><pre><code>docs
    .vuepress
        dist
        public
        config.js
    blog
    README.md
package.json
</code></pre></div><p><strong>docs</strong> \u662F\u9879\u76EE\u6839\u76EE\u5F55\uFF0C</p><p><strong>package.json</strong> \u662F\u7528\u6765\u4E00\u952E\u64CD\u4F5C\u4EE3\u7801\u7684\uFF1B</p><p><strong>public</strong> \u56FE\u7247\u653E\u7F6E\u6587\u4EF6\u5939\uFF0C\u76F4\u63A5\u4F7F\u7528/logo.png\u5C31\u53EF\u4EE5\u4E86\uFF1B</p><p><strong>config.js</strong> \u6574\u4E2A\u9879\u76EE\u7684\u6838\u5FC3\uFF0C\u6240\u4EE5\u914D\u7F6E\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u90FD\u5728\u8BE5\u6587\u4EF6\uFF1B</p><p><strong>blog</strong> \u81EA\u5B9A\u4E49\u7684\u6587\u4EF6\u5939\uFF1B</p><p><strong>dist</strong> \u6253\u5305\u4E4B\u540E\u7684\u6587\u4EF6\u5939</p><h2 id="\u914D\u7F6Epackage-json" tabindex="-1">\u914D\u7F6Epackage.json <a class="header-anchor" href="#\u914D\u7F6Epackage-json" aria-hidden="true">#</a></h2><p>\u5728package.json\u91CC\u9762\u6DFB\u52A0scripts\u4E00\u952E\u64CD\u4F5C\u4EE3\u7801\uFF0C\u4E4B\u540E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><p><code>npm run docs:dev</code> \u6765\u8FD0\u884C\u5F00\u53D1\u73AF\u5883</p><p><code>npm run docs:build</code>\uFF1A \u6253\u5305 \u7528\u6765\u4E0A\u4F20\u7684;</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u914D\u7F6E\u9ED8\u8BA4\u4E3B\u9898" tabindex="-1">\u914D\u7F6E\u9ED8\u8BA4\u4E3B\u9898 <a class="header-anchor" href="#\u914D\u7F6E\u9ED8\u8BA4\u4E3B\u9898" aria-hidden="true">#</a></h2><p>\u5728docs\u4E0B\u7684README.md\u586B\u5199\u4EE5\u4E0B\u7684\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u6392\u7248\u683C\u5F0F\u7684\u9996\u9875\uFF1B</p><p>heroImage\u4E3A\u9996\u9875\u7684\u56FE\u7247\uFF0C\u9700\u8981\u81EA\u9009\u4E0B\u8F7D\uFF0C\u653E\u7F6Epublic\u6587\u4EF6\u5939\uFF1B</p><p>\u6CE8\u610F\uFF1A\u590D\u5236\u4E0B\u9762\u7684\u4EE3\u7801\u6700\u597D\u4F7F\u7528notepad++\uFF0C\u6216\u8005\u5176\u4ED6\u8F6F\u4EF6\u6253\u5F00\uFF0C\u4E0D\u8981\u4F7F\u7528typora\u6253\u5F00\uFF0C\u4F1A\u51FA\u9519\uFF1B</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.png
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> \u524D\u7AEF\u5B66\u4E60\u5708
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> \u5FEB\u901F\u4E0A\u624B \u2192
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /blog/type.md
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u7B80\u6D01\u81F3\u4E0A
  <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9879\u76EE\u7ED3\u6784\uFF0C\u4EE5\u6700\u5C11\u7684\u914D\u7F6E\u5E2E\u52A9\u4F60\u4E13\u6CE8\u4E8E\u5199\u4F5C\u3002
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue\u9A71\u52A8
  <span class="token key atrule">details</span><span class="token punctuation">:</span> \u4EAB\u53D7 Vue + webpack \u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F7F\u7528 Vue \u6765\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> \u9AD8\u6027\u80FD
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress \u4E3A\u6BCF\u4E2A\u9875\u9762\u9884\u6E32\u67D3\u751F\u6210\u9759\u6001\u7684 HTML\uFF0C\u540C\u65F6\u5728\u9875\u9762\u88AB\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u5C06\u4F5C\u4E3A SPA \u8FD0\u884C\u3002
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright \xA9 2018<span class="token punctuation">-</span>present Evan You
<span class="token punctuation">---</span>
</code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-01.png" alt="image"></p><h2 id="\u521B\u5EFA\u65B0\u9875\u9762" tabindex="-1">\u521B\u5EFA\u65B0\u9875\u9762 <a class="header-anchor" href="#\u521B\u5EFA\u65B0\u9875\u9762" aria-hidden="true">#</a></h2><p>\u5728docs\u4E0B\u9762\uFF0C\u4E00\u4E2A\u6587\u4EF6\u5939\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u9875\u9762\uFF0C\u53EF\u4EE5\u5728docs\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u65B0\u6587\u4EF6\u5939\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u9875\u9762\uFF0Cblog\u6587\u4EF6\u5939\u53EF\u4EE5\u5220\u9664\uFF0C\u81EA\u5DF1\u53E6\u5916\u521B\u5EFA\u5176\u4ED6\u9875\u9762\uFF1B</p><p>\u5728blog\u6587\u4EF6\u5939\u4E0B\u521B\u5EFAmd\u6587\u4EF6\uFF0C\u5F00\u59CB\u5199\u535A\u5BA2\uFF1B</p><h2 id="\u914D\u7F6Econfig-js" tabindex="-1">\u914D\u7F6Econfig.js <a class="header-anchor" href="#\u914D\u7F6Econfig-js" aria-hidden="true">#</a></h2><p>\u4F4D\u7F6E\uFF1Adocs/.vuepress/config.js</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u5B66\u4E60\u5708&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;\u63CF\u8FF0\u5185\u5BB9&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">rel</span><span class="token operator">:</span><span class="token string">&#39;shortcut icon&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;image/x-icon&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">href</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./favicon.ico</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;\u9879\u76EE\u4ED3\u5E93\u5730\u5740&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">&#39;\u4ED3\u5E93\u5730\u5740\u6807\u9898&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">nav</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/blog/js&#39;</span><span class="token punctuation">}</span> <span class="token comment">// \u6CE8\u610F\u5982\u679C\u662F\u6839\u8DEF\u5F84\u9700\u8981\u5199\u4E24\u4E2A\u659C\u6760&#39;/blog/&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sidebarDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>  <span class="token comment">//\u4EC5\u652F\u6301h2\u548Ch3\u6807\u9898,h1\u4F5C\u4E3A\u663E\u793A\u7684\u6807\u9898;</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/blog&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u5206\u7EC4\u6807\u9898&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// \u53BB\u6389\u5411\u4E0B\u7BAD\u5934</span>
                <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;day01&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;day02&#39;</span><span class="token punctuation">]</span>
                <span class="token comment">//children\u91CC\u9762\u53D6\u4E00\u7EA7\u6807\u9898\u4F5C\u4E3A\u663E\u793A\u540D\u79F0,\u4E00\u4E2A\u9875\u9762\u53EA\u80FD\u6709\u4E00\u4E2A\u4E00\u7EA7\u6807\u9898,\u5E76\u4E14\u5FC5\u987B\u5728\u7B2C\u4E00\u884C;</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token comment">// sidebar\u7684\u7ED3\u675F\u7B26;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-02.png" alt="image"></p><p>head\u662F\u7528\u6765\u653E\u56FE\u6807\u7684\uFF0C\u653E\u5230public\u6587\u4EF6\u5939\uFF0Cnav\u662F\u9876\u90E8\u5BFC\u822A\uFF0Csliderbar\u662F\u4FA7\u8FB9\u680F\uFF0C\u662Fblog\u6587\u4EF6\u5939\u7684\u4FA7\u8FB9\u680F\uFF0Cjs\u4E3Ablog\u6587\u4EF6\u5939\u4E0B\u7684\u4E00\u4E2Ajs.md\u6587\u4EF6\uFF1B</p><p>\u8DEF\u5F84\uFF1A\u4EE5&#39;/&#39;\u7ED3\u5C3E\u7684\u8DEF\u5F84\u4F1A\u88AB\u9ED8\u8BA4\u67E5\u627E*/README.md</p><p>\u641C\u7D22\uFF1A\u4EC5\u652F\u6301\u4E8C\u7EA7\u548C\u4E09\u7EA7\u6807\u9898\u7684\u641C\u7D22\uFF0C\u586B\u5199\u6587\u7AE0\u65F6\uFF0C\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528h2\u548Ch3\u4EE5\u5916\u7684\u6807\u9898\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\u4E0A\uFF1B</p><h2 id="\u5E38\u7528\u7684\u51E0\u4E2Ayaml\u8BED\u6CD5" tabindex="-1">\u5E38\u7528\u7684\u51E0\u4E2AYAML\u8BED\u6CD5 <a class="header-anchor" href="#\u5E38\u7528\u7684\u51E0\u4E2Ayaml\u8BED\u6CD5" aria-hidden="true">#</a></h2><p>\u4EE5\u4E0B\u7684\u5185\u5BB9\u90FD\u662F\u7ED9\u67D0\u4E2Amd\u6587\u4EF6\u8BBE\u7F6E\u7684\u9009\u9879\uFF1B</p><p>\u81EA\u52A8\u751F\u6210\u4FA7\u8FB9\u680F\uFF0C\u4EC5\u4EC5\u5305\u542B\u5F53\u524D\u9875\u9762\u6807\u9898\u7684\u94FE\u63A5\u4FA7\u8FB9\u680F\uFF0C\u4E0D\u4F1A\u6709\u5176\u4ED6\u4FA7\u8FB9\u680F\u5B58\u5728</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">sidebar</span><span class="token punctuation">:</span> auto  <span class="token comment"># \u81EA\u52A8\u751F\u6210\u4FA7\u8FB9\u680F;  </span>
    \u5982\u679C\u5728config\u914D\u7F6E<span class="token punctuation">,</span><span class="token key atrule">auto\u9700\u8981\u5E26\u5F15\u53F7\uFF1Asidebar</span><span class="token punctuation">:</span> <span class="token string">&#39;auto&#39;</span>
<span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># \u7981\u7528\u4FA7\u8FB9\u680F;</span>
<span class="token key atrule">navbar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>   <span class="token comment"># \u7981\u7528\u5BFC\u822A\u680F;</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> custom <span class="token comment"># \u6539\u7528\u5176\u4ED6\u7EC4\u4EF6</span>
<span class="token punctuation">---</span>
</code></pre></div><p>\u4EE5\u4E0A\u662F\u666E\u901A\u914D\u7F6E\uFF0C\u66F4\u591A\u914D\u7F6E\u8BF7\u67E5\u770B\u5B98\u65B9\u6587\u6863\uFF1B</p><p><a href="https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5" target="_blank" rel="noopener noreferrer">https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5</a></p><h2 id="\u4FA7\u8FB9\u680F\u589E\u5F3A" tabindex="-1">\u4FA7\u8FB9\u680F\u589E\u5F3A <a class="header-anchor" href="#\u4FA7\u8FB9\u680F\u589E\u5F3A" aria-hidden="true">#</a></h2><p>1\u3001\u4FA7\u8FB9\u680F\u5206\u7EC4\uFF0C\u9488\u5BF9\u6240\u6709\u9875\u9762\u90FD\u4F7F\u7528\u8BE5\u4FA7\u8FB9\u680F</p><div class="language-js"><pre><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;group1&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">collapsable</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;group1&#39;</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>2\u3001\u591A\u4E2A\u4FA7\u8FB9\u680F\uFF0C\u4E0D\u540C\u9875\u9762\u4E0D\u540C\u4FA7\u8FB9\u680F</p><p>\u4F7F\u7528\u5E26\u76EE\u5F55\u7684\uFF0C\u6DFB\u52A0\u94FE\u63A5\u65F6\u4E0D\u9700\u8981\u5E26\u6587\u4EF6\u5939\u7684\u8DEF\u5F84\uFF1B</p><div class="language-js"><pre><code><span class="token literal-property property">sidebar</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/bar/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;\u81EA\u5B9A\u4E49\u6807\u9898\u540D\u79F0;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">//\u91CC\u9762\u4E5F\u53EF\u4EE5\u586B\u5199\u5206\u7EC4;</span>
    <span class="token string-property property">&#39;/foo/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u82E5\u6CA1\u6709\u6307\u5B9A\u6807\u9898\u540D\u79F0\uFF0C\u5219\u6807\u9898\u4F7F\u7528\u4E00\u7EA7\u6807\u9898\u7684\u540D\u79F0\uFF1B</p><h2 id="\u5206\u7EC4\u5BFC\u822A\u680F" tabindex="-1">\u5206\u7EC4\u5BFC\u822A\u680F <a class="header-anchor" href="#\u5206\u7EC4\u5BFC\u822A\u680F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token literal-property property">nav</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;\u7F16\u7A0B\u8BED\u8A00&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>  <span class="token comment">// \u53EF\u4EE5\u5728items\u7EE7\u7EED\u5957\u5206\u7EC4;</span>
</code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-03.png" alt="image"></p><h2 id="\u65B0\u589Emarkedown\u7528\u6CD5" tabindex="-1">\u65B0\u589Emarkedown\u7528\u6CD5 <a class="header-anchor" href="#\u65B0\u589Emarkedown\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-markdown"><pre><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP    //stop\u81EA\u5B9A\u4E49\u7684\u6807\u9898,
Danger zone, do not proceed
:::
</code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-04.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-05.png" alt="image"></p><p>\u4EE3\u7801\u5757\u4E2D\u7684\u884C\u9AD8\u4EAE</p><div class="language-markdown"><pre><code>\u200B\`\`\` js{4}  //\u7B2C\u56DB\u884C\u9AD8\u4EAE
</code></pre></div><h2 id="vuepress\u4E2D\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1">vuepress\u4E2D\u6CE8\u518C\u7EC4\u4EF6 <a class="header-anchor" href="#vuepress\u4E2D\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u5728.vuepress\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2AenhanceApp.js\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u76F8\u5F53\u4E8Emain.js\uFF0C\u662F\u5165\u53E3\u6587\u4EF6\uFF0C\u91CC\u9762\u53EF\u4EE5\u4E0B\u8F7DElement,Mini\u7EC4\u4EF6\u7B49\u7B49\uFF1B</p><p>element\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5728docs\u6839\u76EE\u5F55\u4E0B\u8FDB\u884C\u5B89\u88C5\uFF1B</p><div class="language-js"><pre><code><span class="token comment">// .vuepress/enhanceApp.js</span>
<span class="token comment">// \u5168\u5C40\u6CE8\u518C Element \u7EC4\u4EF6\u5E93</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Element <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Element<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    Vue
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="vuepress\u4F7F\u7528vue\u6587\u4EF6" tabindex="-1">vuepress\u4F7F\u7528vue\u6587\u4EF6 <a class="header-anchor" href="#vuepress\u4F7F\u7528vue\u6587\u4EF6" aria-hidden="true">#</a></h2><p>1\u3001\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><p>\u5728.vuepress\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2Acomponents\u6587\u4EF6\u5939\uFF0C\u91CC\u9762\u7684.vue\u6587\u4EF6\u4F1A\u88AB\u6CE8\u518C\u6210\u5168\u5C40\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728md\u6587\u4EF6\u5F53\u5F15\u5165,\u4EE5\u6587\u4EF6\u540D\u5B57\u4E3A\u7EC4\u4EF6\u540D\uFF1B</p><p>\u6CE8\u610F\u76EE\u5F55\u8DEF\u5F84\uFF1B</p><div class="language-markdown"><pre><code>// docs/.vuepres/components/hello.vue
// docs/blog/test.md
this is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span> <span class="token punctuation">/&gt;</span></span>   // \u4F1A\u81EA\u52A8\u5C06hello.vue\u7684\u53EF\u663E\u793A\u5185\u5BB9\u663E\u793A\u5230\u9875\u9762\u4E0A;
</code></pre></div><p>2\u3001\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A</p><p>\u4E0D\u5305\u542B\u5934\u90E8\uFF0C\u76F4\u63A5\u662F\u4E00\u4E2A\u5355\u6587\u4EF6\uFF1B</p><p>\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u5E76\u521B\u5EFAREADME.md\u6587\u4EF6</p><p>\u5199\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> custom //\u586B\u5199components\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u540D\u5B57
<span class="token punctuation">---</span>
</code></pre></div><h2 id="\u4F7F\u7528element\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528element\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528element\u7EC4\u4EF6" aria-hidden="true">#</a></h2><blockquote><p>\u9700\u8981\u5B8C\u6210\u6CE8\u518CElement\u7EC4\u4EF6\u5E93</p></blockquote><p>\u5728\u6839\u76EE\u5F55docs\u4E0B\uFF0C\u4EFB\u610F\u4E00\u4E2A\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A.md\u6587\u4EF6\uFF0C\u91CC\u9762\u76F4\u63A5\u586B\u5199vue\u7684\u4EE3\u7801\uFF0C</p><p>\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528element\u7684\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528component\u4E0B\u7684\u5168\u5C40\u7EC4\u4EF6\uFF1B</p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-06.png" alt="image"></p><h2 id="\u90E8\u7F72github" tabindex="-1">\u90E8\u7F72github <a class="header-anchor" href="#\u90E8\u7F72github" aria-hidden="true">#</a></h2><ol><li><p>\u5728github\u65B0\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u4E0D\u8981\u521D\u59CB\u5316\u4ED3\u5E93\uFF0C</p></li><li><p>\u6253\u5F00git bash\u5DE5\u5177\uFF0C</p><div class="language-bash"><pre><code><span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin \u5730\u5740  <span class="token comment"># \u8FDB\u884C\u8FDE\u63A5;</span>
</code></pre></div></li><li><p>\u4FEE\u6539base\uFF0C\u627E\u5230.vuepress/config.js</p><div class="language-js"><pre><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&lt;name&gt;/&#39;</span>    <span class="token comment">//\u5C06\u521B\u5EFA\u7684\u9879\u76EE\u540D\u79F0\u586B\u5165,\u53CC\u659C\u6760\u4E0D\u80FD\u5220\u9664;</span>
</code></pre></div></li><li><p>\u4E0B\u8F7Dgh-pages\u5305</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> gh-pages
</code></pre></div></li><li><p>\u5728package.json\u6587\u4EF6\u6DFB\u52A0\u811A\u672C\u547D\u4EE4</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gh-pages -d ./docs/.vuepress/dist&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run docs:build &amp;&amp; gh-pages -d ./docs/.vuepress/dist&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>\u8FD0\u884C\uFF1A<code>npm run deploy:build</code></p></li><li><p>\u6253\u5F00\u4F60\u7684github\u5730\u5740\uFF0C<code>https://&lt;name&gt;/github.io/&lt;repo&gt;</code></p></li></ol><h2 id="\u8F6C\u53D1\u57DF\u540D" tabindex="-1">\u8F6C\u53D1\u57DF\u540D <a class="header-anchor" href="#\u8F6C\u53D1\u57DF\u540D" aria-hidden="true">#</a></h2><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-08.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-09.png" alt="image"></p><h2 id="\u9047\u5230\u7684\u95EE\u9898\u603B\u7ED3" tabindex="-1">\u9047\u5230\u7684\u95EE\u9898\u603B\u7ED3 <a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4E0D\u663E\u793A\u4FA7\u8FB9\u680F\u7684\u60C5\u51B5\uFF1A\u68C0\u67E5\u6587\u4EF6\u5939\u6216\u8005\u76EE\u5F55\u540D\u662F\u5426\u6709\u6B63\u786E</p>`,81),o=[t];function c(l,r,i,u,k,d){return a(),n("div",null,o)}var m=s(e,[["render",c]]);export{h as __pageData,m as default};
