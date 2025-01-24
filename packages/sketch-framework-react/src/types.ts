import React from 'react'
import { SketchElementChild, SketchElementProps, SketchHandler } from './common/types'
import { InternalSketchRootProps, InternalSketchViewProps, InternalSketchTextProps } from './common/components'

export * from '@sketchjs/runtime'
export * from './common/types'

interface InternalSketchImageProps extends SketchElementProps{
    src?: string;
    children?: SketchElementChild|SketchElementChild[];
}

export declare const Sketch: {
    Root: React.ForwardRefExoticComponent<InternalSketchRootProps & React.RefAttributes<SketchHandler>>;
    View: React.FC<InternalSketchViewProps>;
    Text: React.FC<InternalSketchTextProps>;
    Image: React.FC<InternalSketchImageProps>;
}
