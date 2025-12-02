export interface Options {
  directiveName?:string,
  alias?: Record<string, string>,
  columns?:TableColumnConfig[]
}

export interface ParserConfig {
  type: string;
  src: string;
  filePath: string
  map:[number, number]
  columns: TableColumnConfig[]
}

export interface ParserResultItem extends ParserConfig {
  docStr?:string
}

export interface TableRowData {
  type?:string
  attribute?:string
  required?: boolean | string
  defaultValue?:boolean
  description?:string
}

export interface TableColumnConfig {
  label: string
  value?: (data: TableRowData) => string
  align?:'left'| 'center'| 'right'
  key: keyof TableRowData
}
