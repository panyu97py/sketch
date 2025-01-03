import { InternalSketchRoot } from '../common/root'
import { InternalSketchView } from '../common/view'
import { InternalSketchText } from '../common/text'
import { InternalSketchWebImage } from './components/image'

export * from '@sketchjs/runtime'

export const Sketch = Object.assign({}, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchWebImage
})
