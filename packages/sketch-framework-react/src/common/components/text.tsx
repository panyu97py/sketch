import React, { useMemo } from 'react'
import { SketchText } from '@sketchjs/runtime'
import { useSketchElement } from '../hooks'
import { SketchElementProps } from '@/common/types'

export interface InternalSketchTextProps extends Omit<SketchElementProps, 'children'> {
  /**
   * 文本内容
   */
  text?: string;
}

export const InternalSketchText: React.FC<InternalSketchTextProps> = (props) => {
  const { text = '', style, ...otherProps } = props

  const sketchText = useMemo(() => SketchText.create({ text, style }), [text, style])

  useSketchElement({ ...otherProps, self: sketchText })

  return null
}
