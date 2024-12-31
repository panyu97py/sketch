type YogaSupportedCSSProperties =
    | 'flexDirection'
    | 'flex'
    | 'justifyContent'
    | 'alignItems'
    | 'alignSelf'
    | 'width'
    | 'height'
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
    | 'borderRadius';

export type StyleSheetCssProperties = Pick<CSSStyleDeclaration, YogaSupportedCSSProperties>