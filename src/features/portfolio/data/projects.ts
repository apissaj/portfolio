import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "cloud-mail",
    title: "Cloud Mail",
    period: {
      start: "08.2025",
    },
    link: "https://mail.hafizhmuzani.my.id",
    image: "/images/projects/cloud-mail-light.webp",
    skills: ["Cloudflare Workers", "D1 Database", "Vue 3", "TypeScript"],
    description:
      "Self-hosted email platform on Cloudflare Workers: catch-all inbox, AI-powered OTP extraction, public API for automation.",
    demo: {
      username: "demo@hafizhmuzani.my.id",
      password: "DemoPass2026",
    },
    isExpanded: true,
  },
  {
    id: "koncetcloud",
    title: "KoncetCloud",
    period: {
      start: "10.2025",
    },
    link: "https://kc.koncetcloud.web.id/#drive",
    image: "/images/projects/koncetcloud.webp",
    skills: ["Vue 3", "Tailwind CSS", "Node.js", "rclone", "LocalSend"],
    description:
      "Self-hosted cloud backup & storage manager powered by rclone. Multi-remote support (50+ remotes), 1-hop LocalSend receiver from phone, 2FA TOTP, and live transfer monitoring.",
    demo: {
      username: "demo",
      password: "demohvoUqMYI",
    },
    isExpanded: true,
  },
]
