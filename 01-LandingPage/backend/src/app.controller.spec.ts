import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Response } from 'express'
import { HttpStatus } from '@nestjs/common'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('health', () => {
    it('should return "OK"', () => {
      const responseMock = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response
      appController.getHealth(responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      expect(responseMock.json).toHaveBeenCalledWith({
        success: true,
        data: 'OK',
      })
    })
  })
})
