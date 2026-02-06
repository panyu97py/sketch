# Sketch.Text

`Sketch.Text` 是 Sketch 的文本节点组件，用于在画布上渲染文本内容。通常作为 `Sketch.Root` 或 `Sketch.View` 的子节点使用。

## 适用场景

- 单行或多行文本渲染
- 标题、标签、说明文字等

## 功能特性

- 支持文本样式与对齐
- 根据宽度自动拆分文本

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

::: api {src="@sketchjs/vue/common/components/text.tsx" type="vue"}
:::

## 常用属性说明

- `text`：文本内容
- 样式常用 `fontSize`、`lineHeight`、`fontWeight`、`color`、`textAlign`

## 使用说明 / 注意事项

- `Sketch.Text` 必须挂载在 `Sketch.Root` 或 `Sketch.View` 内
- 建议通过 `StyleSheet.create()` 统一管理样式
- 大量文本频繁更新会影响渲染性能
- `lineHeight` 会影响文本布局与垂直对齐
