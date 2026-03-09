export const baseStyles = {
  root: "relative peer focus-visible:border-ring focus-visible:ring-ring/50 flex px-px shrink-0 items-center justify-start rounded-full border border-transparent shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-6 dark:data-[state=unchecked]:bg-input/80 data-[state=checked]:justify-end transition-colors duration-200",
  thumb:
    "relative z-10 bg-white pointer-events-none block rounded-full ring-0 shadow-sm",
  children:
    "absolute flex items-center justify-center text-white/80 transition-opacity duration-200",
  unCheckedChildren:
    "left-1 data-[state=checked]:opacity-0 data-[state=checked]:invisible",
  checkedChildren:
    "right-1 data-[state=unchecked]:opacity-0 data-[state=unchecked]:invisible",
}
