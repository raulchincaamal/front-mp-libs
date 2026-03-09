import type { Generic, IResponsive } from "@/interfaces/common"

const generatePrefixClass = (prefix: string, size?: number | string) =>
  `${prefix}-${size}`

const generateResponsiveClasses = (
  prefix: string,
  value?: IResponsive<number | string>
) =>
  value
    ? [
        value?.sm && `sm:${generatePrefixClass(prefix, value.sm)}`,
        value?.md && `md:${generatePrefixClass(prefix, value.md)}`,
        value?.lg && `lg:${generatePrefixClass(prefix, value.lg)}`,
        value?.xl && `xl:${generatePrefixClass(prefix, value.xl)}`,
      ].filter(value => value !== undefined && value !== 0)
    : []

export const generateClasses = (
  prefix: string,
  value?: string | number | Generic<string | number>
) => {
  const ArrayClass: string[] = []
  if (typeof value === "number" || typeof value === "string")
    ArrayClass.push(generatePrefixClass(prefix, value))
  else if (value && Boolean(value)) {
    const [xs, responsive] = value
    ArrayClass.push(generatePrefixClass(prefix, xs))
    ArrayClass.push(...generateResponsiveClasses(prefix, responsive))
  }
  return ArrayClass.join(" ")
}
