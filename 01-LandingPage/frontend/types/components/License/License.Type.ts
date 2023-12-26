import { ResponseLicenseSchema } from '@/swagger/v1/typescript/model/responseLicenseSchema'

/**
 * LicenseTabClient
 */
export type LicenseTabClientProps = {
  params: {
    inbox: Array<string>
  }
  action: (location: string | undefined) => void
  children: React.ReactNode
}

/**
 * LicenseListClient
 */
export type LicenseListClientProps = {
  params: {
    license: Array<ResponseLicenseSchema>
  }
  action: (name: string | undefined) => void
}

/**
 * LicenseContentClient
 */
export type LicenseContentClientProps = {
  params: {
    license: Array<ResponseLicenseSchema>
  }
}

/**
 * Content
 */
export type ContentProps = {
  params: {
    license: ResponseLicenseSchema
  }
}
