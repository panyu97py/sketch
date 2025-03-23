import isNil from 'lodash-es/isNil'
import isNaN from 'lodash-es/isNaN'

export const typeChecker = (value:any) => {
  return isNil(value) || value === '' || isNaN(value)
}
