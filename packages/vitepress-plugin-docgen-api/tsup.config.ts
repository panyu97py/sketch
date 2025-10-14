import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'], // 插件入口
  format: ['esm'], // 输出 ESM
  dts: true, // 生成类型声明
  outDir: 'dist',
  clean: true, // 编译前清空 dist
  sourcemap: true,
  splitting: false, // 不拆分模块
  minify: false, // 不压缩
  target: 'es2020', // 输出 ES2020
  esbuildOptions (options) {
    // 如果需要可以配置别名，tsup 本身支持 tsconfig paths
    options.resolveExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
})
