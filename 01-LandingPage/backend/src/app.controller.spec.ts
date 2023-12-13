import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { INestApplication } from '@nestjs/common'
import { AppModule } from './app.module'

describe('AppController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  describe('health', () => {
    it('should return "OK"', () => {
      return request(app.getHttpServer())
        .get('/api/health')
        .then((result) => {
          expect(result.statusCode).toEqual(200)
          expect(result.body).toEqual({ data: 'OK' })
        })
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
