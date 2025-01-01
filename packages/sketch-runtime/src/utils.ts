import isNil from 'lodash-es/isNil'
import isNaN from 'lodash-es/isNaN'

export const isEmpty = (value:any) => {
  return isNil(value) || value === '' || isNaN(value)
}
