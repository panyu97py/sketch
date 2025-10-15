import { TableColumnConfig, TableRowData } from '@/types'
import { get } from 'lodash-es'

/**
 * 数组转 Markdown 表格行
 * @param arr
 */
export const arrayToMdRow = (arr: string[]) => `| ${arr.join(' | ')} |`

/**
 * 配置转换为 Markdown 表格头
 * @param config
 */
export const tableConfigToHeader = (config:TableColumnConfig[]) => {
  const headers = arrayToMdRow(config.map(item => item.label))
  const separator = arrayToMdRow(config.map(() => '------'))
  return [headers, separator]
}

/**
 * 解析别名
 * @param filePath
 * @param alias
 */
export const resolveAlias = (filePath: string, alias?: Record<string, string>) => {
  if (!alias) return filePath
  const regex = new RegExp(`^(${Object.keys(alias).join('|')})/`)
  const match = filePath.match(regex)
  if (!match) return filePath
  const key = match[1]
  return filePath.replace(key, alias[key])
}

/**
 * 数据转换为 markdown 表格
 * @param data
 * @param config
 */
export const arrayToMdTable = (data:TableRowData[] = [], config:TableColumnConfig[] = []) => {
  const tableHeader = tableConfigToHeader(config)
  const dataRows = data.map(dataItem => {
    const tempArr = config.map(configItem => {
      const { key, value } = configItem
      return String(value?.(dataItem) || get(dataItem, key) || '')
    })
    return arrayToMdRow(tempArr)
  })
  return [...tableHeader, ...dataRows].join('\n')
}
