import { SketchElement } from '@sketchjs/runtime'
import { useEffect } from 'react'

interface Opt{
    parent?: SketchElement
    target?: SketchElement
}
export const useSketchElementRegister = (opt:Opt) => {
  const { parent, target } = opt

  useEffect(() => {
    parent?.appendChild(target)
    return () =>  parent?.removeChild(target)
  }, [target, parent])
}
