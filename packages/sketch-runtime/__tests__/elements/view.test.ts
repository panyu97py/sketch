import { SketchView } from '@sketchjs/runtime'

describe('SketchView', () => {
  test('SketchView.create', () => {
    const view = SketchView.create()
    expect(view).toBeDefined()
  })
})
