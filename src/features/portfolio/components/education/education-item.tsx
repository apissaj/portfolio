import { GraduationCapIcon } from "lucide-react"

import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/base/ui/typography"
import { Markdown } from "@/components/markdown"
import type { Education } from "@/features/portfolio/types/education"

export function EducationItem({ item }: { item: Education }) {
  const { start, end } = item.period
  const isOngoing = !end

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 [&_svg]:size-3.5">
            <GraduationCapIcon aria-hidden />
          </div>
          <h3 className="text-base leading-snug font-medium text-zinc-900 dark:text-zinc-100">
            {item.school}
          </h3>
        </div>

        <span className="shrink-0 font-mono text-sm text-muted-foreground tabular-nums">
          {start}
          {isOngoing ? " — Present" : ` — ${end}`}
        </span>
      </div>

      {(item.degree || item.fieldOfStudy) && (
        <p className="pl-8 text-sm text-muted-foreground">
          {[item.degree, item.fieldOfStudy].filter(Boolean).join(" · ")}
        </p>
      )}

      {item.description && (
        <Prose className="pl-8 text-sm text-muted-foreground">
          <Markdown>{item.description}</Markdown>
        </Prose>
      )}

      {Array.isArray(item.skills) && item.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 pt-1 pl-8">
          {item.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}