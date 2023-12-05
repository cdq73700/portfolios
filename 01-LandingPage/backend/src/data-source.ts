import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'
import { Users } from './entities/users'
import { Profile } from './entities/profile'

const options: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: 'database/db.sqlite3',
  synchronize: true,
  logging: true,
  entities: [Users, Profile],
  subscribers: [],
  migrations: [],
  seeds: [],
}

export const AppDataSource = new DataSource(options)
