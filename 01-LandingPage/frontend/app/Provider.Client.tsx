'use client'

import { useDispatch } from 'react-redux'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'
import { setLanguage } from '@/reducers/Application.Reducer'
import { I18nextProvider } from 'react-i18next'
import { ProviderClientProps } from '@/types/app/Provider.Type'

export default function ProviderClient({ params, children }: ProviderClientProps) {
  const { language, theme, i18n } = params
  const dispatch = useDispatch()

  useEffect(() => {
    i18n.changeLanguage(language)
    dispatch(setLanguage(language))
  }, [language, dispatch, i18n])

  return (
    <>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <NextThemeProvider defaultTheme={theme} attribute="class" enableSystem={false}>
          {children}
        </NextThemeProvider>
      </I18nextProvider>
    </>
  )
}
