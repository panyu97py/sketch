import React from 'react'
import { SketchImage } from '@sketchjs/runtime'
import { SketchElementChild, SketchElementProps } from '../../common/types'
import { useAsyncMemo, useSketchElementRegister } from '../../common/hooks'

export interface InternalSketchWebImageProps extends SketchElementProps {
    src?: string
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchWebImage: React.FC<InternalSketchWebImageProps> = (props) => {
  const { src = '', style, parent, children } = props

  const sketchImage = useAsyncMemo(() => SketchImage.create({ src, style }), [src, style])

  useSketchElementRegister({ parent, target: sketchImage })

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchImage })
  })

  return <>{childrenVNodes}</>
}
