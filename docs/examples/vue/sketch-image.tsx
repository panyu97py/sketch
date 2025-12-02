import { defineComponent, onMounted, ref } from 'vue'
import { Sketch, StyleSheet } from '@sketchjs/vue'
import React from 'react'

const styleSheet = StyleSheet.create({
  root: {
    width: 200,
    height: 200,
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
  }
})
export const SketchView = defineComponent({
  name: 'SketchView',
  setup () {
    const sketch = Sketch.useSketch()

    const canvasRef = ref<HTMLCanvasElement | null>(null)

    const handleSketchElementUpdate = () => console.log('sketch update')

    const handleSketchInitialized = () => console.log('sketch initialized')

    const handleImageLoadSuccess = () => console.log('image loaded')

    const handleImageLoadError = () => console.log('image load error')

    const initCanvas = () => {
      const canvas = canvasRef.value
      const ctx = canvas?.getContext('2d')
      if (!canvas || !ctx) return
      return sketch.value.init({ canvas, ctx })
    }

    onMounted(() => initCanvas())

    return () => (
      <>
        <canvas ref="canvasRef"/>
        <Sketch.Root
          autoRender
          sketch={sketch.value}
          style={styleSheet.root}
          onReady={handleSketchInitialized}
          onUpdate={handleSketchElementUpdate}
        >
          <Sketch.Image
            src='path-to-image'
            style={styleSheet.image}
            onLoad={handleImageLoadSuccess}
            onError={handleImageLoadError}
          />
        </Sketch.Root>
      </>
    )
  }
})
