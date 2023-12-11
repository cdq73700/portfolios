'use server'

import RightMenuClient from './RightMenu.Client'
import ModeButtonServer from '../Button/Mode/ModeButton.Server'
import LanguageSelectBoxServer from '../SelectBox/Language/LanguageSelectBox.Server'
import { Inbox } from '@/types/components/RightMenu.Type'

export default async function RightMenuServer() {
  const inbox: Array<Inbox> = [
    {
      label: 'Mode',
      value: <ModeButtonServer></ModeButtonServer>,
    },
    {
      label: 'Language',
      value: <LanguageSelectBoxServer></LanguageSelectBoxServer>,
    },
  ]
  return <RightMenuClient params={{ inbox }}></RightMenuClient>
}
