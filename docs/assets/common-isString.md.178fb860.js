import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.5018bd8e.js";const d=JSON.parse('{"title":"isString","description":"","frontmatter":{},"headers":[],"relativePath":"common-isString.md","filePath":"common-isString.md"}'),l={name:"common-isString.md"},p=o(`<h1 id="isstring" tabindex="-1">isString <a class="header-anchor" href="#isstring" aria-label="Permalink to &quot;isString&quot;">​</a></h1><blockquote><p>Available since version (可用版本) 0.0.13</p></blockquote><blockquote><p><a href="https://github.com/Yakima-Teng/utils-daily/blob/master/src/common/isString.ts" target="_blank" rel="noreferrer">Source code (源码)</a></p></blockquote><p>是否是字符串</p><h2 id="_1-params-入参" tabindex="-1">1. Params (入参) <a class="header-anchor" href="#_1-params-入参" aria-label="Permalink to &quot;1. Params (入参)&quot;">​</a></h2><table><thead><tr><th>Field (字段)</th><th>Type (类型)</th><th>Optional (可选)</th><th>Note (说明)</th></tr></thead><tbody><tr><td>val</td><td><code>unknown</code></td><td>必传</td><td></td></tr></tbody></table><h2 id="_2-return-返回" tabindex="-1">2. Return (返回) <a class="header-anchor" href="#_2-return-返回" aria-label="Permalink to &quot;2. Return (返回)&quot;">​</a></h2><table><thead><tr><th>Type (类型)</th><th>Note (说明)</th></tr></thead><tbody><tr><td><code>boolean</code></td><td></td></tr></tbody></table><h2 id="_3-test-cases-测试用例" tabindex="-1">3. Test cases (测试用例) <a class="header-anchor" href="#_3-test-cases-测试用例" aria-label="Permalink to &quot;3. Test cases (测试用例)&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">describe</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">expect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">test</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jest/globals</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> isString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../src/common/isString</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">测试类型判断方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">判断是否为字符串</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">isString</span><span style="color:#F07178;">([]))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div>`,10),t=[p];function e(r,c,F,y,i,D){return a(),n("div",null,t)}const h=s(l,[["render",e]]);export{d as __pageData,h as default};
