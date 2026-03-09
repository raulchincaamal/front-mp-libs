export interface IContainerProps {
  topContent?: React.ReactNode
  bottomContent?: React.ReactNode
  title?: string
  children?: React.ReactNode
  classNames?: {
    wrapper?: string
    header?: string
    topContent?: string
    title?: string
    body?: string
    bottomContent?: string
  }
}
