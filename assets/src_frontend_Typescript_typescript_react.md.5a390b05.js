import{_ as n,c as s,o as a,d as t}from"./app.00f96e96.js";const g='{"title":"ts-react","description":"","frontmatter":{},"headers":[{"level":2,"title":"React\u7C7B\u578B\u58F0\u540D","slug":"react\u7C7B\u578B\u58F0\u540D"}],"relativePath":"src/frontend/Typescript/typescript_react.md","lastUpdated":1649840977557}',p={},o=t(`<h1 id="ts-react" tabindex="-1">ts-react <a class="header-anchor" href="#ts-react" aria-hidden="true">#</a></h1><p>\u5B89\u88C5\uFF1A<code>yarn create react-app demo --template typescript</code></p><p>\u4F20\u503C\u65B9\u5F0F\uFF1A</p><div class="language-tsx"><pre><code><span class="token comment">// Prent.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">StateProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>
    state<span class="token operator">:</span> StateProps
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Paren</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Button.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> Button<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="react\u7C7B\u578B\u58F0\u540D" tabindex="-1">React\u7C7B\u578B\u58F0\u540D <a class="header-anchor" href="#react\u7C7B\u578B\u58F0\u540D" aria-hidden="true">#</a></h2><p>\u4F7F\u7528ts\u7684react\u5E38\u89C1\u7684\u7C7B\u578B\u58F0\u540D\uFF1A</p><div class="language-tsx"><pre><code><span class="token comment">// \u7EC4\u4EF6\u58F0\u540D</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span>FunctionComponent<span class="token operator">&lt;</span>AppProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>AppProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// css\u58F0\u540D</span>
<span class="token keyword">interface</span> <span class="token class-name">Constom</span> <span class="token punctuation">{</span>
    style<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperty<span class="token punctuation">;</span> <span class="token comment">// \u6837\u5F0F</span>
    children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span> <span class="token comment">// \u7EC4\u4EF6</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u539F\u59CB\u6807\u7B7E\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">AppProps</span> <span class="token operator">=</span> AppProps <span class="token operator">&amp;</span> React<span class="token punctuation">.</span>ButtonHTMLAttributes<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div>`,7),e=[o];function c(l,k,u,r,i,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
