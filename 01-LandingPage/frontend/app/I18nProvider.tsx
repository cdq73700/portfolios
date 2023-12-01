'use client'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n/i18n'
import { useEffect, useState } from 'react'
import { GetCookie } from '@/lib/cookies'

function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const getLang = async function () {
      const cookie = await GetCookie('language')
      i18n.changeLanguage(cookie ? cookie.value : 'en')
    }
    getLang()
  }, [])
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      {children}
    </I18nextProvider>
  )
}

export default I18nProvider
