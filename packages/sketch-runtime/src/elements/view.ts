import { SketchElement } from './element'

export class SketchView extends SketchElement {
  render = () => {
    if (!this._root) return

    // 计算布局位置
    this._root.calculateLayout()
    const left = this.layout.getComputedLeft()
    const top = this.layout.getComputedTop()
    const width = this.layout.getComputedWidth()
    const height = this.layout.getComputedHeight()

    // 渲染元素
    const { backgroundColor = 'transparent' } = this.style || {}
    this._root.ctx.save()
    this._root.ctx.fillStyle = backgroundColor
    this._root.ctx.fillRect(left, top, width, height)
    this._root.ctx.restore()
  }
}
