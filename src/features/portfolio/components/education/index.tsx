import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education } from "@/features/portfolio/types/education"

import { EducationItem } from "./education-item"

const ID = "education"

export function Education() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
        </PanelTitle>
      </PanelHeader>

      <div className="flex flex-col gap-6 p-4">
        {EDUCATION.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </Panel>
  )
}