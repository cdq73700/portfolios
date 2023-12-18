'use server'

import { Theme } from '@/types/Application.Type'
import ThemeButtonClient from './ThemeButton.Client'
import ThemeButtonAction from './ThemeButton.Action'

export default async function ThemeButtonServer() {
  const themes: Array<Theme> = ['light', 'dark']
  return <ThemeButtonClient params={{ themes }} action={ThemeButtonAction}></ThemeButtonClient>
}
