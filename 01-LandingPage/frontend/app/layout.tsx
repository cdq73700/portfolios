import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'
import ReduxProvider from './ReduxProvider'
import I18nProvider from './I18nProvider'
import ThemeProvider from './ThemeProvider'
import { GetCookie } from '@/lib/cookies'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function GetMode() {
  const GetModeCookie = async function () {
    const cookie = await GetCookie('mode')
    return cookie?.value ?? 'dark'
  }
  return GetModeCookie()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mode = await GetMode()
  return (
    <html lang="ja" style={{ colorScheme: mode }} className={mode}>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <I18nProvider>
              <Header></Header>
              <Box
                display={'flex'}
                minHeight={'100vh'}
                flexDirection={'column'}
                justifyContent={'space-between'}
              >
                <main>{children}</main>
              </Box>
              <Footer></Footer>
            </I18nProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
