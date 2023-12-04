'use client'

import { SetMode } from '@/lib/api/api'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({
  mode,
  initFlg,
  children,
}: {
  mode: string
  initFlg: boolean
  children: React.ReactNode
}) {
  if (initFlg) {
    SetMode(mode)
  }
  return (
    <NextThemeProvider
      defaultTheme={'dark'}
      attribute="class"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
