import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'
import ReduxProvider from './ReduxProvider'
import I18nProvider from './I18nProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={'dark'}>
      <body>
        <ReduxProvider>
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
        </ReduxProvider>
      </body>
    </html>
  )
}
