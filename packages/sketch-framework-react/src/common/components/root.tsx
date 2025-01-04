import React, { useImperativeHandle, useRef, useState } from 'react'
import { SketchElement, SketchRoot } from '@sketchjs/runtime'
import noop from 'lodash-es/noop'
import { SketchElementChild, SketchHandler } from '../types'
import { InternalSketchRootCtx, InternalSketchRootCtxVal } from '../hooks'

const DEFAULT_WIDTH = 300

const DEFAULT_HEIGHT = 150

export interface InternalSketchRootProps {
    width?: number;
    height?: number;
    children?: SketchElementChild | SketchElementChild[];
    onSketchReady?: () => void;
}

export const InternalSketchRoot = React.forwardRef<SketchHandler, InternalSketchRootProps>((props, ref) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, children, onSketchReady = noop } = props

  const [sketchRoot, setSketchRoot] = useState<SketchRoot>()

  const sketchElementSetRef = useRef(new Set<SketchElement>())

  const initSketchRoot = (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => {
    const sketchRoot = new SketchRoot(canvasNode, canvasCtx)
    sketchRoot?.setSize(width, height)
    setSketchRoot(sketchRoot)
  }

  const renderSketch = () => {
    return sketchRoot?.render()
  }

  const sketchToDataURL = (type?: string, quality?: any) => {
    return sketchRoot?.toDataURL(type, quality) || ''
  }

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
    onSketchReady()
  }

  useImperativeHandle(ref, () => ({
    sketchRoot,
    init: initSketchRoot,
    render: renderSketch,
    toDataURL: sketchToDataURL
  }))

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchRoot })
  })

  const ctxVal:InternalSketchRootCtxVal = {
    registerSketchElement,
    unregisterSketchElement,
    triggerSketchElementUpdate
  }

  return (
      <InternalSketchRootCtx.Provider value={ctxVal}>
        {childrenVNodes}
      </InternalSketchRootCtx.Provider>
  )
})

InternalSketchRoot.displayName = 'SketchRoot'
