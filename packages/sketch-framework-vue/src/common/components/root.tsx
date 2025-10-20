import { watchEffect, defineComponent, PropType } from 'vue'
import { Event, SketchElement, SketchRoot, StyleSheetDeclaration } from '@sketchjs/runtime'
import { useSketchElement } from '@/common/hooks'

export const InternalSketchRoot = defineComponent({
  name: 'SketchRoot',
  props: {
    /**
     * 是否自动渲染
     */
    autoRender: Boolean,
    /**
     * sketch 实例
     */
    sketch: Object as PropType<SketchRoot>,
    /**
     * 样式
     */
    style: Object as PropType<StyleSheetDeclaration>
  },
  emits: {
    /**
     * 初始化完成事件回调
     * @param event
     */
    ready: (event: Event<SketchRoot>) => event instanceof Event,
    /**
     * 元素更新事件回调
     * @param event
     */
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
