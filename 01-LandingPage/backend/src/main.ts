import 'reflect-metadata'
import * as cookieParser from 'cookie-parser'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppDataSource } from './data-source'
import { HttpExceptionFilter } from './httpException.filter'

async function bootstrap() {
  await AppDataSource.initialize()
  const app = await NestFactory.create(AppModule, { cors: true })
  app.use(cookieParser())
  app.enableCors({
    credentials: true,
    origin: RegExp(process.env.ORIGIN),
  })
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(4000)
}
bootstrap()
