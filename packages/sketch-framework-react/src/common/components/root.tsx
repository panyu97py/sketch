import React, { useEffect } from 'react'
import { SketchRoot, StyleSheetCssProperties } from '@sketchjs/runtime'
import { SketchElementChild } from '../types'

export interface InternalSketchRootProps {
  sketch?: SketchRoot
  style?: StyleSheetCssProperties;
  children?: SketchElementChild | SketchElementChild[];
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, children } = props

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketch })
  })

  useEffect(() => {
    if (!sketch) return
    sketch.setStyle(style)
  }, [sketch, style])

  return childrenVNodes
}

InternalSketchRoot.displayName = 'SketchRoot'
