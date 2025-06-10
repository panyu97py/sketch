import { SketchText } from '@sketchjs/runtime'

describe('SketchText', () => {
  test('SketchText.create', () => {
    const text = SketchText.create({ text: expect.any(String) })
    expect(text).toBeDefined()
  })
})
