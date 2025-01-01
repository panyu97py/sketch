import { SketchElement } from './element'
import { StyleSheetCssProperties } from '../types'

const imageCache = new Map<string, HTMLImageElement>()

export class SketchImage extends SketchElement {
  private readonly src: string

  constructor (src: string, style?: StyleSheetCssProperties) {
    super(style)
    this.src = src
  }

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

  render = async () => {
    if (!this._root) return

    // 计算布局位置
    const { left, top } = this.getElementAbsolutePosition()
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
