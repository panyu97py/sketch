# sketch - 绘图工具

实现像写 RN 一样完成 canvas 2d 绘图

### 安装

#### 使用`npm`安装
```shell
npm install @sketchjs/vue
```
#### 使用`yarn`安装
```shell
yarn add @sketchjs/vue
```

#### 使用`pnpm`安装
```shell
pnpm add @sketchjs/vue
```

### H5 使用`sketch`实现`Canvas` 2d 绘图
```ts
import { defineConfig } from 'vite'

export default defineConfig({
  define:{
    'process.env.SKETCH_PLATFORM': '"WEB"', // 使用小程序端 sketch 实现
    'process.env.YOGA_USE_WASM': 'false' // 不使用 WASM 实现
  },
  optimizeDeps: {
    include: ['@sketchjs/vue'], // 将有问题的依赖添加到优化列表
  },
})

```
```js-vue
<template>
  <div class="App" @click="handleToDataURL">
    <canvas class="sketch-canvas" ref="canvasRef"/>
    <Sketch.Root :style="style.root" :sketch="sketch" @ready="handleSketchInitialized" @update="handleSketchUpdate">
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

Sketch.debug = true

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

const handleSketchUpdate = () => {
  console.log('sketch update')
}

const handleSketchInitialized = () => {
  console.log('sketch initialized')
}
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

### Taro 小程序使用`sketch`实现`Canvas` 2d 绘图

```ts
import { defineConfig } from '@tarojs/cli'

export default defineConfig({
  defineConstants: {
    'process.env.SKETCH_PLATFORM': '"APPLET"',  // 使用小程序端 sketch 实现
    'process.env.YOGA_USE_WASM': 'false',  // 不使用 WASM 实现
  },
})

```

```js-vue
<template>
  <View @tap="handleToDataURL" class='index-view'>
  <Canvas id='sketch-canvas' type='2d' class='sketch-canvas' />
  <Sketch.Root :style="style.root" :sketch="sketch" @ready="handleSketchInitialized" @update="handleSketchUpdate">
  <Sketch.View :style="style.view">
  <Sketch.Image :src="require('@/assets/logo.svg')" :style="style.logo"/>
  <Sketch.Text text="Hello  World!" :style="style.text"/>
</Sketch.View>
</Sketch.Root>
</View>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { View, Canvas } from '@tarojs/components'
  import { StyleSheet, Sketch } from '@sketchjs/vue'
  import Taro from '@tarojs/taro'
  import './index.less'

  defineComponent({ name: 'IndexPage' })

  Sketch.debug = true

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

  const handleSketchUpdate = () => {
  console.log('sketch update')
}

  const handleSketchInitialized = () => {
  console.log('sketch initialized')
}

</script>
```
