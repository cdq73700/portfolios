export type Language = 'en' | 'ja'
export type Theme = 'light' | 'dark'
export type Anchor = 'top' | 'left' | 'bottom' | 'right'

export type ApplicationInitial = {
  language: Language
}

export type Cookie = {
  key: string
  value: string
  options: object
}
