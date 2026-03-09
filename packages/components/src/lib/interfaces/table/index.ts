export type TableData = {
  id?: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface ITableColumn<T> {
  key: string
  label: string
  render?: (value: T) => React.ReactNode
}
export interface ITable<TData extends TableData> {
  data: TData[]
  showIdRow?: boolean
  isLoading?: boolean
  columnColor?: string[]
  columns: ITableColumn<TData>[]
  handleSort?: () => void
  onChange?: (selectedRows: TData[]) => void
  fixedHeader?: boolean
  maxHeightTable?: string
}

export interface ICustomTableColumn<T> {
  key: string
  label: string
  type: string
  render?: (value: T) => React.ReactNode
}

export interface ICustomTable<TData extends TableData> {
  data: TData[]
  isLoading: boolean
  defaultColumns: ICustomTableColumn<TData>[]
  canSort: boolean
  canFilter: boolean
  stickyColumn?: boolean
  withPagination: boolean
  pageSize?: number
}
