# Sketch.Element

`Sketch.Element` 是所有 Sketch 节点的基类，提供通用的生命周期、布局与事件能力。通常在运行时层面直接使用，在 React/Vue 框架中由组件自动创建和管理。

## 适用场景

- 自定义元素或扩展渲染能力
- 直接使用运行时 API 进行节点树操作

## 核心能力

- 样式管理：`setStyle()` 应用样式并触发布局
- 节点树操作：`appendChild()`、`insertBefore()`、`removeChild()`
- 生命周期：`onMount()`、`onUnmount()`
- 事件：`addEventListener()`、`removeEventListener()`、`dispatchEvent()`

## 使用说明 / 注意事项

- 子类需要实现 `render()` 来完成绘制逻辑
- 布局由 Yoga 计算，样式建议通过 `StyleSheet.create()` 统一管理
- 在框架层使用时，通常不需要直接操作 `Sketch.Element`

## 扩展方式

- 继承 `SketchElement` 并实现 `render()`，完成自定义绘制
- 在 `onMount()` 中准备资源（图片、字体等）
