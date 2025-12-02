import { TableColumnConfig, TableRowData } from '@/types'
import { get, isNil } from 'lodash-es'
import { u as build } from 'unist-builder'
import { Token } from 'markdown-it'

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
  const tableProps = { align: config.map(item => item.align || 'center') }
  const tableHeader = build('tableRow', config.map(item => {
    return build('tableCell', [build('text', item.label)])
  }))
  const tableDataRows = data.map((rowDataItem:TableRowData) => {
    const rowChildren = config.map(configItem => {
      const { key, value } = configItem
      const tempVal = value ? value(rowDataItem) : get(rowDataItem, key)
      const finalValue = String(isNil(tempVal) ? '-': tempVal)
      return build('tableCell', [build('text', finalValue)])
    })
    return build('tableRow', rowChildren)
  })
  return build('table', tableProps, [tableHeader, ...tableDataRows])
}

export const parseContainerAttr = (token:Token) => {
  const info = token.info.trim()
  const match = info.match(/^api\s*\{([^}]+)\}/)
  if (!match) return
  const [attrString] = match
  return Array.from(attrString.matchAll(/(\w+)="([^"]*)"/g)).map<[string, string]>(([, key, value]) => [key, value])
}
