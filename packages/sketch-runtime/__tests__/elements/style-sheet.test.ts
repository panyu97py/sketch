import { StyleSheet } from '@/elements/style-sheet'

describe('StyleSheet', () => {
  describe('StyleSheet.create', () => {
    test('StyleSheet.create', () => {
      const styles = { element: { width: 100, height: 100 } }
      const styleSheet = StyleSheet.create(styles)
      expect(styleSheet).toEqual(styles)
    })
  })

  describe('StyleSheet.applay', () => {
    test('StyleSheet.applay', () => { })
  })
})
