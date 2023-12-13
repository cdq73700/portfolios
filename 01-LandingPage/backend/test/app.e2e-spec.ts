import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('health', () => {
    it('/api/v1/health (GET)', async () => {
      const response = await request(app.getHttpServer()).get('/api/v1/health')
      expect(response.statusCode).toEqual(200)
      expect(response.body).toEqual({ data: 'OK' })
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
