import { noop } from 'lodash-es'
import React, { useCallback, useEffect } from 'react'
import { SketchRoot } from '@sketchjs/runtime'
import { useSketchElement, useToRef } from '../hooks'
import { SketchElementProps } from '../types'

export interface InternalSketchRootProps extends Pick<SketchElementProps, 'style'|'children'> {
  sketch?: SketchRoot
  autoRender?: boolean
  onReady?: () => void
  onUpdate?: () => void
}

export const InternalSketchRoot:React.FC<InternalSketchRootProps> = (props) => {
  const { style, sketch, autoRender, children, onReady = noop, onUpdate = noop } = props

  const sketchRef = useToRef(sketch)

  const onReadyRef = useToRef(onReady)

  const onUpdateRef = useToRef(onUpdate)

  const handleSketchInitialized = useCallback(() => {
    if (autoRender) sketchRef.current?.render()
    onReadyRef.current()
  }, [])

  const handleSketchElementUpdate = useCallback(() => {
    if (!sketchRef.current?._root.isMounted) return
    if (autoRender) sketchRef.current?.render()
    onUpdateRef.current()
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
