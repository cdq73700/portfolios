'use client'

import { Language, Theme } from '@/types/Application.Type'
import ProviderServer from './Provider.Server'
import { BodyClientProps } from '@/types/app/Body.Type'

export default function BodyClient({ params, children }: BodyClientProps) {
  const [language, mode] = params
  return (
    <html lang={language.value} style={{ colorScheme: mode.value }} className={mode.value}>
      <body>
        <ProviderServer params={{ language: language.value as Language, theme: mode.value as Theme }}>
          {children}
        </ProviderServer>
      </body>
    </html>
  )
}
