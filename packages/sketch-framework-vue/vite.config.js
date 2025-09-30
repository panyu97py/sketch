import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', '@sketchjs/runtime', '@sketchjs/yoga-layout'],
      output: {
        preserveModules: true, // 关键点：保留模块结构
        preserveModulesRoot: 'src', // 从 src/ 开始保留目录结构
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: 'src',
      include: ['src']
    })
  ]
})
