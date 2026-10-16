import Image from "next/image"
import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"

import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="group/experience scroll-mt-14 space-y-3 py-4"
    >
      <div className="flex items-center gap-3">
        {experience.companyLogo ? (
          <div className="flex size-6 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              quality={100}
              className="size-full object-cover"
              unoptimized
              aria-hidden
            />
          </div>
        ) : (
          <div className="ml-1.5 flex size-2 shrink-0 items-center justify-center">
            {experience.companyIcon ?? (
              <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            )}
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg/6 font-medium sm:text-xl/6">
            {experience.companyWebsite ? (
              <a
                className="link"
                href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          {experience.location && (
            <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground">
              <dt className="sr-only">Location</dt>
              <dd className="truncate">{experience.location}</dd>

              {experience.locationType && (
                <>
                  <dt className="sr-only">Location type</dt>
                  <dd>({experience.locationType})</dd>
                </>
              )}

              {experience.isCurrentEmployer && (
                <>
                  <dt className="sr-only">Employment status</dt>
                  <dd>
                    <span className="sr-only">Current</span>
                    <span className="relative flex size-2.5 translate-x-px translate-y-px items-center justify-center">
                      <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-info opacity-50" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-info" />
                    </span>
                  </dd>
                </>
              )}
            </dl>
          )}
        </div>
      </div>

      <div className="relative space-y-4 pl-4 before:absolute before:top-0 before:left-[11px] before:h-[calc(100%-11px)] before:w-4 before:rounded-bl-lg before:border-b before:border-l before:border-line">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
