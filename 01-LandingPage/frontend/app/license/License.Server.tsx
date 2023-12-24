'use server'

import { GetBackendLicense, PublicFetchApi } from '@/lib/api/api'
import LicenseClient from './License.Client'
import jsYaml from 'js-yaml'
import { LicenseList, LicenseResponse, Server } from '@/types/app/license/License.Type'

export default async function LicenseServer() {
  const frontendText = await PublicFetchApi({ path: 'license.yaml' })
  const backendText = await GetBackendLicense()

  const frontLicense = jsYaml.load(frontendText) as LicenseResponse
  const backendLicense = jsYaml.load(backendText) as LicenseResponse

  const front: LicenseList = {
    all: [
      ...frontLicense.License.MIT.production,
      ...frontLicense.License.MIT.development,
      ...frontLicense.License.Apache2.production,
    ],
    production: [...frontLicense.License.MIT.production, ...frontLicense.License.Apache2.production],
    development: [...frontLicense.License.MIT.development],
  }

  const back: LicenseList = {
    all: [
      ...backendLicense.License.MIT.production,
      ...backendLicense.License.MIT.development,
      ...backendLicense.License.Apache2.production,
      ...backendLicense.License.Apache2.development,
      ...backendLicense.License.BSD3Clause.production,
      ...backendLicense.License.BSD3Clause.development,
    ],
    production: [
      ...backendLicense.License.MIT.production,
      ...backendLicense.License.Apache2.production,
      ...backendLicense.License.BSD3Clause.production,
    ],
    development: [
      ...backendLicense.License.MIT.development,
      ...backendLicense.License.Apache2.development,
      ...backendLicense.License.BSD3Clause.development,
    ],
  }

  const all: LicenseList = {
    all: [...front.all, ...back.all],
    production: [...front.production, ...back.production],
    development: [...front.development, ...back.development],
  }

  const list: Server = {
    all,
    front,
    back,
  }

  return <LicenseClient params={{ license: list }}></LicenseClient>
}
