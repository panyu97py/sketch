import { defineEmits, defineProps, defineExpose, ref, defineComponent } from 'vue'
import { SketchElement, SketchRoot } from '@sketchjs/runtime'
import { useInternalSketchRootCtxProvider } from '../hooks'
import { SketchElementProps, SketchHandler } from '../types'

export type InternalSketchRootProps = Omit<SketchElementProps, 'parent'>

export interface InternalSketchRootEmits {
  (event: 'ready'): void;
}

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  setup: () => {
    const emit = defineEmits<InternalSketchRootEmits>()

    const props = defineProps<InternalSketchRootProps>()

    const sketchElementSetRef = ref<Set<SketchElement>>(new Set())

    const sketchRoot = ref<SketchRoot>()

    const initSketchRoot = async (canvasNode: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) => {
      const { style } = props
      sketchRoot.value = await SketchRoot.create({ canvas: canvasNode, ctx: canvasCtx, style })
    }

    const renderSketch = () => {
      return sketchRoot.value?.render()
    }

    const sketchToDataURL = (type?: string, quality?: any) => {
      return sketchRoot.value?.toDataURL(type, quality) || ''
    }

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

    defineExpose<SketchHandler>({
      sketchRoot,
      init: initSketchRoot,
      render: renderSketch,
      toDataURL: sketchToDataURL
    })

    useInternalSketchRootCtxProvider({
      registerSketchElement,
      unregisterSketchElement,
      triggerSketchElementUpdate
    })
    return () => <slot parent={sketchRoot}/>
  }
})
