import { debugOption } from '@/utils/debug'

describe('debugOption', () => {
  test('debugOption.debug', () => {
    debugOption.debug = true
    expect(debugOption.debug).toBe(true)
  })
})
