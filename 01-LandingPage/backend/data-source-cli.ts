import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'

const options: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: 'database/db.sqlite3',
  synchronize: true,
  logging: true,
  entities: ['./src/entities/*.ts'],
  subscribers: [],
  migrations: ['./src/migrations/*.ts'],
  seeds: ['./src/seeds/*.ts'],
}

export const AppDataSourceCli = new DataSource(options)
