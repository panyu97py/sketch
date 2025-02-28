import { CreateSketchElementOpt, SketchElement } from './element'

/**
 * 视图元素
 */
export class SketchView extends SketchElement {
  /**
   * 静态工厂方法，返回异步初始化后的实例
   */
  public static async create (opt: CreateSketchElementOpt) {
    const element = new SketchView()
    await element.init(opt)
    return element
  }

  /**
   * 渲染函数
   */
  async render () {
    if (!this._root) return

    // 计算布局位置
    this._root.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    // 渲染元素
    const { backgroundColor = 'transparent' } = this.style || {}
    this._root.ctx.save()
    this._root.ctx.fillStyle = backgroundColor
    this._root.ctx.fillRect(left, top, width, height)
    this._root.ctx.restore()
  }
}
