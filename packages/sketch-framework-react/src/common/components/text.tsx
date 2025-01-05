import React from 'react'
import { SketchElement, SketchText, StyleSheetCssProperties } from '@sketchjs/runtime'
import { useSketchElementRegister, useAsyncMemo } from '../hooks'

export interface InternalSketchTextProps {
    text?: string;
    parent?: SketchElement
    style?: StyleSheetCssProperties
}

export const InternalSketchText: React.FC<InternalSketchTextProps> = (props) => {
  const { text = '', style, parent } = props

  const sketchText = useAsyncMemo(() => SketchText.create({ text, style }), [text, style])

  useSketchElementRegister({ parent, target: sketchText })

  return null
}
