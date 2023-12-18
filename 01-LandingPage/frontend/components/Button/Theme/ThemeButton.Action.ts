'use server'

import { CookieIssue } from '@/lib/api/api'
import { SetCookie } from '@/lib/cookies'
import { ThemeButtonActionProps } from '@/types/components/Button/Theme.Type'

export default async function ThemeButtonAction({ theme }: ThemeButtonActionProps) {
  const res = await CookieIssue({
    name: 'theme',
    parameter: theme ?? 'dark',
  })
  await SetCookie({ cookie: res.headers.getSetCookie()[0] })
}
