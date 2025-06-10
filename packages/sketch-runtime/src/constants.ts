import { Justify, Align, FlexDirection, Wrap, BoxSizing, PositionType } from '@sketchjs/yoga-layout'
import { StyleSheetCssValues, FontStyle, StyleSheetCssProperty, FilterInvalidValues } from './types'

export const DEFAULT_FONT_STYLE: Required<FontStyle> = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: 20,
  fontFamily: 'PingFang SC'
}

export const CSS_TO_YOGA_MAP: Partial<Record<StyleSheetCssProperty, Record<FilterInvalidValues<StyleSheetCssValues>, any>>> = {
  flexDirection: {
    row: FlexDirection.Row,
    column: FlexDirection.Column,
    'row-reverse': FlexDirection.RowReverse,
    'column-reverse': FlexDirection.ColumnReverse
  },
  justifyContent: {
    center: Justify.Center,
    'flex-start': Justify.FlexStart,
    'flex-end': Justify.FlexEnd,
    'space-between': Justify.SpaceBetween,
    'space-around': Justify.SpaceAround,
    'space-evenly': Justify.SpaceEvenly
  },
  alignItems: {
    auto: Align.Auto,
    center: Align.Center,
    stretch: Align.Stretch,
    baseline: Align.Baseline,
    'flex-start': Align.FlexStart,
    'flex-end': Align.FlexEnd
  },
  alignSelf: {
    auto: Align.Auto,
    center: Align.Center,
    stretch: Align.Stretch,
    baseline: Align.Baseline,
    'flex-start': Align.FlexStart,
    'flex-end': Align.FlexEnd
  },
  flexWrap: {
    wrap: Wrap.Wrap,
    nowrap: Wrap.NoWrap,
    'wrap-reverse': Wrap.WrapReverse
  },
  boxSizing: {
    'border-box': BoxSizing.BorderBox,
    'content-box': BoxSizing.ContentBox
  },
  position: {
    static: PositionType.Static,
    relative: PositionType.Relative,
    absolute: PositionType.Absolute
  }
}
