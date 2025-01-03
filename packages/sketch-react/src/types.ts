import { SketchElement, StyleSheetCssProperties } from '@sketchjs/runtime'
import React from 'react'

export type SketchElementChild = React.ReactElement<SketchElementProps>

export interface SketchElementProps extends Record<string, any> {
    parent?: SketchElement;
    style?: StyleSheetCssProperties;
}

export interface SketchHandler {
    render: () => Promise<void>
    setSize: (width: number, height: number) => void
    toDataURL: (type?: string, quality?: any) => string
    init: (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => void
}
