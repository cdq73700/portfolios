import { License } from '../entities/License'
import {
  Column,
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
} from 'typeorm'

const tableName: string = License.name.toLowerCase()
const indexArray: Array<{ name; columnNames }> = [
  {
    name: 'IDX_LICENSE_NAME',
    columnNames: ['name'],
  },
  {
    name: 'IDX_LICENSE_LOCATION',
    columnNames: ['location'],
  },
  {
    name: 'IDX_LICENSE_ENVIRONMENT',
    columnNames: ['environment'],
  },
]

export class LicenseTable1703420835591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = queryRunner.connection
      .getMetadata(License)
      .ownColumns.map((column) => {
        const columnOptions: PropertyDecorator = Column({ ...column })
        return new TableColumn({
          ...columnOptions,
          name: column.propertyName,
          type: column.type.toString(),
        })
      })
    await queryRunner.createTable(new Table({ name: tableName, columns }))

    indexArray.map(async ({ name, columnNames }) => {
      await queryRunner.createIndex(
        tableName,
        new TableIndex({
          name,
          columnNames,
        })
      )
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    indexArray.reverse().map(async ({ name }) => {
      await queryRunner.dropIndex(tableName, name)
    })
    await queryRunner.dropTable(tableName)
  }
}
