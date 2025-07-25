import { CreateSketchElementOpt, SketchElement } from './element'
import { StyleSheetDeclaration } from '@/types'
import { log } from '@/utils'

interface CreateSketchImageOpt extends CreateSketchElementOpt {
  src: string
}

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
  protected constructor (src: string, style?: StyleSheetDeclaration) {
    super(style)
    this.src = src
  }

  public static create (opt: CreateSketchImageOpt) {
    const { src, style } = opt
    return new SketchImage(src, style)
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
    if (!this._root?.renderable) return

    // 计算布局位置
    this._root.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchImage.render', { left, top, width, height, node: this })

    // 渲染元素
    const { backgroundColor = 'transparent', borderRadius = 0 } = this.style || {}
    const { ctx } = this._root
    if (!ctx) return

    const imageObj = await this.loadImage(this.src)
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.beginPath()
    ctx.roundRect(left, top, width, height, borderRadius)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(imageObj, left, top, width, height)
    ctx.restore()
  }
}
