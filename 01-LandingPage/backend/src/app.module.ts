import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ProfileModuleV1 } from './profile/v1/profile.module'
import { CookieModuleV1 } from './cookie/v1/cookie.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/api/public',
      serveStaticOptions: { index: false },
    }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ProfileModuleV1,
    CookieModuleV1,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
