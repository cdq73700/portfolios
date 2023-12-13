import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Profile } from '../entities/Profile'

export default class ProfileSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Profile)

    const profileJp = new Profile(
      'catman',
      'aaaaa@aaa.aaa',
      '0000-00-0000',
      '100-8111',
      '東京都千代田区千代田1-1',
      'ja',
      true
    )

    const profileEn = new Profile(
      'catman',
      'aaaaa@aaa.aaa',
      '0000-00-0000',
      '100-8111',
      'TokyotoChiyodakuChiyoda1-1',
      'en',
      true
    )

    await repository.insert([profileJp, profileEn])
  }
}
