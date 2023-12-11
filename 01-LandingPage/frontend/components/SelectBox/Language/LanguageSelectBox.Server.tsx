'use server'

import LanguageSelectBoxClient from './LanguageSelectBox.Client'
import LanguageSelectBoxAction from './LanguageSelectBox.Action'
import { MenuItem } from '@/types/components/SelectBox/Language.Type'

export default async function LanguageSelectBoxServer() {
  const languages: Array<MenuItem> = [
    {
      text: 'English',
      value: 'en',
    },
    {
      text: '日本語',
      value: 'ja',
    },
  ]
  return <LanguageSelectBoxClient params={{ languages }} action={LanguageSelectBoxAction}></LanguageSelectBoxClient>
}
