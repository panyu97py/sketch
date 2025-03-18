import { SketchElement } from '@sketchjs/runtime'
import { useEffect } from 'react'
import { useToRef } from './useToRef'

interface Opt{
    parent?: SketchElement
    target?: SketchElement
}
export const useSketchElementRegister = (opt:Opt) => {
  const { parent, target } = opt

  /**
   * 将 target 元素添加到 parent 元素
   */
  const appendTargetToParent = useToRef(async () => {
    if (!target || !parent) return
    await parent.appendChild(target)
  })

  /**
   * 从 parent 元素中移除 target 元素
   */
  const removeTargetFromParent = useToRef(() => {
    if (!target || !parent) return
    parent.removeChild(target)
  })

  useEffect(() => {
    appendTargetToParent.current()
    return () => removeTargetFromParent.current()
  }, [target, parent])
}
