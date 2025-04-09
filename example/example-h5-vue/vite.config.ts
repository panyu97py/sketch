import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  define:{
    'process.env.SKETCH_PLATFORM': '"WEB"', // 使用小程序端 sketch 实现
    'process.env.YOGA_USE_WASM': 'false' // 不使用 WASM 实现
  },
  optimizeDeps: {
    include: ['@sketchjs/vue'], // 将有问题的依赖添加到优化列表
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
