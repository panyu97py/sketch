import React, { useEffect, useRef } from 'react'
import { SketchElement } from '@sketchjs/runtime'
import { SketchElementChild, SketchElementProps } from '@/common/types'
import { noop } from 'lodash-es'

const flattenReactChildren = (children: SketchElementChild) => {
  return React.Children.toArray(children).flatMap(child => {
    if (!React.isValidElement(child)) return null
    return child.type === React.Fragment ? flattenReactChildren(child.props.children) : child
  })
}

export interface Opt extends SketchElementProps {
  self?: SketchElement
}

export const useSketchElement = (opt: Opt) => {
  const { self, parent, children, onRegister = noop, onUnregister = noop } = opt

  const curChildren = flattenReactChildren(children) as SketchElementChild[]

  const sketchElementMap = useRef<Map<any, SketchElement>>(new Map())

  const childrenVNodes = curChildren.map((child, childIndex: number, array) => {
    if (!React.isValidElement(child)) return null

    const handleChildRegister = (element: SketchElement) => {
      const nextRegisteredChild = array.find((item, index) => {
        return index > childIndex && React.isValidElement(item) && sketchElementMap.current.has(item.key)
      })
      const nextSibling = sketchElementMap.current.get((nextRegisteredChild as React.ReactElement<SketchElementProps>)?.key)
      sketchElementMap.current.set(child.key, element)
      self?.insertBefore(element, nextSibling)
    }

    const handleChildUnregister = (element: SketchElement) => {
      sketchElementMap.current.delete(child.key)
      self?.removeChild(element)
    }

    const effects = { onRegister: handleChildRegister, onUnregister: handleChildUnregister }

    const finalChildProps = { ...child.props, ...effects, parent: self }

    return React.cloneElement<SketchElementProps>(child, finalChildProps)
  })

  useEffect(() => {
    onRegister(self)
    return () => onUnregister(self)
  }, [self, parent])

  return { childrenVNodes }
}
