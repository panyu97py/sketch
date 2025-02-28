import { InternalSketchRoot, InternalSketchView, InternalSketchText } from '../common/components'
import { InternalSketchAppletImage } from './components/image'
import { useSketch } from '../common/hooks'

export * from '@sketchjs/runtime'

export const Sketch = Object.assign({}, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchAppletImage,
  useSketch
})
