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
      const items = currentValue.split('=')
      const key = items[0].trim()
      const value = items[1]?.trim() ?? true
      if (index == 0) {
        previousValue = {
          key,
          value,
          options: {},
        }
      } else {
        const first = key.substring(0, 1).toLocaleLowerCase()
        const other = key.substring(1)
        const newKey = first + other
        previousValue = {
          ...previousValue,
          options: {
            ...previousValue.options,
            [newKey]: value,
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
