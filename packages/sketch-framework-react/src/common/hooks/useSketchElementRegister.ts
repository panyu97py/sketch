import { SketchElement } from '@sketchjs/runtime'
import { useEffect } from 'react'
import noop from 'lodash-es/noop'
import { useInternalSketchRootCtx } from './useInternalSketchRootCtx'
import { useToRef } from './useToRef'

interface Opt{
    parent?: SketchElement
    target?: SketchElement
}
export const useSketchElementRegister = (opt:Opt) => {
  const { parent, target } = opt

  const { registerSketchElement = noop, unregisterSketchElement = noop, triggerSketchElementUpdate = noop } = useInternalSketchRootCtx()

  /**
   * 将 target 元素添加到 parent 元素
   */
  const appendTargetToParent = useToRef(() => {
    if (!target) return
    parent?.appendChild(target)
    triggerSketchElementUpdate()
  })

  /**
   * 从 parent 元素中移除 target 元素
   */
  const removeTargetFromParent = useToRef(() => {
    if (!target) return
    parent?.removeChild(target)
    triggerSketchElementUpdate()
  })

  useEffect(() => {
    registerSketchElement(target)
    return () => unregisterSketchElement(target)
  }, [target])

  useEffect(() => {
    appendTargetToParent.current()
    return () => removeTargetFromParent.current()
  }, [target, parent])
}
