import React, { useCallback, useEffect, useMemo } from 'react'
import { SketchImage, Event } from '@sketchjs/runtime'
import { SketchElementProps } from '@/common/types'
import { useSketchElement, useToRef } from '@/common/hooks'
import { noop } from 'lodash-es'
import { SketchAppletImage } from '@/platform-applet/elements'

export interface InternalSketchWebImageProps extends SketchElementProps {
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

export const InternalSketchWebImage: React.FC<InternalSketchWebImageProps> = (props) => {
  const { src = '', style, onError = noop, onLoad = noop, ...otherProps } = props

  const onErrorRef = useToRef(onError)

  const onLoadRef = useToRef(onLoad)

  const sketchImage = useMemo(() => SketchImage.create({ src, style }), [src, style])

  const { childrenVNodes } = useSketchElement({ ...otherProps, self: sketchImage })

  const handleError = useCallback(() => onErrorRef.current(onError), [onError])

  const handleLoad = useCallback(() => onLoadRef.current(onLoad), [onLoad])

  useEffect(() => {
    sketchImage.addEventListener('onload', handleLoad)
    sketchImage.addEventListener('onerror', handleError)
    return () => {
      sketchImage.removeEventListener('onload', handleLoad)
      sketchImage.removeEventListener('onerror', handleError)
    }
  }, [sketchImage])

  return <>{childrenVNodes}</>
}
