import type { Plugin as VitePlugin } from 'vite'
import { Options } from './types'
import { parse } from '@/parser'
import { compile } from '@/compiler'

export const ApiDocGenPlugin = (opt:Options): VitePlugin => {
  return {
    name: 'vite-plugin-docgen-api',
    enforce: 'pre',

    async transform (code:string, id:string) {
      if (!id.endsWith('.md')) return
      const parserResult = await parse(code, opt)
      return compile(code, parserResult)
    }
  }
}
