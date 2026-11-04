import type { Lang } from "@/i18n/utils"
import projectsEs from "./es/projects.json"
import projectsEn from "./en/projects.json"
import experienceEs from "./es/experience.json"
import experienceEn from "./en/experience.json"
import skillsEs from "./es/skills.json"
import skillsEn from "./en/skills.json"
import educationEs from "./es/education.json"
import educationEn from "./en/education.json"

export interface Project {
  slug: string
  title: string
  org: string
  access: "public" | "login" | "personal"
  description: string
  highlights: string[]
  tags: string[]
  link?: string
  github?: string
  media?: { src: string; alt: string }[]
  /** Case study fields. When any is present the project gets its own page. */
  problem?: string
  decision?: string
  result?: string
}

export interface ExperienceEntry {
  title: string
  company: string
  description: string
  date: string
  link?: string
  current?: boolean
  freelance?: boolean
}

export interface Experience {
  professional: ExperienceEntry[]
  freelance: ExperienceEntry[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface EducationEntry {
  title: string
  institution: string
  date: string
  description: string
}

// Typed as Record<Lang, ...> so a missing language fails `astro check`.
const projects: Record<Lang, Project[]> = { es: projectsEs as Project[], en: projectsEn as Project[] }
const experience: Record<Lang, Experience> = { es: experienceEs as Experience, en: experienceEn as Experience }
const skills: Record<Lang, SkillGroup[]> = { es: skillsEs, en: skillsEn }
const education: Record<Lang, EducationEntry[]> = { es: educationEs, en: educationEn }

export const getProjects = (lang: Lang) => projects[lang]
export const getExperience = (lang: Lang) => experience[lang]
export const getSkills = (lang: Lang) => skills[lang]
export const getEducation = (lang: Lang) => education[lang]

export const hasCaseStudy = (p: Project) => Boolean(p.problem || p.decision || p.result)
