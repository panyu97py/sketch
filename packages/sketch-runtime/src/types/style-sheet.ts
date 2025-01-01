// 定义过滤空值的类型
type NonEmpty<T> = T extends '' | null | undefined ? never : T;

type Size = number | 'auto' | `${number}%`

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

export interface StyleSheetCssProperties extends Partial<Pick<CSSStyleDeclaration, YogaSupportedCSSProperties>> {
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
}

export type StyleSheetCssValues = NonEmpty<StyleSheetCssProperties[keyof StyleSheetCssProperties]>;
