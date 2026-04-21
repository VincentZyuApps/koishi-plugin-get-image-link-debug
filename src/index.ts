import { Context, Schema, h } from 'koishi'

export const name = 'get-image-link-debug'

export interface Config {
  command_of_get_link: boolean
  enableQuote: boolean
  codeBlock: boolean
}

export const Config: Schema<Config> = Schema.object({
  command_of_get_link: Schema.boolean().default(false).description('🔧 是否开启 `获取链接` 的调试指令'),
  enableQuote: Schema.boolean().default(true).description('💬 是否启用引用回复'),
  codeBlock: Schema.boolean().default(false).description('📦 wget 或者 curl 命令是否使用代码块包裹'),
})

export function apply(ctx: Context, config: Config) {
  const logger = ctx.logger

  const send = async (session: any, content: string | string[]) => {
    const prefix = config.enableQuote ? h.quote(session.messageId) : ''
    const text = Array.isArray(content) ? content.join('\n') : content
    await session.send(prefix + text)
  }

  const extractUrl = (content: string) => {
    const urls = h.select(content, 'img').map(item => item.attrs.src)
    if (urls?.length > 0) {
      return urls
    }
    const mfaceUrls = h.select(content, 'mface').map(item => item.attrs.url)
    return mfaceUrls?.length > 0 ? mfaceUrls : null
  }

  if (config.command_of_get_link) {
    ctx.command('get-link [图片]')
      .alias('gl')
      .option('-w --wget <filename>', '输出 wget 下载命令')
      .option('-c --curl <filename>', '输出 curl 下载命令')
      .action(async ({ session, options }, 图片) => {
        const wgetFile = (options as any).wget as string | undefined
        const curlFile = (options as any).curl as string | undefined
        const quoteMessage = session.quote?.content
        let urlSelect

        if (quoteMessage) {
          urlSelect = extractUrl(quoteMessage)
          logger.info('触发回复的目标消息内容： ', quoteMessage)
          if (!urlSelect) {
            await send(session, '📛 请回复带有图片的消息。')
            return
          } else {
            if (wgetFile) {
              const wgetCmd = `wget -O "${wgetFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${wgetCmd}\n\`\`\`` : wgetCmd
              await send(session, output)
            } else if (curlFile) {
              const curlCmd = `curl -o "${curlFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${curlCmd}\n\`\`\`` : curlCmd
              await send(session, output)
            } else {
              await send(session, urlSelect)
            }
            return
          }
        } else if (图片) {
          urlSelect = extractUrl(图片)
          logger.info('用户直接输入的图片内容为： ', urlSelect)
          if (!urlSelect) {
            await send(session, '📛 请回复带有图片的消息。')
            return
          } else {
            if (wgetFile) {
              const wgetCmd = `wget -O "${wgetFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${wgetCmd}\n\`\`\`` : wgetCmd
              await send(session, output)
            } else if (curlFile) {
              const curlCmd = `curl -o "${curlFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${curlCmd}\n\`\`\`` : curlCmd
              await send(session, output)
            } else {
              await send(session, urlSelect)
            }
            return
          }
        } else {
          await send(session, '🖼️ 请发送图片：')
          const image = await session.prompt(30000)
          urlSelect = extractUrl(image)
          logger.info('用户输入： ', image)
          if (!urlSelect) {
            await send(session, '❌ 输入的图片无效。')
            return
          } else {
            if (wgetFile) {
              const wgetCmd = `wget -O "${wgetFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${wgetCmd}\n\`\`\`` : wgetCmd
              await send(session, output)
            } else if (curlFile) {
              const curlCmd = `curl -o "${curlFile}" "${urlSelect[0]}"`
              const output = config.codeBlock ? `\`\`\`\n${curlCmd}\n\`\`\`` : curlCmd
              await send(session, output)
            } else {
              await send(session, urlSelect)
            }
            return
          }
        }
      })
  }
}
