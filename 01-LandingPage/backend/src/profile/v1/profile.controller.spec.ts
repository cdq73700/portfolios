import { Test, TestingModule } from '@nestjs/testing'
import { Response } from 'express'
import {
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { ProfileController } from './profile.controller'
import { ProfileService } from './profile.service'
import { AppDataSource } from 'src/data-source'

describe('ProfileController', () => {
  let profileController: ProfileController

  beforeEach(async () => {
    await AppDataSource.initialize()
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProfileController],
      providers: [ProfileService],
    }).compile()

    profileController = app.get<ProfileController>(ProfileController)
  })

  describe('GetProfile', () => {
    it('should return en profile when language is "en"', async () => {
      const inputDto = { language: 'en' }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await profileController.GetProfile(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBe(1)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0].language).toBe(inputDto.language)
    })

    it('should return ja profile when language is "ja"', async () => {
      const inputDto = { language: 'ja' }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      await profileController.GetProfile(inputDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      const jsonData = (responseMock.json as jest.Mock).mock.calls[0][0]
      expect(jsonData.success).toBe(true)
      expect(jsonData.data.length).toBe(1)
      expect(jsonData.data[0]).toHaveProperty('id')
      expect(jsonData.data[0].language).toBe(inputDto.language)
    })

    it('should return NotFoundException when language is unsupported', async () => {
      const inputDto = { language: 'fr' }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      try {
        await profileController.GetProfile(inputDto, responseMock)
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException)
      }
    })

    it('should return InternalServerErrorException when unable to connect to database', async () => {
      await AppDataSource.destroy()
      const inputDto = { language: 'en' }
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      try {
        await profileController.GetProfile(inputDto, responseMock)
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
