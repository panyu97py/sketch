import 'jest-canvas-mock'

// @ts-ignore vite 环境不支持 process
process.env.SKETCH_PLATFORM = 'APPLET'

Object.defineProperty(HTMLCanvasElement.prototype, 'createImage', {
  value: function () {
    const image = new Image()
    Object.defineProperty(image, 'src', {
      // @ts-ignore vite 环境不支持 expect
      set: () => setTimeout(() => image.onload?.(expect.any(Object)), 0),
      get: () => image.src
    })
    return image
  }
})
