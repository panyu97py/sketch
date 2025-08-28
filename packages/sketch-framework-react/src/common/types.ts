import { SketchElement, StyleSheetDeclaration } from '@sketchjs/runtime'
import React from 'react'

export type SketchElementChild = React.ReactElement<SketchElementProps>

export interface SketchElementProps extends Record<string, any> {
    parent?: SketchElement;
    style?: StyleSheetDeclaration;
    children?: SketchElementChild | SketchElementChild[]
}
