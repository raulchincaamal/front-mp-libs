import AvatarSkeleton from "./variants/avatar.sk.component"
import DefaultSkeleton from "./variants/default.sk.component"
import ImageSkeleton from "./variants/image.sk.component"
import ImageSkeletonDescription from "./variants/imagedescription.sk.component"
import ListSkeleton from "./variants/list.sk.component"
import type { SkeletonProps } from "./skeleton.types"

export const components = {
  default: DefaultSkeleton,
  avatar: AvatarSkeleton,
  image: ImageSkeleton,
  "image-description": ImageSkeletonDescription,
  list: ListSkeleton,
}

const Skeleton = ({ type = "default" }: SkeletonProps) => {
  const Component = components[type] ?? DefaultSkeleton
  return <Component />
}

export default Skeleton
