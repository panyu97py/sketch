import React, { useImperativeHandle, useState } from 'react'
import { SketchRoot } from '@sketchjs/runtime'
import { SketchElementChild, SketchHandler } from '../../types'
import { useToRef } from '../hooks'

export interface InternalSketchRootProps {
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchRoot = React.forwardRef<SketchHandler, InternalSketchRootProps>((props, ref) => {
  const { children } = props

  const [sketchRoot, setSketchRoot] = useState<SketchRoot>()

  const sketchRootRef = useToRef(sketchRoot)

  const initSketchRoot = (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => {
    const sketchRoot = new SketchRoot(canvasNode, canvasCtx)
    setSketchRoot(sketchRoot)
  }

  const renderSketch = () => {
    return sketchRootRef.current?.render()
  }

  const setSketchSize = (width: number, height: number) => {
    return sketchRootRef.current?.setSize(width, height)
  }

  const sketchToDataURL = (type?: string, quality?: any) => {
    return sketchRootRef.current?.toDataURL(type, quality) || ''
  }

  useImperativeHandle(ref, () => ({
    sketchRoot,
    init: initSketchRoot,
    setSize: setSketchSize,
    render: renderSketch,
    toDataURL: sketchToDataURL
  }))

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchRoot })
  })

  return <>{childrenVNodes}</>
})

InternalSketchRoot.displayName = 'SketchRoot'
