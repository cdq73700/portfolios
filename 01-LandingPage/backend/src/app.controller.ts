import { Controller, Get, HttpStatus, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { Response } from 'express'

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(@Res() res: Response) {
    const data = this.appService.getHealth()
    return res.status(HttpStatus.OK).json({ data })
  }
}
