import { arrayToMdTable, parseContainerAttr, resolveAlias } from '@/utils'
import reactDocGenTypescript from 'react-docgen-typescript'
import { parse as vueDocGenParse } from 'vue-docgen-api'
import { Options, ParserConfig, TableRowData } from './types'
import MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
import type { Token } from 'markdown-it'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { u as build } from 'unist-builder'
import { defaultColumns } from '@/constants'
import type { PropItem } from 'react-docgen-typescript'

/**
 * 生成react文档
 * @param config
 */
const reactDocGen = (config: ParserConfig) => {
  const propFilter = (prop: PropItem) => !prop.description?.includes('@internal')
  const [doc] = reactDocGenTypescript.parse(config.filePath, { propFilter })
  const data = Object.values(doc.props).map<TableRowData>(propItem=>{
    const { name, type, required, defaultValue, description } = propItem
    return { attribute: name, type: type.name, required, defaultValue, description }
  })
  return arrayToMdTable(data, config.columns)
}

/**
 * 生成vue文档
 * @param config
 */
const vueDocGen = async (config: ParserConfig) => {
  const doc = await vueDocGenParse(config.filePath, { jsx: true })
  const propsData = (doc?.props||[]).map(propItem =>{
    const { name, type, description, required, defaultValue } = propItem
    return { attribute: name, type: type?.name, required: Boolean(required), defaultValue, description }
  })
  const eventsData = (doc?.events||[]).map(eventItem =>{
    const { name, description } = eventItem
    return { attribute: name, description }
  })
  return arrayToMdTable([...propsData,...eventsData], config.columns)
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
