import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  PipeTransform,
} from '@nestjs/common'
import { HeadLanguageCookieDto, HeadThemeCookieDto } from '../dto/cookie.dto'

@Injectable()
export class HeadLanguageCookieValidationPipe implements PipeTransform {
  transform(value: HeadLanguageCookieDto) {
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
export class HeadThemeCookieValidationPipe implements PipeTransform {
  transform(value: HeadThemeCookieDto) {
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
