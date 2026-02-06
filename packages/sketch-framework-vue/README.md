# @sketchjs/vue

Sketch 的 Vue 组件封装，提供与 Vue 组件一致的使用体验。

## 适用场景

- Web/H5 的 Canvas 组件化渲染
- 需要 Vue 生态下的组合式 API 与响应式能力

## 功能特性

- `Sketch.Root/View/Image/Text` 组件化 API
- 支持 `autoRender` 自动渲染
- 与 Composition API 兼容

## 安装

```sh
npm add @sketchjs/vue
```

## 基础用法（Web/H5）

### Vite 配置（可选）

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.SKETCH_PLATFORM': '"WEB"',
    'process.env.YOGA_USE_WASM': 'false'
  },
  optimizeDeps: {
    include: ['@sketchjs/vue']
  }
})
```

### 页面示例

```vue
<template>
  <div class="App" @click="handleToDataURL">
    <canvas class="sketch-canvas" ref="canvasRef"/>
    <Sketch.Root :style="style.root" :sketch="sketch" :autoRender="true">
      <Sketch.View :style="style.view">
        <Sketch.Image :src="logo" :style="style.logo"/>
        <Sketch.Text text="Hello  World!" :style="style.text"/>
      </Sketch.View>
    </Sketch.Root>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { onMounted, ref } from 'vue'
import { StyleSheet, Sketch } from '@sketchjs/vue'

const style = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
    backgroundColor: '#ffffff'
  },
  view: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 262,
    height: 227
  },
  text: {
    width: 500,
    marginTop: 20,
    color: '#282c34',
    fontSize: 50,
    fontWeight: 400,
    lineHeight: 50,
    textAlign: 'center'
  }
})

const sketch = Sketch.useSketch()
const canvasRef = ref<HTMLCanvasElement | null>(null)

const initCanvas = () => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  return sketch.value.init({ canvas, ctx })
}

onMounted(() => initCanvas())

const handleToDataURL = () => {
  const dataUrl = sketch.value.toDataURL('image/png', 1)
  console.log({ dataUrl })
}
</script>

<style scoped>
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.sketch-canvas{
  width: 500px;
  height: 500px;
}
</style>
```

## Taro 小程序使用

### 配置环境变量

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig({
  defineConstants: {
    'process.env.SKETCH_PLATFORM': '"APPLET"',
    'process.env.YOGA_USE_WASM': 'false'
  }
})
```

### 页面示例

```vue
<template>
  <View @tap="handleToDataURL" class="index-view">
    <Canvas id="sketch-canvas" type="2d" class="sketch-canvas" />
    <Sketch.Root :style="style.root" :sketch="sketch" :autoRender="true">
      <Sketch.View :style="style.view">
        <Sketch.Image :src="require('@/assets/logo.svg')" :style="style.logo"/>
        <Sketch.Text text="Hello  World!" :style="style.text"/>
      </Sketch.View>
    </Sketch.Root>
  </View>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { View, Canvas } from '@tarojs/components'
import { StyleSheet, Sketch } from '@sketchjs/vue'
import Taro from '@tarojs/taro'
import './index.less'

const style = StyleSheet.create({
  root: {
    width: 500,
    height: 500,
    backgroundColor: '#fff'
  },
  view: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 262,
    height: 227
  },
  text: {
    width: 500,
    marginTop: 20,
    color: '#282c34',
    fontSize: 50,
    fontWeight: 400,
    lineHeight: 50,
    textAlign: 'center'
  }
})

const sketch = Sketch.useSketch()

const initCanvas = async () => {
  const canvasNode: HTMLCanvasElement = await new Promise((resolve) => {
    const selectorQuery = Taro.createSelectorQuery()
    const callback = (res:any) => resolve(res?.node)
    selectorQuery.select('#sketch-canvas').fields({ node: true }, callback).exec()
  })
  const canvasCtx = canvasNode.getContext('2d')
  if (!canvasNode || !canvasCtx) return
  return sketch.value.init({ canvas: canvasNode, ctx: canvasCtx }).then(() => sketch.value.render())
}

onMounted(() => initCanvas())

const handleToDataURL = () => {
  const dataUrl = sketch.value.toDataURL('image/png', 1)
  console.log({ dataUrl })
}
</script>
```

## 使用说明

- `Sketch.Root` 依赖 `sketch.init({ canvas, ctx })`
- `autoRender` 会在初始化与更新时自动渲染
- 需要手动渲染时，可关闭 `autoRender` 并调用 `sketch.value.render()`

## 常见问题

- 画布空白？
- 请确认 `canvas` 与 `ctx` 有效，并设置了根节点 `width/height`
