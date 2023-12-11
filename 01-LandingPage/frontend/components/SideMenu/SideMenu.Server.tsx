'use server'

import { Inbox, SideMenuServerProps } from '@/types/components/SideMenu.Type'
import SideMenuClient from './SideMenu.Client'

export default async function SideMenuServer({ children }: SideMenuServerProps) {
  const inbox: Array<Inbox> = [
    {
      key: '/',
      value: 'HEADER',
    },
  ]
  return <SideMenuClient params={{ inbox }}>{children}</SideMenuClient>
}
