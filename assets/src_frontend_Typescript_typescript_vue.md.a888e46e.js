import{_ as n,c as s,o as a,d as t}from"./app.7277c524.js";const g='{"title":"ts-Typescript and Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001vue\u6587\u4EF6\u5199\u6CD5","slug":"\u4E00\u3001vue\u6587\u4EF6\u5199\u6CD5"},{"level":2,"title":"\u4E8C\u3001vue-property-decorator","slug":"\u4E8C\u3001vue-property-decorator"},{"level":3,"title":"\u53EF\u7528\u7684\u88C5\u9970\u5668","slug":"\u53EF\u7528\u7684\u88C5\u9970\u5668"},{"level":3,"title":"@Prop\u7528\u6CD5","slug":"prop\u7528\u6CD5"},{"level":3,"title":"\u8FDE\u63A5vuex","slug":"\u8FDE\u63A5vuex"},{"level":2,"title":"\u4E09\u3001tsx\u5199\u6CD5","slug":"\u4E09\u3001tsx\u5199\u6CD5"},{"level":2,"title":"\u56DB\u3001\u6846\u67B6\u63A8\u8350","slug":"\u56DB\u3001\u6846\u67B6\u63A8\u8350"},{"level":2,"title":"\u4E94\u3001\u7ED9Vue\u6269\u5C55\u539F\u578B\u5C5E\u6027","slug":"\u4E94\u3001\u7ED9vue\u6269\u5C55\u539F\u578B\u5C5E\u6027"}],"relativePath":"src/frontend/Typescript/typescript_vue.md","lastUpdated":1649840977557}',p={},e=t(`<h1 id="ts-typescript-and-vue" tabindex="-1">ts-Typescript and Vue <a class="header-anchor" href="#ts-typescript-and-vue" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001vue\u6587\u4EF6\u5199\u6CD5" tabindex="-1">\u4E00\u3001vue\u6587\u4EF6\u5199\u6CD5 <a class="header-anchor" href="#\u4E00\u3001vue\u6587\u4EF6\u5199\u6CD5" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-item</span> 
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>(item, index) in list<span class="token punctuation">&#39;</span></span> 
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span></span>
        <span class="token attr-name">:isEdittingIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>isEdittingIndex<span class="token punctuation">&#39;</span></span>
        <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>item<span class="token punctuation">&#39;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u9700\u8981\u6307\u5B9Alang=ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Vue<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TodoItem <span class="token keyword">from</span> <span class="token string">&#39;../components/todo-item&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u88C5\u9970\u5668\u4FEE\u9970\u7C7B, \u7EC4\u4EF6\u76F8\u5173\u7684\u5185\u5BB9\u5728\u91CC\u9762\u5199\u5165</span>
@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;todo-page&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    TodoItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u5728\u7C7B\u91CC\u9762\u5B9A\u4E49</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> isEdittingIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue\u5168\u9762\u89E3\u8BFB\u8BFE\u7A0B&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="\u4E8C\u3001vue-property-decorator" tabindex="-1">\u4E8C\u3001vue-property-decorator <a class="header-anchor" href="#\u4E8C\u3001vue-property-decorator" aria-hidden="true">#</a></h2><h3 id="\u53EF\u7528\u7684\u88C5\u9970\u5668" tabindex="-1">\u53EF\u7528\u7684\u88C5\u9970\u5668 <a class="header-anchor" href="#\u53EF\u7528\u7684\u88C5\u9970\u5668" aria-hidden="true">#</a></h3><ul><li><code>@Prop</code></li><li><code>@PropSync</code></li><li><code>@Model</code></li><li><code>@Watch</code></li><li><code>@Provide</code></li><li><code>@Inject</code></li><li><code>@ProvideReactive</code></li><li><code>@InjectReactive</code></li><li><code>@Emit</code></li><li><code>@Ref</code></li><li><code>Mixins</code></li><li><code>@Component</code> \u7531vue-class-component\u63D0\u4F9B</li></ul><h3 id="prop\u7528\u6CD5" tabindex="-1">@Prop\u7528\u6CD5 <a class="header-anchor" href="#prop\u7528\u6CD5" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Vue<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5199\u4E86undefined\u7C7B\u578B\u4E0D\u9700\u8981\u5199\u65AD\u8A00!</span>
    @<span class="token function">Prop</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token keyword">readonly</span> propA<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default value&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">readonly</span> propB<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span>
    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span> Boolean<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">readonly</span> propC<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8FDE\u63A5vuex" tabindex="-1">\u8FDE\u63A5vuex <a class="header-anchor" href="#\u8FDE\u63A5vuex" aria-hidden="true">#</a></h3><ol><li><p>\u5B89\u88C5\u63D2\u4EF6\uFF1A<code>vuex-class</code></p></li><li><p>\u4F7F\u7528\u65B9\u6CD5</p></li></ol><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>State<span class="token punctuation">,</span> Mutation<span class="token punctuation">,</span> Action<span class="token punctuation">,</span> Getter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex-class&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62EC\u53F7\u586B\u5199state\u4E2D\u7684\u540D\u5B57\uFF0C\u540E\u9762\u4E3A\u5B9E\u4F8B\u7684\u5C5E\u6027\u540D\u5B57</span>
    @<span class="token function">State</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span> <span class="token keyword">public</span> list
    @<span class="token function">Mutation</span><span class="token punctuation">(</span><span class="token string">&#39;setIncrement&#39;</span><span class="token punctuation">)</span> <span class="token keyword">public</span> setIncrement
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F7F\u7528<code>get</code>\u548C<code>set</code>\u51FD\u6570\uFF1B</li></ol><div class="language-tsx"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">formatList</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">formatList</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001tsx\u5199\u6CD5" tabindex="-1">\u4E09\u3001tsx\u5199\u6CD5 <a class="header-anchor" href="#\u4E09\u3001tsx\u5199\u6CD5" aria-hidden="true">#</a></h2><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">,</span> Vue<span class="token punctuation">,</span> Emit<span class="token punctuation">,</span> Watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  complete<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5BFC\u51FA\u9700\u8981\u7EE7\u627Fvue</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TodoItems</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F20\u5165\u7684\u4E3A\u5F53\u524D\u5C5E\u6027\u7684\u7C7B\u578B;</span>
  @<span class="token function">Prop</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span> <span class="token keyword">public</span> item<span class="token operator">!</span><span class="token operator">:</span> Item<span class="token punctuation">;</span>
  @<span class="token function">Prop</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token keyword">public</span> index<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  @<span class="token function">Prop</span><span class="token punctuation">(</span>Number\xB7<span class="token punctuation">)</span> <span class="token keyword">public</span> isEdittingIndex<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token comment">// \u76D1\u542C\u4E00\u4E2A\u503C\u7684\u53D8\u5316, \u4F20\u5165\u9700\u8981\u76D1\u542C\u7684\u503C</span>
  @<span class="token function">Watch</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> deep<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token function">indexChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6, \u76F4\u63A5\u4F20\u5165\u4E8B\u4EF6</span>
  @<span class="token function">Emit</span><span class="token punctuation">(</span><span class="token string">&#39;on-save&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u89E6\u53D1\u4E8B\u4EF6\u7684\u7B2C\u4E8C\u79CD\u5199\u6CD5</span>
  @<span class="token function">Emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token function">onSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// \u4E8B\u4EF6\u540D\u9700\u8981\u548C\u6D3E\u53D1\u7684\u540D\u5B57\u76F8\u540C</span>

  <span class="token comment">// render\u4FEE\u9970\u7B26\u4F7F\u7528protected</span>
  <span class="token keyword">protected</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u56DB\u3001\u6846\u67B6\u63A8\u8350" tabindex="-1">\u56DB\u3001\u6846\u67B6\u63A8\u8350 <a class="header-anchor" href="#\u56DB\u3001\u6846\u67B6\u63A8\u8350" aria-hidden="true">#</a></h2><p>\u5EFA\u8BAE\u4F7F\u7528<code>ant-design-vue</code>\u7684\u6846\u67B6\uFF0C\u8BE5\u6846\u67B6\u5BF9<code>ts</code>\u5C01\u88C5\u5904\u7406\u7684\u7279\u522B\u597D\uFF0C\u5C06<code>ant-design</code>react\u7684\u7EC4\u4EF6\u5C01\u88C5\u4E86\u4E00\u904D\uFF1B</p><h2 id="\u4E94\u3001\u7ED9vue\u6269\u5C55\u539F\u578B\u5C5E\u6027" tabindex="-1">\u4E94\u3001\u7ED9Vue\u6269\u5C55\u539F\u578B\u5C5E\u6027 <a class="header-anchor" href="#\u4E94\u3001\u7ED9vue\u6269\u5C55\u539F\u578B\u5C5E\u6027" aria-hidden="true">#</a></h2><ul><li>\u521B\u5EFAsrc/types/vue.d.ts</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Message<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/types/message&#39;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue/types/vue&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
        $message<span class="token operator">:</span> Message
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),o=[e];function c(l,u,k,i,r,d){return a(),s("div",null,o)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
