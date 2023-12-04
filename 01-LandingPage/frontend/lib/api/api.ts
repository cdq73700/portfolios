'use server'
import { SetCookie } from '../cookies'

async function FetchApi(path: string, init: RequestInit) {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${path}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    redirect: 'follow',
    ...init,
  })

  await SetCookie(res)
  const json = await res.json()
  return json
}

async function SetLanguage(lang: string) {
  const body = { lang: lang }
  console.log(body)
  const data = await FetchApi('language', {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
  })

  return data
}

async function SetMode(mode: string) {
  const body = { mode: mode }
  const data = await FetchApi('mode', {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
  })
  return data
}

async function GetProfile() {
  const data = await FetchApi('profile', {
    method: 'GET',
    cache: 'force-cache',
    next: { tags: ['profile'] },
  })
  return data
}

export { SetLanguage, SetMode, GetProfile }
