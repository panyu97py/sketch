import { SketchElement, StyleSheetDeclaration } from '@sketchjs/runtime'
import React from 'react'

export type SketchElementChild = SketchElementChild[] | React.ReactElement<SketchElementProps> | false | undefined | null

export interface SketchElementProps extends Record<string, any> {
  /**
   * 父元素
   * @internal
   */
  parent?: SketchElement;
  /**
   * 样式
   */
  style?: StyleSheetDeclaration;
  /**
   * 子元素
   */
  children?: SketchElementChild
  /**
   * 向父元素注册
   * @internal
   * @param element
   */
  onRegister?: (element: SketchElement) => void;
  /**
   * 从父元素卸载
   * @internal
   * @param element
   */
  onUnregister?: (element: SketchElement) => void;
}
