import { defineEmits, defineProps, watchEffect, defineComponent } from 'vue'
import { SketchRoot } from '@sketchjs/runtime'
import { SketchElementProps } from '../types'

export interface InternalSketchRootProps extends Omit<SketchElementProps, 'parent'> {
  sketch?: SketchRoot
}

export interface InternalSketchRootEmits {
  (event: 'ready'): void;
  (event: 'update'): void;
}

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  setup: () => {
    const emit = defineEmits<InternalSketchRootEmits>()

    const { sketch, style }  = defineProps<InternalSketchRootProps>()

    const handleSketchInitialized = () => {
      sketch?.render()
      emit('ready')
    }

    const handleSketchElementUpdate = () => {
      sketch?.render()
      emit('update')
    }

    watchEffect((onCleanup) => {
      if (!sketch) return

      sketch.addEventListener('initialized', handleSketchInitialized)
      sketch.addEventListener('elementUpdate', handleSketchElementUpdate)

      // 组件卸载时清理
      onCleanup(() => {
        sketch?.removeEventListener('initialized', handleSketchInitialized)
        sketch?.removeEventListener('elementUpdate', handleSketchElementUpdate)
      })
    })

    watchEffect(() => {
      if (!sketch) return
      sketch.setStyle(style)
    })

    return () => <slot parent={sketch}/>
  }
})
