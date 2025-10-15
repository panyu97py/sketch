import { visit } from 'unist-util-visit'
import type { ContainerDirective } from 'mdast-util-directive'
import { arrayToMdTable, resolveAlias } from '@/utils'
import reactDocGenTypescript from 'react-docgen-typescript'
import { parse as vueDocGenParse } from 'vue-docgen-api'
import { Plugin as UnifiedPlugin } from 'unified'
import { Options, TableColumnConfig } from './types'

interface ParserConfig {
  type: string;
  src: string;
  filePath: string
  columns:TableColumnConfig[]
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

/**
 * 生成 api 文档
 * @param opt
 */
export const remarkGenApiDoc: UnifiedPlugin<[Options]> = (opt) => {
  return async (tree) => {
    const configs: ParserConfig[] = []

    visit(tree, 'containerDirective', (node: ContainerDirective) => {
      const { src, type } = node.attributes || {}
      if (!src || !type) return
      const filePath = resolveAlias(src, opt?.alias)
      configs.push({ src, filePath, type, columns: opt?.columns || [] })
    })

    const result = await Promise.all(configs.map(async (config) => {
      if (config.type === 'react') return reactDocGen(config)
      if (config.type === 'vue') return vueDocGen(config)
    }))

    console.log({ result })
  }
}
