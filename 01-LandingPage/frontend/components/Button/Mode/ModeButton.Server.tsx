'use server'

import { Theme } from '@/types/Application.Type'
import ModeButtonClient from './ModeButton.Client'
import ModeButtonAction from './ModeButton.Action'

export default async function ModeButtonServer() {
  const themes: Array<Theme> = ['light', 'dark']
  return <ModeButtonClient params={{ themes }} action={ModeButtonAction}></ModeButtonClient>
}
