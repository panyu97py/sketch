import debounce from 'lodash/debounce'
import { useToRef } from './useToRef'
import type { DebounceSettings } from 'lodash'

type Effect = (...args: any) => any

export const useDebounce = <T extends Effect> (effect: T, delay?: number, options?: DebounceSettings) => {

  const effectRef = useToRef<T>(effect)

  return debounce(effectRef.current, delay, options)
}
