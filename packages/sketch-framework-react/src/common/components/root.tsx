import noop from 'lodash/noop'
import React, { useCallback, useEffect } from 'react'
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

  const sketchRef = useToRef(sketch)

  const onReadyRef = useToRef(onReady)

  const onUpdateRef = useToRef(onUpdate)

  const handleSketchInitialized  = useCallback(()=>{
    sketchRef.current?.render()
    onReadyRef.current()
  },[])

  const handleSketchElementUpdate = useCallback(()=>{
    sketchRef.current?.render()
    onUpdateRef.current()
  },[])

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketch })
  })

  useEffect(() => {
    sketch?.setStyle(style)
    sketch?.addEventListener('initialized', handleSketchInitialized)
    sketch?.addEventListener('elementUpdate', handleSketchElementUpdate)
    return ()=>{
      sketch?.removeEventListener('initialized',handleSketchInitialized)
      sketch?.removeEventListener('elementUpdate',handleSketchElementUpdate)
    }
  }, [sketch, style])


  return <>{childrenVNodes}</>
}

InternalSketchRoot.displayName = 'SketchRoot'
