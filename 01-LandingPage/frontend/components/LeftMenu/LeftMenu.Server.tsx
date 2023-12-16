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
    value: 'profile',
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
      {
        href: '/{language}/dog',
        icon: <Box>🐕</Box>,
        value: 'dog',
      },
    ],
  }

  const list: Array<Inbox> = [profile, inboxGroup]

  return <LeftMenuClient params={{ list }}></LeftMenuClient>
}
