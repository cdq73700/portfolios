import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from 'express'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(@Res() res: Response) {
    const data = this.appService.getHealth()
    return res.status(HttpStatus.OK).json({ data })
  }

  @Post('/language')
  setLanguage(@Req() req: Request, @Res() res: Response) {
    const lang = req.body.lang ?? 'en'
    res
      .status(HttpStatus.OK)
      .cookie('language', lang, { httpOnly: true, secure: true })
      .json({})
  }

  @Post('/mode')
  setMode(@Req() req: Request, @Res() res: Response) {
    const mode = req.body.mode ?? 'dark'
    res
      .status(HttpStatus.OK)
      .cookie('mode', mode, { httpOnly: true, secure: true })
      .json({})
  }
}
