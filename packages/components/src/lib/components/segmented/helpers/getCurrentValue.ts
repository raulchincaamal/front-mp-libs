export const getCurrentValue = <T>(
  value?: T,
  defaultValue?: T
): T | undefined => {
  return value ?? defaultValue
}
