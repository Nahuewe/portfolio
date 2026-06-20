import { ui, defaultLang } from "./ui"

export type Lang = keyof typeof ui

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as Lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(
    key: K,
  ): (typeof ui)[typeof defaultLang][K] {
    return (ui[lang][key] ?? ui[defaultLang][key]) as (typeof ui)[typeof defaultLang][K]
  }
}

export function getLocalizedPath(lang: Lang, path: string = "/") {
  if (lang === defaultLang) return path
  return `/${lang}${path === "/" ? "" : path}`
}
