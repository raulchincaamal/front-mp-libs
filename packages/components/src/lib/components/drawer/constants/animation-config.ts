export const animationConfig = {
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  drawer: {
    transition: { type: "tween" as const, duration: 0.2 },
  },
}
