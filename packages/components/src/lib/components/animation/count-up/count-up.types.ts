export interface CountUpProps {
  style?: "decimal" | "currency"
  rounded?: boolean
  to: number
  from?: number
  duration?: number
  className?: string
  onPlay?: () => void
  onComplete?: () => void
}
