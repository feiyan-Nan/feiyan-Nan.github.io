import{_ as a,c as e,o as t,d as s}from"./app.7277c524.js";const _='{"title":"\u5C0F\u7A0B\u5E8F-04  API","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u8DEF\u7531\u8DF3\u8F6C","slug":"\u4E00\u3001\u8DEF\u7531\u8DF3\u8F6C"},{"level":2,"title":"\u4E8C\u3001\u754C\u9762","slug":"\u4E8C\u3001\u754C\u9762"},{"level":2,"title":"\u4E09\u3001\u6570\u636E\u7F13\u5B58","slug":"\u4E09\u3001\u6570\u636E\u7F13\u5B58"},{"level":2,"title":"\u56DB\u3001\u8BF7\u6C42\u7F51\u7EDC","slug":"\u56DB\u3001\u8BF7\u6C42\u7F51\u7EDC"},{"level":2,"title":"\u4E94\u3001\u5FAE\u4FE1\u5206\u4EAB","slug":"\u4E94\u3001\u5FAE\u4FE1\u5206\u4EAB"}],"relativePath":"src/frontend/mini-programe/\u5C0F\u7A0B\u5E8F-04  API.md","lastUpdated":1649840977594}',n={},l=s(`<h1 id="\u5C0F\u7A0B\u5E8F-04-api" tabindex="-1">\u5C0F\u7A0B\u5E8F-04 API <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-04-api" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u8DEF\u7531\u8DF3\u8F6C" tabindex="-1">\u4E00\u3001\u8DEF\u7531\u8DF3\u8F6C <a class="header-anchor" href="#\u4E00\u3001\u8DEF\u7531\u8DF3\u8F6C" aria-hidden="true">#</a></h2><ol><li>wx.redirectTo(object)\uFF1A\u91CD\u5B9A\u5411\uFF0C\u5BF9tabBar\u4E0D\u7BA1\u7528\uFF1B</li><li>wx.navigateTo() \u6253\u5F00\u65B0\u9875\u9762\uFF0C\u4FDD\u7559\u5F53\u524D\u9875\u9762\uFF08\u6709\u8FD4\u56DE\u6309\u94AE\uFF09\uFF0C\u5BF9tabBar\u4E0D\u7BA1\u7528\uFF1B</li><li>wx.navigateBack()\uFF1B\u8FD4\u56DE\uFF1B\u4E0D\u9700\u8981\u5199\u53C2\u6570\uFF1B</li><li>wx.switchTab()\uFF1Btab\u5207\u6362\uFF0C\u53EA\u80FD\u5207\u6362tabBar\u9875\u9762\uFF1B</li><li>wx.reLaunch() \u5173\u95ED\u6240\u6709\u9875\u9762\uFF0C\u91CD\u5B9A\u5411\uFF0C\u53EF\u4EE5\u6253\u5F00\u4EFB\u610F\u9875\u9762</li></ol><p>\u5C5E\u6027\uFF1Aurl \uFF0C\u8DEF\u5F84\u586B\u5199pages\u4E0B\u7684\u7EC4\u4EF6\uFF1B\u8BB0\u5F97\u5E26\u4E0A/\uFF1B\u5982\uFF1A/pages/info/info\uFF1B</p><p>events\uFF0C\u9875\u9762\u901A\u8FC7\u63A5\u53E3\uFF0C\u5F53\u6570\u636E\u8FC7\u591A\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\uFF1B</p><p>\u67E5\u770B\u5B98\u7F51\u5730\u5740\uFF1A<a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html" target="_blank" rel="noopener noreferrer">https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html</a></p><p>getCurrentPages() \u83B7\u53D6\u5F53\u524D\u9875\u9762\u8DEF\u7531\uFF1B</p><p>\u6CE8\u610F\uFF1A\u8C03\u7528\u9875\u9762\u8DEF\u7531\u5E26\u7684\u53C2\u6570\u53EF\u4EE5\u5728onLoad\u4E2D\u83B7\u53D6\uFF1B</p><h2 id="\u4E8C\u3001\u754C\u9762" tabindex="-1">\u4E8C\u3001\u754C\u9762 <a class="header-anchor" href="#\u4E8C\u3001\u754C\u9762" aria-hidden="true">#</a></h2><ol><li>wx.showToast({}) \u663E\u793A\u6D88\u606F\u63D0\u793A\u6846\uFF0C\u4F1A\u81EA\u52A8\u6D88\u5931</li></ol><ul><li>title\uFF1A \u63D0\u793A\u7684\u5185\u5BB9</li><li>icon\uFF1A \u56FE\u6807</li><li>image\uFF1A \u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u672C\u5730\u8DEF\u5F84</li><li>duration\uFF1A \u63D0\u793A\u7684\u5EF6\u8FDF\u65F6\u95F4</li></ul><ol start="2"><li><p>showLoading({}) \u663E\u793Aloading\u63D0\u793A\u6846\uFF0C\u9700\u8C03\u7528wx.hideLoading()\u624D\u80FD\u5173\u95ED\uFF1B</p></li><li><p>wx.showsModal({}) \u663E\u793A\u6A21\u6001\u5BF9\u8BDD\u6846 \u6709\u786E\u5B9A\u53D6\u6D88\u6309\u94AE</p></li></ol><ul><li>title\uFF1A \u63D0\u793A\u6807\u9898</li><li>content\uFF1A \u63D0\u793A\u5185\u5BB9</li><li>success\uFF1A \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03</li></ul><ol start="4"><li>wx.showActionSheet \u663E\u793A\u64CD\u4F5C\u83DC\u5355</li></ol><ul><li>itemList\uFF1A \u6570\u7EC4\u6216\u5B57\u7B26\u4E32\uFF0C\u6309\u94AE\u7684\u6587\u5B57\u6570\u7EC4\uFF0C\u6700\u591A6\u4E2A\uFF1B</li><li>itemColor\uFF1A \u6587\u5B57\u989C\u8272</li><li>success\uFF1A\u6210\u529F\u7684\u56DE\u8C03\uFF1Bres\u8FD4\u56DE\u7528\u6237\u70B9\u51FB\u7684\u6309\u94AE\u5E8F\u53F7\uFF1B</li><li>fail\uFF1A \u7528\u6237\u70B9\u51FB\u53D6\u6D88\u89E6\u53D1\uFF1B</li></ul><h2 id="\u4E09\u3001\u6570\u636E\u7F13\u5B58" tabindex="-1">\u4E09\u3001\u6570\u636E\u7F13\u5B58 <a class="header-anchor" href="#\u4E09\u3001\u6570\u636E\u7F13\u5B58" aria-hidden="true">#</a></h2><ol><li>\u8BBE\u7F6E</li></ol><p>wx.setStorage({}) \u8BBE\u7F6E\u7F13\u5B58 \u4EE5key\uFF0Cdata\u5B58\u53D6\uFF1Bsuccess\u4E3A\u6210\u529F\u7684\u56DE\u8C03\uFF1B</p><p>wx.setStoargeSync(key,value) \u540C\u6B65\u8BBE\u7F6E \u5982\u679C\u9519\u8BEF\u4F7F\u7528try,catch\uFF1B</p><ol start="2"><li>\u83B7\u53D6</li></ol><p>wx.getStorage({}) \u83B7\u53D6\u7F13\u5B58 \u6CA1\u6709\u8BBE\u7F6E\u597D\u4E5F\u4F1A\u8C03\u7528\uFF0C\u8C03\u7528key\u83B7\u53D6</p><p>wx.getStoargeSync() \u540C\u6B65\u83B7\u53D6</p><ol start="3"><li>\u79FB\u9664</li></ol><p>wx.removeStorage({}) \u4F20\u5165key\uFF0Csuccess\u4E3A\u6210\u529F\u56DE\u8C03\uFF1B</p><p>wx.removeStorageSync(key) \u4ECE\u672C\u5730\u7F13\u5B58\u79FB\u9664\u6307\u5B9Akey</p><ol start="4"><li>\u6E05\u9664</li></ol><p>wx.clearStorageSync() \u540C\u6B65\u6E05\u9664\u7F13\u5B58</p><p>wx.clearStorage();</p><h2 id="\u56DB\u3001\u8BF7\u6C42\u7F51\u7EDC" tabindex="-1">\u56DB\u3001\u8BF7\u6C42\u7F51\u7EDC <a class="header-anchor" href="#\u56DB\u3001\u8BF7\u6C42\u7F51\u7EDC" aria-hidden="true">#</a></h2><ol><li>wx.request() \u5FAE\u4FE1\u8BF7\u6C42\u9700\u8981\u5F00\u542F\u8BE6\u60C5\u91CC\u9762\u7684\u4E0D\u6821\u9A8C\u5F00\u542F\uFF0C\u4E0A\u7EBF\u9700\u8981\u5728\u540E\u53F0\u5F00\u53D1\u8BBE\u7F6E\u6DFB\u52A0\u5408\u6CD5\u57DF\u540D\uFF0C\u7EBF\u4E0A\u8BF7\u6C42\u5730\u5740\u5FC5\u987B\u662Fhttps\uFF1B</li></ol><ul><li>url\uFF1A \u8BF7\u6C42\u5730\u5740\uFF1B</li><li>data\uFF1A \u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C06\u9700\u8981\u4F20\u5165\u7684\u53C2\u6570\u5199\u5165\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728url\u540E\u9762\u586B\u5199</li><li>success\uFF1A \u8BF7\u6C42\u6210\u529F\u56DE\u8C03\uFF0C\u6CE8\u610Fthis\u6307\u5411\uFF0C\u53EF\u4EE5\u5728\u5916\u9762\u4FDD\u7559\u4E00\u4E0B\uFF1B</li><li>fail\uFF1A \u8BF7\u6C42\u5931\u8D25\u53C2\u6570</li><li>method\uFF1A get/post</li></ul><p>\u6280\u5DE7\uFF1A\u51CF\u5C11\u8BF7\u6C42\u7684\u6B21\u6570</p><p>\uFF081\uFF09\u5C06\u8BF7\u6C42\u7684\u6570\u636E\u5B58\u653E\u5728Storage\u91CC\u9762\uFF0C\u505A\u5224\u65AD\uFF0C\u5C06Storage\u8D4B\u4E3A\u4E00\u4E2A\u7A7A\uFF0C\u4E4B\u540E\u5224\u65ADstorage\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u4E3A\u7A7A\u5219\u83B7\u53D6\u6570\u636E\uFF0C\u5E76\u5B58\u5165\u6570\u636E\uFF0C\u5982\u679C\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u4E0D\u83B7\u53D6\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">let</span> arr <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09\u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u653Ejs\u6587\u4EF6\uFF0C\u5C06json\u6570\u636E\u590D\u5236\u5230\u4E00\u4E2A\u53D8\u91CF\u4E0A\uFF0C\u5C06\u8FD9\u4E2A\u53D8\u91CF\u5BFC\u51FA\uFF1B\u4E4B\u540E\u5728\u9700\u8981\u7684\u76EE\u5F55\u4E0B\u5F15\u5165\u8BE5\u6587\u4EF6\uFF1B\u5F15\u5165\u5FC5\u987B\u586B\u5199\u76F8\u5BF9\u8DEF\u5F84\uFF1B</p><h2 id="\u4E94\u3001\u5FAE\u4FE1\u5206\u4EAB" tabindex="-1">\u4E94\u3001\u5FAE\u4FE1\u5206\u4EAB <a class="header-anchor" href="#\u4E94\u3001\u5FAE\u4FE1\u5206\u4EAB" aria-hidden="true">#</a></h2><ol><li>\u94FE\u63A5\uFF1A<a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noopener noreferrer">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html</a></li></ol>`,37),i=[l];function o(p,r,c,u,d,h){return t(),e("div",null,i)}var k=a(n,[["render",o]]);export{_ as __pageData,k as default};
