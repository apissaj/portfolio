import { decodeEmail } from "@/utils/string"
import { addQueryParams } from "@/utils/url"
import { BriefcaseIcon, GlobeIcon, MailIcon, MapPinIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { ThemeToggle } from "@/components/theme-toggle"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

import { AvatarLights } from "./avatar-lights"
import { AvatarLightsToggle } from "./avatar-lights-toggle"
import { FlipSentences } from "./flip-sentences"
import { LocalTimeText } from "./local-time-text"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

const ICON_BOX =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground/80 shadow-none whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] dark:border-input dark:bg-input/30 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4.5"

const INFO_ICON =
  "inline-flex size-6 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground/80 shadow-none transition-all outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] dark:border-input dark:bg-input/30 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-3.5"

export function ProfileHeader() {
  const email = decodeEmail(USER.emailB64)

  return (
    <div className="relative flex flex-col gap-4 border-x border-line px-4 pt-4 sm:gap-5 sm:px-5 sm:pt-5">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
        <ThemeToggle />
      </div>

      <div className="flex items-center gap-4 sm:gap-5">
        <AvatarLightsToggle className="group/avatar-lights-toggle flex shrink-0 outline-none">
          <AvatarLights
            className="ring-border ring-offset-background group-focus-visible/avatar-lights-toggle:ring-2 group-focus-visible/avatar-lights-toggle:ring-offset-2"
            variants={USER.avatarVariants}
          />
        </AvatarLightsToggle>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-2xl leading-8 font-medium tracking-tight sm:text-[27px]">
              {USER.displayName}
            </h1>
            <VerifiedIcon
              className="size-4.5 shrink-0 select-none sm:size-5"
              aria-hidden
            />
            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <FlipSentences>{USER.flipSentences}</FlipSentences>

          <p className="text-sm text-muted-foreground">{USER.bio}</p>
        </div>
      </div>

      <div className="relative h-8" aria-hidden>
        <div className="absolute top-0 left-[-100vw] h-full w-[200vw] border-y border-line diagonal-stripes [--pattern-foreground:var(--color-line)]/90" />
      </div>

      <div className="relative flex flex-wrap items-center gap-2 pt-1">
        <div className="pointer-events-none absolute -top-3.5 -left-20 hidden items-center gap-1 select-none sm:flex">
          <span className="font-handwriting text-xl text-zinc-500 -rotate-6 dark:text-zinc-400">
            follow me
          </span>
          <svg
            viewBox="0 0 28 28"
            className="size-6 -rotate-6 stroke-current fill-none text-zinc-400 dark:text-zinc-500"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 6c6 4 14 12 14 20" />
            <path d="M10 24l8 2 0-8" />
          </svg>
        </div>

        {SOCIAL_LINKS.filter((item) => item.name !== "youtube").map((item) => (
          <a
            key={item.name}
            href={addQueryParams(item.href, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            aria-label={item.title}
            className={ICON_BOX}
          >
            {SOCIAL_ICONS[item.name]}
          </a>
        ))}

        <a
          href={USER.website}
          target="_blank"
          rel="noopener"
          aria-label={`Website: ${USER.website}`}
          className={ICON_BOX}
        >
          <GlobeIcon />
        </a>

        <a
          href={`mailto:${email}`}
          aria-label={`Email: ${email}`}
          className={ICON_BOX}
        >
          <MailIcon />
        </a>
      </div>

      <div className="grid gap-x-6 gap-y-2 font-mono text-xs sm:grid-cols-2">
        <div className="flex items-center gap-2.5">
          <span className={INFO_ICON}>
            <BriefcaseIcon aria-hidden />
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="size-1.5 shrink-0 rounded-full bg-emerald-500"
              aria-hidden
            />
            Open to work
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className={INFO_ICON}>
            <MapPinIcon aria-hidden />
          </span>
          <span className="text-muted-foreground">{USER.address}</span>
        </div>

        <LocalTimeText timeZone={USER.timeZone} />

        <div className="flex items-center gap-2.5">
          <span className={INFO_ICON}>
            <MailIcon aria-hidden />
          </span>
          <a
            href={`mailto:${email}`}
            className="truncate text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {email}
          </a>
        </div>
      </div>

      <div className="relative h-8" aria-hidden>
        <div className="absolute top-0 left-[-100vw] h-full w-[200vw] border-y border-line diagonal-stripes [--pattern-foreground:var(--color-line)]/90" />
      </div>
    </div>
  )
}
