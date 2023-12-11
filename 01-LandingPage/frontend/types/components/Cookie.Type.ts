import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { Api } from '../app/layout.Type'

/**
 * CookieServer
 */
export type GetDataProps = {
  params: Promise<Response | undefined>
}

export type CookieServerProp = {
  params: {
    api: Array<Api>
  }
}

export type Promises = {
  cookie: RequestCookie | undefined
  inbox: {
    name: string
    init: string
  }
}

/**
 * CookieClient
 */
export type CookieClientProps = {
  params: {
    responses: Array<string>
  }
}
