'use client'
import { store } from '@/stores/base.store'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n/i18n'
import { SetLanguage, SetMode } from '@/lib/api/api'
import { useEffect } from 'react'

type Data = {
  value: string
  flg: boolean
}

type Props = {
  modeData: Data
  langData: Data
  children: React.ReactNode
}

export default function Provider({ modeData, langData, children }: Props) {
  if (modeData.flg) {
    SetMode(modeData.value)
  }
  if (langData.flg) {
    SetLanguage(langData.value)
  }
  useEffect(() => {
    i18n.changeLanguage(langData.value)
  }, [langData])
  return (
    <>
      <ReduxProvider store={store}>
        <NextThemeProvider defaultTheme={'dark'} attribute="class" enableSystem={false}>
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            {children}
          </I18nextProvider>
        </NextThemeProvider>
      </ReduxProvider>
    </>
  )
}
