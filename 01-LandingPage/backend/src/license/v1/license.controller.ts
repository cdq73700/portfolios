import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { LicenseService } from './license.service'
import { GetLicenseDto } from './dto/license.dto'
import { GetLicenseValidationPipe } from './pipe/licenseValidation.pipe'

@Controller('/api/v1/license')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}
  @Get()
  async GetLicense(
    @Query(GetLicenseValidationPipe) query: GetLicenseDto,
    @Res() res: Response
  ) {
    try {
      const data = await this.licenseService.getLicense(query)
      res.status(HttpStatus.OK).json(data)
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      } else {
        throw new InternalServerErrorException(error)
      }
    }
  }
}
