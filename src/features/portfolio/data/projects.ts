import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "vpnx",
    title: "VPNX",
    period: {
      start: "05.2026",
    },
    link: "https://github.com/hafizhmuzani",
    skills: ["Docker", "Network", "VPN", "Proxy Rotation"],
    description:
      "Local Docker setup for VPNX proxy rotation and integration flow.",
    isExpanded: true,
  },
  {
    id: "tempik",
    title: "Tempik",
    period: {
      start: "04.2026",
    },
    link: "https://tempik.exse7en.fr",
    skills: ["Cloudflare Workers", "D1 Database", "API", "TypeScript"],
    description:
      "Custom temporary email service with custom domains and live monitoring interface.",
    isExpanded: true,
  },
  {
    id: "qwencloud-generator",
    title: "qwencloud-generator",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/hafizhmuzani",
    skills: ["Python", "Gmail API", "OAuth", "Automation"],
    description:
      "Custom tool utilizing Gmail API and OAuth tokens for automated flow setup.",
    isExpanded: false,
  },
]
