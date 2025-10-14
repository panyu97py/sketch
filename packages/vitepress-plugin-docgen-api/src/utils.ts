
/**
 * 数组转 Markdown 表格行
 * @param arr
 */
export const arrayToMdRow = (arr: string[]) => `| ${arr.join(' | ')} |`

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
