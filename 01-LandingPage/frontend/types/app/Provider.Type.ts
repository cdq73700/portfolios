import { Language, Theme } from '../Application.Type'

/**
 * ReduxProviderClient
 */
export type ReduxProviderClientProps = {
  children: React.ReactNode
}

/**
 * ProviderClient
 */
export type ProviderClientProps = {
  params: {
    language: Language
    theme: Theme
  }
  children: React.ReactNode
}
