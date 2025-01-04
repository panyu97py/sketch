import { SketchElement } from '@sketchjs/runtime'
import React, { useContext } from 'react'

export interface InternalSketchRootCtxVal {
    registerSketchElement?: (sketchElement: SketchElement) => void
    unregisterSketchElement?: (sketchElement: SketchElement) => void
    triggerSketchElementUpdate?: () => void
}

export const InternalSketchRootCtx = React.createContext<InternalSketchRootCtxVal>({})

export const useInternalSketchRootCtx = () => useContext(InternalSketchRootCtx)
