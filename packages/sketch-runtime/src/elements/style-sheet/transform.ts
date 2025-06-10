import { StyleSheetCssProperty, StyleSheetDeclaration } from '@/types'

type StyleTransformOpt<K extends keyof StyleSheetDeclaration> = {
  cssProperty: K;
  cssValue: StyleSheetDeclaration[K]; // 正确类型推导
  source: StyleSheetDeclaration;
  result: StyleSheetDeclaration;
};

export interface StyleTransformStrategy<K extends StyleSheetCssProperty = StyleSheetCssProperty> {
  match: Array<K>;
  apply: (opt: StyleTransformOpt<K>) => StyleSheetDeclaration;
}

const createStyleTransformStrategy = <const K extends StyleSheetCssProperty>(strategy:StyleTransformStrategy<K>) => strategy

export const borderRadiusTransform = createStyleTransformStrategy({
  match: ['borderRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
  apply: (opt) => {
    const { cssProperty, cssValue, result } = opt
    return { ...result, [cssProperty]: cssValue }
  }
})
