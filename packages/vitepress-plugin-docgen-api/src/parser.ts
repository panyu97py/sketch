import { arrayToMdTable, parseContainerAttr, resolveAlias } from '@/utils'
import reactDocGenTypescript from 'react-docgen-typescript'
import { parse as vueDocGenParse } from 'vue-docgen-api'
import { Options, ParserConfig } from './types'
import MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
import type { Token } from 'markdown-it'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { u as build } from 'unist-builder'
import { defaultColumns } from '@/constants'

/**
 * 生成react文档
 * @param config
 */
const reactDocGen = (config: ParserConfig) => {
  const docs = reactDocGenTypescript.parse(config.filePath)
  console.log({ ...config, docs })
  return arrayToMdTable([], config.columns)
}

/**
 * 生成vue文档
 * @param config
 */
const vueDocGen = async (config: ParserConfig) => {
  const docs = await vueDocGenParse(config.filePath, { jsx: true })
  console.log({ ...config, docs })
  return arrayToMdTable([], config.columns)
}

/**
 * 解析 markdown
 * @param code
 * @param opt
 */
export const parse = (code:string, opt: Options) => {
  const { directiveName = 'api', alias, columns = defaultColumns } = opt
  const md = new MarkdownIt()
  const parserConfigs: ParserConfig[] = []

  md.use(container, directiveName, {
    render (tokens:Record<string, Token>, idx:string) {
      const token = tokens[idx]
      // 非开标签返回
      if (token.nesting !== 1) return

      // 解析 token 属性
      const attrs = parseContainerAttr(token)
      attrs?.forEach((attr) => token.attrPush(attr))

      // 保存配置
      const { map } = token
      const type = token.attrGet('type')
      const src = token.attrGet('src')
      if (!src || !type || !map) return
      const filePath = resolveAlias(src, alias)
      parserConfigs.push({ type, src, filePath, columns, map })
    }
  })

  md.render(code)

  return Promise.all(parserConfigs.map(async (config) => {
    const docAst = await (() => {
      if (config.type === 'react') return reactDocGen(config)
      if (config.type === 'vue') return vueDocGen(config)
      return null
    })()
    const docStr = unified()
      .use(remarkGfm)
      .use(remarkStringify).stringify(build('root', docAst ? [docAst] : []))
    return { ...config, docStr }
  }))
}
