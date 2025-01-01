// 定义过滤空值的类型
type NonEmpty<T> = T extends '' | null | undefined ? never : T;

type Size = number | 'auto' | `${number}%`

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
    | 'margin'
    | 'marginTop'
    | 'marginRight'
    | 'marginBottom'
    | 'marginLeft'
    | 'padding'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
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
}

export type StyleSheetCssValues = NonEmpty<StyleSheetCssProperties[keyof StyleSheetCssProperties]>;
