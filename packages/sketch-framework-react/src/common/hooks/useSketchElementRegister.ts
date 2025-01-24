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
  const appendTargetToParent = useToRef(async () => {
    if (!target || !parent) return
    await parent.appendChild(target)
    triggerSketchElementUpdate()
  })

  /**
   * 从 parent 元素中移除 target 元素
   */
  const removeTargetFromParent = useToRef(() => {
    if (!target || !parent) return
    parent.removeChild(target)
    triggerSketchElementUpdate()
  })

  /**
   * 将 target 元素注册到根元素
   */
  const registerSketchElementToRoot = useToRef(() => {
    if (!target) return
    registerSketchElement(target)
  })

  /**
   * 从根元素中移除 target 元素
   */
  const unregisterSketchElementFromRoot = useToRef(() => {
    if (!target) return
    unregisterSketchElement(target)
  })

  useEffect(() => {
    registerSketchElementToRoot.current()
    return () => unregisterSketchElementFromRoot.current()
  }, [target])

  useEffect(() => {
    appendTargetToParent.current()
    return () => removeTargetFromParent.current()
  }, [target, parent])
}
