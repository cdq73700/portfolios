'use server'

import { Cookie } from '@/types/Application.Type'
import { CookieData, GetCookieProps, SetCookieProps } from '@/types/lib/Cookies.Type'
import { cookies } from 'next/headers'

async function GetCookie({ name }: GetCookieProps) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(name)
  return cookie
}

async function SetCookie({ cookie }: SetCookieProps) {
  const cookieList = cookie.split(';')
  const cookieData: CookieData = cookieList.reduce(
    (previousValue: Cookie, currentValue, index) => {
      const items = currentValue.split('=')
      if (index == 0) {
        previousValue = {
          key: items[0],
          value: items[1],
          options: {},
        }
      } else {
        previousValue = {
          ...previousValue,
          options: {
            ...previousValue.options,
            [items[0]]: items[1] ?? true,
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
