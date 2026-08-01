import { Schema } from 'koishi'

export interface Config {
  commandName: string
  commandAlias: string
  enableRegisterCommand: boolean
  enableQuote: boolean
  enableCodeBlock: boolean
}

export const Config: Schema<Config> = Schema.object({
  commandName: Schema.string().default('get-link').description('⌨️ 获取图片链接的指令名称'),
  commandAlias: Schema.string().default('gl').description('⌨️ 获取图片链接的指令别名'),
  enableRegisterCommand: Schema.boolean().default(true).description('🔧 是否开启 `获取链接` 的调试指令'),
  enableQuote: Schema.boolean().default(true).description('💬 是否启用引用回复'),
  enableCodeBlock: Schema.boolean().default(false).description('📦 wget 或者 curl 命令是否使用代码块包裹'),
})
