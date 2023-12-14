import { Injectable, PipeTransform } from '@nestjs/common'
import { HeadLanguageCookieDto, HeadThemeCookieDto } from '../dto/cookie.dto'

@Injectable()
export class HeadLanguageCookieValidationPipe implements PipeTransform {
  transform(value: HeadLanguageCookieDto) {
    // サポートする言語以外の場合、デフォルトとして "en" を設定
    if (!value || !(value.language === 'en' || value.language === 'ja')) {
      return { language: 'en' }
    }

    return value
  }
}

@Injectable()
export class HeadThemeCookieValidationPipe implements PipeTransform {
  transform(value: HeadThemeCookieDto) {
    // サポートするテーマ以外の場合、デフォルトとして "dark" を設定
    if (!value || !(value.theme === 'light' || value.theme === 'dark')) {
      return { theme: 'dark' }
    }

    return value
  }
}
