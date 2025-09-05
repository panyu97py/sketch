import { SketchElement, StyleSheetDeclaration } from '@sketchjs/runtime'
import React from 'react'

export type SketchElementChild = SketchElementChild[] | React.ReactElement<SketchElementProps> | false | undefined | null

export interface SketchElementProps extends Record<string, any> {
    parent?: SketchElement;
    style?: StyleSheetDeclaration;
    children?: SketchElementChild
    onRegister?: (element: SketchElement) => void;
    onUnregister?: (element: SketchElement) => void;
}
