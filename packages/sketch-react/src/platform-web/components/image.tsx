import React, { useEffect, useMemo } from 'react'
import { SketchImage } from '@sketchjs/runtime'
import { SketchElementChild, SketchElementProps } from '../../types'

export interface InternalSketchWebImageProps extends SketchElementProps {
    src?: string
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchWebImage: React.FC<InternalSketchWebImageProps> = (props) => {
  const { src = '', style, parent, children } = props

  const sketchImage = useMemo(() => new SketchImage(src, style), [src, style])

  useEffect(() => {
    parent?.appendChild(sketchImage)
  }, [sketchImage])

  return React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    return React.cloneElement(child, { ...childProps, parent: sketchImage })
  })
}
