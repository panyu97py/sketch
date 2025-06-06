import { SketchImage, SketchRoot, SketchText, SketchView, StyleSheet } from '@/elements'
import { StyleSheetCssProperties } from '@/types'

const style: StyleSheetCssProperties = {
  width: 100,
  height: 100,
  fontSize: 16,
  fontWeight: 400,
  fontFamily: 'Arial',
  lineHeight: 20,
  textAlign: 'center',
  color: '#000000',
  backgroundColor: 'red'
}

describe('SketchRuntime', () => {
  test('SketchRuntime:renderView', async () => {
    const canvas = document.createElement('canvas')
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    const styleSheet = StyleSheet.create({ view: style })
    const root = SketchRoot.create({ canvas, ctx, style: styleSheet.view })
    const view = SketchView.create({ style: styleSheet.view })
    await root.appendChild(view)
    await root.init()
    await root.render()
  })

  test('SketchRuntime:renderImage', async () => {
    const canvas = document.createElement('canvas')
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    const styleSheet = StyleSheet.create({ image: style })
    const root = SketchRoot.create({ canvas, ctx, style: styleSheet.image })
    const image = SketchImage.create({ src: expect.any(String), style: styleSheet.image })
    jest.spyOn(image, 'loadImage').mockImplementation(() => Promise.resolve(new Image()))
    await root.appendChild(image)
    await root.init()
    await root.render()
  })

  test('SketchRuntime:renderText', async () => {
    const canvas = document.createElement('canvas')
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    const styleSheet = StyleSheet.create({ text: style })
    const root = SketchRoot.create({ canvas, ctx, style: styleSheet.text })
    const text = SketchText.create({ text: expect.any(String), style: styleSheet.text })
    await root.appendChild(text)
    await root.init()
    await root.render()
  })
})
