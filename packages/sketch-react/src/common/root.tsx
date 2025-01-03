import React, { useImperativeHandle, useState } from 'react'
import { SketchRoot } from '@sketchjs/runtime'
import { SketchElementChild, SketchHandler } from '../types'

export interface InternalSketchRootProps {
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchRoot = React.forwardRef<SketchHandler, InternalSketchRootProps>((props, ref) => {
  const { children } = props

  const [sketchRoot, setSketchRoot] = useState<SketchRoot>()

  const initSketchRoot = (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => {
    const sketchRoot = new SketchRoot(canvasNode, canvasCtx)
    setSketchRoot(sketchRoot)
  }

  useImperativeHandle(ref, () => ({
    init: initSketchRoot,
    render: () => sketchRoot?.render(),
    toDataURL: (type?: string, quality?: any) => sketchRoot?.toDataURL(type, quality) || '',
    setSize: (width: number, height: number) => sketchRoot?.setSize(width, height)
  }), [sketchRoot])

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchRoot })
  })

  return <>{childrenVNodes}</>
})

InternalSketchRoot.displayName = 'SketchRoot'
