import { InternalSketchRoot } from '../common/root'
import { InternalSketchView } from '../common/view'
import { InternalSketchText } from '../common/text'
import { InternalSketchAppletImage } from './components/image'
import React from 'react'

const A:React.FC<any> = () => {
  return null
}

export const Sketch = Object.assign(A, {
  Root: InternalSketchRoot,
  View: InternalSketchView,
  Text: InternalSketchText,
  Image: InternalSketchAppletImage
})
