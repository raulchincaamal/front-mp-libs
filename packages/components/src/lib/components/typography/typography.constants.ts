export const TITLE_LIST_LEVEL = [1, 2, 3, 4, 5, 6] as const

export const classNameByLevel: Record<number, string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
}
