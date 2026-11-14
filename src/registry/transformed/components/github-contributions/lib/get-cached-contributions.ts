import { unstable_cache } from "next/cache"

import type { Activity } from "@/registry/transformed/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getCachedContributions = unstable_cache(
  async (username: string): Promise<Activity[]> => {
    try {
      const url = `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${username}?y=last`
      // Short 4s timeout: if external API hangs/blocks Vercel IP, fallback gracefully to []
      // This prevents SSG/prerender build failure on Vercel
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), 4000)

      const res = await fetch(url, {
        signal: controller.signal,
        next: { revalidate: 86400 },
      }).finally(() => clearTimeout(timer))

      if (!res.ok) {
        return []
      }
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      // Build-time / network fallback: never throw in SSG prerender
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
