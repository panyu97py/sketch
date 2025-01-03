import React, { useEffect, useMemo } from 'react'
import { SketchElement, SketchText, StyleSheetCssProperties } from '@sketchjs/runtime'

export interface InternalSketchTextProps {
    text?: string;
    parent?: SketchElement
    style?: StyleSheetCssProperties
}

export const InternalSketchText: React.FC<InternalSketchTextProps> = (props) => {
  const { text = '', style, parent } = props

  const sketchText = useMemo(() => new SketchText(text, style), [text, style])

  useEffect(() => {
    parent?.appendChild(sketchText)
  }, [sketchText])

  return null
}
