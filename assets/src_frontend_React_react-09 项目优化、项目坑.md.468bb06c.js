import{_ as n,c as s,o as a,d as t}from"./app.7277c524.js";const g='{"title":"React-09 \u9879\u76EE\u4F18\u5316\u3001\u9879\u76EE\u5751","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u4F18\u5316","slug":"\u4E00\u3001\u9879\u76EE\u4F18\u5316"},{"level":3,"title":"\u51CF\u5C11\u6807\u7B7E","slug":"\u51CF\u5C11\u6807\u7B7E"},{"level":3,"title":"\u4E25\u683C\u6A21\u5F0F","slug":"\u4E25\u683C\u6A21\u5F0F"},{"level":3,"title":"\u91CD\u590D\u6E32\u67D3\u95EE\u9898","slug":"\u91CD\u590D\u6E32\u67D3\u95EE\u9898"},{"level":3,"title":"\u5173\u4E8E\u9996\u5C4F\u52A0\u8F7D\u6162","slug":"\u5173\u4E8E\u9996\u5C4F\u52A0\u8F7D\u6162"},{"level":3,"title":"\u957F\u5217\u8868\u4F18\u5316","slug":"\u957F\u5217\u8868\u4F18\u5316"},{"level":3,"title":"\u9519\u8BEF\u8FB9\u754C\u5904\u7406","slug":"\u9519\u8BEF\u8FB9\u754C\u5904\u7406"},{"level":3,"title":"\u8DEF\u7531\u6309\u9700\u52A0\u8F7D","slug":"\u8DEF\u7531\u6309\u9700\u52A0\u8F7D"},{"level":2,"title":"\u4E8C\u3001\u9879\u76EE\u5751","slug":"\u4E8C\u3001\u9879\u76EE\u5751"},{"level":3,"title":"ios\u8F93\u5165\u6846\u5BFC\u81F4\u9875\u9762\u4E0A\u79FB","slug":"ios\u8F93\u5165\u6846\u5BFC\u81F4\u9875\u9762\u4E0A\u79FB"},{"level":2,"title":"\u4E09\u3001ant mobile\u7684\u793A\u4F8B","slug":"\u4E09\u3001ant-mobile\u7684\u793A\u4F8B"}],"relativePath":"src/frontend/React/react-09 \u9879\u76EE\u4F18\u5316\u3001\u9879\u76EE\u5751.md","lastUpdated":1649840977545}',p={},o=t(`<h1 id="react-09-\u9879\u76EE\u4F18\u5316\u3001\u9879\u76EE\u5751" tabindex="-1">React-09 \u9879\u76EE\u4F18\u5316\u3001\u9879\u76EE\u5751 <a class="header-anchor" href="#react-09-\u9879\u76EE\u4F18\u5316\u3001\u9879\u76EE\u5751" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9879\u76EE\u4F18\u5316" tabindex="-1">\u4E00\u3001\u9879\u76EE\u4F18\u5316 <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u4F18\u5316" aria-hidden="true">#</a></h2><h3 id="\u51CF\u5C11\u6807\u7B7E" tabindex="-1">\u51CF\u5C11\u6807\u7B7E <a class="header-anchor" href="#\u51CF\u5C11\u6807\u7B7E" aria-hidden="true">#</a></h3><p><code>&lt;&gt;&lt;/&gt;</code>\u53EF\u4EE5\u4F7F\u7528\u7A7A\u6807\u7B7E\uFF0C\u5F53\u8F93\u5165\u7684\u4E3A\u7A7A\u6807\u7B7E\u65F6\uFF0C\u6E32\u67D3\u7684\u9ED8\u8BA4\u662F<code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code></p><h3 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1">\u4E25\u683C\u6A21\u5F0F <a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><code>React.StrictMode</code>\uFF1A</p><p>\u4E25\u683C\u6A21\u5F0F\u53EA\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u8FD0\u884C\uFF0C\u4E0D\u4F1A\u4E0E\u751F\u4EA7\u6A21\u5F0F\u51B2\u7A81\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\uFF0C\u5982\u540CFragment\uFF1B</p><p>Strict mode\u6709\u52A9\u4E8E\uFF1A</p><ul><li>\u8BC6\u522B\u5177\u6709\u4E0D\u5B89\u5168\u751F\u547D\u5468\u671F\u7684\u7EC4\u4EF6</li><li>\u6709\u5173\u65E7\u5F0F\u5B57\u7B26\u4E32ref\u7528\u6CD5\u7684\u8B66\u544A\uFF08\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u5F88\u96BE\u786E\u4FDD\u4E0D\u4F7F\u7528\u8FD9\u4E9B\u751F\u547D\u5468\u671F\u7684\u65B9\u6CD5\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u53EF\u4EE5\u5E2E\u5FD9\u5224\u65AD\uFF09</li><li>\u5173\u4E8E\u5DF2\u5F03\u7528\u7684findDOMNode\u7528\u6CD5\u7684\u8B66\u544A\uFF08findDOMNode\u662F\u4F20\u5165\u4E00\u4E2Aref\u5219\u53EF\u4EE5\u83B7\u53D6\u771F\u5B9Edom\u5143\u7D20\uFF09</li><li>\u68C0\u6D4B\u610F\u5916\u7684\u526F\u4F5C\u7528</li><li>\u68C0\u6D4B\u9057\u7559\u7684context API</li></ul><h3 id="\u91CD\u590D\u6E32\u67D3\u95EE\u9898" tabindex="-1">\u91CD\u590D\u6E32\u67D3\u95EE\u9898 <a class="header-anchor" href="#\u91CD\u590D\u6E32\u67D3\u95EE\u9898" aria-hidden="true">#</a></h3><ol><li>\u4F7F\u7528shouldComponentUpdate\u6765\u89E3\u51B3</li></ol><div class="language-jsx"><pre><code><span class="token function">shuldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span>nextState</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">.</span>num <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u4F7F\u7528PureComponent\u6765\u89E3\u51B3\uFF0C\u66FF\u6362component\u4E3APureComponent\uFF0C\u56E0\u4E3APureComponent\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u6BD4\u8F83</li></ol><div class="language-jsx"><pre><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// \u4F1A\u6839\u636Eprops\u662F\u5426\u53D8\u5316, \u6765\u89E3\u51B3\u91CD\u590D\u6E32\u67D3</span>
</code></pre></div><ol start="3"><li>\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528memo\u5305\u88F9\uFF1B</li></ol><div class="language-jsx"><pre><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> App2 <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5173\u4E8E\u9996\u5C4F\u52A0\u8F7D\u6162" tabindex="-1">\u5173\u4E8E\u9996\u5C4F\u52A0\u8F7D\u6162 <a class="header-anchor" href="#\u5173\u4E8E\u9996\u5C4F\u52A0\u8F7D\u6162" aria-hidden="true">#</a></h3><p>\u4E0B\u8F7D\u9AA8\u67B6\u5C4F\uFF1A<a href="https://github.com/danilowoz/react-content-loader#examples" target="_blank" rel="noopener noreferrer">https://github.com/danilowoz/react-content-loader#examples</a></p><p>\u4F7F\u7528ReactDOMServer\u6765\u52A0\u8F7D\u9996\u5C4F\uFF1B</p><h3 id="\u957F\u5217\u8868\u4F18\u5316" tabindex="-1">\u957F\u5217\u8868\u4F18\u5316 <a class="header-anchor" href="#\u957F\u5217\u8868\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u5B98\u65B9\u63A8\u8350\u7684\u957F\u5217\u8868\uFF1Areact-window\uFF1B</p><h3 id="\u9519\u8BEF\u8FB9\u754C\u5904\u7406" tabindex="-1">\u9519\u8BEF\u8FB9\u754C\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u8FB9\u754C\u5904\u7406" aria-hidden="true">#</a></h3><p>\uFF081\uFF09\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6ErrorBoundary.js\uFF0C\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-jsx"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">errorInfo</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5B50\u5143\u7D20\u53D1\u751F\u9519\u8BEF\u65F6\u6267\u884C\u8BE5\u4E8B\u4EF6</span>
    <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span>errorInfo</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            error<span class="token punctuation">,</span>
            errorInfo
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u51FA\u9519\u6E32\u67D3render\u65B9\u6CD5,render\u5728\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u65F6\u5B9A\u4E49</span>
            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>error<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>errorInfo<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6CA1\u6709\u51FA\u9519\u5219\u6E32\u67D3\u5B50\u5143\u7D20, \u5F53\u5B50\u5143\u7D20\u51FA\u9519\u4F1A\u89E6\u53D1compnentDidCatch</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09\u4F7F\u7528\u8BE5\u7EC4\u4EF6</p><div class="language-jsx"><pre><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u51FA\u9519\u4E86</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u54C8\u54C8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u8DEF\u7531\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u8DEF\u7531\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u8DEF\u7531\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h3><ol><li>\u5B89\u88C5\uFF1A<code>react-loadable</code></li><li>\u4F7F\u7528</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> Loadable <span class="token keyword">from</span> <span class="token string">&#39;react-loadable&#39;</span> <span class="token comment">// \u5F15\u5165\u6309\u9700\u52A0\u8F7D</span>
<span class="token keyword">import</span> Loading <span class="token keyword">from</span> <span class="token string">&#39;@/common/Loading&#39;</span> <span class="token comment">// \u5F15\u5165loading\u7EC4\u4EF6, \u52A0\u8F7D\u7EC4\u4EF6\u65F6\u663E\u793A</span>
<span class="token keyword">const</span> SelectComponent <span class="token operator">=</span> <span class="token function">Loadable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/Select&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> Loading
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E8C\u3001\u9879\u76EE\u5751" tabindex="-1">\u4E8C\u3001\u9879\u76EE\u5751 <a class="header-anchor" href="#\u4E8C\u3001\u9879\u76EE\u5751" aria-hidden="true">#</a></h2><ol><li>\u5728\u58F0\u660Estate\u65F6\uFF0C\u521D\u59CB\u5316\u4E0D\u8981\u4F7F\u7528null\uFF0C\u5C06null\u6362\u4E3A\u7A7A\u5B57\u7B26\u4E32\u5219\u4E0D\u4F1A\u62A5\u9519\uFF1B</li></ol><p>\u5728\u6709\u4F7F\u7528\u8BF7\u6C42\u6570\u636E\uFF0C\u6570\u636E\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u83B7\u53D6\u5BF9\u8C61\u91CC\u9762\u7684\u5BF9\u8C61\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5\u5728render(){}\u7684return\u524D\u9762\u5224\u65AD\u4E00\u4E0B\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u636E\uFF0C\u5219return</p><div class="language-js"><pre><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u5219\u4E0D\u4F1A\u6267\u884C\u4E0B\u9762\u7684;</span>

<span class="token comment">// \u8BF7\u6C42\u6570\u7EC4\u6CA1\u6709\u6570\u636E\u540C\u7406</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">//true\u5FC5\u987B\u586B\u5199 \u5426\u5219\u62A5\u9519;</span>
</code></pre></div><ol start="2"><li><p>\u4E0D\u8981\u64CD\u4F5CinnerHTML\uFF0C\u5728html\u4EE3\u7801\u91CC\u9762\u586B\u5199\u4E09\u76EE\u8FD0\u7B97\u7B26;</p></li><li><p>\u5728\u505A\u9879\u76EE\u65F6\uFF0C\u9700\u8981\u72B6\u6001\u7684\u4E1C\u897F\u8981\u5B9A\u4E49state\uFF0C\u4E0D\u7136\u6BCF\u6B21\u6E32\u67D3\u4F1A\u91CD\u65B0\u58F0\u660E\uFF0C\u65E0\u6CD5\u4FDD\u5B58</p></li><li><p>\u89E3\u51B3\u9879\u76EE\u9700\u8981\u70B9\u51FB\u4E24\u6B21\u7684\u95EE\u9898\uFF08\u6240\u6709\u4E24\u6B21\u90FD\u53EF\u4EE5\u901A\u8FC7\u5B9A\u65F6\u5668\u89E3\u51B3\uFF09</p></li></ol><p>\u539F\u56E0\uFF1A\u662F\u56E0\u4E3A\u7B2C\u4E00\u6B21\u6CA1\u6709\u62FF\u5230\u6570\u636E\u5C31\u53BB\u6E32\u67D3\u4E86\uFF0C\u6240\u4EE5\u6570\u636E\u4E0D\u662F\u6700\u65B0\u7684\uFF0C\u5EF6\u65F6\u4E00\u4E0B\u5C31\u89E3\u51B3\u4E86\uFF1B</p><p><img src="https://notecdn.hrhe.cn/images/react-09_%E9%A1%B9%E7%9B%AE%E4%BC%98%E5%8C%96%E3%80%81%E9%A1%B9%E7%9B%AE%E5%9D%91-01.png" alt="image"></p><h3 id="ios\u8F93\u5165\u6846\u5BFC\u81F4\u9875\u9762\u4E0A\u79FB" tabindex="-1">ios\u8F93\u5165\u6846\u5BFC\u81F4\u9875\u9762\u4E0A\u79FB <a class="header-anchor" href="#ios\u8F93\u5165\u6846\u5BFC\u81F4\u9875\u9762\u4E0A\u79FB" aria-hidden="true">#</a></h3><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u653E\u5230\u751F\u547D\u5468\u671FDidMount\u91CC\u9762</p><div class="language-jsx"><pre><code><span class="token keyword">let</span> timer
<span class="token keyword">const</span> <span class="token function-variable function">inputBlur</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      timer<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">inputFocus</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>e <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u7236\u5143\u7D20<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;focusout&#39;</span><span class="token punctuation">,</span>inputBlur<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
\u7236\u5143\u7D20<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;focusin&#39;</span><span class="token punctuation">,</span> inputFocus<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre></div><ol start="6"><li>\u89E3\u51B3 <code>Can&#39;t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method</code> \u62A5\u7EA2</li></ol><p>\u539F\u56E0\uFF1A\u5728willMount\u4E2D\u6709setState\u7684\u4E8B\u4EF6\uFF0C</p><div class="language-jsx"><pre><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    _isMounted <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_isMounted <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5E38\u53D1\u751F\u573A\u666F\uFF1A</p><ul><li>\u5B9A\u65F6\u5668</li><li>\u7F51\u7EDC\u8BF7\u6C42</li><li>\u4E8B\u4EF6\u76D1\u542C</li></ul><p>\u5728\u7EC4\u4EF6\u9500\u6BC1\u524D\u90FD\u5E94\u5F97\u5230\u76F8\u5E94\u7684\u5904\u7406</p><p>\u4F8B\u5B50\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u5B9A\u65F6\u5668\u89E6\u53D1</p><div class="language-jsx"><pre><code><span class="token keyword">const</span> MyApi <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">unSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="7"><li>\u89E3\u51B3\u94FE\u63A5\u51FA\u73B0callback is not defined</li></ol><p>\u5728window\u4E0A\u9762\u6DFB\u52A0\u4E00\u4E2Acallback\u65B9\u6CD5\u5373\u53EF\uFF1B</p><div class="language-jsx"><pre><code>window<span class="token punctuation">.</span><span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001ant-mobile\u7684\u793A\u4F8B" tabindex="-1">\u4E09\u3001ant mobile\u7684\u793A\u4F8B <a class="header-anchor" href="#\u4E09\u3001ant-mobile\u7684\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4E0B\u62C9\u5237\u65B0</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>PullToRefresh<span class="token punctuation">,</span> ListView<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
        <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListView<span class="token punctuation">.</span>DataSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token function-variable function">rowHasChanged</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">row1<span class="token punctuation">,</span> row2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> row1 <span class="token operator">!==</span> row2
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pageNo <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F53\u524D\u9875\u6570 \u653Ethis\u5BF9\u8C61\u4E0D\u653Estate\u91CC\u9762\uFF0C\u53EF\u4EE5\u8FDB\u884C\u76F4\u63A5\u4FEE\u6539\u64CD\u4F5C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isMore <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// \u662F\u5426\u66F4\u591A</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            dataSource<span class="token punctuation">,</span>
            <span class="token literal-property property">refreshing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">isLoading</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ListView</span></span>
                    <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dataSource<span class="token punctuation">}</span></span>
                    <span class="token attr-name">onEndReachedThreshold</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span> <span class="token comment">// \u89E6\u53D1\u52A0\u8F7D\u51FD\u6570</span>
                    <span class="token attr-name">renderFooter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;ReactNode\u8282\u70B9&#39;</span><span class="token punctuation">}</span></span> <span class="token comment">// \u6E32\u67D3\u5E95\u90E8\uFF0C\u53EF\u4EE5\u6839\u636E\u5224\u65AD\u6765\u6E32\u67D3\u5237\u65B0\u65F6\u663E\u793A\u7684\u5185\u5BB9</span>
                    <span class="token attr-name">renderRow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">rowData</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">rowData.title</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token comment">// \u6BCF\u884C\u5C55\u793A\u7684\u8282\u70B9</span>
                    <span class="token attr-name">pullToRefresh</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PullToRefresh</span></span><span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span> <span class="token comment">// \u4E0B\u62C9\u7EC4\u4EF6</span>
                    <span class="token attr-name">onEndReached</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onEndReached<span class="token punctuation">}</span></span> <span class="token comment">// \u52A0\u8F7D\u65F6\u7684\u7EC4\u4EF6, \u5F53return\u5219\u8BF7\u6C42\u5B8C\u6BD5\u7ED3\u675F</span>
                    <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token comment">// \u6BCF\u6B21\u4E8B\u4EF6\u51FD\u6570\u6E32\u67D3\u7684\u884C\u6570</span>

                <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ListView</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,53),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
