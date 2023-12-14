'use server'

import { CookieIssue } from '@/lib/api/api'
import { SetCookie } from '@/lib/cookies'
import { LanguageSelectBoxActionProps } from '@/types/components/SelectBox/Language.Type'

export default async function LanguageSelectBoxAction({ language }: LanguageSelectBoxActionProps) {
  const res = await CookieIssue({
    name: 'language',
    parameter: language ?? 'en',
  })
  await SetCookie({ cookie: res.headers.getSetCookie()[0] })
}
