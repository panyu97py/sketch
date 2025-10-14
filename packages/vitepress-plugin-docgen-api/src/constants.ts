import { TableColumnConfig } from '@/types'

export const defaultColumns: TableColumnConfig[] = [
  { label: '属性', key: 'attribute' },
  { label: '类型', key: 'type' },
  { label: '默认值', key: 'default' },
  { label: '是否必填', key: 'required' },
  { label: '描述', key: 'description' }
]
