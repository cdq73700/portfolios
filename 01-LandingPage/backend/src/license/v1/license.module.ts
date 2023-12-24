import { Module } from '@nestjs/common'
import { LicenseController } from './license.controller'
import { LicenseService } from './license.service'

@Module({
  imports: [],
  controllers: [LicenseController],
  providers: [LicenseService],
})
export class LicenseModuleV1 {}
