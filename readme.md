# koishi-plugin-get-image-link-debug

[![npm](https://img.shields.io/npm/v/koishi-plugin-get-image-link-debug?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-get-image-link-debug)
[![npm-download](https://img.shields.io/npm/dm/koishi-plugin-get-image-link-debug?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-get-image-link-debug)

一个简洁的 Koishi 调试插件，用于提取消息中的图片或 `mface` 原始链接，并生成 wget、curl 下载命令。

## 使用方法

默认命令为 `get-link`，别名为 `gl`。可以回复带图片的消息、将图片附在命令后，或只发送命令后在 30 秒内按提示发送图片。

```text
gl                         # 输出图片链接
gl -w image.png            # 生成 wget 下载命令
gl --wget image.png        # wget 的长选项写法
gl -c image.png            # 生成 curl 下载命令
gl --curl image.png        # curl 的长选项写法
```

生成的下载命令示例：

```shell
wget -O "image.png" "https://example.com/image.png"
curl -o "image.png" "https://example.com/image.png"
```

## 配置项

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| `commandName` | `get-link` | 命令名称 |
| `commandAlias` | `gl` | 命令别名 |
| `enableRegisterCommand` | `true` | 是否注册命令 |
| `enableQuote` | `true` | 回复结果时是否引用原消息 |
| `enableCodeBlock` | `false` | 是否用代码块包裹下载命令 |

## 注意事项

- wget 和 curl 选项只生成命令，不会由机器人执行下载。
- 消息中有多张图片时，普通模式会输出全部链接，下载命令使用第一张图片。
- 平台提供的临时图片链接可能会过期，请及时使用。
