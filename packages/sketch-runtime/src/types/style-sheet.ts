// 定义过滤空值的类型
type NonEmpty<T> = T extends '' | null | undefined ? never : T;

type YogaSupportedCSSProperties =
    | 'width'
    | 'minWidth'
    | 'maxWidth'
    | 'height'
    | 'minHeight'
    | 'maxHeight'
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

export interface StyleSheetCssProperties extends Pick<CSSStyleDeclaration, YogaSupportedCSSProperties> {
    display?: 'flex' | 'none' | 'contents'
}


export type StyleSheetCssValues = NonEmpty<StyleSheetCssProperties[keyof StyleSheetCssProperties]>;