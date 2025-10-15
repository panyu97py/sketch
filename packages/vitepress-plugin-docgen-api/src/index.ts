import type { Plugin as VitePlugin } from 'vite'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkStringify from 'remark-stringify'
import remarkGfm from 'remark-gfm'
import { remarkGenApiDoc } from '@/parser'
import { Options } from './types'

export const ApiDocGenPlugin = (opt:Options): VitePlugin => {
  return {
    name: 'vite-plugin-docgen-api',
    enforce: 'pre',

    async transform (code:string, id:string) {
      if (!id.endsWith('.md')) return
      const processor = unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(remarkGenApiDoc, opt)
        .use(remarkGfm)
        .use(remarkStringify)
      const file = await processor.process(code)

      return { code: String(file.value), map: null }
    }
  }
}
