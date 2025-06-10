import { watchEffect, defineComponent, PropType, provide } from 'vue'
import { Event, SketchElement, SketchRoot, StyleSheetDeclaration } from '@sketchjs/runtime'

export const SketchRootProps = {
  sketch: Object as PropType<SketchRoot>,
  style: Object as PropType<StyleSheetDeclaration>,
};

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  props: SketchRootProps,
  setup: (props, { slots, emit }) => {

    const handleSketchInitialized = (event: Event<SketchRoot>) => {
      props.sketch?.render()
      emit('ready',event)
    }

    const handleSketchElementUpdate = (event: Event<SketchElement>) => {
      props.sketch?.render()
      emit('update',event)
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

    provide<SketchRoot|undefined>('parent', props.sketch)

    return () => (
      <template>
        {slots.default?.() || null}
      </template>
    );
  }
})
