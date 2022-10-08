import{_ as s,c as a,o as n,a as p}from"./app.5ff2ec29.js";const i=JSON.parse('{"title":"vue","description":"","frontmatter":{},"headers":[],"relativePath":"checklist/vue.md","lastUpdated":1665241983000}'),l={name:"checklist/vue.md"},e=p(`<h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h1><p>vue\u7EC4\u4EF6\u9700\u8981\u663E\u5F0F\u5199\u51FAname\u5C5E\u6027\uFF0C\u6709\u5229\u4E8E\u6D4F\u89C8\u5668\u63D2\u4EF6vue devtool\u7684\u4F7F\u7528</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// bad</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponents</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// good</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponents</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NetworkCard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),o=[e];function t(c,r,D,F,y,A){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
