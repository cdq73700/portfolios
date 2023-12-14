import { Test, TestingModule } from '@nestjs/testing'
import { Response } from 'express'
import { HttpStatus } from '@nestjs/common'
import { CookieController } from './cookie.controller'

describe('CookieController', () => {
  let cookieController: CookieController
  let responseMock: Response

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CookieController],
    }).compile()

    cookieController = app.get<CookieController>(CookieController)
    responseMock = {
      status: jest.fn().mockReturnThis(),
      cookie: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response
  })

  describe('headLanguageCookie', () => {
    it('should set language "en" cookie and send OK response', () => {
      const language = 'en'
      const headLanguageCookieDto = { language }

      cookieController.headLanguageCookie(headLanguageCookieDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      expect(responseMock.cookie).toHaveBeenCalledWith('language', language, {
        httpOnly: true,
        secure: true,
      })
      expect(responseMock.send).toHaveBeenCalled()
    })

    it('should set language "ja" cookie and send OK response', () => {
      const language = 'ja'
      const headLanguageCookieDto = { language }

      cookieController.headLanguageCookie(headLanguageCookieDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      expect(responseMock.cookie).toHaveBeenCalledWith('language', language, {
        httpOnly: true,
        secure: true,
      })
      expect(responseMock.send).toHaveBeenCalled()
    })
  })

  describe('headThemeCookie', () => {
    it('should set theme "dark" cookie and send OK response', () => {
      const theme = 'dark'
      const headThemeCookieDto = { theme }

      cookieController.headThemeCookie(headThemeCookieDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      expect(responseMock.cookie).toHaveBeenCalledWith('theme', theme, {
        httpOnly: true,
        secure: true,
      })
      expect(responseMock.send).toHaveBeenCalled()
    })

    it('should set theme "light" cookie and send OK response', () => {
      const theme = 'light'
      const headThemeCookieDto = { theme }

      cookieController.headThemeCookie(headThemeCookieDto, responseMock)
      expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.OK)
      expect(responseMock.cookie).toHaveBeenCalledWith('theme', theme, {
        httpOnly: true,
        secure: true,
      })
      expect(responseMock.send).toHaveBeenCalled()
    })
  })
})
