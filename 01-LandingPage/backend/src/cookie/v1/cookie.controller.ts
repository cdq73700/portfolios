import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { PostLanguageCookieValidationPipe } from './pipe/postLanguageCookieValidation.pipe'
import { PostLanguageCookieDto } from './dto/post-language-cookie.dto'
import { PostThemeCookieDto } from './dto/post-theme-cookie.dto'
import { PostThemeCookieValidationPipe } from './pipe/postThemeCookieValidation.pipe'

@Controller('/api/v1/cookie')
export class CookieController {
  @Post('/language')
  postLanguageCookie(
    @Body(PostLanguageCookieValidationPipe)
    postLanguageCookieDto: PostLanguageCookieDto,
    @Res() res: Response
  ) {
    const { language } = postLanguageCookieDto
    res
      .status(HttpStatus.OK)
      .cookie('language', language, { httpOnly: true, secure: true })
      .json({})
  }

  @Post('/theme')
  postThemeCookie(
    @Body(PostThemeCookieValidationPipe)
    postThemeCookieDto: PostThemeCookieDto,
    @Res() res: Response
  ) {
    const { theme } = postThemeCookieDto
    res
      .status(HttpStatus.OK)
      .cookie('theme', theme, { httpOnly: true, secure: true })
      .json({})
  }
}
