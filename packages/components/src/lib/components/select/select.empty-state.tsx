/**
 * EmptyState component properties
 * @interface EmptyStateProps
 */
interface EmptyStateProps {
  /** Message to display when no elements available */
  message?: string
}

/**
 * EmptyState Component - Displays a message when no elements are available
 *
 * @component
 * @param {EmptyStateProps} props - Component properties
 * @returns {JSX.Element} Select empty state
 *
 * @example
 * ```tsx
 * <EmptyState message="No results found" />
 * ```
 */
const EmptyState = ({
  message = "No hay elementos disponibles.",
}: EmptyStateProps) => {
  return (
    <div className="w-full h-24 flex justify-center items-center text-gray-6 text-sm">
      {message}
    </div>
  )
}

export default EmptyState
