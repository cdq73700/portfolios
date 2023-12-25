'use server'

import { CookieIssueProps, FetchApiProps, GetJsonProps } from '@/types/lib/api/Api.Type'

async function FetchApi({ version, path, init }: FetchApiProps) {
  const res = await fetch(`http://${process.env.BACKEND_NAME}:${process.env.BACKEND_PORT}/api/${version}/${path}`, {
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
    version: 'v1',
    path: `profile/${lang}`,
    init: {
      method: 'GET',
      cache: 'no-cache',
      next: { tags: ['profile'] },
    },
  }
  const res = await FetchApi(params)
  const json = await GetJson({ res })
  return json
}

async function GetLicense(query: string | undefined) {
  const params: FetchApiProps = {
    version: 'v1',
    path: query ? `license?${query}` : 'license',
    init: {
      method: 'GET',
      cache: 'no-store',
      next: { tags: ['license'] },
    },
  }
  const res = await FetchApi(params)
  const json = await GetJson({ res })
  return json
}

async function CookieIssue({ name, parameter }: CookieIssueProps) {
  const params: FetchApiProps = {
    version: 'v1',
    path: `cookie/${name}/${parameter}`,
    init: {
      method: 'HEAD',
      credentials: 'include',
      cache: 'no-cache',
      next: { tags: ['cookie'] },
    },
  }
  const res = await FetchApi(params)
  return res
}

export { CookieIssue, GetProfile, GetLicense }
