"use client"

import { usePathname } from "next/navigation"

export function HeaderSlot({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <>{children}</>
}
