import { Theme } from '@/types/Application.Type'

/**
 * ThemeButtonServer
 */

/**
 * ThemeButtonAction
 */
export type ThemeButtonActionProps = {
  theme: Theme
}

/**
 * ThemeButtonClient
 */
export type ThemeButtonClientProps = {
  params: {
    themes: Array<Theme>
  }
  action: ({ theme }: ThemeButtonActionProps) => Promise<void>
}
