import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'
import React from 'react'

export type SketchElementChild = React.ReactElement<SketchElementProps>

export interface SketchElementProps {
    parent?: SketchElement;
    style?: StyleSheetCssProperties;
}

export interface SketchHandler {
    render: () => void
    toDataURL: (type?: string, quality?: any) => string
}