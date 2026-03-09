export const formatNumber = ({
  num,
  format,
  useGrouping,
  minFractionDigits,
  maxFractionDigits,
  mode,
  currency,
  currencyDisplay,
  locale,
  prefix = "",
  suffix = "",
}: {
  num: number | null
  format: boolean
  useGrouping: boolean
  minFractionDigits?: number
  maxFractionDigits?: number
  mode: "decimal" | "currency"
  currency: string
  currencyDisplay: "symbol" | "narrowSymbol" | "code" | "name"
  locale: string
  prefix?: string
  suffix?: string
}): string => {
  if (num == null || !format) return num?.toString() ?? ""

  const options: Intl.NumberFormatOptions = {
    useGrouping,
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
    ...(mode === "currency" && {
      style: "currency",
      currency,
      currencyDisplay,
    }),
  }

  const formatted = new Intl.NumberFormat(locale, options).format(num)
  return `${prefix} ${formatted} ${suffix}`.trim()
}

export const parseNumber = (
  str: string,
  prefix = "",
  suffix = "",
  allowEmpty = true
): number | null => {
  if (!str) return allowEmpty ? null : 0
  const cleanStr = str
    .replace(prefix, "")
    .replace(suffix, "")
    .replaceAll(/[^\d.-]/g, "")
  const num = Number.parseFloat(cleanStr)
  return Number.isNaN(num) ? null : num
}

export const validateNumberRange = (
  value: number | null,
  min?: number,
  max?: number
): boolean =>
  value == null ||
  ((min == null || value >= min) && (max == null || value <= max))
