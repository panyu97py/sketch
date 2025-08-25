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
   * 图片对象
   * @private
   */
  private imageObj: HTMLImageElement

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
   * 元素初始化
   * @desc 初始化图片对象
   */
  public async onMount () {
    await super.onMount()
    this.imageObj = await this.loadImage(this.src)
  }

  /**
   * 渲染函数
   */
  render = async () => {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchImage.render', { left, top, width, height, node: this })

    // 渲染元素
    const { backgroundColor = 'transparent', borderRadius = [0, 0, 0, 0] } = this.style || {}
    const { ctx } = this._root!
    if (!ctx) return

    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.beginPath()
    ctx.roundRect(left, top, width, height, borderRadius)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(this.imageObj, left, top, width, height)
    ctx.restore()
  }
}
