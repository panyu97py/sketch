import { SketchImage } from '@sketchjs/runtime'

describe('SketchImage', () => {
  test('SketchImage.create', () => {
    const image = SketchImage.create({ src: expect.any(String) })
    expect(image).toBeDefined()
  })

  describe('SketchImage.render', () => {
    test('SketchImage.render:failed', async () => {
      const image = SketchImage.create({ src: expect.any(String) })
      jest.spyOn(image, 'loadImage').mockImplementation(() => Promise.resolve(new Image()))
      await image.render()
    })
  })
})
