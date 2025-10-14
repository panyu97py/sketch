import { watchEffect, defineComponent, PropType } from 'vue'
import { Event, SketchElement, SketchRoot, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  props: {
    autoRender: Boolean,
    sketch: Object as PropType<SketchRoot>,
    style: Object as PropType<StyleSheetDeclaration>
  },
  emits: {
    ready: (event: Event<SketchRoot>) => event instanceof Event,
    update: (event: Event<SketchElement>) => event instanceof Event
  },
  setup: (props, { slots, emit }) => {
    const handleSketchInitialized = (event: Event<SketchRoot>) => {
      if (props.autoRender) props.sketch?.render()
      emit('ready', event)
    }

    const handleSketchElementUpdate = (event: Event<SketchElement>) => {
      if (!props.sketch?._root.isMounted) return
      if (props.autoRender) props.sketch?.render()
      emit('update', event)
    }

    watchEffect((onCleanup) => {
      if (!props.sketch) return

      props.sketch.addEventListener('initialized', handleSketchInitialized)
      props.sketch.addEventListener('elementUpdate', handleSketchElementUpdate)

      // 组件卸载时清理
      onCleanup(() => {
        props.sketch?.removeEventListener('initialized', handleSketchInitialized)
        props.sketch?.removeEventListener('elementUpdate', handleSketchElementUpdate)
      })
    })

    watchEffect(() => {
      if (!props.sketch) return
      props.sketch.setStyle(props.style)
    })

    useSketchElement({ self: props.sketch })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
