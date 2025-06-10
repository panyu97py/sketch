type Size = number | 'auto' | `${number}%`

type PositionSize = number | `${number}%`

type Color = `#${string}` | `rgba(${number}, ${number}, ${number}, ${number})`

type YogaSupportedCSSProperties =
  | 'boxSizing'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
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
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
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

type ExtendsCSSDeclaration = Pick<CSSStyleDeclaration, Exclude<YogaSupportedCSSProperties, OverwriteCSSProperties>>

export interface StyleSheetDeclaration extends Partial<ExtendsCSSDeclaration> {
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
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}

// 定义过滤空值的类型
export type NonEmpty<T> = T extends '' | null | undefined ? never : T;

export type FilterInvalidValues<T> = T extends '' | null | undefined | any[] ? never : T;

export type StyleSheetCssValues = NonEmpty<StyleSheetDeclaration[keyof StyleSheetDeclaration]>;

export type StyleSheetCssProperty = keyof StyleSheetDeclaration
