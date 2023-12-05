import { Injectable } from '@nestjs/common'
import { AppDataSource } from './data-source'
import { Profile } from './entities/profile'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  async getProfile(lang: string): Promise<Profile[]> {
    const repository = AppDataSource.getRepository(Profile)
    const profile = await repository.find({ where: { language: lang } })
    return profile
  }

  getLanguage(): string {
    return ''
  }
}
