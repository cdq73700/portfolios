'use server'

import { CookieIssue } from '@/lib/api/api'
import CookieClient from './Cookie.Client'
import { GetCookie } from '@/lib/cookies'
import { CookieServerProp, GetDataProps } from '@/types/components/Cookie.Type'

async function GetData({ params }: GetDataProps) {
  const response = await params
  if (response instanceof Response) {
    return response.headers.getSetCookie()[0]
  } else {
    return undefined
  }
}

export default async function CookieServer({ params }: CookieServerProp) {
  const { api } = params
  const responses: Array<string> = []
  const promises = api.map(async ({ name, body }) => {
    const cookie = await GetCookie({ name })
    if (!cookie) {
      const res = await CookieIssue({ name, body })
      return res
    }
    return undefined
  })
  if (promises) {
    for (let index = 0; index < promises.length; index++) {
      const data = await GetData({ params: promises[index] })
      if (data) {
        responses.push(data)
      }
    }
  }
  if (responses.length) {
    return <CookieClient params={{ responses }}></CookieClient>
  } else {
    return <></>
  }
}
