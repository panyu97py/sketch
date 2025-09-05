import React, { useMemo } from 'react'
import { SketchView } from '@sketchjs/runtime'
import { SketchElementProps } from '../types'
import { useSketchElement } from '../hooks'

export type InternalSketchViewProps = SketchElementProps;

export const InternalSketchView: React.FC<InternalSketchViewProps> = (props) => {
  const { style, ...otherProps } = props

  const sketchView = useMemo(() => SketchView.create({ style }), [style])

  const { childrenVNodes } = useSketchElement({ ...otherProps, self: sketchView })

  return <>{childrenVNodes}</>
}
