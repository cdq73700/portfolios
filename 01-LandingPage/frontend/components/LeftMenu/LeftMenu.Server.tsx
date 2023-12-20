'use server'

import { Inbox } from '@/types/components/LeftMenu.Type'
import LeftMenuClient from './LeftMenu.Client'
import { Home } from '@mui/icons-material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Box } from '@mui/material'

export default async function LeftMenuServer() {
  const profile: Inbox = {
    href: '/profile',
    icon: <Home></Home>,
    value: 'PROFILE',
  }
  const inboxGroup: Inbox = {
    icon: <InboxIcon></InboxIcon>,
    value: 'inbox',
    inbox: [
      {
        href: '/cat',
        icon: <Box>🐈</Box>,
        value: 'cat',
      },
    ],
  }

  const list: Array<Inbox> = [profile, inboxGroup]

  return <LeftMenuClient params={{ list }}></LeftMenuClient>
}
