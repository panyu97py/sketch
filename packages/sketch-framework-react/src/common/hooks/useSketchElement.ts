import React, {useEffect} from "react";
import {SketchElement} from "@sketchjs/runtime";
import {SketchElementChild} from "../types";

interface Opt {
  self?: SketchElement
  parent?: SketchElement
  children?: SketchElementChild | SketchElementChild[]
}

export const useSketchElement = (opt: Opt) => {
  const {self, parent, children} = opt
  const childrenVNodes = React.Children.toArray(children).map((child: SketchElementChild) => {
    const {props: childProps} = child
    if (!React.isValidElement(child)) return null
    return React.cloneElement(child, {...childProps, parent: self})
  })

  useEffect(() => {
    parent?.appendChild(self)
    return () =>  parent?.removeChild(self)
  }, [self, parent])

  return {childrenVNodes}
}
