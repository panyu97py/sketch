import noop from 'lodash/noop'
import React, { useEffect } from 'react'
import { SketchRoot, StyleSheetCssProperties, log } from '@sketchjs/runtime'
import { InternalSketchRootCtxVal, InternalSketchRootCtx, useDebounce, useToRef } from '../hooks'
import { SketchElementChild } from '../types'
import type { DebounceSettings } from 'lodash'

const debounceOpt:DebounceSettings = {leading: false, trailing: true}

export interface InternalSketchRootProps {
  sketch?: SketchRoot
  style?: StyleSheetCssProperties;
  children?: SketchElementChild | SketchElementChild[];
  onReady?: () => void
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, children, onReady = noop } = props

  const sketchRef = useToRef(sketch)

  const handleSketchElementUpdate = useDebounce(() => {
    if (!sketchRef.current?.initialized) return
    log('sketchReadyToRender',{ sketch: sketchRef.current })
    onReady()
  }, 10, debounceOpt)

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketch })
  })

  useEffect(() => {
    if (!sketch) return
    sketch.setStyle(style)
  }, [sketch, style])

  const ctxVal:InternalSketchRootCtxVal = { reportSketchElementUpdate: handleSketchElementUpdate }

  return (
    <InternalSketchRootCtx.Provider value={ctxVal}>
      {childrenVNodes}
    </InternalSketchRootCtx.Provider>
  )
}

InternalSketchRoot.displayName = 'SketchRoot'
