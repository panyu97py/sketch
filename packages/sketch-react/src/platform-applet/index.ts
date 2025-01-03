import { InternalSketchRoot } from '../common/root'
import { InternalSketchView } from '../common/view'
import { InternalSketchText } from '../common/text'
import { InternalSketchAppletImage } from './components/image'

export const Sketch = Object.assign({}, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchAppletImage
})
