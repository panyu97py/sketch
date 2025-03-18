import { CreateSketchElementOpt, SketchElement } from './element'
import { sketchRuntimeDebug } from '../utils'

/**
 * 视图元素
 */
export class SketchView extends SketchElement {
  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static create (opt: CreateSketchElementOpt) {
    const { style } = opt
    return new SketchView(style)
  }

  /**
   * 渲染函数
   */
  async render () {
    if (!this._root || !this._root.ctx) return

    // 计算布局位置
    this._root.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    sketchRuntimeDebug('SketchView.render', { left, top, width, height, node: this })

    // 渲染元素
    const { backgroundColor = 'transparent' } = this.style || {}
    this._root.ctx.save()
    this._root.ctx.fillStyle = backgroundColor
    this._root.ctx.fillRect(left, top, width, height)
    this._root.ctx.restore()
  }
}
