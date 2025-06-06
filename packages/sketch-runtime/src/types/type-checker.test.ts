import { isEmpty } from '@/utils/type-checker'

describe('isEmpty', () => {
  test('isEmpty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty(NaN)).toBe(true)

    expect(isEmpty(false)).toBe(false)
    expect(isEmpty(true)).toBe(false)
    expect(isEmpty(1)).toBe(false)
    expect(isEmpty('1')).toBe(false)
    expect(isEmpty('0')).toBe(false)
    expect(isEmpty('false')).toBe(false)
    expect(isEmpty({})).toBe(false)
    expect(isEmpty([])).toBe(false)
  })
})
