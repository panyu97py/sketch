<template>
  <div class="App" @click="handleToDataURL">
    <canvas class="sketch-canvas" ref="canvasRef"/>
    <SketchRoot :style="style.root" :sketch="sketch" @ready="handleSketchInitialized" @update="handleSketchUpdate">
      <SketchView :style="style.view">
        <SketchImage :src="logo" :style="style.logo"/>
        <SketchText text="Hello  World!" :style="style.text"/>
      </SketchView>
    </SketchRoot>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { onMounted, ref } from 'vue'
import { StyleSheet, Sketch } from '@sketchjs/vue'

const { Root: SketchRoot, View: SketchView, Image: SketchImage, Text: SketchText } = Sketch

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
