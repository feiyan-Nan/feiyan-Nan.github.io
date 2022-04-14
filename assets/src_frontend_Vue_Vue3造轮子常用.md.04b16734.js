import{_ as n,c as s,o as a,d as t}from"./app.00f96e96.js";const m='{"title":"Vue3 \u9020\u8F6E\u5B50\u5E38\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E","slug":"vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E"},{"level":2,"title":"\u81EA\u52A8\u6309\u9700\u52A0\u8F7Dapi\u3001\u7EC4\u4EF6\u3001\u6837\u5F0F","slug":"\u81EA\u52A8\u6309\u9700\u52A0\u8F7Dapi\u3001\u7EC4\u4EF6\u3001\u6837\u5F0F"},{"level":2,"title":"\u589E\u52A0\u9875\u9762\u52A0\u8F7D\u8FDB\u5EA6\u6761","slug":"\u589E\u52A0\u9875\u9762\u52A0\u8F7D\u8FDB\u5EA6\u6761"},{"level":2,"title":"\u589E\u52A0UI\u7EC4\u4EF6\u5E93","slug":"\u589E\u52A0ui\u7EC4\u4EF6\u5E93"},{"level":2,"title":"\u589E\u52A0markdown\u7EC4\u4EF6","slug":"\u589E\u52A0markdown\u7EC4\u4EF6"},{"level":2,"title":"\u8BA9svg\u652F\u6301\u7EC4\u4EF6\u4E00\u6837\u5F15\u5165","slug":"\u8BA9svg\u652F\u6301\u7EC4\u4EF6\u4E00\u6837\u5F15\u5165"},{"level":2,"title":"\u914D\u7F6Escss\u5168\u5C40\u53D8\u91CF","slug":"\u914D\u7F6Escss\u5168\u5C40\u53D8\u91CF"},{"level":2,"title":"\u5C01\u88C5hooks\u53D6\u5168\u5C40\u6570\u636E","slug":"\u5C01\u88C5hooks\u53D6\u5168\u5C40\u6570\u636E"}],"relativePath":"src/frontend/Vue/Vue3\u9020\u8F6E\u5B50\u5E38\u7528.md","lastUpdated":1649840977558}',p={},o=t(`<h1 id="vue3-\u9020\u8F6E\u5B50\u5E38\u7528" tabindex="-1">Vue3 \u9020\u8F6E\u5B50\u5E38\u7528 <a class="header-anchor" href="#vue3-\u9020\u8F6E\u5B50\u5E38\u7528" aria-hidden="true">#</a></h1><h2 id="vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" tabindex="-1">vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E <a class="header-anchor" href="#vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u6839\u76EE\u5F55\u5EFA\u4EE5\u4E0B\u6587\u4EF6</li></ol><div class="language-"><pre><code>.env.development
.env.production
</code></pre></div><ol start="2"><li>\u4FEE\u6539<code>vite.config.js</code></li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnv<span class="token punctuation">,</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> envs <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5728.env.* \u6587\u4EF6\u5199\u7684\u5C06\u4F1A\u81EA\u52A8\u8BFB\u53D6</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>envs<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u81EA\u52A8\u6309\u9700\u52A0\u8F7Dapi\u3001\u7EC4\u4EF6\u3001\u6837\u5F0F" tabindex="-1">\u81EA\u52A8\u6309\u9700\u52A0\u8F7Dapi\u3001\u7EC4\u4EF6\u3001\u6837\u5F0F <a class="header-anchor" href="#\u81EA\u52A8\u6309\u9700\u52A0\u8F7Dapi\u3001\u7EC4\u4EF6\u3001\u6837\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> unplugin-vue-components unplugin-auto-import -D
</code></pre></div><ol start="2"><li>\u4FEE\u6539<code>vite.config.js</code></li></ol><div class="language-js"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// https://github.com/antfu/unplugin-auto-import</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;./src/auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8FD9\u91CC\u5199\u5165\u6309\u9700\u52A0\u8F7D\u7684\u7EC4\u4EF6\u5E93</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@vueuse/core&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token comment">// https://github.com/antfu/unplugin-vue-components</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u81EA\u52A8\u5F15\u5165\u7684\u540E\u7F00</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        
      <span class="token comment">// allow auto import and register components used in markdown</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;./src/components.d.ts&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// imports \u6307\u5B9A\u7EC4\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A src/components</span>
      <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/components/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u589E\u52A0\u9875\u9762\u52A0\u8F7D\u8FDB\u5EA6\u6761" tabindex="-1">\u589E\u52A0\u9875\u9762\u52A0\u8F7D\u8FDB\u5EA6\u6761 <a class="header-anchor" href="#\u589E\u52A0\u9875\u9762\u52A0\u8F7D\u8FDB\u5EA6\u6761" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> nprogress
</code></pre></div><ol start="2"><li>\u4FEE\u6539\u8DEF\u7531\u62E6\u622A\u5668</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>NProgress<span class="token punctuation">.</span><span class="token function">isStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u6DFB\u52A0css\u6837\u5F0F\u6587\u4EF6\u5E76\u5F15\u5165\uFF0C\u5730\u5740\uFF1A<a href="https://unpkg.com/nprogress@0.2.0/nprogress.css" target="_blank" rel="noopener noreferrer">https://unpkg.com/nprogress@0.2.0/nprogress.css</a></li></ol><h2 id="\u589E\u52A0ui\u7EC4\u4EF6\u5E93" tabindex="-1">\u589E\u52A0UI\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u589E\u52A0ui\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u4EE5<code>element-plus</code>\u4E3A\u4F8B\uFF0C\u76F4\u63A5\u914D\u7F6E\u6309\u9700\u5F15\u5165\u5373\u53EF\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u5E93\u4E5F\u662F\u5982\u6B64 \u5176\u4ED6\u652F\u6301\u6309\u9700\u5F15\u5165\u7684\u7EC4\u4EF6\u5E93\uFF1A <a href="https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/index.ts" target="_blank" rel="noopener noreferrer">https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/index.ts</a></p><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> element-plus
</code></pre></div><ol start="2"><li>\u6309\u9700\u5F15\u5165 \u4FEE\u6539vite.config.ts\u6587\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u76F4\u63A5\u5728\u6A21\u677F\u91CC\u9762\u4F7F\u7528\u5373\u53EF</li></ol><h2 id="\u589E\u52A0markdown\u7EC4\u4EF6" tabindex="-1">\u589E\u52A0markdown\u7EC4\u4EF6 <a class="header-anchor" href="#\u589E\u52A0markdown\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> @vueuse/head
<span class="token function">pnpm</span> <span class="token function">add</span> -D vite-plugin-md markdown-it-link-attributes markdown-it-prism
</code></pre></div><ol start="2"><li>main\u5165\u53E3\u6587\u4EF6\u52A0\u5165</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createHead <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/head&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>vite.config.ts\u914D\u7F6E</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> Markdown <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-md&#39;</span>
<span class="token keyword">import</span> Prism <span class="token keyword">from</span> <span class="token string">&#39;markdown-it-prism&#39;</span>
<span class="token keyword">import</span> LinkAttributes <span class="token keyword">from</span> <span class="token string">&#39;markdown-it-link-attributes&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuevue/head&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Markdown</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">wrapperClasses</span><span class="token operator">:</span> <span class="token string">&#39;markdown-body&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">markdownItOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">linkify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">typographer</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">markdownItSetup</span><span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// https://prismjs.com/</span>
          md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Prism<span class="token punctuation">)</span>
          md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LinkAttributes<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">matcher</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">link</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https?:\\/\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;noopener&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u65B0\u589Eviews/markdown.vue \u6587\u4EF6</li></ol><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MarkdownPage</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MarkdownPage <span class="token keyword">from</span> <span class="token string">&#39;@/docs/Test.md&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="5"><li>\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8DEF\u7531</li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
  name<span class="token operator">:</span> &#39;Markdown&#39;<span class="token punctuation">,</span>
  path<span class="token operator">:</span> &#39;/markdown&#39;<span class="token punctuation">,</span>
  component<span class="token operator">:</span> MarkdownPage<span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> &#39;markdown&#39;<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="6"><li>\u4E0B\u8F7Dmarkdown\u6837\u5F0F \u5730\u5740\uFF1A<a href="https://prismjs.com/plugins/file-highlight/#examples" target="_blank" rel="noopener noreferrer">https://prismjs.com/plugins/file-highlight/#examples</a> \u70B9\u51FBDOWNLOAD\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684\u4E3B\u9898\uFF0C\u6EDA\u52A8\u5230\u6700\u4E0B\u9762\uFF0C\u70B9\u51FB\u4E0B\u8F7Dcss \u6DFB\u52A0src/assets/styles/markdown.scss\uFF0C\u5E76\u5C06\u4E0B\u8F7D\u597D\u7684css\u5185\u5BB9\u590D\u5236\u8FDB\u53BB</li></ol><div class="language-scss"><pre><code><span class="token selector">.markdown-body </span><span class="token punctuation">{</span>
  <span class="token comment">// \u590D\u5236\u5230\u8FD9\u91CC</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E4B\u540E\u5C06\u8BE5css\u6587\u4EF6\u5728index.scss\u6587\u4EF6\u5185\u5BFC\u5165</p><h2 id="\u8BA9svg\u652F\u6301\u7EC4\u4EF6\u4E00\u6837\u5F15\u5165" tabindex="-1">\u8BA9svg\u652F\u6301\u7EC4\u4EF6\u4E00\u6837\u5F15\u5165 <a class="header-anchor" href="#\u8BA9svg\u652F\u6301\u7EC4\u4EF6\u4E00\u6837\u5F15\u5165" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">pnpm</span> <span class="token function">add</span> vite-svg-loader -D
</code></pre></div><ol start="2"><li>\u4FEE\u6539<code>vite.config.js</code></li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> svgLoader <span class="token keyword">from</span> <span class="token string">&#39;vite-svg-loader&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  	<span class="token comment">// ...</span>
  	<span class="token function">svgLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u4F7F\u7528\u793A\u4F8B</li></ol><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyIcon <span class="token keyword">from</span> <span class="token string">&#39;@/assets/example.svg?component&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyIcon</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u914D\u7F6Escss\u5168\u5C40\u53D8\u91CF" tabindex="-1">\u914D\u7F6Escss\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6Escss\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u4FEE\u6539<code>vite.config.js</code></p><div class="language-js"><pre><code><span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      @import &quot;@/assets/styles/variables.scss&quot;;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u5C01\u88C5hooks\u53D6\u5168\u5C40\u6570\u636E" tabindex="-1">\u5C01\u88C5hooks\u53D6\u5168\u5C40\u6570\u636E <a class="header-anchor" href="#\u5C01\u88C5hooks\u53D6\u5168\u5C40\u6570\u636E" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA useGlobal.ts \u6587\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">function</span> <span class="token function">useGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> ICurrentInstance<span class="token punctuation">;</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> useGLobal<span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u5168\u5C40\u5B9A\u4E49\u7C7B\u578B\u6709\u66F4\u597D\u7684\u63D0\u793A</li></ol><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ICurrentInstance</span> <span class="token keyword">extends</span> <span class="token class-name">ComponentInternalInstance</span> <span class="token punctuation">{</span>
    appContext<span class="token operator">:</span> <span class="token punctuation">{</span>
      config<span class="token operator">:</span> <span class="token punctuation">{</span> globalProperties<span class="token operator">:</span> IGlobal <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IGlobal</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,53),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
