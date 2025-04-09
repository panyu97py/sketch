import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'
import { Ref } from 'vue'

export interface SketchElementProps extends Record<string, any> {
  parent?: Ref<SketchElement>;
  style?: StyleSheetCssProperties;
}
