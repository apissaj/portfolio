import { Suspense } from "react"

import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"

import { Panel, PanelHeader, PanelTitle } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"

const ID = "github"

export function GitHubContributions() {
  const contributions = getGitHubContributions()

  return (
    <Panel id={ID} className="screen-line-top-none">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>GitHub</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>

      <div className="h-px" />
    </Panel>
  )
}
