import { Module } from '@nestjs/common'
import { CookieController } from './cookie.controller'

@Module({
  imports: [],
  controllers: [CookieController],
  providers: [],
})
export class CookieModuleV1 {}
