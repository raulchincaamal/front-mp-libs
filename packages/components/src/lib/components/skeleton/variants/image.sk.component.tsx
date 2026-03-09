import { SkeletonImageIcon } from "@/assets/icons"

const ImageSkeleton = () => (
  <div
    role="status"
    className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
  >
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
      <SkeletonImageIcon />
    </div>
    <span className="sr-only">Loading...</span>
  </div>
)

export default ImageSkeleton
