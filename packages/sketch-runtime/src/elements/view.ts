import { log } from '@/utils'
import { CreateSketchElementOpt, SketchElement } from './element'

/**
 * 视图元素
 */
export class SketchView extends SketchElement {
  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static create (opt?: CreateSketchElementOpt) {
    const { style } = opt || {}
    return new SketchView(style)
  }

  /**
   * 渲染函数
   */
  async render () {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchView.render', { left, top, width, height, node: this })

    // 渲染元素
    const { ctx } = this._root!
    if (!ctx) return
    const { backgroundColor = 'transparent', borderRadius = [0, 0, 0, 0] } = this.style || {}
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.beginPath()
    ctx.roundRect(left, top, width, height, borderRadius)
    ctx.fill()
    ctx.restore()
  }
}
