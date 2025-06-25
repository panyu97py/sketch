import { Sketch, StyleSheet } from '@sketchjs/react'
import { render, waitFor } from '@testing-library/react'
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

describe('Sketch.Root', () => {
  test('Sketch.Root.render', async () => {
    const styleSheet = StyleSheet.create({
      root: {
        width: 100,
        height: 100
      }
    })


    interface SketchTestComponentProps {
      onReady?: (dataUrl:string) => void
    }

    const SketchTestComponent: React.FC<SketchTestComponentProps> = (props) => {
      const { onReady = noop } = props
      const sketch = Sketch.useSketch()

      const handleSketchInitialized = () => {
        const dataUrl = sketch.toDataURL('image/png', 1)
        onReady(dataUrl)
      }

      useEffect(() => {
        const canvas = document.createElement('canvas')
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
        sketch.init({ canvas, ctx })
      }, [sketch])

      return <Sketch.Root sketch={sketch} style={styleSheet.root} onReady={handleSketchInitialized}/>
    }

    const onReady = jest.fn()

    render(<SketchTestComponent onReady={onReady}/>)

    await waitFor(() => expect(onReady).toHaveBeenCalledWith(expect.any(String)))
  })
})
