import { debugOption } from '@sketchjs/runtime'
import { InternalSketchRoot, InternalSketchView, InternalSketchText } from '@/common/components'
import { InternalSketchWebImage } from './components/image'
import { useSketch } from '@/common/hooks'

export * from '@sketchjs/runtime'

export const Sketch = Object.assign(debugOption, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchWebImage,
  useSketch
})
