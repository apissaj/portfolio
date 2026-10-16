export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 256" {...props}>
      <text
        x="10"
        y="190"
        fill="currentColor"
        fontFamily="monospace"
        fontSize="170"
        fontWeight="bold"
      >
        HM
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 256"><text x="10" y="190" fill="currentColor" fontFamily="monospace" fontSize="170" fontWeight="bold">HM</text></svg>`
}
