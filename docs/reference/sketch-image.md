# Sketch.Image

`Sketch.Image` 是 Sketch 的图片节点组件，用于在画布上渲染图片内容。  
通常作为 `Sketch.Root` 或 `Sketch.View` 的子节点使用。

## 示例

### React

<<< @/examples/react/sketch-image.tsx

### Vue

<<< @/examples/vue/sketch-image.tsx

## API 属性

### React

::: api {src="@sketchjs/react/platform-web/components/image.tsx" type="react"}
:::

### Vue

::: api {src="@sketchjs/vue/platform-web/components/image.tsx" type="vue"}
:::

## 使用说明 / 注意事项

- `Sketch.Image` 必须挂载在 `Sketch.Root` 或 `Sketch.View` 内
- 图片资源通过 `src` 属性传入，可支持本地或网络地址
- 样式建议通过 `StyleSheet.create()` 管理，包括宽高、裁剪、对齐方式
- 避免在大量图片节点中频繁更新，否则可能影响渲染性能  
