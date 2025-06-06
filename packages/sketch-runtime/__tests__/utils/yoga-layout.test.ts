import { YogaLayoutUtils } from '@/utils/yoga-layout'

describe('YogaLayoutUtils', () => {
  test('YogaLayoutUtils.load', () => {
    const yogaLayoutUtils = YogaLayoutUtils.load()
    expect(yogaLayoutUtils).toBeDefined()
  })
})
