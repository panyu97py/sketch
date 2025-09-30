import { attachLogEnable } from '@sketchjs/runtime'
import { InternalSketchRoot, InternalSketchView, InternalSketchText } from '@/common/components'
import { InternalSketchWebImage } from './components/image'
import { useSketch } from '@/common/hooks'

export const Sketch = attachLogEnable({
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchWebImage,
  useSketch
})
