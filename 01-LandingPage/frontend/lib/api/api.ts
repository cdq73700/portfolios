'use server'

import { CookieIssueProps, FetchApiProps, GetJsonProps } from '@/types/lib/api/Api.Type'

async function PublicFetchApi({ path }: { path: string }) {
  const res = await fetch(`http://localhost:3000/${path}`, {
    method: 'GET',
    cache: 'no-cache',
  })

  const text = await GetText({ res })

  return text
}

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

async function GetText({ res }: GetJsonProps) {
  const text = await res.text()
  return text
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

async function GetBackendLicense() {
  const params: FetchApiProps = {
    version: 'public',
    path: 'license.yaml',
    init: {
      method: 'GET',
      cache: 'no-cache',
    },
  }
  const res = await FetchApi(params)
  const test = await GetText({ res })
  return test
}

export { CookieIssue, GetProfile, GetBackendLicense, PublicFetchApi }
