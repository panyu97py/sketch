import React, { useEffect } from 'react'
import { Sketch, StyleSheet } from '@sketchjs/react'

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

  const handleImageLoadSuccess = () => console.log('image loaded')

  const handleImageLoadError = () => console.log('image load error')

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
