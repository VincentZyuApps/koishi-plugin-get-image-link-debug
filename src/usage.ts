export const usage = `
<h2>获取图片链接调试工具</h2>
<p>从消息中的图片或 <code>mface</code> 元素提取原始链接，也可以生成 wget、curl 下载命令。</p>

<h3>使用方法</h3>
<pre><code>get-link [图片]
gl
gl -w image.png
gl --curl image.png</code></pre>
<ul>
  <li>回复一条带图片的消息后发送命令。</li>
  <li>把图片直接附在命令后发送。</li>
  <li>只发送命令，再在 30 秒内按提示发送图片。</li>
</ul>

<h3>命令选项</h3>
<ul>
  <li><code>-w, --wget &lt;filename&gt;</code>：生成 wget 下载命令。</li>
  <li><code>-c, --curl &lt;filename&gt;</code>：生成 curl 下载命令。</li>
</ul>

<h3>配置说明</h3>
<ul>
  <li><code>commandName</code> / <code>commandAlias</code>：修改命令名和别名。</li>
  <li><code>enableRegisterCommand</code>：是否注册命令。</li>
  <li><code>enableQuote</code>：回复结果时是否引用原消息。</li>
  <li><code>enableCodeBlock</code>：是否用代码块包裹下载命令。</li>
</ul>

<p><b>注意：</b>下载选项只生成命令，不会由机器人执行下载；临时图片链接可能会过期。</p>
`
