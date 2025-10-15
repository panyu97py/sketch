import { visit } from 'unist-util-visit'
import type { ContainerDirective } from 'mdast-util-directive'
import { arrayToMdTable, resolveAlias } from '@/utils'
import reactDocGenTypescript from 'react-docgen-typescript'
import { parse as vueDocGenParse } from 'vue-docgen-api'
import { Plugin as UnifiedPlugin, unified } from 'unified'
import { Options, TableColumnConfig } from './types'
import remarkStringify from 'remark-stringify'
import { u as build } from 'unist-builder'
import remarkGfm from 'remark-gfm'

interface ParserConfig {
  type: string;
  src: string;
  filePath: string
  columns: TableColumnConfig[]
}

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

const defaultColumns: TableColumnConfig[] = [
  { label: '属性', key: 'attribute' },
  { label: '类型', key: 'type' },
  { label: '默认值', key: 'default' },
  { label: '是否必填', key: 'required' },
  { label: '描述', key: 'description' }
]

/**
 * 生成 api 文档
 * @param opt
 */
export const remarkGenApiDoc: UnifiedPlugin<[Options]> = (opt) => {
  const { directiveName = 'api', alias, columns = defaultColumns } = opt || {}

  return async (tree) => {
    const configs: ParserConfig[] = []

    visit(tree, 'containerDirective', (node: ContainerDirective) => {
      const { src, type } = node.attributes || {}
      if (node.name !== directiveName || !src || !type) return
      const filePath = resolveAlias(src, alias)
      configs.push({ src, filePath, type, columns })
    })

    const docGenResult = await Promise.all(configs.map(async (config) => {
      const docAst = await (() => {
        if (config.type === 'react') return reactDocGen(config)
        if (config.type === 'vue') return vueDocGen(config)
        return null
      })()
      if (!docAst) return { ...config, docAst, docStr: null }
      const docStr = unified()
        .use(remarkGfm)
        .use(remarkStringify).stringify(build('root', [docAst]))
      return { ...config, docAst, docStr }
    }))

    // TODO 保存 docGenResult 至虚拟模块, 由 markdown-it 读取替换
    console.log({ docGenResult })
  }
}
