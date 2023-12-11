/**
 * cookies
 */
export type GetCookieProps = {
  name: string
}

export type SetCookieProps = {
  cookie: string
}

export type CookieData = {
  key: string
  value: string
  options: object
}
