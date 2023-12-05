import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@Index('IDX_PROFILE_LANGUAGE', { synchronize: false })
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  tel: string

  @Column()
  post: string

  @Column()
  address: string

  @Column()
  language: string

  @Column()
  isActive: boolean

  @Column({ name: 'created_at' })
  createdAt: Date

  @Column({ name: 'updated_at' })
  updatedAt: Date

  constructor(
    id: string | undefined,
    name: string,
    email: string,
    tel: string,
    post: string,
    address: string,
    language: string,
    isActive: boolean
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.tel = tel
    this.post = post
    this.address = address
    this.language = language
    this.isActive = isActive
    this.createdAt = new Date(Date.now())
    this.updatedAt = new Date(Date.now())
  }
}
