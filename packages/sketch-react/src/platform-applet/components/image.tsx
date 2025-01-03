import React, { useEffect, useMemo } from 'react'
import { SketchAppletImage } from '../elements'
import { SketchElementChild, SketchElementProps } from '../../types'

export interface InternalSketchAppletImageProps extends SketchElementProps{
    src?: string
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchAppletImage: React.FC<InternalSketchAppletImageProps> = (props) => {
  const { src = '', style, parent, children } = props

  const sketchAppletImage = useMemo(() => new SketchAppletImage(src, style), [src, style])

  useEffect(() => {
    parent?.appendChild(sketchAppletImage)
    return () => parent?.removeChild(sketchAppletImage)
  }, [sketchAppletImage, parent])

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchAppletImage })
  })

  return <>{childrenVNodes}</>
}
