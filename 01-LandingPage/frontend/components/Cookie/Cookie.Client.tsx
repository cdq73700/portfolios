'use client'

import { SetCookie } from '@/lib/cookies'
import { CookieClientProps } from '@/types/components/Cookie.Type'
import { useEffect } from 'react'

export default function CookieClient({ params }: CookieClientProps) {
  const { responses } = params
  console.log(responses)
  useEffect(() => {
    responses.map(async (item) => {
      console.log(item)
      await SetCookie({ cookie: item })
    })
  }, [responses])

  return <></>
}
