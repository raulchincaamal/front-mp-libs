export const indicatorAnimation = {
  duration: 0.3,
  ease: "easeOut" as const,
}

export const itemAnimation = {
  initial: { color: "#6b7280" },
  animate: { color: "#374151" },
  transition: { duration: 0.3 },
}

export const activeItemAnimation = {
  initial: { color: "#374151" },
  animate: { color: "#1f2937" },
  transition: { duration: 0.3 },
}

export const containerAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" as const },
}
