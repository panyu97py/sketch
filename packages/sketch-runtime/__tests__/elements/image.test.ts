import { SketchImage } from '@/elements'

describe('SketchImage', () => {
  test('SketchImage.create', () => {
    const image = SketchImage.create({ src: expect.any(String) })
    expect(image).toBeDefined()
  })

  describe('SketchImage.render', () => {
    test('SketchImage.render:failed', async () => {
      const image = SketchImage.create({ src: expect.any(String) })
      image.render()
    })
  })
})
