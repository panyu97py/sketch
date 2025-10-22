# Sketch.Text

`Sketch.Text` 是 Sketch 的文本节点组件，用于在画布上渲染文本内容。  
通常作为 `Sketch.Root` 或 `Sketch.View` 的子节点使用。

## 示例

### React

<<< @/examples/react/sketch-text.tsx

### Vue

<<< @/examples/vue/sketch-text.tsx

## API 属性

### React

::: api {src="@sketchjs/react/common/components/text.tsx" type="react"}
:::

### Vue

::: api {src="@sketchjs/vue/common/components/text.tsx" type="vue"}:::
:::

## 使用说明 / 注意事项

- `Sketch.Text` 必须挂载在 `Sketch.Root` 或 `Sketch.View` 内
- 文本内容通过 `text` 属性传入
- 样式建议通过 `StyleSheet.create()` 管理，包括字体、颜色、对齐方式等
- 避免在大量文本节点中使用频繁更新，否则可能影响渲染性能  
