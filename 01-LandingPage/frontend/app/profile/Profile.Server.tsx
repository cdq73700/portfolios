'use server'

import { GetCookie } from '@/lib/cookies'
import { GetProfile } from '@/lib/api/api'
import ProfileClient from './Profile.Client'
import { ResponseProfileSchema } from '@/swagger/v1/typescript/model/responseProfileSchema'
import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'

export default async function ProfileServer() {
  const language = GetCookie({ name: 'language' })?.value ?? 'en'

  const { success, data, error }: { success: boolean; data: Array<ResponseProfileSchema>; error: ErrorSchemaError } =
    await GetProfile(language)

  return <ProfileClient params={{ success, data, error }}></ProfileClient>
}
