import { IsString } from 'class-validator'
import { Theme } from 'types/cookie/v1/dto/post-theme-cookie.dto.type'

export class PostThemeCookieDto {
  @IsString()
  theme: Theme
}
