'use server'

import { GetCookie } from '@/lib/cookies'
import BodyClient from './Body.Client'
import { BodyServerProps, Cookie, GetDataProps, Inbox } from '@/types/app/Body.Type'
import { Promises } from '@/types/components/Cookie.Type'

async function GetData({ params }: GetDataProps) {
  const data = await params
  if (data.cookie) {
    return data.cookie
  } else {
    return { name: data.inbox.name, value: data.inbox.init }
  }
}

export default async function BodyServer({ children }: BodyServerProps) {
  const inbox: Array<Inbox> = [
    {
      name: 'language',
      init: 'en',
    },
    {
      name: 'mode',
      init: 'dark',
    },
  ]
  const promises: Array<Promise<Promises>> = inbox.map(async ({ name, init }) => {
    return { cookie: await GetCookie({ name }), inbox: { name, init } }
  })

  const cookies: Array<Cookie> = []

  for (let index = 0; index < promises.length; index++) {
    const data = await GetData({ params: promises[index] })
    cookies.push({ key: data.name, value: data.value })
  }

  return <BodyClient params={cookies}>{children}</BodyClient>
}
