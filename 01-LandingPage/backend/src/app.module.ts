import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { ProfileModuleV1 } from './profile/v1/profile.module'

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), ProfileModuleV1],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
