import { Theme } from '@/types/Application.Type'

/**
 * ModeButtonServer
 */

/**
 * ModeButtonAction
 */
export type ModeButtonActionProps = {
  theme: Theme
}

/**
 * ModeButtonClient
 */
export type ModeButtonClientProps = {
  params: {
    themes: Array<Theme>
  }
  action: ({ theme }: ModeButtonActionProps) => Promise<void>
}
