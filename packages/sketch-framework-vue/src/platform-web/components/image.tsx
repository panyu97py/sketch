import { computed, defineComponent, PropType, watchEffect } from 'vue'
import { Event, SketchImage, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'
import { SketchAppletImage } from '@/platform-applet/elements'

export const InternalSketchWebImage = defineComponent({
  name: 'SketchWebImage',
  props: {
    /**
     * 资源路径
     */
    src: String,
    /**
     * 样式
     */
    style: Object as PropType<StyleSheetDeclaration>
  },
  emits: {
    /**
     * 资源加载完成
     * @param event
     */
    load: (event: Event<SketchAppletImage>) => event instanceof Event,
    /**
     * 资源加载失败
     * @param event
     */
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
