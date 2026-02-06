# Sketch.View

`Sketch.View` 是 Sketch 的布局容器组件，用于包裹和排列子节点。它是构建渲染树的常用容器节点。

## 适用场景

- 构建布局层级
- 通过 Flexbox 组织子节点
- 组合复杂图形结构

## 功能特性

- 支持嵌套与复用
- 布局由 Yoga 统一计算

## 示例

### React

<<< @/examples/react/sketch-view.tsx

### Vue

<<< @/examples/vue/sketch-view.tsx

## API 属性

### React

::: api {src="@sketchjs/react/common/components/view.tsx" type="react"}
:::

### Vue

::: api {src="@sketchjs/vue/common/components/view.tsx" type="vue"}
:::

## 使用说明 / 注意事项

- `Sketch.View` 可作为根节点或任意层级容器
- 建议通过 `StyleSheet.create()` 管理样式
- 支持嵌套多个 `Sketch.View` 进行复杂布局
- 布局行为遵循 Flexbox，推荐显式设置 `width/height` 或 `flex`
