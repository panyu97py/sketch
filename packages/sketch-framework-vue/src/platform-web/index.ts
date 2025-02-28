import { InternalSketchRoot, InternalSketchView, InternalSketchText } from '../common/components'
import { InternalSketchWebImage } from './components/image'
import { useSketch } from '../common/hooks'

export const Sketch = Object.assign({}, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchWebImage,
  useSketch
})
