import React, { useMemo } from 'react'
import { SketchElement, SketchText, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElementRegister } from '../hooks'

export interface InternalSketchTextProps {
    text?: string;
    parent?: SketchElement
    style?: StyleSheetDeclaration
}

export const InternalSketchText: React.FC<InternalSketchTextProps> = (props) => {
  const { text = '', style, parent } = props

  const sketchText = useMemo(() => SketchText.create({ text, style }), [text, style])

  useSketchElementRegister({ parent, target: sketchText })

  return null
}
