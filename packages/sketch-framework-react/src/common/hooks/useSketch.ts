import { SketchRoot } from '@sketchjs/runtime'
import { useMemo } from 'react'

export const useSketch = () => {
  return useMemo(() => new SketchRoot(), [])
}
