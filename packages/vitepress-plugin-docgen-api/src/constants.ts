import { TableColumnConfig } from '@/types'

export const defaultColumns: TableColumnConfig[] = [
  { label: '属性', key: 'attribute' },
  { label: '说明', key: 'description' },
  { label: '类型', key: 'type' },
  { label: '默认值', key: 'defaultValue' },
  { label: '是否必填', key: 'required' },
]
