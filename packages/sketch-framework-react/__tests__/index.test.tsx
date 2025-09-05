import { Sketch, SketchImage, StyleSheet } from '@sketchjs/react'
import { render, waitFor } from '@testing-library/react'
import React, { useEffect } from 'react'
import { noop } from 'lodash-es'

describe('SketchReact', () => {
  test('SketchReact:render', async () => {

    const style = StyleSheet.create({
      root: {
        width: 500,
        height: 500,
        backgroundColor: '#282c34'
      },
      view: {
        width: 500,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
        width: 200,
        height: 200
      },
      text: {
        width: 500,
        marginTop: 20,
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 400,
        lineHeight: 50,
        textAlign: 'center'
      }
    })

    interface SketchTestComponentProps {
      onReady?: (dataUrl: string) => void
      onUpdate?: (dataUrl: string) => void
    }

    const SketchTestComponent: React.FC<SketchTestComponentProps> = (props) => {
      const { onReady = noop, onUpdate = noop } = props

      const sketch = Sketch.useSketch()

      const handleSketchInitialized = () => {
        const dataUrl = sketch.toDataURL('image/png', 1)
        onReady(dataUrl)
      }

      const handleSketchUpdate = () => {
        const dataUrl = sketch.toDataURL('image/png', 1)
        onUpdate(dataUrl)
      }

      useEffect(() => {
        const canvas = document.createElement('canvas')
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
        sketch.init({ canvas, ctx })
      }, [sketch])

      return (
        <Sketch.Root autoRender style={style.root} sketch={sketch} onReady={handleSketchInitialized} onUpdate={handleSketchUpdate}>
          <Sketch.View style={style.view}>
            <Sketch.Image src={expect.any(String)} style={style.logo}>
              <Sketch.Text text={expect.any(String)} style={style.text}/>
            </Sketch.Image>
          </Sketch.View>
        </Sketch.Root>
      )
    }


    const onReady = jest.fn()

    const onUpdate = jest.fn()

    render(<SketchTestComponent onReady={onReady} onUpdate={onUpdate}/>)

    jest.spyOn(SketchImage.prototype, 'loadImage').mockImplementation(() => Promise.resolve(new Image()))

    await waitFor(() => expect(onReady).toHaveBeenCalledWith(expect.any(String)))

    await waitFor(() => expect(onUpdate).toHaveBeenCalledWith(expect.any(String)))
  })
})
