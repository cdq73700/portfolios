import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ProfileModuleV1 } from 'src/profile/v1/profile.module'
import { AppDataSource } from 'src/data-source'

describe('ProfileController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProfileModuleV1],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
    await AppDataSource.initialize()
  })

  describe('GetProfile', () => {
    it('/api/v1/profile/en (GET)', async () => {
      const language = 'en'
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].language).toBe(language)
    })

    it('/api/v1/profile/ja (GET)', async () => {
      const language = 'ja'
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].language).toBe(language)
    })

    it('/api/v1/profile/fr (GET)', async () => {
      const language = 'fr'
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].language).toBe('en')
    })

    it('/api/v1/profile/undefined (GET)', async () => {
      const language = undefined
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBe(1)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].language).toBe('en')
    })

    it('/api/v1/profile/ (GET)', async () => {
      const language = ''
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.NOT_FOUND)
    })

    it('/api/v1/profile/en (GET) unable to connect to database', async () => {
      await AppDataSource.destroy()
      const language = 'en'
      const response = await request(app.getHttpServer()).get(
        `/api/v1/profile/${language}`
      )
      expect(response.status).toEqual(HttpStatus.INTERNAL_SERVER_ERROR)
    })
  })

  afterAll(async () => {
    try {
      await AppDataSource.destroy()
    } catch {}

    await app.close()
  })
})
