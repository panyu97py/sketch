import { DefineComponent } from 'vue'
import { InternalSketchRootProps, InternalSketchViewProps, InternalSketchTextProps } from './common/components'
import { SketchElementProps } from './common/types'
import { SketchRoot } from '@sketchjs/runtime'

export * from '@sketchjs/runtime'
export * from './common/types'

interface InternalSketchImageProps extends SketchElementProps {
  src?: string;
}

export declare const Sketch: {
  Root: DefineComponent<InternalSketchRootProps>
  View: DefineComponent<InternalSketchViewProps>
  Text: DefineComponent<InternalSketchTextProps>
  Image: DefineComponent<InternalSketchImageProps>
  useSketch: ()=> SketchRoot;
}
