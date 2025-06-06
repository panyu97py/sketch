import { SketchView } from '@/elements'

describe('SketchView', () => {
  test('SketchView.create', () => {
    const view = SketchView.create()
    expect(view).toBeDefined()
  })
})
