'use server'
import { cookies } from 'next/headers'

async function GetCookie(key: string) {
  const cookieStore = cookies()
  const cookie = cookieStore.get(key)
  return cookie
}

type Cookie = {
  key: string
  value: string
  options: object
}

async function SetCookie(res: Response) {
  const header: Array<Cookie> =
    res.headers.getSetCookie().map((item) => {
      const cookieList = item.split(';')
      const cookieData = cookieList.reduce(
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
      return cookieData
    }) ?? []

  if (header.length) {
    const cookieStore = cookies()
    header.map((item) => {
      cookieStore.set(item.key, item.value, { ...item.options })
    })
  }
}

export { GetCookie, SetCookie }
