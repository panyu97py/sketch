import { SketchElement } from './element'
import { FontStyle, StyleSheetCssProperties } from '../types'
import { DEFAULT_FONT_STYLE } from '../constants'

/**
 * 基础文本元素
 */
class SketchBaseText extends SketchElement {
  /**
   * 生成文本样式
   * @param fontStyle
   */
  generateFontStyle = (fontStyle: FontStyle) => {
    const finalFontStyle = { ...DEFAULT_FONT_STYLE, ...fontStyle }
    const { fontSize, fontWeight, lineHeight, fontFamily } = finalFontStyle
    return `normal ${fontWeight} ${fontSize}px/${lineHeight} ${fontFamily}`
  }

  /**
   * 计算文本宽度
   * @param text
   */
  calculateTextWidth = (text: string) => {
    if (!this._root) return
    this._root.ctx.save()
    const { fontSize, fontWeight, lineHeight } = this.style || {}
    this._root.ctx.font = this.generateFontStyle({ fontSize, fontWeight, lineHeight })
    const { width } = this._root.ctx.measureText(text)
    this._root.ctx.restore()
    return { width }
  }

  /**
   * 根据宽度拆分文本
   * @param text
   * @param maxWidth
   */
  splitTextByWidth = (text: string, maxWidth: number) => {
    if (!this._root) return []
    const textArr = `${text}`.split('')
    const intVal = { curLineText: '', lineTextArr: [] }
    const { lineTextArr } = textArr.reduce((result, textItem: string, index: number, list: string[]) => {
      const { curLineText, lineTextArr } = result
      const tempCurLineText = curLineText + textItem
      const isLast = index === list.length - 1
      const { width = 0 } = this.calculateTextWidth(tempCurLineText) || {}
      if (width > maxWidth && !isLast) return { curLineText: textItem, lineTextArr: [...lineTextArr, curLineText] }
      if (isLast) return { curLineText: '', lineTextArr: [...lineTextArr, curLineText, textItem] }
      return { curLineText: tempCurLineText, lineTextArr }
    }, intVal)
    return lineTextArr
  }

  /**
   * 渲染函数
   */
  render = async () => Promise.resolve()
}

/**
 * 单行文本元素
 */
class SketchSingLineText extends SketchBaseText {
  /**
   * 文本内容
   */
  private readonly text: string

  /**
   * 构造函数
   * @param text 文本内容
   * @param style 样式
   */
  constructor (text: string, style?: StyleSheetCssProperties) {
    super(style)
    this.text = text
  }

  /**
   * 元素初始化
   * @desc 初始化设计元素高度
   */
  onMount () {
    super.onMount()
    const { height, lineHeight } = this.style || {}
    this.layout.setHeight(height || lineHeight)
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
    const { color = 'black', fontSize, fontWeight, lineHeight } = this.style || {}
    this._root.ctx.save()
    this._root.ctx.textBaseline = 'bottom'
    this._root.ctx.fillStyle = color
    this._root.ctx.font = this.generateFontStyle({ fontSize, fontWeight, lineHeight })
    this._root.ctx.fillText(this.text, left, top + height, width)
    this._root.ctx.restore()
  }
}

/**
 * 文本元素
 */
export class SketchText extends SketchBaseText {
  /**
   * 文本内容
   */
  private readonly text: string

  /**
   * 构造函数
   * @param text 文本内容
   * @param style 样式
   */
  constructor (text: string, style?: StyleSheetCssProperties) {
    super(style)
    this.text = text
  }

  /**
   * 元素初始化
   * @desc 初始化基于宽度拆分文字
   */
  public onMount () {
    super.onMount()
    if (!this._root) return
    const { lineHeight = 0 } = this.style || {}
    const { width } = this.getElementSize()
    const lineTextArr = this.splitTextByWidth(this.text, width)
    const height = lineTextArr.length * lineHeight
    this.layout.setHeight(height)
    lineTextArr.forEach((lineText) => {
      const textElement = new SketchSingLineText(lineText, this.style)
      this.appendChild(textElement)
    })
  }

  /**
   * 渲染函数
   */
  render = async () => Promise.resolve()
}
