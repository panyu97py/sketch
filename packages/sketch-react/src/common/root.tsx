import React, { useEffect, useMemo } from 'react'
import { SketchRoot } from '@sketchjs/runtime'
import { SketchElementChild } from '../types'

export interface InternalSketchRootProps {
    canvasNode?: HTMLCanvasElement
    canvasCtx?: CanvasRenderingContext2D
    width?: number;
    height?: number;
    children?: SketchElementChild |SketchElementChild[]
}

export const InternalSketchRoot: React.FC<InternalSketchRootProps> = (props) => {
  const { canvasNode, canvasCtx, width = 300, height = 150, children } = props

  const sketchRoot = useMemo(() => {
    if (!canvasNode || !canvasCtx) return
    return new SketchRoot(canvasNode, canvasCtx)
  }, [canvasCtx, canvasNode])

  useEffect(() => {
    sketchRoot?.setSize(width, height)
  }, [width, height, sketchRoot])

  return React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    return React.cloneElement(child, { ...childProps, parent: sketchRoot })
  })
}
