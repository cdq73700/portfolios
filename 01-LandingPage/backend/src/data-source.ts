import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'
import { Profile } from './entities/Profile'

const options: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: 'database/db.sqlite3',
  synchronize: false,
  logging: false,
  entities: [Profile],
  subscribers: [],
  migrations: [],
  seeds: [],
}

export const AppDataSource = new DataSource(options)
