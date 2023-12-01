'use server'
import { cookies } from 'next/headers'

async function GetCookie(key: string) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(key)
  return cookie
}

export { GetCookie }
