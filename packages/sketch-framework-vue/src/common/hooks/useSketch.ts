import { SketchRoot } from '@sketchjs/runtime'
import { computed } from 'vue'

export const useSketch = () => {
  return computed(() => new SketchRoot())
}
