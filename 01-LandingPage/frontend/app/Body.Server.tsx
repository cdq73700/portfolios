'use server'

import { GetCookie } from '@/lib/cookies'
import BodyClient from './Body.Client'
import { BodyServerProps, Inbox } from '@/types/app/Body.Type'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

function GetData({ name, init }: Inbox) {
  const cookie = GetCookie({ name })
  if (cookie) {
    return cookie
  } else {
    return { name: name, value: init }
  }
}

export default async function BodyServer({ children }: BodyServerProps) {
  const inbox: Array<Inbox> = [
    {
      name: 'language',
      init: 'en',
    },
    {
      name: 'theme',
      init: 'dark',
    },
  ]
  const cookies: Array<RequestCookie> = inbox.map(({ name, init }) => {
    return GetData({ name, init })
  })

  return <BodyClient params={cookies}>{children}</BodyClient>
}
