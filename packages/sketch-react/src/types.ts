import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'
import React from 'react'

export interface SketchElementProps {
    parent?: SketchElement;
    style?: StyleSheetCssProperties;
}

export type SketchElementChild = React.ReactElement<SketchElementProps>
