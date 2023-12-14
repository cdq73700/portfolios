import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication } from '@nestjs/common'
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

  describe('headLanguageCookie', () => {
    it('/api/v1/cookie/language/en (HEAD)', async () => {
      const language = 'en'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `language=${language}; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/language/ja (HEAD)', async () => {
      const language = 'ja'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `language=${language}; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/language/fr (HEAD)', async () => {
      const language = 'fr'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `language=en; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/language/undefined (HEAD)', async () => {
      const language = undefined
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `language=en; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/language/ (HEAD)', async () => {
      const language = ''
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/language/${language}`
      )
      expect(response.status).toEqual(HttpStatus.NOT_FOUND)
    })
  })

  describe('headThemeCookie', () => {
    it('/api/v1/cookie/theme/light (HEAD)', async () => {
      const theme = 'light'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/theme/${theme}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `theme=${theme}; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/theme/dark (HEAD)', async () => {
      const theme = 'dark'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/theme/${theme}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `theme=${theme}; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/theme/sakura (HEAD)', async () => {
      const theme = 'sakura'
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/theme/${theme}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `theme=dark; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/theme/undefined (HEAD)', async () => {
      const theme = undefined
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/theme/${theme}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.headers['set-cookie'][0]).toEqual(
        `theme=dark; Path=/; HttpOnly; Secure`
      )
    })

    it('/api/v1/cookie/theme/ (HEAD)', async () => {
      const theme = ''
      const response = await request(app.getHttpServer()).head(
        `/api/v1/cookie/theme/${theme}`
      )
      expect(response.status).toEqual(HttpStatus.NOT_FOUND)
    })
  })

  afterAll(async () => {
    await app.close()
  })
})
