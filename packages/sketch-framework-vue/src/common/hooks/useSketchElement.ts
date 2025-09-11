import { SketchElement } from '@sketchjs/runtime'
import objectHash from 'object-hash'
import { getCurrentInstance, inject, provide, watchEffect, VNode, VNodeNormalizedChildren, VNodeArrayChildren, nextTick, Fragment } from 'vue'
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

type ItemOf<T extends any[]> = T[number]

// 判断是否是 VNode
const isVNode = (child?: unknown): child is VNode => {
  return typeof child === 'object' && child !== null && 'type' in child
}

/**
 * 扁平化 VNodeNormalizedChildren 并过滤非 VNode
 * 类似 React.Children.toArray
 */
export const flattenVNodes = (children?: VNodeNormalizedChildren | ItemOf<VNodeArrayChildren>): VNode[] => {
  if (!children) return []

  if (Array.isArray(children)) return children.flatMap(c => flattenVNodes(c))

  // 如果是 Fragment，递归展开 children
  if (isVNode(children)) return children.type === Fragment ? flattenVNodes(children.children) : [children]

  // 忽略文本/数字/布尔/null/undefined
  return []
}

type Nullable<T> = T | undefined;

interface Opts {
  self?: SketchElement
}

export const useSketchElement = (opt: Opts) => {
  const { self } = opt

  const instance = getCurrentInstance()

  const sketchElementMap = new Map<PropertyKey, SketchElement>()

  const parent = inject<SketchElement>('parent')

  const registerChild = inject<(element: SketchElement, vNode: VNode) => void>('registerChild') || noop

  const unregisterChild = inject<(element: SketchElement, vNode: VNode) => void>('unregisterChild') || noop

  provide<Nullable<SketchElement>>('parent', self)

  provide('registerChild', async (element: SketchElement, vNode: VNode) => {
    await nextTick()

    const vNodeKey = generateKeyFromVNode(vNode)

    const childrenVNodes = flattenVNodes(instance?.subTree.children)

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
