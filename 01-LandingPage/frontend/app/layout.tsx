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
    if (!cookie) {
      return { mode: 'dark', initModeFlg: true }
    }
    return { mode: cookie.value, initModeFlg: false }
  }
  return GetModeCookie()
}

function GetLang() {
  const GetLangCookie = async function () {
    const cookie = await GetCookie('language')
    if (!cookie) {
      return { lang: 'en', initLangFlg: true }
    }
    return { lang: cookie.value, initLangFlg: false }
  }
  return GetLangCookie()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { mode, initModeFlg } = await GetMode()
  const { lang, initLangFlg } = await GetLang()
  return (
    <html lang={lang} style={{ colorScheme: mode }} className={mode}>
      <body>
        <ReduxProvider>
          <ThemeProvider mode={mode} initFlg={initModeFlg}>
            <I18nProvider lang={lang} initFlg={initLangFlg}>
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
