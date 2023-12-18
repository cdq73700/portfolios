'use server'

import RightMenuClient from './RightMenu.Client'
import ThemeButtonServer from '../Button/Theme/ThemeButton.Server'
import LanguageSelectBoxServer from '../SelectBox/Language/LanguageSelectBox.Server'
import { Inbox } from '@/types/components/RightMenu.Type'
import { Box } from '@mui/material'

export default async function RightMenuServer() {
  const inbox: Array<Inbox> = [
    {
      label: 'Theme',
      value: await ThemeButtonServer(),
    },
    {
      label: 'Language',
      value: await LanguageSelectBoxServer(),
    },
  ]
  return (
    <RightMenuClient>
      {inbox.map(({ label, value }, index) => {
        return (
          <Box key={index}>
            <p>{label}</p>
            {value}
          </Box>
        )
      })}
    </RightMenuClient>
  )
}
