import { decodeEmail } from "@/utils/string"
import { addQueryParams } from "@/utils/url"
import { FileTextIcon, MailIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { LinkedInIcon } from "@/components/icons"

import { SOCIAL } from "../data/social-links"
import { USER } from "../data/user"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const ID = "contact"

const BUTTON =
  "inline-flex items-center gap-2 rounded-md border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted [&_svg]:size-4"

export function Contact() {
  const email = decodeEmail(USER.emailB64)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="flex flex-col items-start gap-4">
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Open to junior full-stack roles and freelance projects. The fastest
          way to reach me is email.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a className={BUTTON} href={`mailto:${email}`}>
            <MailIcon aria-hidden />
            Email me
          </a>
          <a
            className={BUTTON}
            href={addQueryParams(USER.website, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
          >
            <FileTextIcon aria-hidden />
            Resume
          </a>
          <a
            className={BUTTON}
            href={SOCIAL.linkedin.href}
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon aria-hidden />
            LinkedIn
          </a>
        </div>
      </PanelContent>
    </Panel>
  )
}
