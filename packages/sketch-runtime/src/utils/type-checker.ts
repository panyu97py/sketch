import { isNil, isNaN } from 'lodash-es'

export const isEmpty = (value:any) => {
  return isNil(value) || value === '' || isNaN(value) || value === false
}
