import { LicenseList, LicenseType } from '@/types/app/license/License.Type'

/**
 * LicenseContext
 */
export type LicenseContextProps = {
  serverTabIndex: number
  environmentTabIndex: number
  SetServerTabIndex: (index: number) => void
  SetEnvironmentTabIndex: (index: number) => void
}

/**
 * LicenseProvider
 */
export type LicenseProviderProps = {
  children: React.ReactNode
}

/**
 * LicenseTabClient
 */
export type LicenseTabClientProps = {
  params: {
    inbox: Array<string>
    index: number
    ChangeIndex: (index: number) => void
  }
  children: React.ReactNode
}

/**
 * LicenseListClient
 */
export type LicenseListClientProps = {
  params: {
    license: LicenseList
  }
  children: React.ReactNode
}

/**
 * LicenseContentServer
 */

/**
 * LicenseContentClient
 */
export type LicenseContentClientProps = {
  params: {
    license: LicenseList
  }
}

/**
 * Content
 */
export type ContentProps = {
  params: {
    name: string
    version: string
    license: string
    npmjs: string
    github: string
    body: string
  }
}
