import { PipeTransform, Injectable } from '@nestjs/common'
import { GetProfileDto } from '../dto/profile.dto'

@Injectable()
export class GetUserByIdValidationPipe implements PipeTransform {
  transform(value: GetProfileDto) {
    // サポートする言語以外の場合、デフォルトとして "en" を設定
    if (!value || !(value.language === 'en' || value.language === 'ja')) {
      return { language: 'en' }
    }
    return value
  }
}
