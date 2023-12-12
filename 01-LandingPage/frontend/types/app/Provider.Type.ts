import { Language, Theme } from '../Application.Type'

/**
 * ReduxProviderClient
 */
export type ReduxProviderClientProps = {
  children: React.ReactNode
}

/**
 * ProviderServer
 */
export type ProviderServerProps = {
  params: {
    language: Language
    theme: Theme
  }
  children: React.ReactNode
}

/**
 * ProviderClient
 */
export type ProviderClientProps = {
  params: {
    language: Language
    theme: Theme
    i18n: any
  }
  children: React.ReactNode
}
