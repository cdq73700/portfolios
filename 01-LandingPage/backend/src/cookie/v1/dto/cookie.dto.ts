import { IsString } from 'class-validator'
import { Language, Theme } from 'src/types/cookie/v1/dto/cookie.dto.type'

export class HeadLanguageCookieDto {
  @IsString()
  language: Language
}

export class HeadThemeCookieDto {
  @IsString()
  theme: Theme
}
