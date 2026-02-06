import { DEFAULT_FONT_STYLE, DEFAULT_FONT_STYLE_PROPERTY } from '@/constants'
import { FontStyle, StyleSheetCssProperty, StyleSheetDeclaration } from '@/types'
import { log } from '@/utils'
import { CreateSketchElementOpt, SketchElement } from './element'
import { Align, Edge } from '@sketchjs/yoga-layout'

/**
 * 基础文本元素
 */
class SketchBaseText extends SketchElement {
  /**
   * 单行文本可用样式属性
   */
  readonly SINGLE_LINE_TEXT_USE_ABLE_STYLE_KEYS: StyleSheetCssProperty[] = [...DEFAULT_FONT_STYLE_PROPERTY, 'color', 'textAlign']

  /**
   * 生成文本样式
   * @param style
   */
  generateFontStyle = (style: FontStyle) => {
    const finalStyle = { ...DEFAULT_FONT_STYLE, ...style }
    const { fontStyle, fontWeight, fontSize, fontFamily } = finalStyle
    const finalFontSize = `${fontSize}px`
    return `${fontStyle} ${fontWeight} ${finalFontSize} ${fontFamily}`
  }

  /**
   * 生成单行文本样式
   * @param style
   */
  generateSketchSingleLineTextStyle = (style: StyleSheetDeclaration) => {
    return Object.keys(style).reduce<StyleSheetDeclaration>((result, key: StyleSheetCssProperty) => {
      if (!this.SINGLE_LINE_TEXT_USE_ABLE_STYLE_KEYS.includes(key)) return result
      return { ...result, [key]: style[key] }
    }, {})
  }

  /**
   * 计算文本宽度
   * @param text
   */
  calculateTextWidth = (text: string) => {
    if (!this._root?.ctx) return
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
    if (!this._root) return {}
    if (!maxWidth || maxWidth === Infinity) return { firstLineText: text, textLineArr: [text], lineCount: 1 }
    const textLineArr = `${text}`.replace(/\r\n/g, '\n').split(/(\n)/)
    const textArr = textLineArr.reduce<string[]>((prev, cur) => {
      return cur === '\n' ? [...prev, cur] : [...prev, ...cur.split('')]
    }, [])
    const intVal = { curLineText: '', lineTextArr: [] }
    const { lineTextArr } = textArr.reduce((result, textItem: string, index: number, list: string[]) => {
      const { curLineText, lineTextArr } = result
      const tempCurLineText = curLineText + textItem
      const isLast = index === list.length - 1
      const { width = 0 } = this.calculateTextWidth(tempCurLineText) || {}

      // 不是最后一个字符，当前行宽度小于最大宽度，需要将当前字符放到当前行计算
      if (!isLast && width < maxWidth) return { curLineText: tempCurLineText, lineTextArr }

      // 不是最后一个字符，当前行宽度大于最大宽度，需要将当前字符放到下一行计算
      if (!isLast && width >= maxWidth) return { curLineText: textItem, lineTextArr: [...lineTextArr, curLineText] }

      // 最后一个字符，当前行宽度小于最大宽度，需要将当前字符放到当前行
      if (isLast && width < maxWidth) return { curLineText: '', lineTextArr: [...lineTextArr, tempCurLineText] }

      // 最后一个字符，当前行宽度大于最大宽度，需要将当前字符放到下一行
      if (isLast && width >= maxWidth) return { curLineText: '', lineTextArr: [...lineTextArr, curLineText, textItem] }

      // 默认兜底，但不会被执行
      return { curLineText: '', lineTextArr }
    }, intVal)

    const [firstLineText] = lineTextArr

    return { firstLineText, lineTextArr, lineCount: lineTextArr.length }
  }
}

interface CreateSketchSingLineTextOpt extends CreateSketchElementOpt{
  text: string,
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
  protected constructor (text: string, style?: StyleSheetDeclaration) {
    super(style)
    this.text = text
  }

