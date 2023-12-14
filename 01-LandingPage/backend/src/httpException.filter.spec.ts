import { HttpExceptionFilter } from './httpException.filter'
import { HttpException, HttpStatus } from '@nestjs/common'
import {
  ArgumentsHost,
  HttpArgumentsHost,
} from '@nestjs/common/interfaces/features/arguments-host.interface'
import { Response } from 'express'

describe('HttpExceptionFilter', () => {
  it('should catch HttpException and format the response', () => {
    // Arrange
    const exception = new HttpException(
      'Test exception message',
      HttpStatus.NOT_FOUND
    )
    const statusMock = jest.fn().mockReturnThis()
    const jsonMock = jest.fn()
    const host = {
      switchToHttp: jest.fn(() => ({
        getRequest: jest.fn(() => ({ url: '/test-url' })),
        getResponse: jest.fn(() => ({
          status: statusMock.mockImplementation(() => ({
            json: jsonMock,
          })),
          json: jsonMock,
        })) as unknown as Response,
      })) as unknown as HttpArgumentsHost,
    } as unknown as ArgumentsHost

    const filter = new HttpExceptionFilter()

    // Act
    filter.catch(exception, host)

    // Assert
    expect(host.switchToHttp).toHaveBeenCalled()
    expect(host.switchToHttp().getRequest().url).toBe('/test-url')

    const responseMock = host.switchToHttp().getResponse<Response>()
    expect(responseMock.status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND)
    expect(responseMock.json).toHaveBeenCalledWith({
      code: HttpStatus.NOT_FOUND,
      message: 'Test exception message',
      timestamp: expect.any(Date),
      path: '/test-url',
    })
  })
})
