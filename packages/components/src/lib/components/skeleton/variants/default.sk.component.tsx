const DefaultSkeleton = () => (
  <div role="status" aria-hidden className="animate-pulse">
    <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
    <span className="sr-only">Loading...</span>
  </div>
)

export default DefaultSkeleton
