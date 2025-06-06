// 定义过滤空值的类型
type NonEmpty<T> = T extends '' | null | undefined ? never : T;

type Size = number | 'auto' | `${number}%`

type PositionSize = number | `${number}%`

type Color = `#${string}` | `rgba(${number}, ${number}, ${number}, ${number})`

type YogaSupportedCSSProperties =
  | 'boxSizing'
  | 'flex'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignSelf'
  | 'position'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'gap'
  | 'backgroundColor'
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'textAlign'
  | 'color'

type OverwriteCSSProperties =
  | 'flex'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'textAlign'
  | 'color'

type ExtendsCSSProperties = Pick<CSSStyleDeclaration, Exclude<YogaSupportedCSSProperties, OverwriteCSSProperties>>

export interface StyleSheetCssProperties extends Partial<ExtendsCSSProperties> {
  display?: 'flex' | 'none' | 'contents'
  width?: Size;
  minWidth?: Size;
  maxWidth?: Size;
  height?: Size;
  minHeight?: Size;
  maxHeight?: Size;
  margin?: Size;
  marginTop?: Size;
  marginRight?: Size;
  marginBottom?: Size;
  marginLeft?: Size;
  padding?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  paddingTop?: Size;
  paddingBottom?: Size;
  color?: Color;
  lineHeight?: number;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: CanvasTextAlign
  flex?: number;
  top?: PositionSize;
  right?: PositionSize;
  bottom?: PositionSize;
  left?: PositionSize;
}

export type StyleSheetCssValues = NonEmpty<StyleSheetCssProperties[keyof StyleSheetCssProperties]>;