  public static create (opt: CreateSketchSingLineTextOpt) {
    const { text, style } = opt
    return new SketchSingLineText(text, style)
  }

  /**
   * 元素初始化
   * @desc 初始化设计元素高度
   */
  async onMount () {
    await super.onMount()
    const { lineHeight } = this.style || {}
    const { width: textWidth = 0 } = this.calculateTextWidth(this.text) || {}
    this.layout!.setHeight(lineHeight)
    this.layout!.setWidth(textWidth)
  }

  /**
   * 渲染函数
   */
  render = () => {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchSingLineText.render', { left, top, width, height, node: this })

    // 渲染元素
    const { color = 'black' } = this.style || {}
    const { ctx } = this._root!
    if (!ctx) return

    ctx.save()
    ctx.textBaseline = 'middle'
    ctx.fillStyle = color
    ctx.font = this.generateFontStyle(this.style as FontStyle)
    ctx.fillText(this.text, left, top + height / 2, width)
    ctx.restore()
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
  protected constructor (text: string, style?: StyleSheetDeclaration) {
    super(style)
    this.text = text
  }

  public static create (opt: CreateSketchSingLineTextOpt) {
    const { text, style } = opt
    return new SketchText(text, style)
  }

  /**
   * 元素初始化
   * @desc 初始化基于宽度拆分文字
   */
  public async onMount () {
    if (!this._root) return
    await super.onMount()
    const { lineHeight = 0 } = this.style || {}
    const { width, height } = this.getElementSize()
    const paddingLeft = this.layout!.getComputedPadding(Edge.Left) || 0
    const paddingRight = this.layout!.getComputedPadding(Edge.Right) || 0
    const paddingTop = this.layout!.getComputedPadding(Edge.Top) || 0
    const paddingBottom = this.layout!.getComputedPadding(Edge.Bottom) || 0

    const textContainerWidth = width ? width - paddingLeft - paddingRight : Infinity
    const textContainerHeight = height ? height - paddingTop - paddingBottom : Infinity

    const { lineTextArr = [], firstLineText = '', lineCount = 0 } = this.splitTextByWidth(this.text, textContainerWidth)
    const { width: firstLineTextWidth = 0 } = this.calculateTextWidth(firstLineText) || {}

    const finalWidth = (() => {
      if (textContainerWidth && textContainerWidth !== Infinity) return width
      return firstLineTextWidth + paddingTop + paddingBottom
    })()

    const finalHeight = (() => {
      if (textContainerHeight && textContainerHeight !== Infinity) return height
      return lineCount * lineHeight + paddingTop + paddingBottom
    })()

    const finalJustifyContent = (() => {
      const { textAlign = 'left' } = this.style || {}
      if (textAlign === 'center') return Align.Center
      if (textAlign === 'right') return Align.FlexEnd
      if (textAlign === 'left') return Align.FlexStart
      return Align.FlexStart
    })()

    this.layout!.setWidth(finalWidth)
    this.layout!.setHeight(finalHeight)
    this.layout!.setAlignItems(finalJustifyContent)

    const singleLineTextStyle = this.generateSketchSingleLineTextStyle(this.style || {})
    lineTextArr.forEach((lineText) => {
      const textElement = SketchSingLineText.create({ text: lineText, style: singleLineTextStyle })
      return this.appendChild(textElement)
    })
  }

  public onUnmount () {
    this.childNodes.forEach((childNode) => this.removeChild(childNode))
    super.onUnmount()
  }

  /**
   * 渲染函数
   */
  /**
   * 渲染函数
   */
  render = () => {
    if (!this.renderable) return

    // 计算布局位置
    this._root!.calculateLayout()
    const { left, top } = this.calculateElementAbsolutePosition()
    const { width, height } = this.getElementSize()

    log('SketchText.render', { left, top, width, height, node: this })
  }
}
