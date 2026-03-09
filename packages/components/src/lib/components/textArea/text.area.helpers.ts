import { classNames } from "@/utils/classNames"
import type { TextAreaProps } from "./types"

export const getTextAreaClasses = ({
  type,
  error,
  disabled,
  readOnly,
  inputSize,
  className = "",
  classesNames,
}: Partial<TextAreaProps>) =>
  classNames(
    "block w-full p-2 focus:outline-none text-black rounded-lg h-[150px] transition duration-200 ease-in-out",
    {
      /* NORMAL */
      "border border-gray-7 focus:border-tints-Blue-30 focus:shadow-[0px_0px_0px_2px_#E6EDF8]":
        type === "normal" && !disabled && !error,

      /* UNDERLINE */
      "bg-transparent border-b border-gray-7 rounded-none focus:border-b-tints-Blue-30":
        type === "underline" && !error && !disabled,

      /* ERROR */
      "border-red-400 focus:shadow-[0px_0px_0px_2px_#FFCCC7]":
        error && type !== "underline",

      "border-b border-red-400 rounded-none": error && type === "underline",

      /* DISABLED */
      "cursor-not-allowed bg-gray-3 text-gray-6": disabled && type === "normal",

      "cursor-not-allowed text-gray-6": disabled && type === "underline",

      /* READONLY */
      "cursor-not-allowed font-semibold text-primary-blue": readOnly,

      /* SIZES */
      "h-8 text-sm": inputSize === "sm",
      "h-9 text-base": inputSize === "md",
      "h-10 text-base": inputSize === "lg",
      "h-12 text-base": inputSize === "xl",

      /* EXTERNAL */
      [className]: className,
      [classesNames?.input ?? ""]: classesNames?.input,
    }
  )
