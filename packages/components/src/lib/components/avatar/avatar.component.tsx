import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { UserIcon } from "@/assets/icons"
import { classNames } from "@/utils/classNames"
import type { AvatarProps } from "./avatar.types"
import { avatarSizeStyles } from "./avatar.types"

const Avatar = ({
  size = "md",
  src,
  alt = "avatar",
  icon = <UserIcon />,
  bgClassName = "bg-[#A1ADC0]",
  colorClassName = "text-white",
  className = "",
  onClick,
  style,
}: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      className={classNames(
        "inline-flex shrink-0 overflow-hidden rounded-full",
        avatarSizeStyles[size],
        className
      )}
      onClick={onClick}
      style={style}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      )}

      <AvatarPrimitive.Fallback
        delayMs={0}
        className={classNames(
          "flex h-full w-full items-center justify-center rounded-full",
          colorClassName,
          bgClassName
        )}
      >
        {icon}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}

export default Avatar
