import { SketchRootProps, SketchTextProps, SketchViewProps } from './common/components'
import { DefineComponent, ExtractPropTypes, PropType, ComputedRef } from 'vue'
import { SketchRoot, SketchElement, StyleSheetDeclaration } from '@sketchjs/runtime'
import { JSX } from 'vue/jsx-runtime'

const SketchImageProps = {
  src: String,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetDeclaration>
}

export * from '@sketchjs/runtime'

export declare const Sketch: {
  debug: boolean;
  Root: DefineComponent<ExtractPropTypes<typeof SketchRootProps>, () => JSX.Element>;
  View: DefineComponent<ExtractPropTypes<typeof SketchViewProps>, () => JSX.Element>;
  Text: DefineComponent<ExtractPropTypes<typeof SketchTextProps>, () => JSX.Element>;
  Image: DefineComponent<ExtractPropTypes<typeof SketchImageProps>>;
  useSketch: () => ComputedRef<SketchRoot>;
}
