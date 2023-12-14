import { IsString } from 'class-validator'

export class HeadLanguageCookieDto {
  @IsString()
  language: string
}

export class HeadThemeCookieDto {
  @IsString()
  theme: string
}
