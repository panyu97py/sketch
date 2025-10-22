# Sketch.Root

`Sketch.Root` 是 Sketch 应用的根节点组件，用于：

- 初始化渲染环境
- 挂载 Sketch 实例
- 响应生命周期事件（初始化完成 / 元素更新）

通常与 `<canvas>` 配合使用，是整个渲染树的核心容器。

## 示例

### React

<<< @/examples/react/sketch-root.tsx

### Vue

<<< @/examples/vue/sketch-root.tsx

## API 属性

### React

::: api {src="@sketchjs/react/common/components/root.tsx" type="react"}
:::

### Vue

::: api {src="@sketchjs/vue/common/components/root.tsx" type="vue"}
:::

## 使用说明 / 注意事项

- 若 `autoRender` 为 `false`，需手动调用 `sketch.render()`
- 对于性能优化，可关闭 `autoRender` 并手动触发渲染
- 样式使用 `StyleSheet.create()` 统一管理
