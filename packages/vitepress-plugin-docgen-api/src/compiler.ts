import { ParserResultItem } from '@/types'

export const compile = (code: string, parseResult: ParserResultItem[]): string => {
  const codeLines = code.split('\n')
  parseResult.sort((a, b) => {
    const [_preStartLine, preEndLine] = a.map
    const [_nextStartLine, nextEndLine] = b.map
    return nextEndLine - preEndLine
  }).forEach(parseResultItem => {
    const { map, docStr = '' } = parseResultItem
    const [startLine, endLine] = map
    codeLines.splice(startLine, endLine - startLine + 1, docStr)
  })
  return codeLines.join('\n')
}
