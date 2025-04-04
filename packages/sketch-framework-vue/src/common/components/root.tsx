import { watchEffect, defineComponent, PropType } from 'vue'
import { Event, SketchElement, SketchRoot, StyleSheetCssProperties } from '@sketchjs/runtime'

export const SketchRootProps = {
  sketch: Object as PropType<SketchRoot>,
  parent: Object as PropType<SketchElement>,
  style: Object as PropType<StyleSheetCssProperties>,
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

    return () => (
      <template>
        {slots.default ? slots.default({ parent: props.sketch }) : null}
      </template>
    );
  }
})
