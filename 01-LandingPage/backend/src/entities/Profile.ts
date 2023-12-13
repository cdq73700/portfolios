import {
  Column,
  Entity,
  Index,
  PrimaryColumnOptions,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { PrimaryGeneratedColumnUUIDOptions } from 'typeorm/decorator/options/PrimaryGeneratedColumnUUIDOptions'
import { Profile as ProfileType } from 'swagger/v1/typescript/model/profile'

const primaryGeneratedColumnOptions: PrimaryGeneratedColumnUUIDOptions &
  PrimaryColumnOptions = {
  name: 'id',
  type: 'uuid',
}

@Entity({ name: 'profile' })
@Index('IDX_PROFILE_LANGUAGE', { synchronize: false })
export class Profile implements ProfileType {
  @PrimaryGeneratedColumn('uuid', primaryGeneratedColumnOptions)
  id: string | undefined

  @Column({ name: 'name', type: 'varchar' })
  name: string | undefined

  @Column({ name: 'email', type: 'varchar' })
  email: string | undefined

  @Column({ name: 'tel', type: 'varchar' })
  tel: string | undefined

  @Column({ name: 'post', type: 'varchar' })
  post: string | undefined

  @Column({ name: 'address', type: 'varchar' })
  address: string | undefined

  @Column({ name: 'language', type: 'varchar' })
  language: string

  @Column({ name: 'isActive', type: 'boolean' })
  isActive: boolean | undefined

  @Column({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly createdAt: Date | undefined

  @Column({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date | undefined

  constructor(name, email, tel, post, address, language, isActive) {
    this.id = undefined
    this.name = name
    this.email = email
    this.tel = tel
    this.post = post
    this.address = address
    this.language = language
    this.isActive = isActive
    this.updatedAt = new Date(Date.now())
  }
}
