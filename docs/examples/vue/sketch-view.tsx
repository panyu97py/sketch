import { defineComponent, onMounted, ref } from 'vue'
import { Sketch, StyleSheet } from '@sketchjs/vue'
import React from 'react'

const styleSheet = StyleSheet.create({
  root: {
    width: 200,
    height: 200,
    backgroundColor: '#fff'
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#000'
  }
})
export const SketchView = defineComponent({
  name: 'SketchView',
  setup () {
    const sketch = Sketch.useSketch()

    const canvasRef = ref<HTMLCanvasElement | null>(null)

    const handleSketchElementUpdate = () => console.log('sketch update')

    const handleSketchInitialized = () => console.log('sketch initialized')

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
          <Sketch.View style={styleSheet.view}/>
        </Sketch.Root>
      </>
    )
  }
})
