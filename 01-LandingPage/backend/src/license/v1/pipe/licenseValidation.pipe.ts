import { PipeTransform, Injectable } from '@nestjs/common'
import { GetLicenseDto } from '../dto/license.dto'

@Injectable()
export class GetLicenseValidationPipe implements PipeTransform {
  transform(value: GetLicenseDto) {
    if (value === undefined) {
      return undefined
    }
    const {
      location = undefined,
      environment = undefined,
      name = undefined,
    } = value
    const locations = ['backend', 'frontend', 'python', 'swagger']
    const environments = ['production', 'development']

    const newLocation = locations.some((value) => value === location)
      ? location
      : undefined

    const newEnvironment = environments.some((value) => value === environment)
      ? environment
      : undefined

    const newName = name !== '' ? name : undefined

    return { location: newLocation, environment: newEnvironment, name: newName }
  }
}
