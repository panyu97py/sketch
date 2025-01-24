import { ref, watchEffect } from 'vue'

export const useAsyncComputed = <T> (asyncGetter: () => Promise<T>) => {
  const value = ref<T>()

  watchEffect(async () => {
    value.value = await asyncGetter()
  })

  return value
}
