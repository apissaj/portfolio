import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "self-employed",
    companyName: "Self-Employed (Indonesia)",
    companyLogo: "/images/self-employed-logo.png",
    location: "Indonesia",
    positions: [
      {
        id: "freelance-web",
        title: "Freelance Web Developer",
        employmentPeriod: {
          start: "09.2025",
        },
        employmentType: "Freelance",
        description:
          "- Build responsive websites and landing pages with HTML, CSS, JavaScript, React, and Next.js.\n- Create reusable UI components using a mobile-first approach.\n- Connect front ends to REST APIs and Firebase (authentication and data storage).\n- Build and run my own products, Portalink and Whip.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "REST API",
          "Firebase",
        ],
      },
    ],
  },
]
