/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @generated by enums.py

export const Align = /* #__PURE__ */(function (Align) {
  Align[Align.Auto = 0] = 'Auto'
  Align[Align.FlexStart = 1] = 'FlexStart'
  Align[Align.Center = 2] = 'Center'
  Align[Align.FlexEnd = 3] = 'FlexEnd'
  Align[Align.Stretch = 4] = 'Stretch'
  Align[Align.Baseline = 5] = 'Baseline'
  Align[Align.SpaceBetween = 6] = 'SpaceBetween'
  Align[Align.SpaceAround = 7] = 'SpaceAround'
  Align[Align.SpaceEvenly = 8] = 'SpaceEvenly'
  return Align
}({}))
export const BoxSizing = /* #__PURE__ */(function (BoxSizing) {
  BoxSizing[BoxSizing.BorderBox = 0] = 'BorderBox'
  BoxSizing[BoxSizing.ContentBox = 1] = 'ContentBox'
  return BoxSizing
}({}))
export const Dimension = /* #__PURE__ */(function (Dimension) {
  Dimension[Dimension.Width = 0] = 'Width'
  Dimension[Dimension.Height = 1] = 'Height'
  return Dimension
}({}))
export const Direction = /* #__PURE__ */(function (Direction) {
  Direction[Direction.Inherit = 0] = 'Inherit'
  Direction[Direction.LTR = 1] = 'LTR'
  Direction[Direction.RTL = 2] = 'RTL'
  return Direction
}({}))
export const Display = /* #__PURE__ */(function (Display) {
  Display[Display.Flex = 0] = 'Flex'
  Display[Display.None = 1] = 'None'
  Display[Display.Contents = 2] = 'Contents'
  return Display
}({}))
export const Edge = /* #__PURE__ */(function (Edge) {
  Edge[Edge.Left = 0] = 'Left'
  Edge[Edge.Top = 1] = 'Top'
  Edge[Edge.Right = 2] = 'Right'
  Edge[Edge.Bottom = 3] = 'Bottom'
  Edge[Edge.Start = 4] = 'Start'
  Edge[Edge.End = 5] = 'End'
  Edge[Edge.Horizontal = 6] = 'Horizontal'
  Edge[Edge.Vertical = 7] = 'Vertical'
  Edge[Edge.All = 8] = 'All'
  return Edge
}({}))
export const Errata = /* #__PURE__ */(function (Errata) {
  Errata[Errata.None = 0] = 'None'
  Errata[Errata.StretchFlexBasis = 1] = 'StretchFlexBasis'
  Errata[Errata.AbsolutePositionWithoutInsetsExcludesPadding = 2] = 'AbsolutePositionWithoutInsetsExcludesPadding'
  Errata[Errata.AbsolutePercentAgainstInnerSize = 4] = 'AbsolutePercentAgainstInnerSize'
  Errata[Errata.All = 2147483647] = 'All'
  Errata[Errata.Classic = 2147483646] = 'Classic'
  return Errata
}({}))
export const ExperimentalFeature = /* #__PURE__ */(function (ExperimentalFeature) {
  ExperimentalFeature[ExperimentalFeature.WebFlexBasis = 0] = 'WebFlexBasis'
  return ExperimentalFeature
}({}))
export const FlexDirection = /* #__PURE__ */(function (FlexDirection) {
  FlexDirection[FlexDirection.Column = 0] = 'Column'
  FlexDirection[FlexDirection.ColumnReverse = 1] = 'ColumnReverse'
  FlexDirection[FlexDirection.Row = 2] = 'Row'
  FlexDirection[FlexDirection.RowReverse = 3] = 'RowReverse'
  return FlexDirection
}({}))
export const Gutter = /* #__PURE__ */(function (Gutter) {
  Gutter[Gutter.Column = 0] = 'Column'
  Gutter[Gutter.Row = 1] = 'Row'
  Gutter[Gutter.All = 2] = 'All'
  return Gutter
}({}))
export const Justify = /* #__PURE__ */(function (Justify) {
  Justify[Justify.FlexStart = 0] = 'FlexStart'
  Justify[Justify.Center = 1] = 'Center'
  Justify[Justify.FlexEnd = 2] = 'FlexEnd'
  Justify[Justify.SpaceBetween = 3] = 'SpaceBetween'
  Justify[Justify.SpaceAround = 4] = 'SpaceAround'
  Justify[Justify.SpaceEvenly = 5] = 'SpaceEvenly'
  return Justify
}({}))
export const LogLevel = /* #__PURE__ */(function (LogLevel) {
  LogLevel[LogLevel.Error = 0] = 'Error'
  LogLevel[LogLevel.Warn = 1] = 'Warn'
  LogLevel[LogLevel.Info = 2] = 'Info'
  LogLevel[LogLevel.Debug = 3] = 'Debug'
  LogLevel[LogLevel.Verbose = 4] = 'Verbose'
  LogLevel[LogLevel.Fatal = 5] = 'Fatal'
  return LogLevel
}({}))
export const MeasureMode = /* #__PURE__ */(function (MeasureMode) {
  MeasureMode[MeasureMode.Undefined = 0] = 'Undefined'
  MeasureMode[MeasureMode.Exactly = 1] = 'Exactly'
  MeasureMode[MeasureMode.AtMost = 2] = 'AtMost'
  return MeasureMode
}({}))
export const NodeType = /* #__PURE__ */(function (NodeType) {
  NodeType[NodeType.Default = 0] = 'Default'
  NodeType[NodeType.Text = 1] = 'Text'
  return NodeType
}({}))
export const Overflow = /* #__PURE__ */(function (Overflow) {
  Overflow[Overflow.Visible = 0] = 'Visible'
  Overflow[Overflow.Hidden = 1] = 'Hidden'
  Overflow[Overflow.Scroll = 2] = 'Scroll'
  return Overflow
}({}))
export const PositionType = /* #__PURE__ */(function (PositionType) {
  PositionType[PositionType.Static = 0] = 'Static'
  PositionType[PositionType.Relative = 1] = 'Relative'
  PositionType[PositionType.Absolute = 2] = 'Absolute'
  return PositionType
}({}))
export const Unit = /* #__PURE__ */(function (Unit) {
  Unit[Unit.Undefined = 0] = 'Undefined'
  Unit[Unit.Point = 1] = 'Point'
  Unit[Unit.Percent = 2] = 'Percent'
  Unit[Unit.Auto = 3] = 'Auto'
  return Unit
}({}))
export const Wrap = /* #__PURE__ */(function (Wrap) {
  Wrap[Wrap.NoWrap = 0] = 'NoWrap'
  Wrap[Wrap.Wrap = 1] = 'Wrap'
  Wrap[Wrap.WrapReverse = 2] = 'WrapReverse'
  return Wrap
}({}))
const constants = {
  ALIGN_AUTO: Align.Auto,
  ALIGN_FLEX_START: Align.FlexStart,
  ALIGN_CENTER: Align.Center,
  ALIGN_FLEX_END: Align.FlexEnd,
  ALIGN_STRETCH: Align.Stretch,
  ALIGN_BASELINE: Align.Baseline,
  ALIGN_SPACE_BETWEEN: Align.SpaceBetween,
  ALIGN_SPACE_AROUND: Align.SpaceAround,
  ALIGN_SPACE_EVENLY: Align.SpaceEvenly,
  BOX_SIZING_BORDER_BOX: BoxSizing.BorderBox,
  BOX_SIZING_CONTENT_BOX: BoxSizing.ContentBox,
  DIMENSION_WIDTH: Dimension.Width,
  DIMENSION_HEIGHT: Dimension.Height,
  DIRECTION_INHERIT: Direction.Inherit,
  DIRECTION_LTR: Direction.LTR,
  DIRECTION_RTL: Direction.RTL,
  DISPLAY_FLEX: Display.Flex,
  DISPLAY_NONE: Display.None,
  DISPLAY_CONTENTS: Display.Contents,
  EDGE_LEFT: Edge.Left,
  EDGE_TOP: Edge.Top,
  EDGE_RIGHT: Edge.Right,
  EDGE_BOTTOM: Edge.Bottom,
  EDGE_START: Edge.Start,
  EDGE_END: Edge.End,
  EDGE_HORIZONTAL: Edge.Horizontal,
  EDGE_VERTICAL: Edge.Vertical,
  EDGE_ALL: Edge.All,
  ERRATA_NONE: Errata.None,
  ERRATA_STRETCH_FLEX_BASIS: Errata.StretchFlexBasis,
  ERRATA_ABSOLUTE_POSITION_WITHOUT_INSETS_EXCLUDES_PADDING: Errata.AbsolutePositionWithoutInsetsExcludesPadding,
  ERRATA_ABSOLUTE_PERCENT_AGAINST_INNER_SIZE: Errata.AbsolutePercentAgainstInnerSize,
  ERRATA_ALL: Errata.All,
  ERRATA_CLASSIC: Errata.Classic,
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: ExperimentalFeature.WebFlexBasis,
  FLEX_DIRECTION_COLUMN: FlexDirection.Column,
  FLEX_DIRECTION_COLUMN_REVERSE: FlexDirection.ColumnReverse,
  FLEX_DIRECTION_ROW: FlexDirection.Row,
  FLEX_DIRECTION_ROW_REVERSE: FlexDirection.RowReverse,
  GUTTER_COLUMN: Gutter.Column,
  GUTTER_ROW: Gutter.Row,
  GUTTER_ALL: Gutter.All,
  JUSTIFY_FLEX_START: Justify.FlexStart,
  JUSTIFY_CENTER: Justify.Center,
  JUSTIFY_FLEX_END: Justify.FlexEnd,
  JUSTIFY_SPACE_BETWEEN: Justify.SpaceBetween,
  JUSTIFY_SPACE_AROUND: Justify.SpaceAround,
  JUSTIFY_SPACE_EVENLY: Justify.SpaceEvenly,
  LOG_LEVEL_ERROR: LogLevel.Error,
  LOG_LEVEL_WARN: LogLevel.Warn,
  LOG_LEVEL_INFO: LogLevel.Info,
  LOG_LEVEL_DEBUG: LogLevel.Debug,
  LOG_LEVEL_VERBOSE: LogLevel.Verbose,
  LOG_LEVEL_FATAL: LogLevel.Fatal,
  MEASURE_MODE_UNDEFINED: MeasureMode.Undefined,
  MEASURE_MODE_EXACTLY: MeasureMode.Exactly,
  MEASURE_MODE_AT_MOST: MeasureMode.AtMost,
  NODE_TYPE_DEFAULT: NodeType.Default,
  NODE_TYPE_TEXT: NodeType.Text,
  OVERFLOW_VISIBLE: Overflow.Visible,
  OVERFLOW_HIDDEN: Overflow.Hidden,
  OVERFLOW_SCROLL: Overflow.Scroll,
  POSITION_TYPE_STATIC: PositionType.Static,
  POSITION_TYPE_RELATIVE: PositionType.Relative,
  POSITION_TYPE_ABSOLUTE: PositionType.Absolute,
  UNIT_UNDEFINED: Unit.Undefined,
  UNIT_POINT: Unit.Point,
  UNIT_PERCENT: Unit.Percent,
  UNIT_AUTO: Unit.Auto,
  WRAP_NO_WRAP: Wrap.NoWrap,
  WRAP_WRAP: Wrap.Wrap,
  WRAP_WRAP_REVERSE: Wrap.WrapReverse
}
export default constants
