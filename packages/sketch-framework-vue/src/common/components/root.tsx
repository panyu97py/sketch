import { defineEmits, defineProps, ref, watchEffect, defineComponent } from 'vue'
import { SketchElement, SketchRoot } from '@sketchjs/runtime'
import { useInternalSketchRootCtxProvider } from '../hooks'
import { SketchElementProps } from '../types'

export interface InternalSketchRootProps extends Omit<SketchElementProps, 'parent'> {
  sketch?: SketchRoot
}

export interface InternalSketchRootEmits {
  (event: 'ready'): void;
}

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  setup: () => {
    const emit = defineEmits<InternalSketchRootEmits>()

    const { sketch, style } = defineProps<InternalSketchRootProps>()

    const sketchElementSetRef = ref<Set<SketchElement>>(new Set())

    const registerSketchElement = (sketchElement: SketchElement) => {
      return sketchElementSetRef.value.add(sketchElement)
    }

    const unregisterSketchElement = (sketchElement: SketchElement) => {
      return sketchElementSetRef.value.delete(sketchElement)
    }

    const triggerSketchElementUpdate = () => {
      const sketchElements = Array.from(sketchElementSetRef.value)
      const isAllSketchElementMounted = sketchElements.every((sketchElement) => sketchElement.isMounted)
      if (!isAllSketchElementMounted || !sketchElements.length) return
      emit('ready')
    }
    watchEffect(() => {
      if (!sketch) return
      sketch.setStyle(style)
    })

    useInternalSketchRootCtxProvider({
      registerSketchElement,
      unregisterSketchElement,
      triggerSketchElementUpdate
    })
    return () => <slot parent={sketch}/>
  }
})
