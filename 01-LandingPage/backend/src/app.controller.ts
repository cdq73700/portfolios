import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from 'express'
import { Profile } from './entities/profile'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/api/profile/:lang')
  getProfile(@Req() req: Request): Promise<Profile[]> {
    const lang = req.params.lang
    return this.appService.getProfile(lang)
  }

  @Post('/api/language')
  setLanguage(@Req() req: Request, @Res() res: Response) {
    const lang = req.body.lang ?? 'en'
    res
      .status(HttpStatus.OK)
      .cookie('language', lang, { httpOnly: true })
      .json({
        type: 'cookie',
        key: 'language',
        value: lang,
        path: '/',
        httpOnly: true,
      })
  }

  @Post('/api/mode')
  setMode(@Req() req: Request, @Res() res: Response) {
    const mode = req.body.mode ?? 'dark'
    res.status(HttpStatus.OK).cookie('mode', mode, { httpOnly: true }).json({
      type: 'cookie',
      key: 'mode',
      value: mode,
      path: '/',
      httpOnly: true,
    })
  }
}
