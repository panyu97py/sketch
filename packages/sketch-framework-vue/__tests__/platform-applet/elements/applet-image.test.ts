import { SketchAppletImage } from '@/platform-applet/elements/applet-image'

describe('SketchAppletImage (vue)', () => {
  test('create', () => {
    const image = SketchAppletImage.create({ src: expect.any(String) })
    expect(image).toBeDefined()
  })

  test('render:noop', async () => {
    const image = SketchAppletImage.create({ src: '' })
    await image.render()
  })
})
