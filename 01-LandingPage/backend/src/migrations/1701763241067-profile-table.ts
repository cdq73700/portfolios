import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class ProfileTable1701763241067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profile',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
            comment: 'ID',
          },
          {
            name: 'name',
            type: 'varchar',
            comment: '名前',
          },
          {
            name: 'email',
            type: 'varchar',
            comment: 'メールアドレス',
          },
          {
            name: 'tel',
            type: 'varchar',
            comment: '電話番号',
          },
          {
            name: 'post',
            type: 'varchar',
            comment: '郵便番号',
          },
          {
            name: 'address',
            type: 'varchar',
            comment: '住所',
          },
          {
            name: 'language',
            type: 'varchar',
            comment: '言語',
          },
          {
            name: 'isActive',
            type: 'boolean',
            comment: 'アクティブ',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            comment: '作成日時',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            onUpdate: 'now()',
            comment: '更新日時',
          },
        ],
      }),
      true
    )

    await queryRunner.createIndex(
      'profile',
      new TableIndex({
        name: 'IDX_PROFILE_LANGUAGE',
        columnNames: ['language'],
        isUnique: true,
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('profile', 'IDX_PROFILE_LANGUAGE')
    await queryRunner.dropTable('profile')
  }
}
