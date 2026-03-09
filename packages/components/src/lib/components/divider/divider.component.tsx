import { classNames } from "@/utils/classNames"
import type { Align, IDividerProps } from "./divider.types"

const Divider = ({
  children,
  className,
  width = "min-w-full w-full",
  type = "horizontal",
  align = "center",
}: IDividerProps) => {
  const alignSize: Record<Align, string> = {
    left: "before:w-[5%] after:w-full",
    center: "before:w-full after:w-full",
    right: "before:w-full after:w-[5%]",
  }

  return (
    <div
      className={classNames("p-0 m-0 box-border", {
        "flex h-px  items-center": type === "horizontal",
        "inline-block border-s border-s-gray-5 min-h-[1em] h-full":
          type === "vertical",
        "bg-grays-Macropay-05": type === "horizontal" && !children,
        "whitespace-nowrap before:h-px after:h-px before:bg-grays-Macropay-05 after:bg-grays-Macropay-05":
          type === "horizontal" && children,
        [`${alignSize[align]}`]: align,
        [width]: width && type === "horizontal",
        [`${className}`]: className,
      })}
    >
      {children && type === "horizontal" && (
        <span
          className={classNames("inline-block ps-4 pe-4", {
            [`text-${align}`]: align,
          })}
        >
          {children}
        </span>
      )}
    </div>
  )
}

export default Divider
