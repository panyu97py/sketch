import debug from 'debug'

export const log = debug('sketch')

export const attachLogEnable = <T extends object>(target:T) => {
  return new Proxy(target, {
    set (target, prop, value) {
      if (prop === 'debug') log.enabled = value
      target[prop] = value
      return true
    },
    get (target, prop) {
      if (prop === 'debug') return log.enabled
      return target[prop]
    }
  }) as T & { debug: boolean }
}
