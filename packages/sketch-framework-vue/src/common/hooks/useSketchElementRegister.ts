import { watchEffect } from 'vue'
import { SketchElement } from '@sketchjs/runtime'

interface Opt {
  parent?: SketchElement
  target?: SketchElement
}

export const useSketchElementRegister = (opt: Opt) => {
  const { parent, target } = opt


  // 将 target 元素添加到 parent 元素
  const appendTargetToParent = async () => {
    if (!target || !parent) return
    await parent.appendChild(target)
  }

  // 从 parent 元素中移除 target 元素
  const removeTargetFromParent = () => {
    if (!target || !parent) return
    parent.removeChild(target)
  }


  // onMounted(() => appendTargetToParent())
  //
  // onBeforeUnmount(() => removeTargetFromParent())

  watchEffect(() => {
    appendTargetToParent()
    return () => removeTargetFromParent()
  })
}
