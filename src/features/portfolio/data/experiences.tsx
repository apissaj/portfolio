import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "udinus",
    companyName: "Universitas Dian Nuswantoro (UDINUS)",
    companyWebsite: "https://dinus.ac.id",
    location: "Semarang, Indonesia",
    locationType: "On-site",
    isCurrentEmployer: true,
    positions: [
      {
        id: "udinus-it",
        title: "IT Student",
        employmentPeriod: {
          start: "09.2023",
        },
        employmentType: "Full-time",
        description:
          "Studying Information Technology, focusing on software development, modern web frameworks, and automation tools.",
        skills: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Docker",
          "Automation",
        ],
      },
    ],
  },
]
