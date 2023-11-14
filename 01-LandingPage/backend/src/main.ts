import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppDataSource } from './data-source'
import { Users } from './entities/users'

async function bootstrap() {
  await AppDataSource.initialize()
  const app = await NestFactory.create(AppModule)
  const repository = AppDataSource.getRepository(Users)
  const users = await repository.find()
  console.log(users)
  await app.listen(4000)
}
bootstrap()
