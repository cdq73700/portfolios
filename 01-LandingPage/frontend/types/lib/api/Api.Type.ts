/**
 * api
 */
export type FetchApiProps = {
  path: string
  init: RequestInit
}

export type GetJsonProps = {
  res: Response
}

export type CookieIssueProps = {
  name: string
  body?: {
    key: string
    value: string
  }
}
