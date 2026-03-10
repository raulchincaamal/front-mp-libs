export const createItemClickHandler =
  <T = unknown>(
    disabled: boolean,
    setActiveIndex: (index: number) => void,
    onChange?: (value: T) => void
  ) =>
  (option: { value: T; disabled?: boolean }, index: number) => {
    if (disabled || option.disabled) return
    setActiveIndex(index)
    onChange?.(option.value)
  }
