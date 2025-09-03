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

    if (!React.isValidElement(child)) return null

    const handleChildRegister = (element: SketchElement) => {
      const nextRegisterChild = array.find((item, index) => {
        return index > childIndex && React.isValidElement(item) && sketchElementMap.current.has(item.key)
      })
      const nextSibling = sketchElementMap.current.get((nextRegisterChild as React.ReactElement<SketchElementProps>)?.key)
      sketchElementMap.current.set(child.key, element)
      self?.insertBefore(element, nextSibling)
    }

    const handleChildUnregister = (element: SketchElement) => {
      sketchElementMap.current.delete(child.key)
      self?.removeChild(element)
    }

    const effects = {onRegister: handleChildRegister, onUnregister: handleChildUnregister}

    const finalChildProps = {...child.props, ...effects, parent: self}

    return React.cloneElement<SketchElementProps>(child, finalChildProps)
  })

  useEffect(() => {
    onRegister(self)
    return () => onUnregister(self)
  }, [self, parent])

  return {childrenVNodes}
}
