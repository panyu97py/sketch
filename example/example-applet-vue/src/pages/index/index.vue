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
