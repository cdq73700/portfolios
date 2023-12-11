import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

/**
 * BodyServer
 */
export type GetDataProps = {
  params: Promise<{
    cookie: RequestCookie | undefined
    inbox: {
      name: string
      init: string
    }
  }>
}

export type BodyServerProps = {
  children: React.ReactNode
}

export type Inbox = {
  name: string
  init: string
}

export type Cookie = {
  key: string
  value: string
}

/**
 * BodyClient
 */
export type BodyClientProps = {
  params: Array<Cookie>
  children: React.ReactNode
}
