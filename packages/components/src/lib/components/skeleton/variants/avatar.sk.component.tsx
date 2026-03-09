import { SkeletonAvatarIcon } from "@/assets/icons"

const AvatarSkeleton = () => (
  <div role="status" className="animate-pulse">
    <div className="flex items-center justify-center mt-4">
      <SkeletonAvatarIcon />
      <div className="flex flex-col space-y-2">
        <div className="w-20 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="w-24 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
)

export default AvatarSkeleton
