import { Controller, Head, HttpStatus, Param, Res } from '@nestjs/common'
import { Response } from 'express'
import {
  HeadLanguageCookieValidationPipe,
  HeadThemeCookieValidationPipe,
} from './pipe/cookieValidation.pipe'
import { HeadLanguageCookieDto, HeadThemeCookieDto } from './dto/cookie.dto'

@Controller('/api/v1/cookie')
export class CookieController {
  @Head('/language/:language')
  headLanguageCookie(
    @Param(HeadLanguageCookieValidationPipe)
    headLanguageCookieDto: HeadLanguageCookieDto,
    @Res() res: Response
  ) {
    const { language } = headLanguageCookieDto
    res
      .status(HttpStatus.OK)
      .cookie('language', language, { httpOnly: true, secure: true })
      .send()
  }

  @Head('/theme/:theme')
  postThemeCookie(
    @Param(HeadThemeCookieValidationPipe)
    headThemeCookieDto: HeadThemeCookieDto,
    @Res() res: Response
  ) {
    const { theme } = headThemeCookieDto
    res
      .status(HttpStatus.OK)
      .cookie('theme', theme, { httpOnly: true, secure: true })
      .send()
  }
}
