/**
 * RootLayout
 */
export type RootLayoutProps = {
  children: React.ReactNode
}

export type Api = {
  name: string
  body?: {
    key: string
    value: string
  }
}
