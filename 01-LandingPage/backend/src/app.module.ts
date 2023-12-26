import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ProfileModuleV1 } from './profile/v1/profile.module'
import { CookieModuleV1 } from './cookie/v1/cookie.module'
import { LicenseModuleV1 } from './license/v1/license.module'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ProfileModuleV1,
    CookieModuleV1,
    LicenseModuleV1,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
