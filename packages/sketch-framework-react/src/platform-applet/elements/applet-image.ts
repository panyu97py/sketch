import Taro from '@tarojs/taro'
import { CreateSketchElementOpt, SketchImage } from '@sketchjs/runtime'

interface CreateSketchAppletImageOpt extends CreateSketchElementOpt {
  src: string
}

/**
 * 图片缓存
 */
const imageCache = new Map<string, HTMLImageElement>()

export class SketchAppletImage extends SketchImage {
  public static  create (opt: CreateSketchAppletImageOpt) {
    const { src, style } = opt
    return new SketchAppletImage(src, style)
  }

  /**
   * 加载图片
   * @param url
   */
  loadImage = async (url: string) => {
    if (!this._root) return
    if (imageCache[url]) return imageCache[url]
    const image = (this._root.canvas as unknown as Taro.Canvas).createImage()
    return new Promise((resolve, reject) => {
      image.onload = () => {
        imageCache[url] = image
        resolve(image)
      }
      image.onerror = (error)=> reject(error)
      image.src = url // 要加载的图片 url
    })
  }
}
