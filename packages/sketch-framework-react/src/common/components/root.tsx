import { noop } from 'lodash-es'
import React, { useCallback, useEffect } from 'react'
import { Event, SketchElement, SketchRoot } from '@sketchjs/runtime'
import { useSketchElement, useToRef } from '../hooks'
import { SketchElementProps } from '../types'

export interface InternalSketchRootProps extends Pick<SketchElementProps, 'style'|'children'> {
  sketch?: SketchRoot
  autoRender?: boolean
  onReady?: (event: Event<SketchRoot>) => void
  onUpdate?: (event: Event<SketchElement>) => void
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, autoRender, children, onReady = noop, onUpdate = noop } = props

  const sketchRef = useToRef(sketch)

  const onReadyRef = useToRef(onReady)

  const onUpdateRef = useToRef(onUpdate)

  const handleSketchInitialized = useCallback((event: Event<SketchRoot>) => {
    if (autoRender) sketchRef.current?.render()
    onReadyRef.current(event)
  }, [])

  const handleSketchElementUpdate = useCallback((event: Event<SketchElement>) => {
    if (!sketchRef.current?._root.isMounted) return
    if (autoRender) sketchRef.current?.render()
    onUpdateRef.current(event)
  }, [])

  const { childrenVNodes } = useSketchElement({ children, self: sketch })

  useEffect(() => {
    sketch?.setStyle(style)
  }, [sketch, style])

  useEffect(() => {
    sketch?.addEventListener('initialized', handleSketchInitialized)
    sketch?.addEventListener('elementUpdate', handleSketchElementUpdate)
    return () => {
      sketch?.removeEventListener('initialized', handleSketchInitialized)
      sketch?.removeEventListener('elementUpdate', handleSketchElementUpdate)
    }
  }, [sketch])

  return <>{childrenVNodes}</>
}

InternalSketchRoot.displayName = 'SketchRoot'
