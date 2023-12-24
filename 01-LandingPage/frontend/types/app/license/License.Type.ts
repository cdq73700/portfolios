/**
 * LicenseServer
 */
export type License = {
  name: string
  version: string
  license: string
  npmjs: string
  github: string
  body: string
}
export type LicenseList = {
  all: Array<License>
  production: Array<License>
  development: Array<License>
}
export type Server = {
  all: LicenseList
  front: LicenseList
  back: LicenseList
}
export type Environment = {
  production: Array<License>
  development: Array<License>
}
export type LicenseType = {
  MIT: Environment
  Apache2: Environment
  BSD3Clause: Environment
}
export type LicenseResponse = {
  License: LicenseType
}

/**
 * LicenseClient
 */

export type LicenseClientProps = {
  params: {
    license: Server
  }
}
