import React, { useMemo } from 'react'
import { SketchImage } from '@sketchjs/runtime'
import { SketchElementProps } from '@/common/types'
import { useSketchElement } from '@/common/hooks'

export interface InternalSketchWebImageProps extends SketchElementProps {
    src?: string
}

export const InternalSketchWebImage: React.FC<InternalSketchWebImageProps> = (props) => {
  const { src = '', style, ...otherProps } = props

  const sketchImage = useMemo(() => SketchImage.create({ src, style }), [src, style])

  const { childrenVNodes } = useSketchElement({ ...otherProps, self: sketchImage })

  return <>{childrenVNodes}</>
}
