import { SketchElement } from './element'
import { StyleSheetCssProperties } from '../types'

/**
 * 图片缓存
 */
const imageCache = new Map<string, HTMLImageElement>()

/**
 * 图片元素
 */
export class SketchImage extends SketchElement {
  /**
   * 图片地址
   * @private
   */
  private readonly src: string

  /**
   * 构造函数
   * @param src 图片地址
   * @param style 样式
   */
  constructor (src: string, style?: StyleSheetCssProperties) {
    super(style)
    this.src = src
  }

  /**
   * 加载图片
   * @param src
   */
  loadImage = async (src: string) => {
    if (!imageCache.has(src)) {
      const tempImageObj = document.createElement('img')
      tempImageObj.src = src
      await new Promise((resolve, reject) => {
        tempImageObj.onload = resolve
        tempImageObj.onerror = reject
      })
      imageCache.set(src, tempImageObj)
    }
    return imageCache.get(src)!
  }

  /**
   * 渲染函数
   */
  render = async () => {
    if (!this._root) return

    // 计算布局位置
    this._root.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    // 渲染元素
    const { backgroundColor = 'transparent' } = this.style || {}
    const imageObj = await this.loadImage(this.src)
    this._root.ctx.save()
    this._root.ctx.fillStyle = backgroundColor
    this._root.ctx.fillRect(left, top, width, height)
    this._root.ctx.drawImage(imageObj, left, top, width, height)
    this._root.ctx.restore()
  }
}
