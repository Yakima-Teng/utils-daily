import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.5018bd8e.js";const m=JSON.parse('{"title":"multiply","description":"","frontmatter":{},"headers":[],"relativePath":"number-multiply.md","filePath":"number-multiply.md"}'),o={name:"number-multiply.md"},p=n(`<h1 id="multiply" tabindex="-1">multiply <a class="header-anchor" href="#multiply" aria-label="Permalink to &quot;multiply&quot;">​</a></h1><blockquote><p>Available since version (可用版本) 0.0.13</p></blockquote><blockquote><p><a href="https://github.com/Yakima-Teng/utils-daily/blob/master/src/number/multiply.ts" target="_blank" rel="noreferrer">Source code (源码)</a></p></blockquote><p>Calculate sum of members in an Array</p><h2 id="_1-params-入参" tabindex="-1">1. Params (入参) <a class="header-anchor" href="#_1-params-入参" aria-label="Permalink to &quot;1. Params (入参)&quot;">​</a></h2><table><thead><tr><th>Field (字段)</th><th>Type (类型)</th><th>Optional (可选)</th><th>Note (说明)</th></tr></thead><tbody><tr><td>arr</td><td><code>Array&lt;number&gt;</code></td><td>必传</td><td>an array of numbers</td></tr><tr><td>numOfDecimalPlaces</td><td><code>number</code></td><td>可选</td><td>number of decimal places to leave; determined automatically if not provided</td></tr></tbody></table><h2 id="_2-return-返回" tabindex="-1">2. Return (返回) <a class="header-anchor" href="#_2-return-返回" aria-label="Permalink to &quot;2. Return (返回)&quot;">​</a></h2><table><thead><tr><th>Type (类型)</th><th>Note (说明)</th></tr></thead><tbody><tr><td><code>string</code></td><td>sum of these numbers</td></tr></tbody></table><h2 id="_3-examples-举例" tabindex="-1">3. Examples (举例) <a class="header-anchor" href="#_3-examples-举例" aria-label="Permalink to &quot;3. Examples (举例)&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">multiply</span><span style="color:#BABED8;">(arr)) </span><span style="color:#676E95;font-style:italic;">// &#39;6&#39;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">multiply</span><span style="color:#BABED8;">(arr</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)) </span><span style="color:#676E95;font-style:italic;">// &#39;6.00&#39;</span></span></code></pre></div><h2 id="_4-test-cases-测试用例" tabindex="-1">4. Test cases (测试用例) <a class="header-anchor" href="#_4-test-cases-测试用例" aria-label="Permalink to &quot;4. Test cases (测试用例)&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">describe</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">expect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">test</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jest/globals</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> multiply </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../src/number/multiply</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">进行数字相关操作</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">测试乘法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">multiply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">multiply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6.00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div>`,12),t=[p];function e(r,c,y,F,D,i){return a(),l("div",null,t)}const u=s(o,[["render",e]]);export{m as __pageData,u as default};
