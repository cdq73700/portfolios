import {
  PipeTransform,
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common'
import { GetProfileDto } from '../dto/get-profile.dto'

@Injectable()
export class GetUserByIdValidationPipe implements PipeTransform {
  transform(value: GetProfileDto) {
    try {
      if (!value.language) {
        throw new BadRequestException('Invalid Language supplied')
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
