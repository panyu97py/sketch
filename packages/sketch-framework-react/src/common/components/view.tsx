import React, { useMemo } from 'react'
import { SketchView, StyleSheetDeclaration } from '@sketchjs/runtime'
import { SketchElementChild, SketchElementProps } from '../types'
import { useSketchElementRegister } from '../hooks'

export interface InternalSketchViewProps extends SketchElementProps {
    style?: StyleSheetDeclaration
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchView: React.FC<InternalSketchViewProps> = (props) => {
  const { style, parent, children } = props

  const sketchView = useMemo(() => SketchView.create({ style }), [style])

  useSketchElementRegister({ parent, target: sketchView })

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchView })
  })

  return <>{childrenVNodes}</>
}
