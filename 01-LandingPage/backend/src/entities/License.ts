import {
  Column,
  Entity,
  Index,
  PrimaryColumnOptions,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { PrimaryGeneratedColumnUUIDOptions } from 'typeorm/decorator/options/PrimaryGeneratedColumnUUIDOptions'
import { License as LicenseType } from 'swagger/v1/typescript/model/license'

const primaryGeneratedColumnOptions: PrimaryGeneratedColumnUUIDOptions &
  PrimaryColumnOptions = {
  name: 'id',
  type: 'uuid',
}

@Entity({ name: 'license' })
@Index('IDX_LICENSE_NAME', { synchronize: false })
@Index('IDX_LICENSE_LOCATION', { synchronize: false })
@Index('IDX_LICENSE_ENVIRONMENT', { synchronize: false })
export class License implements LicenseType {
  @PrimaryGeneratedColumn('uuid', primaryGeneratedColumnOptions)
  id: string | undefined

  @Column({ name: 'name', type: 'varchar' })
  name: string | undefined

  @Column({ name: 'version', type: 'varchar' })
  version: string | undefined

  @Column({ name: 'license', type: 'varchar' })
  license: string | undefined

  @Column({ name: 'install', type: 'varchar' })
  install: string | undefined

  @Column({ name: 'github', type: 'varchar' })
  github: string | undefined

  @Column({ name: 'body', type: 'varchar' })
  body: string

  @Column({ name: 'location', type: 'varchar' })
  location: string | undefined

  @Column({ name: 'environment', type: 'varchar' })
  environment: string | undefined

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly createdAt: Date | undefined

  @Column({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date | undefined

  constructor(
    name,
    version,
    license,
    install,
    github,
    body,
    location,
    environment
  ) {
    this.id = undefined
    this.name = name
    this.version = version
    this.license = license
    this.install = install
    this.github = github
    this.body = body
    this.location = location
    this.environment = environment
    this.updatedAt = new Date(Date.now())
  }
}
