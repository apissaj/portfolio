import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "smkn9-medan",
    school: "SMK Negeri 9 Medan",
    degree: "Vocational High School (SMK)",
    fieldOfStudy: "Software Engineering",
    period: {
      start: "07.2020",
      end: "06.2023",
    },
    description: `- Completed a vocational program in Software Engineering with an industrial production mindset and hands-on project-based learning.
- Built and deployed practical full-stack applications, integrating design, logic, and deployment into a single development pipeline.
- Focused on translating visual design (UI/UX) into clean, maintainable code — the bridge between front-end and product.`,
    skills: [
      "Software Development",
      "UI / UX Design",
      "Front-End Development",
      "PHP",
      "MySQL",
      "Laravel",
      "Project-Based Delivery",
    ],
    isExpanded: true,
  },
]