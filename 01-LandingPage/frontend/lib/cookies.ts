'use server'

import { Cookie } from '@/types/Application.Type'
import { CookieData, GetCookieProps, SetCookieProps } from '@/types/lib/Cookies.Type'
import { cookies } from 'next/headers'

function GetCookie({ name }: GetCookieProps) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(name)
  return cookie
}

async function SetCookie({ cookie }: SetCookieProps) {
  const cookieList = cookie.split(';')
  const cookieData: CookieData = cookieList.reduce(
    (previousValue: Cookie, currentValue, index) => {
      const [key, rawValue = true] = currentValue.split('=').map((item) => item.trim())
      const value = index === 0 ? rawValue : { [key[0].toLowerCase() + key.slice(1)]: rawValue }
      if (typeof value === 'string') {
        previousValue = {
          key,
          value,
          options: {},
        }
      }
      if (typeof value === 'object') {
        previousValue = {
          ...previousValue,
          options: {
            ...previousValue.options,
            ...value,
          },
        }
      }
      return previousValue
    },
    { key: '', value: '', options: {} }
  )

  if (cookieData.key !== '') {
    const cookieStore = cookies()
    cookieStore.set(cookieData.key, cookieData.value, { ...cookieData.options })
  }
}

export { GetCookie, SetCookie }
