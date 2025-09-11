import { config } from '@vue/test-utils'

// 使用 VTU 的 warnHandler 精准过滤特定注入相关告警
const patterns = [
  'injection "parent" not found',
  'injection "registerChild" not found',
  'injection "unregisterChild" not found'
]

config.global.config = config.global.config || {}
config.global.config.warnHandler = (msg: string, _instance, trace) => {
  if (patterns.some(p => msg.includes(p))) return
  // 默认打印其它告警，保留调试价值
  // eslint-disable-next-line no-console
  console.warn(msg + (trace ? `\n${trace}` : ''))
}
