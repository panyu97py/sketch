import React, { useCallback, useEffect, useMemo } from 'react'
import { SketchAppletImage } from '../elements'
import { SketchElementProps } from '@/common/types'
import { Event } from '@sketchjs/runtime'
import { useSketchElement, useToRef } from '@/common/hooks'
import { noop } from 'lodash-es'

export interface InternalSketchAppletImageProps extends SketchElementProps {
  /**
   * 资源路径
   */
  src?: string
  /**
   * 资源加载完成
   * @param error
   */
  onLoad?: (error: Event<SketchAppletImage>) => void
  /**
   * 资源加载失败
   * @param error
   */
  onError?: (error: Event<Error>) => void
}

export const InternalSketchAppletImage: React.FC<InternalSketchAppletImageProps> = (props) => {
  const { src = '', style, onError = noop, onLoad = noop, ...otherProps } = props

  const onErrorRef = useToRef(onError)

  const onLoadRef = useToRef(onLoad)

  const sketchAppletImage = useMemo(() => SketchAppletImage.create({ src, style }), [src, style])

  const { childrenVNodes } = useSketchElement({ ...otherProps, self: sketchAppletImage })

  const handleError = useCallback(() => onErrorRef.current(onError), [onError])

  const handleLoad = useCallback(() => onLoadRef.current(onLoad), [onLoad])

  useEffect(() => {
    sketchAppletImage.addEventListener('onload', handleLoad)
    sketchAppletImage.addEventListener('onerror', handleError)
    return () => {
      sketchAppletImage.removeEventListener('onload', handleLoad)
      sketchAppletImage.removeEventListener('onerror', handleError)
    }
  }, [sketchAppletImage])

  return <>{childrenVNodes}</>
}
