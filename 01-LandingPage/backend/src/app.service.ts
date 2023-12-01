import { Injectable } from '@nestjs/common'
import { AppDataSource } from './data-source'
import { Users } from './entities/users'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  async getProfile(): Promise<Users[]> {
    const repository = AppDataSource.getRepository(Users)
    const users = await repository.find()
    return users
  }

  getLanguage(): string {
    return ''
  }
}
