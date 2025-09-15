export type Lang = 'en' | 'pt-BR' // << export

// imports dos dicionários
import { en } from '../locales/en'
import { ptBR } from '../locales/ptBR'

const STORAGE_KEY = 'app.lang'

const DICTS: Record<Lang, Record<string, string>> = {
  en,
  'pt-BR': ptBR
}

function getQueryLang(): Lang | null {
  try {
    const p = new URLSearchParams(window.location.search)
    const l = p.get('lang')
    if (l === 'en' || l === 'pt-BR') return l
  } catch {
    /* empty */
  }
  return null
}

function detectInitialLang(): Lang {
  // 1) escolha anterior
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'pt-BR') return saved as Lang

  // 2) querystring
  const q = getQueryLang()
  if (q) return q

  // 3) navegador (ex.: pt-BR, en-US)
  const nav = navigator.language || (navigator as any).userLanguage || 'pt-BR'
  if (nav.toLowerCase().startsWith('en')) return 'en'
  return 'pt-BR'
}

let currentLang: Lang = detectInitialLang()

function setHtmlLang(lang: Lang) {
  document.documentElement.setAttribute('lang', lang)
}

setHtmlLang(currentLang)

// listeners para atualizar componentes quando o idioma for trocado
type Listener = (lang: Lang) => void
const listeners = new Set<Listener>()

export function onLangChange(cb: Listener) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function getLang(): Lang {
  return currentLang
}

export function setLang(lang: Lang) {
  if (lang === currentLang) return
  currentLang = lang
  localStorage.setItem(STORAGE_KEY, lang)
  setHtmlLang(lang)
  listeners.forEach((fn) => fn(lang))
}

export function t(key: string): string {
  const dict = DICTS[currentLang] || {}
  return dict[key] ?? key
}

// helper para alternar entre en / pt-BR
export function toggleLang() {
  setLang(currentLang === 'en' ? 'pt-BR' : 'en')
}
