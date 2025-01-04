import { SketchElement } from '@sketchjs/runtime'
import { useEffect } from 'react'
import noop from 'lodash-es/noop'
import { useInternalSketchRootCtx } from './useInternalSketchRootCtx'

interface Opt{
    parent?: SketchElement
    target?: SketchElement
}
export const useSketchElementRegister = (opt:Opt) => {
  const { parent, target } = opt

  const { registerSketchElement = noop, unregisterSketchElement = noop, triggerSketchElementUpdate = noop } = useInternalSketchRootCtx()

  useEffect(() => {
    registerSketchElement(target)
    return () => unregisterSketchElement(target)
  }, [target])

  useEffect(() => {
    if (!target) return
    parent?.appendChild(target)
    triggerSketchElementUpdate()
    return () => {
      parent?.removeChild(target)
      triggerSketchElementUpdate()
    }
  }, [target, parent])
}
