import React, { useMemo } from 'react'
import { SketchAppletImage } from '../elements'
import { SketchElementChild, SketchElementProps } from '../../common/types'
import { useSketchElementRegister } from '../../common/hooks'

export interface InternalSketchAppletImageProps extends SketchElementProps{
    src?: string
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchAppletImage: React.FC<InternalSketchAppletImageProps> = (props) => {
  const { src = '', style, parent, children } = props

  const sketchAppletImage = useMemo(() => SketchAppletImage.create({ src, style }), [src, style])

  useSketchElementRegister({ parent, target: sketchAppletImage })

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchAppletImage })
  })

  return <>{childrenVNodes}</>
}
