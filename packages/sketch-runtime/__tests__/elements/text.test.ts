import { SketchText } from '@/elements'

describe('SketchText', () => {
  test('SketchText.create', () => {
    const text = SketchText.create({ text: expect.any(String) })
    expect(text).toBeDefined()
  })
})
