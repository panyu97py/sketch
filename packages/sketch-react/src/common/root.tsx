import React, { useEffect, useImperativeHandle, useMemo } from 'react'
import { SketchRoot } from '@sketchjs/runtime'
import { SketchElementChild, SketchHandler } from '../types'

export interface InternalSketchRootProps {
    canvasNode?: HTMLCanvasElement
    canvasCtx?: CanvasRenderingContext2D
    width?: number;
    height?: number;
    children?: SketchElementChild |SketchElementChild[]
}

export const InternalSketchRoot = React.forwardRef<SketchHandler, InternalSketchRootProps>((props, ref) => {
  const { canvasNode, canvasCtx, width = 300, height = 150, children } = props

  const sketchRoot = useMemo(() => {
    if (!canvasNode || !canvasCtx) return
    return new SketchRoot(canvasNode, canvasCtx)
  }, [canvasCtx, canvasNode])

  useImperativeHandle(ref, () => ({
    render: () => sketchRoot?.render(),
    toDataURL: (type?: string, quality?: any) => sketchRoot?.toDataURL(type, quality) || ''
  }), [sketchRoot])

  useEffect(() => {
    sketchRoot?.setSize(width, height)
  }, [width, height, sketchRoot])

  return React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchRoot })
  })
})
InternalSketchRoot.displayName = 'SketchRoot'
