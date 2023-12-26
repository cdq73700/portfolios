'use server'

import { GetLicense } from '@/lib/api/api'
import LicenseClient from './License.Client'
import LicenseAction from './License.Action'
import { LicenseSchema } from '@/swagger/v1/typescript/model/licenseSchema'
import { ErrorSchema } from '@/swagger/v1/typescript/model/errorSchema'

export default async function LicenseServer() {
  const license: LicenseSchema & ErrorSchema = await GetLicense(undefined)
  const { success = false, data = [], error = {} } = license

  return <LicenseClient params={{ success, data, error }} action={LicenseAction}></LicenseClient>
}
