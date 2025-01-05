import React from 'react'
import { SketchView, StyleSheetCssProperties } from '@sketchjs/runtime'
import { SketchElementChild, SketchElementProps } from '../types'
import { useSketchElementRegister, useAsyncMemo } from '../hooks'

export interface InternalSketchViewProps extends SketchElementProps {
    style?: StyleSheetCssProperties
    children?: SketchElementChild | SketchElementChild[]
}

export const InternalSketchView: React.FC<InternalSketchViewProps> = (props) => {
  const { style, parent, children } = props

  const sketchView = useAsyncMemo(() => SketchView.create({ style }), [style])

  useSketchElementRegister({ parent, target: sketchView })

  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const { props: childProps } = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, { ...childProps, parent: sketchView })
  })

  return <>{childrenVNodes}</>
}
