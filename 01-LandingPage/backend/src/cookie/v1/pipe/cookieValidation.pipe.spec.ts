import {
  HeadLanguageCookieValidationPipe,
  HeadThemeCookieValidationPipe,
} from './cookieValidation.pipe'

describe('cookieValidation', () => {
  beforeEach(() => {})

  describe('HeadLanguageCookieValidationPipe', () => {
    it('should return the value as is when language is "en"', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const inputDto = { language: 'en' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should return the value as is when language is "ja"', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const inputDto = { language: 'ja' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set language to "en" when language is unsupported', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const inputDto = { language: 'fr' }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when language is undefined', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const inputDto = { language: undefined }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when language is an empty string', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const inputDto = { language: '' }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when undefined', () => {
      const pipe = new HeadLanguageCookieValidationPipe()
      const result = pipe.transform(undefined)
      expect(result.language).toEqual('en')
    })
  })

  describe('HeadThemeCookieValidationPipe', () => {
    it('should return the value as is when theme is "light"', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const inputDto = { theme: 'light' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should return the value as is when theme is "dark"', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const inputDto = { theme: 'dark' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set theme to "dark" when theme is unsupported', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const inputDto = { theme: 'sakura' }
      const result = pipe.transform(inputDto)
      expect(result.theme).toEqual('dark')
    })

    it('should set theme to "dark" when theme is undefined', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const inputDto = { theme: undefined }
      const result = pipe.transform(inputDto)
      expect(result.theme).toEqual('dark')
    })

    it('should set theme to "dark" when theme is an empty string', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const inputDto = { theme: '' }
      const result = pipe.transform(inputDto)
      expect(result.theme).toEqual('dark')
    })

    it('should set theme to "dark" when undefinedg', () => {
      const pipe = new HeadThemeCookieValidationPipe()
      const result = pipe.transform(undefined)
      expect(result.theme).toEqual('dark')
    })
  })
})
