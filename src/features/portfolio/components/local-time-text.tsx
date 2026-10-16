"use client"

import { useEffect, useState } from "react"
import { ClockIcon } from "lucide-react"

export function LocalTimeText({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      )
    }

    update()
    const interval = setInterval(update, 60_000)

    return () => clearInterval(interval)
  }, [timeZone])

  return (
    <div className="flex items-center gap-2.5 text-muted-foreground">
      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground/80 dark:border-input dark:bg-input/30 [&_svg]:size-3.5">
        <ClockIcon aria-hidden />
      </span>
      <span suppressHydrationWarning>{time ? `${time} local time` : ""}</span>
    </div>
  )
}
