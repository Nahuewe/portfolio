import type { Lang } from "@/i18n/utils"

export const SITE = {
  url: "https://portfolionahuelsoriaparodi.netlify.app",
  name: "Nahuel Soria Parodi",
  email: "nahuelsoriap@gmail.com",
  linkedin: "https://linkedin.com/in/nahuelsoriaparodi",
  github: "https://github.com/Nahuewe",
  employer: "Municipalidad de Catamarca Capital",
  ogImage: "/porfolio.png",
} as const

export const CV: Record<Lang, string> = {
  es: "/cv-nahuel-soria-parodi-es.pdf",
  en: "/cv-nahuel-soria-parodi-en.pdf",
}

export const SECTIONS = ["projects", "experience", "services", "about", "contact"] as const
export type SectionId = (typeof SECTIONS)[number]
