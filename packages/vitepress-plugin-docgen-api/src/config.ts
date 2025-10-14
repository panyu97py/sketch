import { arrayToMdRow } from '@/utils'

export const docConfig = [
  { label: '属性' },
  { label: '类型' },
  { label: '必填' },
  { label: '默认值' },
  { label: '描述' }
]

export const headers = docConfig.map(item => item.label)

export const separator = docConfig.map(() => '------')

export const tableHeader = [arrayToMdRow(headers), arrayToMdRow(separator)].join('\n')
