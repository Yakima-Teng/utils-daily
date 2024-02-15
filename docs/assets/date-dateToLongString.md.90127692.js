import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.5018bd8e.js";const h=JSON.parse('{"title":"dateToLongString","description":"","frontmatter":{},"headers":[],"relativePath":"date-dateToLongString.md","filePath":"date-dateToLongString.md"}'),l={name:"date-dateToLongString.md"},t=o(`<h1 id="datetolongstring" tabindex="-1">dateToLongString <a class="header-anchor" href="#datetolongstring" aria-label="Permalink to &quot;dateToLongString&quot;">​</a></h1><blockquote><p>Available since version (可用版本) 0.0.13</p></blockquote><blockquote><p><a href="https://github.com/Yakima-Teng/utils-daily/blob/master/src/date/dateToLongString.ts" target="_blank" rel="noreferrer">Source code (源码)</a></p></blockquote><p>将Date实例对象转换成格式如<code>YYYY-MM-DD hh:mm:ss</code>的长字符串</p><h2 id="_1-params-入参" tabindex="-1">1. Params (入参) <a class="header-anchor" href="#_1-params-入参" aria-label="Permalink to &quot;1. Params (入参)&quot;">​</a></h2><table><thead><tr><th>Field (字段)</th><th>Type (类型)</th><th>Optional (可选)</th><th>Note (说明)</th></tr></thead><tbody><tr><td>date</td><td><code>Date</code></td><td>必传</td><td>date object</td></tr></tbody></table><h2 id="_2-return-返回" tabindex="-1">2. Return (返回) <a class="header-anchor" href="#_2-return-返回" aria-label="Permalink to &quot;2. Return (返回)&quot;">​</a></h2><table><thead><tr><th>Type (类型)</th><th>Note (说明)</th></tr></thead><tbody><tr><td><code>string</code></td><td>string in format like <code>YYYY-MM-DD hh:mm:ss</code></td></tr></tbody></table><h2 id="_3-examples-举例" tabindex="-1">3. Examples (举例) <a class="header-anchor" href="#_3-examples-举例" aria-label="Permalink to &quot;3. Examples (举例)&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">dateToLongString</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">14</span><span style="color:#BABED8;">))) </span><span style="color:#676E95;font-style:italic;">// &#39;2018-02-02 12:13:14&#39;</span></span></code></pre></div><h2 id="_4-test-cases-测试用例" tabindex="-1">4. Test cases (测试用例) <a class="header-anchor" href="#_4-test-cases-测试用例" aria-label="Permalink to &quot;4. Test cases (测试用例)&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">describe</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">expect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">test</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jest/globals</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> dateToLongString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../src/date/dateToLongString</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">describe</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">将Date实例对象转换成格式如\`YYYY-MM-DD hh:mm:ss\`的长字符串</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">将日期对象转成对应的日期文本</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">dateToLongString</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2018</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">13</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">14</span><span style="color:#F07178;">)))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-02-02 12:13:14</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span></code></pre></div>`,12),e=[t];function p(r,c,y,F,D,i){return a(),n("div",null,e)}const B=s(l,[["render",p]]);export{h as __pageData,B as default};
