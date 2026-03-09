export const buildId = (...parts: (string | undefined | null)[]): string =>
  parts
    .filter((part): part is string => typeof part === "string" && part !== "")
    .join("")
