# Sketch.View

`Sketch.View` 是 Sketch 的视图容器组件，用于包裹和布局子节点。  
它是构建 Sketch 渲染树的重要容器，通常用于组织和排列子元素。

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

- `Sketch.View` 可作为根节点或任意层级容器使用
- 建议通过 `StyleSheet.create()` 管理样式和布局
- 可嵌套多个 `Sketch.View` 进行复杂布局
