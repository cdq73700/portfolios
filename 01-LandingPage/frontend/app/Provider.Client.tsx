'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { ProviderClientProps } from '@/types/app/Provider.Type'
import i18n from '@/i18n/i18n'

export default function ProviderClient({ params, children }: ProviderClientProps) {
  const { language, theme } = params
  const newI18n: any = i18n.cloneInstance({ lng: language })

  useEffect(() => {
    newI18n.changeLanguage(language)
  }, [language, newI18n])

  return (
    <>
      <I18nextProvider i18n={newI18n} defaultNS={'translation'}>
        <NextThemeProvider defaultTheme={theme} attribute="class" enableSystem={false}>
          {children}
        </NextThemeProvider>
      </I18nextProvider>
    </>
  )
}
