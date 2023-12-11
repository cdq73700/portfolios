'use server'

import { CookieIssue } from '@/lib/api/api'
import { SetCookie } from '@/lib/cookies'
import { ModeButtonActionProps } from '@/types/components/Button/Mode.Type'

export default async function ModeButtonAction({ theme }: ModeButtonActionProps) {
  const res = await CookieIssue({
    name: 'mode',
    body: {
      key: 'mode',
      value: theme,
    },
  })
  await SetCookie({ cookie: res.headers.getSetCookie()[0] })
}
