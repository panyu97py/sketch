# Sketch.Root

`Sketch.Root` 是 Sketch 应用的根节点组件，用于初始化渲染环境、挂载 `Sketch` 实例，并驱动整棵渲染树的渲染。

## 适用场景

- 在 Web/H5 环境中绑定 `<canvas>` 并启动渲染
- 管理渲染生命周期（初始化、更新、重绘）
- 作为整棵渲染树的容器

## 功能特性

- 持有 `canvas/ctx` 并驱动渲染
- 统一分发 `initialized` 与 `elementUpdate` 事件

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

- `Sketch.Root` 必须在 `sketch.init({ canvas, ctx })` 成功后使用
- 若 `autoRender` 为 `false`，需要手动调用 `sketch.render()`
- `style.width/height` 会决定 Canvas 像素尺寸
