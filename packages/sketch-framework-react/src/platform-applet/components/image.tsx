import React, { useMemo } from 'react'
import { SketchAppletImage } from '../elements'
import { SketchElementProps } from '@/common/types'
import { useSketchElement } from '@/common/hooks'

export interface InternalSketchAppletImageProps extends SketchElementProps {
    src?: string
}

export const InternalSketchAppletImage: React.FC<InternalSketchAppletImageProps> = (props) => {
  const { src = '', style, parent, children } = props

  const sketchAppletImage = useMemo(() => SketchAppletImage.create({ src, style }), [src, style])

  const { childrenVNodes } = useSketchElement({ self: sketchAppletImage, parent, children})

  return <>{childrenVNodes}</>
}
