import { Injectable } from '@nestjs/common'
import getLicenseApi from './api/getLicense.api'
import { LicenseSchema } from 'swagger/v1/typescript/model/licenseSchema'
import { GetLicenseDto } from './dto/license.dto'

@Injectable()
export class LicenseService {
  async getLicense(query: GetLicenseDto) {
    const license: LicenseSchema = await getLicenseApi(query)
    return license
  }
}
