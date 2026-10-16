export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M48 40h48v176H48zm0 72h96V40h48v176h-48v-72H96v72H48zM288 40h48v112h-48zM336 40h48v112h-48zm-48 112h144v48H288zm0 40h48v24h-48zm96 0h48v24h-48zM240 40h48v176h-48z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 256"><path fill="currentColor" d="M48 40h48v176H48zm0 72h96V40h48v176h-48v-72H96v72H48zM288 40h48v112h-48zM336 40h48v112h-48zm-48 112h144v48H288zm0 40h48v24h-48zm96 0h48v24h-48zM240 40h48v176h-48z"/></svg>`
}
