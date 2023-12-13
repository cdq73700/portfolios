import {
  PipeTransform,
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common'
import { PostLanguageCookieDto } from '../dto/post-language-cookie.dto'

@Injectable()
export class PostLanguageCookieValidationPipe implements PipeTransform {
  transform(value: PostLanguageCookieDto) {
    try {
      if (!value.language) {
        return 'en'
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
