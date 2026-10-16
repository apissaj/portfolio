import { differenceInMonths, format, parse } from "date-fns"
import { CodeXmlIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { Markdown } from "@/components/markdown"
import type { ExperiencePosition } from "@/features/portfolio/types/experiences"

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition
}) {
  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const duration = formatDuration(start, end)

  return (
    <Collapsible
      className="group/experience-position relative"
      defaultOpen={position.isExpanded ?? true}
      disabled={!position.description}
    >
      <CollapsibleTrigger
        className={cn(
          "group/trigger flex w-full cursor-pointer flex-col gap-1 rounded-lg p-1 text-left transition-colors",
          "hover:bg-accent-muted outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          "data-disabled:cursor-default data-disabled:hover:bg-transparent"
        )}
      >
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 [&_svg]:size-3.5">
              {position.icon ?? <CodeXmlIcon aria-hidden />}
            </div>
            <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
              {position.title}
            </span>
          </div>

          <ChevronDownIcon
            className="size-4 shrink-0 text-zinc-400 transition-transform duration-200 dark:text-zinc-500 group-data-open/trigger:rotate-180 group-data-disabled/trigger:hidden"
            aria-hidden
          />
        </div>

        <div className="flex items-center gap-2 pl-8 text-sm text-zinc-500 dark:text-zinc-400">
          {position.employmentType && (
            <>
              <span>{position.employmentType}</span>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden>
                |
              </span>
            </>
          )}

          <span>
            {formatPeriod(start)} — {isOngoing ? "Present" : formatPeriod(end)}
          </span>

          {duration && (
            <>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden>
                |
              </span>
              <span>{duration}</span>
            </>
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        {position.description && (
          <div className="pr-2 pt-2 pb-1 pl-8">
            <div className="text-sm text-muted-foreground [&_p]:m-0 [&_ul]:m-0 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:mt-px [&_li]:before:shrink-0 [&_li]:before:text-zinc-400 [&_li]:before:select-none [&_li]:before:content-['•']">
              <Markdown>{position.description}</Markdown>
            </div>
          </div>
        )}
      </CollapsibleContent>

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-2.5 pl-8">
          {position.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </div>
      )}
    </Collapsible>
  )
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".")
  const endHasMonth = end ? end.includes(".") : true

  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10)
    if (years <= 0) {
      return ""
    }
    return `${years} yr`
  }

  const startDate = parsePeriodDate(start, "first")
  const endDate = end ? parsePeriodDate(end, "last") : new Date()

  const totalMonths = differenceInMonths(endDate, startDate) + 1
  if (totalMonths <= 0) {
    return ""
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) {
    parts.push(`${years} yr`)
  }
  if (months > 0) {
    parts.push(`${months} mo`)
  }

  return parts.join(" ")
}

function formatPeriod(value: string): string {
  if (!value.includes(".")) {
    return value
  }
  return format(parse(value, "MM.yyyy", new Date()), "MMM yyyy")
}

function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    return parse(str, "MM.yyyy", new Date())
  }
  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date()
  )
}