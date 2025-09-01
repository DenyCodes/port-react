// src/LanguageProvider.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

// 1) Idiomas suportados e tipo
const SUPPORTED_LANGS = ['en', 'pt-BR'] as const
export type Language = (typeof SUPPORTED_LANGS)[number]

// 2) Suas traduções (exemplo)
const translations = {
  en: {
    heroTitle: 'Hello!',
    navHome: 'Home'
  },
  'pt-BR': {
    heroTitle: 'Olá!',
    navHome: 'Início'
  }
} as const

type TKey = keyof (typeof translations)['en']

// 3) Tipo do contexto
type LanguageContextValue = {
  lang: Language
  setLang: React.Dispatch<React.SetStateAction<Language>>
  toggleLang: () => void
  t: (key: TKey) => string
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt-BR',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleLang: () => {},
  t: (k) => translations['pt-BR'][k]
})

// Helpers de tipo/normalização
function isLanguage(v: string | null | undefined): v is Language {
  return v === 'en' || v === 'pt-BR'
}

function normalizeBrowserLanguage(raw?: string | null): Language {
  const v = (raw ?? '').toLowerCase()
  if (v.startsWith('en')) return 'en'
  // cobre pt, pt-br, pt_pt, etc
  if (v.startsWith('pt')) return 'pt-BR'
  return 'pt-BR'
}

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem('lang')
    if (isLanguage(stored)) return stored
    // eslint-disable-next-line no-empty
  } catch {}
  return normalizeBrowserLanguage(navigator.language)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 4) Tipar explicitamente o estado como Language
  const [lang, setLang] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* empty */
    }
    // opcional: refletir no <html lang="">
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'pt-BR' : 'en'))

  const t = useMemo(() => {
    const dict = translations[lang]
    return (key: TKey) => dict[key]
  }, [lang])

  const value: LanguageContextValue = { lang, setLang, toggleLang, t }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hookzinho pra consumir
export function useLanguage() {
  return useContext(LanguageContext)
}
