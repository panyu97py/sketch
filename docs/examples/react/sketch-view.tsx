import React, { useEffect } from 'react'
import { Sketch, StyleSheet } from '@sketchjs/react'

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

export const SketchView: React.FC = () => {
  const sketch = Sketch.useSketch()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const handleSketchElementUpdate = () => console.log('sketch update')

  const handleSketchInitialized = () => console.log('sketch initialized')

  const initSketch = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    return sketch.init({ canvas, ctx })
  }

  useEffect(() => {
    initSketch()
  }, [])

  return (
    <>
      <canvas ref={canvasRef}/>
      <Sketch.Root
        autoRender
        sketch={sketch}
        style={styleSheet.root}
        onUpdate={handleSketchElementUpdate}
        onReady={handleSketchInitialized}
      />
    </>

  )
}
