# StyleSheet

`StyleSheet` 用于定义和管理 Sketch 节点样式。它提供与 CSS 类似的声明方式，并将布局相关属性映射到 Yoga Layout。

## 适用场景

- 统一管理节点样式与布局
- 在不同节点间复用样式定义

## 基础用法

```ts
import { StyleSheet } from '@sketchjs/runtime'

export const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 28,
    color: '#333333',
    textAlign: 'center'
  }
})
```

## 常用样式属性

- `width` / `height` / `minWidth` / `minHeight` / `maxWidth` / `maxHeight`
- `flex` / `flexDirection` / `flexWrap`
- `justifyContent` / `alignItems` / `alignSelf`
- `margin` / `marginTop` / `marginRight` / `marginBottom` / `marginLeft`
- `padding` / `paddingTop` / `paddingRight` / `paddingBottom` / `paddingLeft`
- `position` / `top` / `right` / `bottom` / `left`
- `backgroundColor` / `borderRadius`
- `fontSize` / `fontWeight` / `lineHeight` / `fontFamily` / `textAlign` / `color`

## 使用说明 / 注意事项

- `StyleSheet.create()` 会返回原对象，建议统一管理样式
- 布局相关属性会映射到 Yoga Layout，文本相关属性用于文本渲染
- 数值通常以像素为单位，百分比值适用于部分布局属性
- `borderRadius` 支持数组写法，可分别设置四个角
