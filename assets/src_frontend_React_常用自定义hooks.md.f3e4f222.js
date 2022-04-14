import{_ as n,c as s,o as a,d as t}from"./app.00f96e96.js";const h='{"title":"\u5E38\u7528\u81EA\u5B9A\u4E49hooks","description":"","frontmatter":{},"headers":[{"level":2,"title":"usePersistFn","slug":"usepersistfn"},{"level":2,"title":"useCatchData","slug":"usecatchdata"}],"relativePath":"src/frontend/React/\u5E38\u7528\u81EA\u5B9A\u4E49hooks.md","lastUpdated":1649840977546}',p={},o=t(`<h1 id="\u5E38\u7528\u81EA\u5B9A\u4E49hooks" tabindex="-1">\u5E38\u7528\u81EA\u5B9A\u4E49hooks <a class="header-anchor" href="#\u5E38\u7528\u81EA\u5B9A\u4E49hooks" aria-hidden="true">#</a></h1><h2 id="usepersistfn" tabindex="-1">usePersistFn <a class="header-anchor" href="#usepersistfn" aria-hidden="true">#</a></h2><blockquote><p>\u66FF\u4EE3useCallback\u6DFB\u52A0\u4F9D\u8D56\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u4E0D\u7528\u52A0\u4F9D\u8D56\u503C</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">noop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * @see [\u8BE6\u89C1](https://ahooks.js.org/zh-CN/hooks/advanced/use-persist-fn)
 * @see https://github.com/alibaba/hooks/blob/master/packages/hooks/src/usePersistFn/index.ts
 * @param fn
 */</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">usePersistFn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> noop<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot call function while rendering.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ref<span class="token punctuation">.</span>current <span class="token operator">=</span> fn<span class="token punctuation">;</span>

  <span class="token keyword">const</span> persistFn <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ref<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> persistFn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> usePersistFn<span class="token punctuation">;</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> change <span class="token operator">=</span> <span class="token function">usePersistFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...logic</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usecatchdata" tabindex="-1">useCatchData <a class="header-anchor" href="#usecatchdata" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> cacheData<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useCacheData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>defaultData<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cacheData <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> prevData <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    prevData<span class="token punctuation">.</span>current <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    cacheData <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> update<span class="token punctuation">,</span> prevData<span class="token operator">:</span> prevData<span class="token punctuation">.</span>current <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useCacheData<span class="token punctuation">;</span>
</code></pre></div>`,7),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
