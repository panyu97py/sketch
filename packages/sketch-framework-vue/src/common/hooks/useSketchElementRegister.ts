import { onMounted, onBeforeUnmount, watchEffect, Ref } from 'vue'
import { useInternalSketchRootCtxConsumer } from './useInternalSketchRootCtx'
import noop from 'lodash-es/noop'
import { SketchElement } from '@sketchjs/runtime'

interface Opt {
  parent?: Ref<SketchElement | undefined>
  target?: Ref<SketchElement | undefined>
}

export const useSketchElementRegister = (opt: Opt) => {
  const { parent, target } = opt

  const {
    registerSketchElement = noop,
    unregisterSketchElement = noop,
    triggerSketchElementUpdate = noop
  } = useInternalSketchRootCtxConsumer()

  // 将 target 元素添加到 parent 元素
  const appendTargetToParent = async () => {
    if (!target?.value || !parent?.value) return
    await parent.value.appendChild(target.value)
    triggerSketchElementUpdate()
  }

  // 从 parent 元素中移除 target 元素
  const removeTargetFromParent = () => {
    if (!target?.value || !parent?.value) return
    parent.value.removeChild(target.value)
    triggerSketchElementUpdate()
  }

  // 将 target 元素注册到根元素
  const registerSketchElementToRoot = () => {
    if (!target?.value) return
    registerSketchElement(target.value)
  }

  // 从根元素中移除 target 元素
  const unregisterSketchElementFromRoot = () => {
    if (!target?.value) return
    unregisterSketchElement(target.value)
  }

  onMounted(() => registerSketchElementToRoot())

  onBeforeUnmount(() => unregisterSketchElementFromRoot())

  watchEffect(() => {
    appendTargetToParent()
    return () => removeTargetFromParent()
  })
}
