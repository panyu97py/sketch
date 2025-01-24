import vue from 'vue'
import { InternalSketchRootProps, InternalSketchViewProps, InternalSketchTextProps } from './common/components'
import { SketchElementProps } from './common/types'

export * from '@sketchjs/runtime'
export * from './common/types'

interface InternalSketchImageProps extends SketchElementProps {
  src?: string;
}

export declare const Sketch: {
  Root: vue.DefineComponent<InternalSketchRootProps>
  View: vue.DefineComponent<InternalSketchViewProps>
  Text: vue.DefineComponent<InternalSketchTextProps>
  Image: vue.DefineComponent<InternalSketchImageProps>
}
