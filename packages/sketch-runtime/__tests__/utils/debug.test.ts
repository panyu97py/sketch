import { attachLogEnable, log } from '@/utils/debug'

describe('debugOption', () => {
  test('debugOption.debug', () => {
    const tempObj = attachLogEnable({})
    tempObj.debug = true
    expect(log.enabled).toBe(true)
  })
})
