import { Language, Theme } from '@/types/Application.Type'

/**
 * api
 */
export type FetchApiProps = {
  version: string
  path: string
  init: RequestInit
}

export type GetJsonProps = {
  res: Response
}

export type CookieIssueProps = {
  name: string
  parameter: Language | Theme
}
