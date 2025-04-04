import { onMounted, onBeforeUnmount, watchEffect, Ref } from 'vue'
import { SketchElement } from '@sketchjs/runtime'

interface Opt {
  parent?: Ref<SketchElement | undefined>
  target?: Ref<SketchElement | undefined>
}

export const useSketchElementRegister = (opt: Opt) => {
  const { parent, target } = opt


  // 将 target 元素添加到 parent 元素
  const appendTargetToParent = async () => {
    if (!target?.value || !parent?.value) return
    await parent.value.appendChild(target.value)
  }

  // 从 parent 元素中移除 target 元素
  const removeTargetFromParent = () => {
    if (!target?.value || !parent?.value) return
    parent.value.removeChild(target.value)
  }


  onMounted(() => appendTargetToParent())

  onBeforeUnmount(() => removeTargetFromParent())

  watchEffect(() => {
    appendTargetToParent()
    return () => removeTargetFromParent()
  })
}
