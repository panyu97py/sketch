import { computed, defineComponent, PropType, watchEffect } from 'vue'
import { useSketchElement } from '@/common/hooks'
import { SketchAppletImage } from '../elements'
import { Event, StyleSheetDeclaration } from '@sketchjs/runtime'

export const InternalSketchAppletImage = defineComponent({
  name: 'SketchAppletImage',
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
    const sketchAppletImage = computed(() => SketchAppletImage.create({ src: props.src || '', style: props.style }))

    const handleLoad = (event: Event<SketchAppletImage>) => emit('load', event)

    const handleError = (event: Event<Error>) => emit('error', event)

    useSketchElement({ self: sketchAppletImage.value })

    watchEffect((onCleanup) => {
      sketchAppletImage.value.addEventListener('onload', handleLoad)
      sketchAppletImage.value.addEventListener('onerror', handleError)
      // 组件卸载时清理
      onCleanup(() => {
        sketchAppletImage.value.removeEventListener('onload', handleLoad)
        sketchAppletImage.value.removeEventListener('onerror', handleError)
      })
    })

    return () => (
      <template>
        {slots.default ? slots.default() : null}
      </template>
    )
  }
})
