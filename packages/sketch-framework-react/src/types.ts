import React from 'react'
import { SketchElementProps } from './common/types'
import { InternalSketchRootProps, InternalSketchViewProps, InternalSketchTextProps } from './common/components'
import { SketchRoot } from '@sketchjs/runtime'

export * from '@sketchjs/runtime'
export * from './common/types'

interface InternalSketchImageProps extends SketchElementProps {
    src?: string;
}

export declare const Sketch: {
    Root: React.FC<InternalSketchRootProps>;
    View: React.FC<InternalSketchViewProps>;
    Text: React.FC<InternalSketchTextProps>;
    Image: React.FC<InternalSketchImageProps>;
    useSketch: ()=> SketchRoot;
    debug: boolean
}
