import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import { ResponseLicenseSchema } from '@/swagger/v1/typescript/model/responseLicenseSchema'

/**
 * LicenseServer
 */

/**
 * LicenseAction
 */
export type LicenseActionProps = {
  location: string | undefined
  environment: string | undefined
  name: string | undefined
}

/**
 * LicenseClient
 */

export type LicenseClientProps = {
  params: {
    success: boolean
    data: Array<ResponseLicenseSchema>
    error: ErrorSchemaError
  }
  action: ({ location, environment, name }: LicenseActionProps) => Promise<{
    success: boolean
    data: Array<ResponseLicenseSchema>
    error: ErrorSchemaError
  }>
}
