import { IsString } from 'class-validator'
import { Language, Theme } from 'src/types/cookie/v1/dto/cookie.dto.type'

export class PostLanguageCookieDto {
  @IsString()
  language: Language
}

export class PostThemeCookieDto {
  @IsString()
  theme: Theme
}
