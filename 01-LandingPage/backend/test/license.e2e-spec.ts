import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppDataSource } from 'src/data-source'
import { LicenseModuleV1 } from 'src/license/v1/license.module'

describe('LicenseController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LicenseModuleV1],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
    await AppDataSource.initialize()
  })

  describe('GetLicense', () => {
    it('/api/v1/license (GET)', async () => {
      const response = await request(app.getHttpServer()).get(`/api/v1/license`)
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
      expect(response.body.data[0]).toHaveProperty('id')
    })

    it('/api/v1/license?location=backend (GET)', async () => {
      const params = new URLSearchParams()
      params.append('location', 'backend')
      const response = await request(app.getHttpServer()).get(
        `/api/v1/license?${params.toString()}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].location).toBe('backend')
    })

    it('/api/v1/license?environment=production (GET)', async () => {
      const params = new URLSearchParams()
      params.append('environment', 'production')
      const response = await request(app.getHttpServer()).get(
        `/api/v1/license?${params.toString()}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].environment).toBe('production')
    })

    it('/api/v1/license?name=jest (GET)', async () => {
      const params = new URLSearchParams()
      params.append('name', 'jest')
      const response = await request(app.getHttpServer()).get(
        `/api/v1/license?${params.toString()}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0].name).toBe('jest')
    })

    it('/api/v1/license?location=backend&environment=production&name=@nestjs/cli (GET)', async () => {
      const params = new URLSearchParams()
      params.append('location', 'backend')
      params.append('environment', 'production')
      params.append('name', '@nestjs/cli')
      const response = await request(app.getHttpServer()).get(
        `/api/v1/license?${params.toString()}`
      )
      expect(response.status).toEqual(HttpStatus.OK)
      expect(response.body.success).toBe(true)
      expect(response.body.data.length).toBeGreaterThan(0)
      expect(response.body.data[0]).toHaveProperty('id')
      expect(response.body.data[0]).toMatchObject({
        location: 'backend',
        environment: 'production',
        name: '@nestjs/cli',
      })
    })

    it('/api/v1/license (GET) unable to connect to database', async () => {
      await AppDataSource.destroy()
      const response = await request(app.getHttpServer()).get(`/api/v1/license`)
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
