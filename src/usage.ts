export const usage = `
<h2>🖼️ 获取图片链接调试工具</h2>
<p>
  <a href="https://www.npmjs.com/package/koishi-plugin-get-image-link-debug" target="_blank"><img src="https://img.shields.io/npm/v/koishi-plugin-get-image-link-debug?style=flat-square&amp;logo=npm" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/koishi-plugin-get-image-link-debug" target="_blank"><img src="https://img.shields.io/npm/dm/koishi-plugin-get-image-link-debug?style=flat-square&amp;logo=npm" alt="npm downloads"></a>
  <br>
  <a href="https://github.com/VincentZyuApps/koishi-plugin-get-image-link-debug" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub"></a>
  <a href="https://gitee.com/vincent-zyu/koishi-plugin-get-image-link-debug" target="_blank"><img src="https://img.shields.io/badge/Gitee-C71D23?style=for-the-badge&amp;logo=gitee&amp;logoColor=white" alt="Gitee"></a>
  <br>
  <a href="https://forum.koishi.xyz/t/topic/xxxxx" target="_blank"><img src="https://img.shields.io/badge/Koishi%20Forum-xxxxx-5546A3?style=for-the-badge&amp;logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff3%2FKoishi.js_Logo.png&amp;logoColor=white" alt="Koishi Forum"></a>
  <br>
  <a href="https://qm.qq.com/q/ZN7fxZ3qCq" target="_blank"><img src="https://img.shields.io/badge/QQ群-1085190201-12B7F5?style=flat-square&amp;logo=qq&amp;logoColor=white" alt="QQ群"></a>
</p>

<h2>💬 交流反馈</h2>
<p>🐛 Bug 反馈 / 💡 建议 / 👨‍💻 插件开发交流，欢迎加群：</p>
<p><del>💬 插件使用问题 / 🐛 Bug反馈 / 👨‍💻 插件开发交流，欢迎加入QQ群：<b>259248174</b>（这个群G了）</del></p>
<p>💬 插件使用问题 / 🐛 Bug反馈 / 👨‍💻 插件开发交流，欢迎加入QQ群：<b>1085190201</b> 🎉</p>
<p>💡 在群里直接艾特我，回复得更快哦~ ✨</p>

<p>🔗 从消息中的图片或 <code>mface</code> 元素提取原始链接，也可以生成 wget、curl 下载命令。</p>

<h3>🚀 使用方法</h3>
<pre><code>get-link [图片]
gl
gl -w image.png
gl --curl image.png</code></pre>
<ul>
  <li>💬 回复一条带图片的消息后发送命令。</li>
  <li>🖼️ 把图片直接附在命令后发送。</li>
  <li>⏳ 只发送命令，再在 30 秒内按提示发送图片。</li>
</ul>

<h3>⌨️ 命令选项</h3>
<ul>
  <li>📥 <code>-w, --wget &lt;filename&gt;</code>：生成 wget 下载命令。</li>
  <li>📥 <code>-c, --curl &lt;filename&gt;</code>：生成 curl 下载命令。</li>
</ul>

<h3>⚙️ 配置说明</h3>
<ul>
  <li>⌨️ <code>commandName</code> / <code>commandAlias</code>：修改命令名和别名。</li>
  <li>🔧 <code>enableRegisterCommand</code>：是否注册命令。</li>
  <li>💬 <code>enableQuote</code>：回复结果时是否引用原消息。</li>
  <li>📦 <code>enableCodeBlock</code>：是否用代码块包裹下载命令。</li>
</ul>

<p>
  <b>⚠️ 注意：</b><br>
  🧾 wget 和 curl 选项只生成命令行指令，不会由机器人执行下载。<br>
  🖼️ 消息中有多张图片时，普通模式会输出全部链接，下载命令使用第一张图片。<br>
  ⏳ 平台提供的临时图片链接可能会过期，请及时使用。
</p>
<h3>🧰 wget 与 curl 安装说明</h3>
<p><a href="https://github.com/VincentZyuApps/koishi-plugin-get-image-link-debug#wget-curl-installation" target="_blank">📖 前往 GitHub README 查看安装说明</a><br>
<a href="https://gitee.com/vincent-zyu/koishi-plugin-get-image-link-debug#wget-curl-installation" target="_blank">📖 前往 Gitee README 查看安装说明</a></p>
`
