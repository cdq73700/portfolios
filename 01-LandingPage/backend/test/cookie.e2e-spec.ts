import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { CookieModuleV1 } from 'src/cookie/v1/cookie.module'

describe('CookieController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CookieModuleV1],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('cookie', () => {
    it('/api/v1/cookie/language/:language (HEAD)', async () => {
      const language = 'en'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.statusCode).toEqual(200)
      expect(response.headers['set-cookie'][0]).toEqual(
        `language=${language}; Path=/; HttpOnly; Secure`
      )
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
