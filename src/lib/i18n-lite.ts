export type Lang = 'en' | 'pt-BR'

import { en } from '../locales/en'
import { ptBR } from '../locales/ptBR'

const STORAGE_KEY = 'app.lang'

const DICTS: Record<Lang, Record<string, string>> = {
  en,
  'pt-BR': ptBR
}

function getQueryLang(): Lang | null {
  try {
    const params = new URLSearchParams(window.location.search)
    const lang = params.get('lang')

    if (lang === 'en' || lang === 'pt-BR') {
      return lang
    }
  } catch {
    return null
  }

  return null
}

function detectInitialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved === 'en' || saved === 'pt-BR') {
    return saved
  }

  const queryLang = getQueryLang()

  if (queryLang) {
    return queryLang
  }

  const browserLang = navigator.language || 'pt-BR'
  return browserLang.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
}

let currentLang: Lang = detectInitialLang()

function setHtmlLang(lang: Lang) {
  document.documentElement.setAttribute('lang', lang)
}

setHtmlLang(currentLang)

type Listener = (lang: Lang) => void
const listeners = new Set<Listener>()

export function onLangChange(callback: Listener) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

export function getLang(): Lang {
  return currentLang
}

export function setLang(lang: Lang) {
  if (lang === currentLang) {
    return
  }

  currentLang = lang
  localStorage.setItem(STORAGE_KEY, lang)
  setHtmlLang(lang)
  listeners.forEach((listener) => listener(lang))
}

export function t(key: string): string {
  const dictionary = DICTS[currentLang]
  return dictionary[key] ?? key
}

export function toggleLang() {
  setLang(currentLang === 'en' ? 'pt-BR' : 'en')
}
