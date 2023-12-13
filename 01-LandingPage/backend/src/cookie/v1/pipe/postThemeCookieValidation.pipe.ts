import {
  PipeTransform,
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common'
import { PostThemeCookieDto } from '../dto/post-theme-cookie.dto'

@Injectable()
export class PostThemeCookieValidationPipe implements PipeTransform {
  transform(value: PostThemeCookieDto) {
    try {
      if (!value.theme) {
        return 'dark'
      }
      return value
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error
      } else {
        throw new InternalServerErrorException(error)
      }
    }
  }
}
