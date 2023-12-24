import { AppDataSource } from 'src/data-source'
import { License } from 'src/entities/License'
import { LicenseSchema } from 'swagger/v1/typescript/model/licenseSchema'
import { License as LicenseType } from 'swagger/v1/typescript/model/license'
import { GetLicenseDto } from '../dto/license.dto'

export default async function getLicenseApi(
  query: GetLicenseDto
): Promise<LicenseSchema> {
  const {
    location = undefined,
    environment = undefined,
    name = undefined,
  } = query
  const repository = AppDataSource.getRepository(License)
  const data: Array<LicenseType> = await repository.find({
    where: {
      location,
      environment,
      name,
    },
  })

  return { success: true, data }
}
