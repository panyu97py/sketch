import debug from 'debug'

export const log = debug('sketch')

export const debugOption = {
  get debug () {
    return log.enabled
  },
  set debug (value) {
    log.enabled = value
  }
}
