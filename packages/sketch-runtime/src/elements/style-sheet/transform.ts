import { StyleSheetCssProperty, StyleSheetDeclaration } from '@/types'
import { isNumber } from 'lodash-es'

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
    const { cssProperty, cssValue, source, result } = opt

    const propertyIndexMap: Record<string, number> = {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 1,
      borderBottomRightRadius: 2,
      borderBottomLeftRadius: 3
    }

    const propertyIndex = propertyIndexMap[cssProperty]

    // 获取原始 radius，确保为数组
    const rawSourceRadius = source.borderRadius ?? 0
    const defaultRadius = Array.isArray(rawSourceRadius) ? rawSourceRadius : new Array(4).fill(rawSourceRadius)

    // 获取当前已应用的 radius
    const currentRadius = result.borderRadius
    const baseRadius = Array.isArray(currentRadius) ? currentRadius : defaultRadius

    if (cssProperty === 'borderRadius') return { ...result, borderRadius: baseRadius }

    const finalRadius = baseRadius.map((radius, index) => {
      const isTarget = index === propertyIndex
      return isTarget && isNumber(cssValue) ? cssValue : radius
    })

    return { ...result, borderRadius: finalRadius }
  }
})
