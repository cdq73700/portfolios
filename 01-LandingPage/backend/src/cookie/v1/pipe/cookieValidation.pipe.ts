import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common'
import { PostLanguageCookieDto, PostThemeCookieDto } from '../dto/cookie.dto'

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
