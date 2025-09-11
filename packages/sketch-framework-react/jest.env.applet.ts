import 'jest-canvas-mock'

process.env.SKETCH_PLATFORM = 'APPLET'

Object.defineProperty(HTMLCanvasElement.prototype, 'createImage', {
  value: function () {
    const image = new Image()
    Object.defineProperty(image, 'src', {
      set: () => setTimeout(() => image.onload?.(expect.any(Object)), 0),
      get: () => image.src
    })
    return image
  }
})
