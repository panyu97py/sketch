# Sketch.Image

`Sketch.Image` 是 Sketch 的图片节点组件，用于在画布上渲染图片内容。通常作为 `Sketch.Root` 或 `Sketch.View` 的子节点使用。

## 适用场景

- 渲染本地或网络图片
- 作为背景图、头像、图标等图像元素

## 功能特性

- 图片加载与缓存复用
- 支持圆角裁剪与布局尺寸控制

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

## 常用属性说明

- `src`：图片地址或资源路径
- `onLoad`：图片加载完成回调
- `onError`：图片加载失败回调

## 使用说明 / 注意事项

- `Sketch.Image` 必须挂载在 `Sketch.Root` 或 `Sketch.View` 内
- 样式建议通过 `StyleSheet.create()` 管理，常用 `width/height/borderRadius`
- 大量图片频繁更新会影响渲染性能
- 同一 `src` 会被缓存复用，减少重复加载成本
