import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"

import { ProjectItem } from "./project-item"

const ID = "projects"

export function Projects() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 divide-border">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  )
}
