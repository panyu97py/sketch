import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'
import { Ref } from 'vue'

export interface SketchElementProps extends Record<string, any> {
  parent?: Ref<SketchElement>;
  style?: StyleSheetCssProperties;
}

export interface SketchHandler {
  sketchRoot: Ref<SketchElement | undefined>;
  render: () => Promise<void>
  toDataURL: (type?: string, quality?: any) => string
  init: (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => void
}
