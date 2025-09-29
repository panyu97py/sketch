# 快速开始（Vue）

## 安装 {#installation}

::: code-group

```sh [npm]
$ npm add -D @sketchjs/vue@next
```

```sh [pnpm]
$ pnpm add -D @sketchjs/vue@next
```

```sh [yarn]
$ yarn add -D @sketchjs/vue@next
```

```sh [bun]
$ bun add -D @sketchjs/vue@next
```

:::

## 创建示例 {#crate-example}

::: code-group
```vue [example.vue]
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

  /**
   * 将当前 sketch 内容导出为 dataURL
   */
  const handleToDataURL = () => {
    const dataUrl = sketch.value.toDataURL('image/png', 1)
    console.log({ dataUrl })
  }

  /**
   * 每次 sketch 更新完成回调
   */
  const handleSketchUpdate = () => {
    console.log('sketch update')
  }


  /**
   * sketch 初始化完成回调
   */
  const handleSketchInitialized = () => {
    console.log('sketch initialized')
  }

  /**
   * 初始化 Sketch 实例
   */
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

    .sketch-canvas{
      width: 500px;
      height: 500px;
    }
  }
</style>

```

```typescript [stylesheet.ts]
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
