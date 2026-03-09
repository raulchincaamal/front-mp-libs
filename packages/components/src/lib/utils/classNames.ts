import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const classNames = (...args: ClassValue[]) => {
  return twMerge(clsx(args))
}

export const cn = classNames
