'use client'

import MarkDown from '@/components/MarkDown'

export default function Home() {
  const params = {
    id: 'Main',
    title: 'Main',
    body: 'Main',
    keyPrefix: '',
  }
  const body = 'Main'
  return (
    <>
      <MarkDown params={params}>
        <></>
      </MarkDown>
    </>
  )
}
