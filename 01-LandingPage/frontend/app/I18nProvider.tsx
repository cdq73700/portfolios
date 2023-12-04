'use client'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n/i18n'
import { SetLanguage } from '@/lib/api/api'

function I18nProvider({
  lang,
  initFlg,
  children,
}: {
  lang: string
  initFlg: boolean
  children: React.ReactNode
}) {
  if (initFlg) {
    SetLanguage(lang)
  }
  i18n.changeLanguage(lang)
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      {children}
    </I18nextProvider>
  )
}

export default I18nProvider
