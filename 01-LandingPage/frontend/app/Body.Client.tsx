'use client'

import { Language, Theme } from '@/types/Application.Type'
import { BodyClientProps } from '@/types/app/Body.Type'
import ProviderClient from './Provider.Client'

export default function BodyClient({ params, children }: BodyClientProps) {
  const [language, mode] = params
  return (
    <html lang={language.value} style={{ colorScheme: mode.value }} className={mode.value}>
      <body>
        <ProviderClient params={{ language: language.value as Language, theme: mode.value as Theme }}>
          {children}
        </ProviderClient>
      </body>
    </html>
  )
}
