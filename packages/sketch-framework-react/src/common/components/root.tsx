import noop from 'lodash/noop'
import React, { useEffect } from 'react'
import { SketchRoot, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useToRef } from '../hooks'
import { SketchElementChild } from '../types'

export interface InternalSketchRootProps {
  sketch?: SketchRoot
  style?: StyleSheetCssProperties;
  children?: SketchElementChild | SketchElementChild[];
  onReady?: () => void
  onUpdate?: () => void
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, children, onReady = noop, onUpdate = noop } = props

  const onReadyRef = useToRef(onReady)

  const onUpdateRef = useToRef(onUpdate)

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketch })
  })

  useEffect(() => {
    if (!sketch) return
    sketch.setStyle(style)
    sketch.addEventListener('initialized', onReadyRef.current)
    sketch.addEventListener('elementUpdate', onUpdateRef.current)
  }, [sketch, style])


  return <>{childrenVNodes}</>
}

InternalSketchRoot.displayName = 'SketchRoot'
