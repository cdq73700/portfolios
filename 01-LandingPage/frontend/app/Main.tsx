'use client'
import MarkDown from '@/components/MarkDown'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <MarkDown title={t('Main')} id="main">
        <p>{t('Main')}</p>
      </MarkDown>
    </>
  )
}
