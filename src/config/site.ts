import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://hafizhhh.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/apissaj/portfolio/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const X_HANDLE = ""
export const GITHUB_USERNAME = "apissaj"
export const SOURCE_CODE_GITHUB_REPO = "apissaj/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/apissaj/portfolio"

export const UTM_PARAMS = {
  utm_source: "hafizhhh.dev",
}
