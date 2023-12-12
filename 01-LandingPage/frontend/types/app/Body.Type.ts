import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

/**
 * BodyServer
 */

export type BodyServerProps = {
  children: React.ReactNode
}

export type Inbox = {
  name: string
  init: string
}

/**
 * BodyClient
 */
export type BodyClientProps = {
  params: Array<RequestCookie>
  children: React.ReactNode
}
