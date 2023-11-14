import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Users } from '../entities/users'

export default class UsersSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Users)
    const users: Array<Users> = [
      {
        id: 1,
        firstName: 'first',
        lastName: 'last',
        isActive: true,
      },
    ]

    await repository.insert(users)
  }
}
