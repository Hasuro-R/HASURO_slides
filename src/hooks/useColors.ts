type ColorKind = "normal" | "text" | "bg"

export const useColors = () => {
  return (variable: string, kind?: ColorKind) => {
    switch (kind) {
      case "normal":
        return `var(--color-${variable})`
      case "text":
        return `var(--text-color-${variable})`
      case "bg":
        return `var(--bg-color-${variable})`
      default:
        return `var(--color-${variable})`
    }
  }
}
