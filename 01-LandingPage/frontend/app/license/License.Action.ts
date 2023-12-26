'use server'

import { GetLicense } from '@/lib/api/api'
import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import { ResponseLicenseSchema } from '@/swagger/v1/typescript/model/responseLicenseSchema'
import { LicenseActionProps } from '@/types/app/license/License.Type'

export default async function LicenseAction({ location, environment, name }: LicenseActionProps) {
  const params = new URLSearchParams()
  if (location) params.append('location', location)
  if (environment) params.append('environment', environment)
  if (name) params.append('name', name)
  const license: { success: boolean; data: Array<ResponseLicenseSchema>; error: ErrorSchemaError } = await GetLicense(
    params.toString()
  )
  return license
}
