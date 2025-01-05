import { DependencyList, useEffect, useState } from 'react'
import { useToRef } from './useToRef'

type AsyncEffect <T = any>= () => Promise<T>

export const useAsyncMemo = <T> (asyncEffect:AsyncEffect<T>, deps: DependencyList) => {
  const [value, setValue] = useState<T>()

  const asyncEffectRef = useToRef(asyncEffect)

  useEffect(() => {
    asyncEffectRef.current().then(setValue)
  }, deps)

  return value
}
