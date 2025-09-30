import { Sketch as AppletSketch } from './platform-applet'
import { Sketch as WebSketch } from './platform-web'

export * from '@sketchjs/runtime'
export * from './common/types'

export const Sketch = (() => {
  if (process.env.SKETCH_PLATFORM === 'APPLET') return AppletSketch
  if (process.env.SKETCH_PLATFORM === 'WEB') return WebSketch
  return WebSketch
})()
