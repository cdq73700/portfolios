import { IsString } from 'class-validator'
import { Language } from 'types/cookie/v1/dto/post-language-cookie.dto.type'

export class PostLanguageCookieDto {
  @IsString()
  language: Language
}
