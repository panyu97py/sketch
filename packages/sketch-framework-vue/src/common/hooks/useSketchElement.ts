import { SketchElement } from '@sketchjs/runtime'
import { getCurrentInstance, inject, provide, useSlots, watchEffect, VNode } from 'vue'
import { noop } from 'lodash-es'

type Nullable<T> = T | undefined;

interface Opts {
  self?: SketchElement
}

export const useSketchElement = (opt: Opts) => {

  const { self} = opt

  const slots = useSlots()

  const instance = getCurrentInstance()

  const sketchElementMap  = new Map<VNode,SketchElement>()

  const parent = inject<SketchElement>('parent')

  const registerChild = inject<(element: SketchElement, vNode: VNode) => void>('registerChild') || noop

  const unregisterChild = inject<(element: SketchElement, vNode: VNode) => void>('unregisterChild') || noop

  provide<Nullable<SketchElement>>('parent', self)

  provide('registerChild', (element: SketchElement, vNode: VNode) => {

    const childrenVNodes = slots.default?.() || []

    // TODO 这里的对比方法有问题
    const childIndex = childrenVNodes.indexOf(vNode)

    const nextRegisteredChild = childrenVNodes.find((item, index) => {
      return index > childIndex && sketchElementMap.has(item)
    })

    const nextSibling = nextRegisteredChild ? sketchElementMap.get(nextRegisteredChild) : undefined

    sketchElementMap.set(vNode, element)

    self?.insertBefore(element, nextSibling)
  })

  provide('unregisterChild', (element: SketchElement, vNode: VNode) => {
    sketchElementMap.delete(vNode)
    self?.removeChild(element)
  })

  watchEffect((onInvalidate) => {
    if (!self || !parent) return
    registerChild(self, instance?.vnode)
    onInvalidate(() => unregisterChild(self, instance?.vnode))
  })
}
