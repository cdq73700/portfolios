import { GetLicenseDto } from '../dto/license.dto'
import { GetLicenseValidationPipe } from './licenseValidation.pipe'

describe('licenseValidation', () => {
  beforeEach(() => {})

  describe('GetUserByIdValidationPipe', () => {
    it('should return the value as is when location in supported', () => {
      const pipe = new GetLicenseValidationPipe()
      const locations = ['backend', 'frontend', 'python', 'swagger']

      locations.map((location) => {
        const inputDto: GetLicenseDto = {
          location,
          environment: undefined,
          name: undefined,
        }
        const result = pipe.transform(inputDto)
        expect(result).toEqual(inputDto)
      })
    })

    it('should set location to undefined when location in undefined', () => {
      const pipe = new GetLicenseValidationPipe()
      const location = undefined
      const inputDto: GetLicenseDto = {
        location,
        environment: undefined,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set location to undefined when location in unsupported', () => {
      const pipe = new GetLicenseValidationPipe()
      const location = 'test'
      const inputDto: GetLicenseDto = {
        location,
        environment: undefined,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual({
        location: undefined,
        environment: undefined,
        name: undefined,
      })
    })

    it('should set location to undefined when location in an empty string', () => {
      const pipe = new GetLicenseValidationPipe()
      const location = ''
      const inputDto: GetLicenseDto = {
        location,
        environment: undefined,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual({
        location: undefined,
        environment: undefined,
        name: undefined,
      })
    })

    it('should return the value as is when environment in supported', () => {
      const pipe = new GetLicenseValidationPipe()
      const environments = ['production', 'development']
      environments.map((environment) => {
        const inputDto: GetLicenseDto = {
          location: undefined,
          environment,
          name: undefined,
        }
        const result = pipe.transform(inputDto)
        expect(result).toEqual(inputDto)
      })
    })

    it('should set environment to undefined when environment in undefined', () => {
      const pipe = new GetLicenseValidationPipe()
      const environment = undefined
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set environment to undefined when environment in unsupported', () => {
      const pipe = new GetLicenseValidationPipe()
      const environment = 'test'
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual({
        location: undefined,
        environment: undefined,
        name: undefined,
      })
    })

    it('should set environment to undefined when environment in an empty string', () => {
      const pipe = new GetLicenseValidationPipe()
      const environment = ''
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment,
        name: undefined,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual({
        location: undefined,
        environment: undefined,
        name: undefined,
      })
    })

    it('should return the value as is when name in supported', () => {
      const pipe = new GetLicenseValidationPipe()
      const name = 'test'
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set name to undefined when name in undefined', () => {
      const pipe = new GetLicenseValidationPipe()
      const name = undefined
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual(inputDto)
    })

    it('should set name to undefined when name in an empty string', () => {
      const pipe = new GetLicenseValidationPipe()
      const name = ''
      const inputDto: GetLicenseDto = {
        location: undefined,
        environment: undefined,
        name,
      }
      const result = pipe.transform(inputDto)
      expect(result).toEqual({
        location: undefined,
        environment: undefined,
        name: undefined,
      })
    })

    it('should return the value as is when location and environment and name in supported or undefined', () => {
      const pipe = new GetLicenseValidationPipe()
      const locations = [undefined, 'backend', 'frontend', 'python', 'swagger']
      const environments = [undefined, 'production', 'development']
      const names = [undefined, 'test']
      locations.map((location) => {
        environments.map((environment) => {
          names.map((name) => {
            const inputDto: GetLicenseDto = {
              location,
              environment,
              name,
            }
            const result = pipe.transform(inputDto)
            expect(result).toEqual(inputDto)
          })
        })
      })
    })
  })
})
