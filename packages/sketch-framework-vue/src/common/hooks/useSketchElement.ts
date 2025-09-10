import { SketchElement } from '@sketchjs/runtime'
import objectHash from 'object-hash'
import { getCurrentInstance, inject, provide, useSlots, watchEffect, VNode } from 'vue'
import { noop } from 'lodash-es'

const generateKeyFromVNode = (vNode: VNode): PropertyKey => {
  if (vNode.key) return vNode.key

  const typeStr = (() => {
    if (typeof vNode.type === 'string') return vNode.type
    if ((vNode.type as any)?.name) return (vNode.type as any)?.name
    return 'component'
  })()

  const propsHash = (objectHash(vNode.props) as string).slice(0, 8)

  return `${typeStr}-${propsHash}`
}

type Nullable<T> = T | undefined;

interface Opts {
  self?: SketchElement
}

export const useSketchElement = (opt: Opts) => {
  const { self } = opt

  const slots = useSlots()

  const instance = getCurrentInstance()

  const sketchElementMap = new Map<PropertyKey, SketchElement>()

  const parent = inject<SketchElement>('parent')

  const registerChild = inject<(element: SketchElement, vNode: VNode) => void>('registerChild') || noop

  const unregisterChild = inject<(element: SketchElement, vNode: VNode) => void>('unregisterChild') || noop

  provide<Nullable<SketchElement>>('parent', self)

  provide('registerChild', (element: SketchElement, vNode: VNode) => {
    const vNodeKey = generateKeyFromVNode(vNode)

    const childrenVNodes = slots.default?.() || []

    const childrenVNodeKeys = childrenVNodes.map(item => generateKeyFromVNode(item))

    if (Array.from(new Set(childrenVNodeKeys)).length !== childrenVNodes.length) throw new Error('存在相同的 key 或 VNode 需要手动指定不会重复的元素 key')

    const childIndex = childrenVNodeKeys.findIndex((item) => vNodeKey === item)

    const nextRegisteredChild = childrenVNodes.find((item, index) => {
      return index > childIndex && sketchElementMap.has(generateKeyFromVNode(item))
    })

    const nextSibling = nextRegisteredChild ? sketchElementMap.get(generateKeyFromVNode(nextRegisteredChild)) : undefined

    sketchElementMap.set(vNodeKey, element)

    self?.insertBefore(element, nextSibling)
  })

  provide('unregisterChild', (element: SketchElement, vNode: VNode) => {
    sketchElementMap.delete(generateKeyFromVNode(vNode))
    self?.removeChild(element)
  })

  watchEffect((onInvalidate) => {
    if (!self || !parent) return
    registerChild(self, instance?.vnode)
    onInvalidate(() => unregisterChild(self, instance?.vnode))
  })
}
