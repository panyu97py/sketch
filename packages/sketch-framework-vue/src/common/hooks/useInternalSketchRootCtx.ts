import { provide, inject } from 'vue'
import { SketchElement } from '@sketchjs/runtime'

export interface InternalSketchRootCtxVal {
  registerSketchElement?: (sketchElement: SketchElement) => void
  unregisterSketchElement?: (sketchElement: SketchElement) => void
  triggerSketchElementUpdate?: () => void
}

export const InternalSketchRootCtx = Symbol('InternalSketchRootCtx')

export const useInternalSketchRootCtxConsumer = () => {
  return inject<InternalSketchRootCtxVal>(InternalSketchRootCtx, {})
}

export const useInternalSketchRootCtxProvider = (val: InternalSketchRootCtxVal) => {
  return provide<InternalSketchRootCtxVal>(InternalSketchRootCtx, val)
}
