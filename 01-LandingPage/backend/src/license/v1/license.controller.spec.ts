import { Test, TestingModule } from '@nestjs/testing'
import { Response } from 'express'
import { HttpStatus, InternalServerErrorException } from '@nestjs/common'

import { AppDataSource } from 'src/data-source'
import { LicenseController } from './license.controller'
import { LicenseService } from './license.service'
import { GetLicenseDto } from './dto/license.dto'

describe('LicenseController', () => {
  let licenseController: LicenseController

  beforeEach(async () => {
    await AppDataSource.initialize()
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LicenseController],
      providers: [LicenseService],
    }).compile()

    licenseController = app.get<LicenseController>(LicenseController)
  })

  describe('GetProfile', () => {
    it('should return license the location in backend when location is "backend"', async () => {
      const inputDto: GetLicenseDto = {
        location: 'backend',
        environment: undefined,
        name: undefined,
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await licenseController.GetLicense(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBeGreaterThan(0)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0].location).toBe(inputDto.location)
    })

    it('should return license the environment in "production" when environment is "production"', async () => {
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: 'production',
        name: undefined,
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await licenseController.GetLicense(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBeGreaterThan(0)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0].environment).toBe(inputDto.environment)
    })

    it('should return license matching name when name in support', async () => {
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name: 'jest',
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await licenseController.GetLicense(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBeGreaterThan(0)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0].name).toBe(inputDto.name)
    })

    it('should return license the all when undefined', async () => {
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name: undefined,
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await licenseController.GetLicense(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBeGreaterThan(0)
      expect(jsonData.data[0]).toHaveProperty('id')
      const locations = ['backend', 'frontend', 'python', 'swagger']
      const environments = ['production', 'development']
      const reLocations = Array.from(
        new Set(jsonData.data.map(({ location }) => location))
      )
      const reEnvironments = Array.from(
        new Set(jsonData.data.map(({ environment }) => environment))
      )
      locations.map((value) => expect(reLocations).toContain(value))
      environments.map((value) => expect(reEnvironments).toContain(value))
    })

    it('should return the value as is when location and environment and name in supported', async () => {
      const inputDto: GetLicenseDto = {
        location: 'backend',
        environment: 'production',
        name: '@nestjs/cli',
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await licenseController.GetLicense(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBe(1)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0]).toMatchObject(inputDto)
    })

    it('should return InternalServerErrorException when unable to connect to database', async () => {
      await AppDataSource.destroy()
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name: undefined,
      }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      try {
        await licenseController.GetLicense(inputDto, responseMock)
      } catch (error) {
        expect(error).toBeInstanceOf(InternalServerErrorException)
      }
    })
  })

  afterEach(async () => {
    try {
      await AppDataSource.destroy()
    } catch {}
  })
})
