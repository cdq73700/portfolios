'use client'

import { Language, Theme } from '@/types/Application.Type'
import { BodyClientProps } from '@/types/app/Body.Type'
import ProviderClient from './Provider.Client'

export default function BodyClient({ params, children }: BodyClientProps) {
  const [language, theme] = params
  return (
    <html lang={language.value} style={{ colorScheme: theme.value }} className={theme.value}>
      <body>
        <ProviderClient params={{ language: language.value as Language, theme: theme.value as Theme }}>
          {children}
        </ProviderClient>
      </body>
    </html>
  )
}
