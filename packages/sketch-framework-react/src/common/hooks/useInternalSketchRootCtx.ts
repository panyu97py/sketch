import React, { useContext } from 'react'

export interface InternalSketchRootCtxVal {
    reportSketchElementUpdate?: () => void
}

export const InternalSketchRootCtx = React.createContext<InternalSketchRootCtxVal>({})

export const useInternalSketchRootCtx = () => useContext(InternalSketchRootCtx)
