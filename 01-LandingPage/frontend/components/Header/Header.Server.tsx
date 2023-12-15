'use server'

import { Inbox } from '@/types/components/Header.Type'
import HeaderClient from './Header.Client'

export default async function HeaderServer() {
  const inbox: Array<Inbox> = [
    {
      key: '/',
      value: 'HEADER',
    },
    {
      key: '/profile',
      value: 'profile',
    },
  ]
  return <HeaderClient params={{ inbox }}></HeaderClient>
}
