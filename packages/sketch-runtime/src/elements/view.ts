import { SketchElement } from './element'

export class SketchView extends SketchElement {
  render = async () => {
    if (!this._root) return

    // 计算布局位置
    this._root.calculateLayout()
    const { left, top } = this.getElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    // 渲染元素
    const { backgroundColor = 'transparent' } = this.style || {}
    this._root.ctx.save()
    this._root.ctx.fillStyle = backgroundColor
    this._root.ctx.fillRect(left, top, width, height)
    this._root.ctx.restore()
  }
}
