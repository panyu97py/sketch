import { SketchRoot } from '@/elements'
import { StyleSheetCssProperties } from '@/types'
import { Event } from '@/utils'
import { mockDeep } from 'jest-mock-extended'

describe('SketchRoot', () => {
  test('SketchRoot.create', () => {
    const root = SketchRoot.create()
    expect(root).toBeDefined()
  })

  test('SketchRoot.setStyle', () => {
    const root = SketchRoot.create()
    const style = mockDeep<StyleSheetCssProperties>()
    root.setStyle(style)
    expect(root.style).toEqual(style)
  })

  describe('SketchRoot.init', () => {
    test('SketchRoot.init:success', async () => {
      const root = SketchRoot.create()
      const style = mockDeep<StyleSheetCssProperties>()
      const canvas = document.createElement('canvas')
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
      jest.spyOn(root, 'dispatchEvent')
      root.setStyle(style)
      await root.init({ canvas, ctx })

      const event = new Event('initialized', root)
      expect(root.dispatchEvent).toHaveBeenCalledWith(event)
      expect(root.renderable).toBeTruthy()
    })

    test('SketchRoot.init:failed', async () => {
      const root = SketchRoot.create()
      const style = mockDeep<StyleSheetCssProperties>()
      root.setStyle(style)
      await expect(root.init()).rejects.toThrow('canvas or ctx is empty')
    })
  })

  describe('SketchRoot.toDataURL', () => {
    test('SketchRoot.toDataURL:success', async () => {
      const root = SketchRoot.create()
      const style = mockDeep<StyleSheetCssProperties>()
      const canvas = document.createElement('canvas')
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
      root.setStyle(style)
      await root.init({ canvas, ctx })
      const dataURL = root.toDataURL('image/png')
      expect(dataURL).toBeDefined()
    })

    test('SketchRoot.toDataURL:failed', async () => {
      const root = SketchRoot.create()
      const style = mockDeep<StyleSheetCssProperties>()
      root.setStyle(style)
      const dataURL = root.toDataURL('image/png')
      expect(dataURL).toBeFalsy()
    })
  })

  test('SketchRoot.addEventListener', () => {
    const root = SketchRoot.create()
    const listener = jest.fn()
    const eventType = expect.any(String)
    jest.spyOn(root, 'addEventListener')
    root.addEventListener(eventType, listener)
    expect(root.addEventListener).toHaveBeenCalledWith(eventType, listener)
  })

  test('SketchRoot.removeEventListener', () => {
    const root = SketchRoot.create()
    const listener = jest.fn()
    const eventType = expect.any(String)
    jest.spyOn(root, 'removeEventListener')
    root.removeEventListener(eventType, listener)
    expect(root.removeEventListener).toHaveBeenCalledWith(eventType, listener)
  })

  test('SketchRoot.dispatchEvent', () => {
    const root = SketchRoot.create()
    const event = new Event(expect.any(String), root)
    jest.spyOn(root, 'dispatchEvent')
    root.dispatchEvent(event)
    expect(root.dispatchEvent).toHaveBeenCalledWith(event)
  })
})
