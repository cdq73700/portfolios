'use server'

import { CookieIssueProps, FetchApiProps, GetJsonProps } from '@/types/lib/api/Api.Type'

async function FetchApi({ path, init }: FetchApiProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    redirect: 'follow',
    ...init,
  })

  return res
}

async function GetJson({ res }: GetJsonProps) {
  const json = await res.json()
  return json
}

async function GetProfile(lang: string) {
  const params: FetchApiProps = {
    path: `profile/${lang}`,
    init: {
      method: 'GET',
      cache: 'no-store',
      next: { tags: ['profile'] },
    },
  }
  const res = await FetchApi(params)
  const json = await GetJson({ res })
  return json
}

async function CookieIssue({ name, body }: CookieIssueProps) {
  const params: FetchApiProps = {
    path: name,
    init: {
      method: body ? 'POST' : 'GET',
      body: body ? JSON.stringify({ [body.key]: body.value }) : undefined,
      credentials: 'include',
      cache: 'force-cache',
    },
  }
  const res = await FetchApi(params)
  return res
}

export { CookieIssue, GetProfile }
