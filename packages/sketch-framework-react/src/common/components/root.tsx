import React, { useEffect, useRef } from 'react'
import { SketchElement, SketchRoot, StyleSheetCssProperties } from '@sketchjs/runtime'
import noop from 'lodash-es/noop'
import { SketchElementChild } from '../types'
import { InternalSketchRootCtx, InternalSketchRootCtxVal } from '../hooks'

export interface InternalSketchRootProps {
    sketch?: SketchRoot
    style?: StyleSheetCssProperties;
    children?: SketchElementChild | SketchElementChild[];
    onReady?: () => void;
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, children, onReady = noop } = props

  const sketchElementSetRef = useRef(new Set<SketchElement>())

  const registerSketchElement = (sketchElement: SketchElement) => {
    sketchElementSetRef.current.add(sketchElement)
  }

  const unregisterSketchElement = (sketchElement: SketchElement) => {
    sketchElementSetRef.current.delete(sketchElement)
  }

  const triggerSketchElementUpdate = () => {
    const sketchElements = Array.from(sketchElementSetRef.current)
    const isAllSketchElementMounted = sketchElements.every((sketchElement) => sketchElement.isMounted)
    if (!isAllSketchElementMounted || !sketchElements.length) return
    onReady()
  }

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketch })
  })

  const ctxVal:InternalSketchRootCtxVal = {
    registerSketchElement,
    unregisterSketchElement,
    triggerSketchElementUpdate
  }

  useEffect(() => {
    if (!sketch) return
    sketch.setStyle(style)
  }, [sketch, style])

  return (
    <InternalSketchRootCtx.Provider value={ctxVal}>
      {childrenVNodes}
    </InternalSketchRootCtx.Provider>
  )
}

InternalSketchRoot.displayName = 'SketchRoot'
