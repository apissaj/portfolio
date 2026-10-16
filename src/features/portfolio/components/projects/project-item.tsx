import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Markdown } from "@/components/markdown"

import type { Project } from "../../types/projects"

export function ProjectItem({ project }: { project: Project }) {
  const { end } = project.period
  const isOngoing = !end

  return (
    <a
      className="group/project relative flex flex-col gap-3 p-4"
      href={addQueryParams(project.link, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
    >
      <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-line bg-zinc-50/70 sm:h-56 dark:bg-zinc-900/40">
        <div className="absolute inset-0 flex items-center justify-center p-4 [perspective:1000px]">
          <div className="flex h-[115%] w-[108%] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg shadow-zinc-900/5 transition-transform duration-500 ease-out [transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(1.5deg)_scale(1.02)] group-hover/project:[transform:rotateX(4deg)_rotateY(-4deg)_rotateZ(0.5deg)_scale(1.06)] dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-5 shrink-0 items-center gap-1.5 border-b border-zinc-200 bg-zinc-100/90 px-2.5 dark:border-zinc-700/80 dark:bg-zinc-800/90">
              <span className="size-1.5 rounded-full bg-zinc-300" />
              <span className="size-1.5 rounded-full bg-zinc-300" />
              <span className="size-1.5 rounded-full bg-zinc-300" />
            </div>
            <div className="flex flex-1 items-center justify-center p-3 font-mono text-xs text-zinc-500">
              {project.title}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 leading-snug font-medium">
            {project.title}
            {isOngoing && (
              <span
                className="size-1.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden
              />
            )}
          </h3>
          <ArrowUpRightIcon
            className="size-4 shrink-0 text-zinc-400 transition-colors group-hover/project:text-zinc-900 dark:group-hover/project:text-zinc-100"
            aria-hidden
          />
        </div>

        {project.description && (
          <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 [&_p]:m-0">
            <Markdown>{project.description}</Markdown>
          </div>
        )}

        {project.skills.length > 0 && (
          <p className="pt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">
            {project.skills.join(" · ")}
          </p>
        )}
      </div>
    </a>
  )
}
