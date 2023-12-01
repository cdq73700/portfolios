'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" enableSystem={false}>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
