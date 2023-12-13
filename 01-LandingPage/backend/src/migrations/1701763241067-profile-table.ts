import { Profile } from '../entities/Profile'
import {
  Column,
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
} from 'typeorm'

const tableName: string = Profile.name.toLowerCase()
const indexName: string = 'IDX_PROFILE_LANGUAGE'

export class ProfileTable1701763241067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = queryRunner.connection
      .getMetadata(Profile)
      .ownColumns.map((column) => {
        const columnOptions: PropertyDecorator = Column({ ...column })
        return new TableColumn({
          ...columnOptions,
          name: column.propertyName,
          type: column.type.toString(),
        })
      })
    await queryRunner.createTable(new Table({ name: tableName, columns }))

    await queryRunner.createIndex(
      tableName,
      new TableIndex({
        name: indexName,
        columnNames: ['language'],
        isUnique: true,
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(tableName, indexName)
    await queryRunner.dropTable(tableName)
  }
}
