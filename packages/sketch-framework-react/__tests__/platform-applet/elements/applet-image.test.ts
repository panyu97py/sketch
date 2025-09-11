import { SketchAppletImage } from '@/platform-applet/elements/applet-image'

describe('SketchAppletImage', () => {
  test('SketchAppletImage.create', () => {
    const image = SketchAppletImage.create({ src: expect.any(String) })
    expect(image).toBeDefined()
  })

  describe('SketchAppletImage.render', () => {
    test('SketchAppletImage.render:failed', async () => {
      const image = SketchAppletImage.create({ src: expect.any(String) })
      await image.render()
    })
  })
})
