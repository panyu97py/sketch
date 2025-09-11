import { InternalSketchRoot, InternalSketchText, InternalSketchView } from './common/components'
import { DefineComponent, ExtractPropTypes, PropType, ComputedRef } from 'vue'
import { SketchRoot, SketchElement, StyleSheetDeclaration } from '@sketchjs/runtime'
import { JSX } from 'vue/jsx-runtime'

const SketchImageProps = {
  src: String,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetDeclaration>
}

export type SketchImagePropsType = ExtractPropTypes<typeof SketchImageProps>;

export declare const InternalSketchImage: DefineComponent<SketchImagePropsType, () => JSX.Element>

export * from '@sketchjs/runtime'

export declare const Sketch: {
  debug: boolean;
  Root: typeof InternalSketchRoot;
  View: typeof InternalSketchView;
  Text: typeof InternalSketchText;
  Image: typeof InternalSketchImage;
  useSketch: () => ComputedRef<SketchRoot>;
}
