import { GetUserByIdValidationPipe } from './profileValidation.pipe'

describe('cookieValidation', () => {
  beforeEach(() => {})

  describe('GetUserByIdValidationPipe', () => {
    it('should return the value as is when language is "en"', () => {
      const pipe = new GetUserByIdValidationPipe()
      const inputDto = { language: 'en' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should return the value as is when language is "ja"', () => {
      const pipe = new GetUserByIdValidationPipe()
      const inputDto = { language: 'ja' }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set language to "en" when language is unsupported', () => {
      const pipe = new GetUserByIdValidationPipe()
      const inputDto = { language: 'fr' }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when language is undefined', () => {
      const pipe = new GetUserByIdValidationPipe()
      const inputDto = { language: undefined }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when language is an empty string', () => {
      const pipe = new GetUserByIdValidationPipe()
      const inputDto = { language: '' }
      const result = pipe.transform(inputDto)
      expect(result.language).toEqual('en')
    })

    it('should set language to "en" when undefined', () => {
      const pipe = new GetUserByIdValidationPipe()
      const result = pipe.transform(undefined)
      expect(result.language).toEqual('en')
    })
  })
})
