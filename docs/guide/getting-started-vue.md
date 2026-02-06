# 快速开始（Vue）

## 前置准备 {#prerequisites}

- [Vue.js](https://cn.vuejs.org/) 3.0.0 及以上版本
- 支持 Canvas 的浏览器环境

## 适用场景 {#use-cases}

- Vue 项目中的 Canvas UI
- 需要组件化组织复杂绘图

## 安装 {#installation}

::: code-group

```sh [npm]
$ npm add @sketchjs/vue
```

```sh [pnpm]
$ pnpm add @sketchjs/vue
```

```sh [yarn]
$ yarn add @sketchjs/vue
```

```sh [bun]
$ bun add @sketchjs/vue
```

:::

## 基础用法 {#example}

::: code-group
```vue [App.vue]
<template>
  <div class="App" @click="handleToDataURL">
    <canvas class="sketch-canvas" ref="canvasRef"/>
    <SketchRoot 
      :sketch="sketch"
      :autoRender="true"
      :style="styleSheet.root"
      @ready="handleSketchInitialized" 
      @update="handleSketchUpdate">
      <SketchView :style="styleSheet.view">
        <SketchImage :src="logo" :style="styleSheet.logo"/>
        <SketchText text="Hello  World!" :style="styleSheet.text"/>
      </SketchView>
    </SketchRoot>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { onMounted, ref } from 'vue'
import { Sketch } from '@sketchjs/vue'
import { styleSheet } from './styleSheet'

const { Root: SketchRoot, View: SketchView, Image: SketchImage, Text: SketchText } = Sketch

const sketch = Sketch.useSketch()
const canvasRef = ref<HTMLCanvasElement | null>(null)

const handleToDataURL = () => {
  const dataUrl = sketch.value.toDataURL('image/png', 1)
  console.log({ dataUrl })
}

const handleSketchUpdate = () => {
  console.log('sketch update')
}

const handleSketchInitialized = () => {
  console.log('sketch initialized')
}

const initSketch = () => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  return sketch.value.init({ canvas, ctx })
}

onMounted(() => initSketch())
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

```ts [styleSheet.ts]
import { StyleSheet } from '@sketchjs/vue'

export const styleSheet = StyleSheet.create({
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
```

:::

## 使用说明 {#notes}

- `Sketch.Root` 需要传入 `sketch` 实例，并在 `init` 完成后开始渲染
- 设置 `autoRender` 后，初始化与更新会自动触发 `render`
- Canvas 的像素尺寸由 `Sketch.Root` 的样式决定，建议明确 `width/height`
- 若需要手动控制渲染时机，设置 `autoRender` 为 `false` 并调用 `sketch.value.render()`

## 配置提示 {#config}

- 若需要异步加载或跨端能力，请结合 Taro 与对应插件配置

## 初始化流程 {#init-flow}

1. `Sketch.useSketch()` 创建实例
2. 获取 `canvas` 与 `ctx`
3. 调用 `sketch.value.init({ canvas, ctx })`
4. 在 `Sketch.Root` 中挂载节点树并渲染

## 常见问题 {#faq}

- 为什么画布是空白的？
- 请确认 `canvas` 和 `ctx` 都有效，并且 `Sketch.Root` 设置了 `width/height`
- 组件更新后没有重新渲染？
- 开启 `autoRender` 或在更新后手动调用 `sketch.value.render()`
