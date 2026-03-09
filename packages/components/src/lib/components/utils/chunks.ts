export const chunks = <T>(items: T[], size: number = 1) => {
  return items.reduce((previousValue, currentValue, currentIndex) => {
    const chuckIndex = Math.floor(currentIndex / size)

    if (!previousValue[chuckIndex]) {
      previousValue[chuckIndex] = []
    }
    previousValue[chuckIndex].push(currentValue)
    return previousValue
  }, [] as T[][])
}
