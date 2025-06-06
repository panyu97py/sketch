import { SketchElement, StyleSheet } from '@/elements'

describe('SketchElement', () => {
  describe('SketchElement.create', () => {
    test('SketchElement.create', () => {
      const sketchElement = SketchElement.create()
      expect(sketchElement).toBeDefined()
    })
  })

  describe('SketchElement.setStyle', () => {
    test('SketchElement.setStyle', () => {
      const sketchElement = SketchElement.create()
      const styleSheet = StyleSheet.create({ element: { width: 100, height: 100 } })
      jest.spyOn(StyleSheet, 'apply')
      sketchElement.setStyle(styleSheet.element)
      expect(StyleSheet.apply).toHaveBeenCalledWith(sketchElement, styleSheet.element)
      expect(sketchElement.style).toEqual(styleSheet.element)
    })
  })
})
