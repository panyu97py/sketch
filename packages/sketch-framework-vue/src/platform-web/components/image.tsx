import { computed, defineComponent, PropType, watchEffect } from 'vue'
import { Event, SketchImage, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'
import { SketchAppletImage } from '@/platform-applet/elements'

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  props: {
    src: String,
    style: Object as PropType<StyleSheetDeclaration>
  },
  emits: {
    load: (event: Event<SketchAppletImage>) => event instanceof Event,
    error: (event: Event<Error>) => event instanceof Event
  },
  setup: (props, { slots, emit }) => {
    const sketchWebImage = computed(() => SketchImage.create({ src: props.src || '', style: props.style }))

    const handleLoad = (event: Event<SketchAppletImage>) => emit('load', event)

    const handleError = (event: Event<Error>) => emit('error', event)

    useSketchElement({ self: sketchWebImage.value })

    watchEffect((onCleanup) => {
      sketchWebImage.value.addEventListener('onload', handleLoad)
      sketchWebImage.value.addEventListener('onerror', handleError)
      // 组件卸载时清理
      onCleanup(() => {
        sketchWebImage.value.removeEventListener('onload', handleLoad)
        sketchWebImage.value.removeEventListener('onerror', handleError)
      })
    })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
