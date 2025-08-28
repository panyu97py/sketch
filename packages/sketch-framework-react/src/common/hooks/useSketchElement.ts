import React, {useEffect, useRef} from "react";
import {SketchElement} from "@sketchjs/runtime";
import { SketchElementChild, SketchElementProps } from '@/types'
import { noop } from 'lodash-es'

interface Opt extends SketchElementProps {
  self?: SketchElement
}

export const useSketchElement = (opt: Opt) => {
  const {self, parent, children, onRegister = noop, onUnregister = noop} = opt

  const curChildren = React.Children.toArray(children) as SketchElementChild[]

  const sketchElementMap = useRef<Map<any, SketchElement>>(new Map())

  const childrenVNodes = curChildren.map((child, childIndex: number, array) => {
    const {props: childProps} = child

    if (!React.isValidElement(child)) return null

    const nextRegisterChild = array.find((item, index) => {
      return index > childIndex && sketchElementMap.current.has(item.key)
    })

    const nextSibling = sketchElementMap.current.get(nextRegisterChild?.key)

    const handleChildRegister = (element: SketchElement) => {
      sketchElementMap.current.set(child.key, element)
      self?.insertBefore(element, nextSibling)
    }

    const handleChildUnregister = (element: SketchElement) => {
      sketchElementMap.current.delete(child.key)
      self?.removeChild(element)
    }

    const effects = {onRegister: handleChildRegister, onUnregister: handleChildUnregister}

    const finalChildProps = {...childProps, ...effects, parent: self}

    return React.cloneElement<SketchElementProps>(child, finalChildProps)
  })

  useEffect(() => {
    onRegister(self)
    return () => onUnregister(self)
  }, [self, parent])

  return {childrenVNodes}
}
