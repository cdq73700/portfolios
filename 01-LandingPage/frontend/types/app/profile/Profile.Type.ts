import { ErrorSchemaError } from '@/swagger/v1/typescript/model/errorSchemaError'
import { ResponseProfileSchema } from '@/swagger/v1/typescript/model/responseProfileSchema'

/**
 * ProfileServer
 */

/**
 * ProfileClient
 */
export type ProfileClientProps = {
  params: {
    success: boolean
    data: Array<ResponseProfileSchema>
    error: ErrorSchemaError
  }
}
