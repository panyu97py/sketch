import YogaLayout from 'yoga-layout'
import { StyleSheetCssProperties, StyleSheetCssValues, FontStyle } from './types'

export const DEFAULT_FONT_STYLE: Required<FontStyle> = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: 20,
  fontFamily: 'PingFang SC'
}

export const CSS_TO_YOGA_MAP: Partial<Record<keyof StyleSheetCssProperties, Record<StyleSheetCssValues, any>>> = {
  flexDirection: {
    row: YogaLayout.FLEX_DIRECTION_ROW,
    column: YogaLayout.FLEX_DIRECTION_COLUMN,
    'row-reverse': YogaLayout.FLEX_DIRECTION_ROW_REVERSE,
    'column-reverse': YogaLayout.FLEX_DIRECTION_COLUMN_REVERSE
  },
  justifyContent: {
    center: YogaLayout.JUSTIFY_CENTER,
    'flex-start': YogaLayout.JUSTIFY_FLEX_START,
    'flex-end': YogaLayout.JUSTIFY_FLEX_END,
    'space-between': YogaLayout.JUSTIFY_SPACE_BETWEEN,
    'space-around': YogaLayout.JUSTIFY_SPACE_AROUND,
    'space-evenly': YogaLayout.JUSTIFY_SPACE_EVENLY
  },
  alignItems: {
    center: YogaLayout.ALIGN_CENTER,
    stretch: YogaLayout.ALIGN_STRETCH,
    baseline: YogaLayout.ALIGN_BASELINE,
    'flex-start': YogaLayout.ALIGN_FLEX_START,
    'flex-end': YogaLayout.ALIGN_FLEX_END
  },
  alignSelf: {
    auto: YogaLayout.ALIGN_AUTO,
    center: YogaLayout.ALIGN_CENTER,
    stretch: YogaLayout.ALIGN_STRETCH,
    baseline: YogaLayout.ALIGN_BASELINE,
    'flex-start': YogaLayout.ALIGN_FLEX_START,
    'flex-end': YogaLayout.ALIGN_FLEX_END
  },
  flexWrap: {
    wrap: YogaLayout.WRAP_WRAP,
    nowrap: YogaLayout.WRAP_NO_WRAP,
    'wrap-reverse': YogaLayout.WRAP_WRAP_REVERSE
  },
  boxSizing: {
    'border-box': YogaLayout.BOX_SIZING_BORDER_BOX,
    'content-box': YogaLayout.BOX_SIZING_CONTENT_BOX
  },
  position: {
    static: YogaLayout.POSITION_TYPE_STATIC,
    relative: YogaLayout.POSITION_TYPE_RELATIVE,
    absolute: YogaLayout.POSITION_TYPE_ABSOLUTE
  }
}
