import { Language } from '@/types/Application.Type'

/**
 * LanguageSelectBoxServer
 */
export type LanguageLong = 'English' | '日本語'

export type MenuItem = {
  text: LanguageLong
  value: Language
}

/**
 * LanguageSelectBoxAction
 */
export type LanguageSelectBoxActionProps = {
  language: Language
}

/**
 * LanguageSelectBoxClient
 */
export type LanguageSelectBoxClientProps = {
  params: {
    languages: Array<MenuItem>
  }
  action: ({ language }: LanguageSelectBoxActionProps) => Promise<void>
}
